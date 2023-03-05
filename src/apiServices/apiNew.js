import { getAPI } from "until/request";

export async function getAPINew() {
  const path = "news";
  const dataAPI = await getAPI(path);
  return dataAPI;
}
