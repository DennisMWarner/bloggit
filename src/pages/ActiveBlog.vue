<template>
  <div class="active-blog">
    <h5>{{blog.blog.title}}</h5>
    <h3>{{blog.blog.body}}</h3>
    <img :src="blog.blog.imgUrl" alt />
    <h3>{{blog.comments.body}}</h3>
  </div>
</template>


<script>
import blog from "../components/blog";
import blogs from "../components/blogs";
export default {
  name: "active-blog",
  data() {
    return {};
  },
  created() {
    //console.log("ActiveBlog page created...");
    this.$store.dispatch("getBlog", this.$route.params.blogId);
    //console.log(this.store.state.activeBlog);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    comments() {
      return this.store.state.activeBlog.blog.comments;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>