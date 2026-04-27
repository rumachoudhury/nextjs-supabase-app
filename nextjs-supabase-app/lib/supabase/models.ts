export interface Board {
  id: number;
  title: string;
  description: string | null;
  color: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export interface Column {
  id: number;
  title: string;
  board_id: number;
  sort_order: number;
  created_at: string;
}

export interface Task {
  id: number;
  title: string;
  description: string | null;
  column_id: number;
  due_date: string | null;
  priority: "low" | "medium" | "high";
  sort_order: number;
  created_at: string;
}
