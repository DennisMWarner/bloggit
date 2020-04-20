<template>
  <div class="comments bg-secondary text-info m-3 border rounded">
    <comment v-for="comment in comments" :commentData="comment" :key="comment.id"></comment>
  </div>
</template>


<script>
import comment from "../components/comment";
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
  components: { comment },
  created() {
    console.log(
      "activeLog.comments when comments.vue is created: ",
      this.$store.state.activeBlog.comments
    );
  }
};
</script>


<style scoped>
</style>