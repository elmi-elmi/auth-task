

import type { RandomUserResponse } from '@/types/user';
import {api} from "@/lib/axios";

const RANDOM_USER_URL = 'https://randomuser.me/api/?results=1&nat=us'

export const fetchRandomUser = async (): Promise<RandomUserResponse> => {
  const response = await api.get<RandomUserResponse>(RANDOM_USER_URL);
  return response.data;
};
