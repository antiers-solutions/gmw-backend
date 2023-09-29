interface DBQUERY {
  id?: string;
  project_id?: string;
  status?: string;
  merged_at?: string;
  start_date?: Date;
  project_name?: RegExp | string;
  team_id?: string;
  level?: string;
  team_name?: RegExp | string;
  created_at?: string;
  name?: RegExp | string;
  projects?: string[];
  git_id?: string;
  file_name?: string;
}

export { DBQUERY };
