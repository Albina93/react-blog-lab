export type Post = {
  id: number;
  slug: string;
  title: string;
  content: string;
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "hello-world",
    title: "Hello World!",
    content: "This is my very first blog post.",
  },
  {
    id: 2,
    slug: "learning-react-router",
    title: "Learning React Router",
    content: "This post is about React Router...",
  },
  {
    id: 3,
    slug: "react-typescript",
    title: "React Typescript",
    content: "Typescript catches bugs before you run your code.",
  },
];
