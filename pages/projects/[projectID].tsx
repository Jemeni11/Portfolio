import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { projectsArray } from "@/data/projects";
import ProjectPageTemplate from "@/components/projectPageTemplate";
import InvalidUrl from "./InvalidUrl";
import InvalidProject from "./InvalidProject";
import Quote from "@/components/Quote";
import { PullRequestsArray } from "@/data/opensource";
import githubPullRequestFetch, {
  GithubPullRequestData,
} from "@/helpers/githubFetch";
import type { GetStaticProps } from "next";

const Project = ({
  githubPullRequestsDataArray,
}: {
  githubPullRequestsDataArray: GithubPullRequestData[];
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { projectID } = router.query;

  if (typeof projectID !== "string") return <InvalidUrl />;

  if (projectID.trim() === "opensource")
    return (
      <OpenSource githubPullRequestsDataArray={githubPullRequestsDataArray} />
    );

  const idShortCode = projectID.split("_")[0];
  const filteredProjectCategoryArray = projectsArray.filter(
    (project) => project.id === idShortCode
  );

  if (filteredProjectCategoryArray.length === 0) return <InvalidProject />;

  const projectArray = filteredProjectCategoryArray[0].projects.filter(
    (project) => project.id === projectID
  );

  if (projectArray.length === 0) return <InvalidProject />;

  const project = projectArray[0];

  return (
    <ProjectPageTemplate
      metaContent=""
      metaTitle={project.title}
      pageSectionTitle={project.title}
    >
      <section>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <p>{project.id}</p>
      </section>
    </ProjectPageTemplate>
  );
};

export default Project;

function OpenSource({
  githubPullRequestsDataArray,
}: {
  githubPullRequestsDataArray: GithubPullRequestData[];
}) {
  function TableRow({ data }: { data: GithubPullRequestData }) {
    return (
      <tr>
        <td>{data.owner}</td>
        <td>{data.repo}</td>
        <td>{data.title}</td>
        <td>
          <a href={data.user_link}>{data.user_link}</a>
        </td>
      </tr>
    );
  }

  function Table({ array }: { array: GithubPullRequestData[] }) {
    return (
      <table className="w-full">
        <thead>
          <tr>
            <th>Repository Owner</th>
            <th>Repository Name</th>
            <th>Pull Request</th>
            <th>Pull Request Details</th>
          </tr>
        </thead>
        <tbody>
          {array.map((data) => (
            <TableRow key={data.pull_request_number} data={data} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <ProjectPageTemplate
      metaContent="Emmanuel Jemeni's Open Source Contributions"
      metaTitle="Open Source Contributions | Emmanuel Jemeni"
      pageSectionTitle="Open Source Contributions"
    >
      <div>
        <Quote
          author="Karen Sandler"
          quote="Contributing to open source is not just a way to give back to the community, it's also a way to improve your own skills and learn from others."
          cite_link="https://www.youtube.com/watch?v=Ag1AKIl_2GM&t=99s"
          work="Why I hack: “My life is incomplete without free software”"
        />
      </div>
      <section>
        <h1>Introduction</h1>
        <p></p>
      </section>
      <section>
        <h2>My Contributions</h2>
        <h3>Pull Requests</h3>
        <Table array={githubPullRequestsDataArray} />
      </section>
    </ProjectPageTemplate>
  );
}

export const getStaticProps: GetStaticProps<{
  githubPullRequestsDataArray: GithubPullRequestData[];
}> = async () => {
  const GITHUB_ACCESS_TOKEN = process.env.GITHUB_API_AUTH_KEY as string;

  const promises = PullRequestsArray.map(async (pullRequestObject) => {
    return githubPullRequestFetch(GITHUB_ACCESS_TOKEN, pullRequestObject.link);
  });

  const githubPullRequestsDataArray: GithubPullRequestData[] =
    await Promise.all(promises);

  return {
    props: {
      githubPullRequestsDataArray,
    },
  };
};

export async function getStaticPaths() {
  const allProjectPaths = projectsArray
    .map((projectCategory) =>
      projectCategory.projects.map((project) => "/projects/" + project.id)
    )
    .flat();

  return {
    paths: ["/projects/opensource", ...allProjectPaths],
    fallback: "blocking",
  };
}
