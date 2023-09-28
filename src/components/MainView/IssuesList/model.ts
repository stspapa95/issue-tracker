export type IssueProps = {
  id: string;
  assignee: string | null;
  comments: string[];
  completedDate: Date | null;
  createdBy: string;
  createdDate: Date;
  dueDate: Date | null;
  number: number;
  labels: string[];
  status: string;
  title: string;
};

export type LabelsProps = {
  id: string;
  name: string;
  color: string;
};
