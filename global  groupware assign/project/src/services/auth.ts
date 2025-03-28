import { api } from './api';
import type { LoginCredentials, LoginResponse } from '../types/auth';

export const login = async (credentials: LoginCredentials): Promise<string> => {
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data.token;
};