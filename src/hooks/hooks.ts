import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/utils";

export const useUserData = (userId: string) =>
  useQuery(["userData", userId], () => fetchData(`api/users/${userId}`));
