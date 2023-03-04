import { getAPI } from "@/until/request";

export async function getAPIMenu() {
  const path = "menu";
  const data = await getAPI(path);
  return data;
}
