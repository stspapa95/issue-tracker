import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/utils";

import {LabelsProps} from "../components/MainView/IssuesList/model";

export const useUserData = (userId: string) =>
  useQuery(["userData", userId], () => fetchData(`api/users/${userId}`));

export const useLabelsData = () =>
  useQuery<LabelsProps[]>(["labels"], () => fetchData(`/api/labels`));
