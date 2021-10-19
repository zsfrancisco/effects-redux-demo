import {User} from "../models/user.model";

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface Support {
  url: string;
  text: string;
}
