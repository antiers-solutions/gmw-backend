export type Reviewer = { login: string; id: number; avatar_url: string };
export type GitHubReview = { user: Reviewer; state: string };
export type ReviewerDetails = {
  reviewer: string;
  reviewer_id: number;
  reviewer_avatar: string;
};
