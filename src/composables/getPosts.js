import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("https://mock-server-6iau.onrender.com/posts");
      if (!data.ok) {
        throw Error("no available data");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
