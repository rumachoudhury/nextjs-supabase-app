"use client";

import { useUser } from "@clerk/nextjs";
import { boardDataService } from "../supabase/services";

export function useBoards() {

  const user = useUser()
  async function createBoard(board: {
    title: string;
    description?: string;
    color: string;
  }) {

    

try {

  const newBoard = await boardDataService.createBoardWithDefaultColumn...boardData,
  userId: user?.id

}


  }
  return { createBoard };
}
