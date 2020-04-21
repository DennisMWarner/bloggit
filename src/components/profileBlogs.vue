<template class = "container-fluid">
  <div class="row">
    <div class="profile-blogs col-12">
      <blog v-for="blog in blogs" :blogData="blog" :key="blog._id"></blog>
    </div>
    <create-blog class="col-10 m-auto" />
  </div>
</template>


<script>
import createBlog from "../components/createBlog";
import blog from "../components/blog";
export default {
  name: "profile-blogs",
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.profileBlogs;
    }
  },
  created() {
    return this.$store.dispatch(
      "getProfileBlogs",
      this.$store.state.profile.id
    );
  },
  methods: {},
  components: { blog, createBlog }
};
</script>


<style scoped>
</style>