import { getAPI } from "@/until/request";

export default async function getAPIFeedBacks() {
  const path = "feedBacks";
  const data = await getAPI(path);
  return data;
}
