import { Octokit } from "octokit";
import { components } from "node_modules/@octokit/openapi-types/types";

export interface GithubPullRequestData {
  key: string;
  pull_request_link: string;
  owner: string;
  pull_request_number: number;
  number_of_commits: number;
  title: string;
  owner_link: string;
  repo_name: string;
  repo_description: string;
  repo_link: string;
  stargazers_count: number;
  language: string | null;
  number_of_files_changed: number;
  isMerged: boolean;
  state: "open" | "closed";
}

async function getDataFromOctokitResponse(
  octokitPullResponse: components["schemas"]["pull-request"],
  owner: string,
  pull_request_number: number
): Promise<GithubPullRequestData> {
  const key = `${octokitPullResponse.node_id}_${octokitPullResponse.id}`;
  const pull_request_link = octokitPullResponse.html_url;
  const number_of_commits = octokitPullResponse.commits;
  const title = octokitPullResponse.title;
  const owner_link = octokitPullResponse.base?.repo?.owner?.html_url;
  const repo_name = octokitPullResponse.base?.repo?.name;
  const repo_description =
    octokitPullResponse.base?.repo?.description || "No description";
  const repo_link = octokitPullResponse.base?.repo?.html_url;
  const stargazers_count = octokitPullResponse.base?.repo?.stargazers_count;
  const language = octokitPullResponse.base?.repo?.language;
  const number_of_files_changed = octokitPullResponse.changed_files;
  const isMerged = octokitPullResponse.merged;
  const state = octokitPullResponse.state;

  return {
    key,
    pull_request_link,
    owner,
    pull_request_number,
    number_of_commits,
    title,
    owner_link,
    repo_name,
    repo_description,
    repo_link,
    stargazers_count,
    language,
    number_of_files_changed,
    isMerged,
    state,
  };
}

export default async function githubPullRequestFetch(
  ACCESS_TOKEN: string,
  pullRequestLink: string
): Promise<GithubPullRequestData> {
  // https://github.com/CommunityPro/Practice-Contribution/pull/104
  const octokit = new Octokit({
    auth: ACCESS_TOKEN,
  });

  const linkArray = pullRequestLink.split("/");
  const owner = linkArray[3];
  const repo = linkArray[4];
  const pull_request_number = +linkArray[6];

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}",
    {
      owner: owner,
      repo: repo,
      pull_number: pull_request_number,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        accept: "application/vnd.github+json",
      },
    }
  );

  return getDataFromOctokitResponse(
    response.data,
    owner,
    pull_request_number
  );
}
