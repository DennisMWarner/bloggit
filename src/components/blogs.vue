<template>
  <div class="blogs bg-warning">
    <h3 class="m-2 text-primary m-2">Click a blog to view.</h3>
    <h5 class="m-2 text-info pt-5 text-left">Log in to view, edit, or delete your blogs or comments.</h5>
    <blog v-for="blog in blogs" :blogData="blog" :key="blog._id" class="col-md-8 mx-auto"></blog>
  </div>
</template>


<script>
import blog from "../components/blog";
export default {
  name: "blogs",
  data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },

  methods: {},
  components: { blog }
};
</script>


<style scoped>
</style>