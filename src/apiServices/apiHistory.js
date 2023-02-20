import { getAPI } from "@/until/request";

export async function getAPIHistory() {
  const path = "history";
  const data = await getAPI(path);
  return data;
}
