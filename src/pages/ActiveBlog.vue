<template>
  <div class="active-blog">
    <h5>{{blog.blog.title}}</h5>
    <h3>{{blog.blog.body}}</h3>
    <img :src="blog.blog.imgUrl" alt />
    <comments />
  </div>
</template>


<script>
//import comment from "../components/comment";

import comments from "../components/comments";

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
    }
  },
  methods: {},
  components: { comments }
};
</script>


<style scoped>
</style>