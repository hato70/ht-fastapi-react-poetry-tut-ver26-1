import axios from 'axios';
import   Task  from '../types/index';
import   TaskCreate  from '../types/index2';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskAPI = {
  // Get all tasks
  getTasks: async (): Promise<Task[]> => {
    const response = await api.get<Task[]>('/tasks');
    return response.data;
  },

  // Create new task
  createTask: async (task: TaskCreate): Promise<Task> => {
    const response = await api.post<Task>('/tasks', task);
    return response.data;
  },

  // Update task
  updateTask: async (id: string, task: TaskCreate): Promise<Task> => {
    const response = await api.put<Task>(`/tasks/${id}`, task);
    return response.data;
  },

  // Delete task
  deleteTask: async (id: string): Promise<void> => {
    await api.delete(`/tasks/${id}`);
  },
};