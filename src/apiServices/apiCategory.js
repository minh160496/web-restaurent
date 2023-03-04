import { getAPI } from "@/until/request";

export default async function getAPICategory() {
  const path = "category";
  const data = await getAPI(path);
  return data;
}
