import blogImage from './public/blog.png';

export const MOCK = [
  {
    id: "post-1",
    title: "Post uno.",
    description: "Descripción del post uno.",
    createdAt: '21/02/2022',
    image:
      blogImage,
  },
  {
    id: "post-2",
    title: "Post dos.",
    description: "Descripción del post dos.",
    createdAt: '22/02/2022',
    image:
      blogImage,
  },
  {
    id: "post-3",
    title: "Post tres.",
    description: "Descripción del post tres.",
    createdAt: '23/02/2022',
    image:
      blogImage,
  },
];

const delay= ms => new Promise(resolve => setTimeout(resolve, ms));

const api = {
  list: async () => {
      await delay(2000);
      return MOCK;
  },
  fetch: async id => {
    const post = MOCK.find((post) => post.id === id);

    if (!post) {
      throw new Error("Post not found.");
    }

    return post;
  },
};

export default api;