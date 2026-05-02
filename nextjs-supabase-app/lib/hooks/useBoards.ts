"use client";

import { useUser } from "@clerk/nextjs";
import { boardDataService } from "../supabase/services";
import { useState } from "react";
import { Board } from "../supabase/models";

export function useBoards() {
  const user = useUser();
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function createBoard(boardData: {
    title: string;
    description?: string;
    color?: string;
  }) {
    if (!user) {
      const error = new Error("User not authenticated");
      console.error(error.message);
      return;
    }

    try {
      const newBoard = await boardDataService.createBoardWithDefaultColumn(
        supabase!,
        { ...boardData, userId: user.id },
      );

      setBoards((prev) => [newBoard, ...prev]);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred",
      );
    }
  }
  return { createBoard };
}
