import { getAPI } from "until/request";

export async function getAPICountUp() {
  const path = "restaurentInforBasic";
  const data = await getAPI(path);
  return data;
}
