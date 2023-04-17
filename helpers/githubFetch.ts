import { Octokit } from "octokit";
import { components } from "node_modules/@octokit/openapi-types/types";

export interface GithubPullRequestData {
  owner: string;
  repo: string;
  pull_request_number: number;
  number_of_commits: number;
  title: string;
  user_link: string;
  repo_name: string;
  repo_description: string;
  stargazers_count: number;
}

async function getDataFromOctokitResponse(
  octokitPullResponse: components["schemas"]["pull-request"],
  owner: string,
  repo: string,
  pull_request: number
): Promise<GithubPullRequestData> {
  const title = octokitPullResponse.title;
  const user_link = octokitPullResponse.user!.html_url;
  // const repo_name = octokitPullResponse.head!.repo!.name || "";
  // const repo_description = octokitPullResponse.head!.repo!.description || "";
  // const stargazers_count = octokitPullResponse.head!.repo!.stargazers_count;
  const repo_name = "Repo Name";
  const repo_description = "Repo Description";
  const stargazers_count = 0;
  const number_of_commits = octokitPullResponse.commits;

  return {
    owner: owner,
    repo: repo,
    pull_request_number: pull_request,
    number_of_commits: number_of_commits,
    title: title,
    user_link: user_link,
    repo_name: repo_name,
    repo_description: repo_description,
    stargazers_count: stargazers_count,
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
  const pull_request = +linkArray[6];

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls/{pull_number}",
    {
      owner: owner,
      repo: repo,
      pull_number: pull_request,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
        accept: "application/vnd.github+json",
      },
    }
  );

  return getDataFromOctokitResponse(response.data, owner, repo, pull_request);
}
