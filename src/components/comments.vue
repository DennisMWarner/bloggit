<template>
  <div class="comments bg-secondary text-info m-3 p-3 rounded">
    <h3>Comments:</h3>
    <comment v-for="comment in comments" :commentData="comment" :key="comment.id"></comment>
    <createComment v-show="$auth.isAuthenticated" />
  </div>
</template>


<script>
import comment from "../components/comment";
import createComment from "../components/createComment";
export default {
  name: "comments",
  data() {
    return {};
  },
  computed: {
    comments() {
      return this.$store.state.activeBlog.comments;
    }
  },
  methods: {},
  components: { comment, createComment }
};
</script>


<style scoped>
</style>