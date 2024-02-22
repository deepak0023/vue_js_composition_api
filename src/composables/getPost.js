import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(
        "https://mock-server-6iau.onrender.com/posts/" + id
      );
      if (!data.ok) {
        throw Error("That post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
