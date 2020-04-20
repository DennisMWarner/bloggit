<template>
  <div class="create-comment">
    <div class="row mx-3">
      <div class="col-12">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control bg-light text-secondary"
            placeholder="Enter a comment here..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            v-model="newComment.body"
          />

          <div class="input-group-append">
            <button
              class="btn btn-outline-info text-light bg-warning"
              type="submit"
              id="button-addon2"
              @click="createComment()"
            >Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import comments from "../components/comments";
export default {
  name: "create-comment",
  data() {
    return {
      newComment: {
        blogId: this.$store.state.activeBlog.blog.id,
        creatorEmail: this.$store.state.profile.email
      }
    };
  },
  params: [],
  computed: {},
  methods: {
    createComment() {
      console.log(this.$store.state.activeBlog);
      this.$store.dispatch("createComment", this.newComment);
      this.newComment = {};
    }
  },
  components: { comments }
};
</script>


<style scoped>
</style>