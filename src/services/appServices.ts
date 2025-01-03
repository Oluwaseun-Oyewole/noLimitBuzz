import { fetchWrapper } from "../lib/fetch";
import { UsersResponse } from "./types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export class AppServices {
  static users = BASE_URL + "users";

  async usersService(): Promise<UsersResponse[]> {
    return await fetchWrapper({
      endpoint: AppServices.users,
    });
  }

  async userDetailsService(
    id: string,
    signal: AbortSignal
  ): Promise<UsersResponse> {
    return await fetchWrapper({
      endpoint: `${AppServices.users}/${id}`,
      signal,
    });
  }
}
