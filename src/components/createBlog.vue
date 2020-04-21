<template>
  <div class="create-blog">
    <form action>
      <div class="form-group text-left">
        <input
          type="text"
          class="form-control bg-light text-secondary"
          placeholder="Enter blog title here..."
          v-model="newBlog.title"
        />
        <label
          for="exampleFormControlTextarea1"
          class="text-light bg-warning p-3 rounded shadow w-100 mt-3"
        >
          <h5>Enter a new blog post below...</h5>
        </label>
        <textarea
          class="form-control mt-2"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter blog body here..."
          v-model="newBlog.body"
        ></textarea>
      </div>
      <button class="btn btn-primary bg-info w-50 rounded shadow text-danger" @click="createBlog()">
        <h4>Submit new blog post</h4>
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "create-blog",
  data() {
    return {
      newBlog: {
        published: true,
        imgUrl: "https://imgur.com/Wv1GKCK.jpg",
        creatorEmail: this.$store.state.profile.email
      }
    };
  },
  computed: {},
  methods: {
    createBlog() {
      console.log(this.$store.state.activeBlog);
      this.$store.dispatch("createBlog", this.newBlog);
      this.newBlog = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>