<template>
  <div class="blogs">
    <blog v-for="blog in blogs" :blogData="blog" :key="blog._id"></blog>
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
  created() {
    return this.$store.dispatch("getAllBlogs");
  },
  methods: {},
  components: { blog }
};
</script>


<style scoped>
</style>