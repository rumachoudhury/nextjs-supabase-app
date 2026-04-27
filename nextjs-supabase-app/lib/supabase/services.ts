import { createSupabaseClient } from "./client";

const supabase = createSupabaseClient();

export const boardService = {
  async getBoards(userId: string) {
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
};
