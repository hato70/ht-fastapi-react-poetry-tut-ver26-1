export default interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
}

// export default interface TaskCreate {
//   title: string;
//   description?: string;
// }