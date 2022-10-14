export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "63493fd3321a7a23c6b155b7",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-d56hqmvu",
                  apiId: "af2c7428-9511-4975-ae02-d824ea49a18f",
                },
                {
                  buildHookId: "63493fd47e3b2f248420f7bb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-8k9262td",
                  apiId: "12e28a40-ca6c-4d10-8596-4f9cf74452b5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bintudharsul/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-8k9262td.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
