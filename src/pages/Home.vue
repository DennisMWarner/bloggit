<template>
  <div class="home container-fluid">
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
  },
  created() {
    return this.$store.dispatch("getAllBlogs");
  }
};
</script>
