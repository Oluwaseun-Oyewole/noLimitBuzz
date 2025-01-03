import { appServices } from "../services";

export async function userLoader() {
  return await appServices.usersService();
}

export async function userLoaderDetails({
  params,
}: {
  params: { id: string };
}) {
  return await appServices.userDetailsService(params?.id);
}
