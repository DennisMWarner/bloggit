<template>
  <div class="home">
    <blogs />
  </div>
</template>

<script>
import blogs from "../components/blogs";
import blog from "../components/blog";
export default {
  name: "home",
  components: {
    blogs,
    blog
  }
};
</script>
