import { fetchWrapper } from "../lib/fetch";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export class AppServices {
  static users = BASE_URL + "users";

  async usersService() {
    return await fetchWrapper({
      endpoint: AppServices.users,
    });
  }

  async userDetailsService(id: string) {
    return await fetchWrapper({
      endpoint: `${AppServices.users}/${id}`,
    });
  }
}
