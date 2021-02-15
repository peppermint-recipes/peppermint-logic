import { Week } from 'types/week';
import { http } from './api/axios';

export const updateWeek = async (week: Week): Promise<Week> => {
  const response = await http.put('/week', week);

  return response.data;
};

export const getWeek = async (): Promise<Week> => {
  const response = await http.get('/week');

  return response.data;
};
