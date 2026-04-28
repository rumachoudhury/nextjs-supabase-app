export function useBoards() {
  async function createBoard(board: {
    title: string;
    description?: string;
    color: string;
  }) {}
  return { createBoard };
}
