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
          class="text-light bg-secondary p-1 rounded shadow w-100 mt-3"
        >
          <h5 class="px-3 pt-1">Blog Title above this bar... Blog Entry below...</h5>
        </label>
        <textarea
          class="form-control mt-2"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Enter blog body here..."
          v-model="newBlog.body"
        ></textarea>
      </div>
      <button
        class="btn btn-primary bg-primary border-info w-25 rounded shadow text-light mb-5 pt-3"
        @click="createBlog()"
      >
        <h3>Submit new blog post</h3>
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
      this.$store.dispatch("createBlog", this.newBlog);
      console.log("new blog: ", this.newBlog);
      this.newBlog = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>