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
      description: boardData.description,
      color: boardData.color || "#FFFFFF",
      user_id: boardData.user_id,
    });
  },
};
