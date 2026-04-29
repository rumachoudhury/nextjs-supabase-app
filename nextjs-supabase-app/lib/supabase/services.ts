import { createSupabaseClient } from "./client";
import type { Board, Column } from "./models";

const supabase = createSupabaseClient();

export const boardService = {
  async getBoards(userId: string): Promise<Board[]> {
    const { data, error } = await supabase
      .from("boards")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching boards:", error.message);
      return [];
    }

    return data;
  },

  async createBoard(
    board: Omit<Board, "id" | "created_at" | "updated_at">,
  ): Promise<Board | null> {
    const { data, error } = await supabase
      .from("boards")
      .insert([board])
      .select()
      .single();

    if (error) {
      console.error("Error fetching boards:", error.message);
      return null;
    }
    return data;
  },
};

export const columnService = {
  async createColumn(
    column: Omit<Column, "id" | "created_at">,
  ): Promise<Board | null> {
    const { data, error } = await supabase
      .from("columns")
      .insert([column])
      .select()
      .single();

    if (error) {
      console.error("Error fetching boards:", error.message);
      return null;
    }
    return data;
  },
};

export const boardDataService = {
  async createBoardWithDefaultColumn(boardData: {
    title: string;
    description?: string;
    color?: string;
    user_id: string;
  }) {
    const board = await boardService.createBoard({
      title: boardData.title,
      description: boardData.description || null,
      color: boardData.color || "#FFFFFF",
      user_id: boardData.user_id,
    });

    if (!board) {
      throw new Error("Failed to create board");
    }

    const defaultColumns = [
      { title: "To Do", sort_order: 0 },
      { title: "In Progress", sort_order: 1 },
      { title: "Review", sort_order: 2 },
      { title: "Done", sort_order: 3 },
    ];

    await Promise.all(
      defaultColumns.map((column) =>
        columnService.createColumn({ ...column, board_id: board.id }),
      ),
    );

    return board;
  },
};
