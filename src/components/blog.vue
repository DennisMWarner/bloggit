<template>
  <div class="blog bg-danger m-4 p-1 rounded shadow border border-secondary" @click="selectBlog()">
    <h2 class="text-info text-center pt-5">{{blogData.title}}</h2>
    <div class="row mt-4 mx-auto">
      <div class="col-10">
        <h5 class="text-warning text-right">
          <br />
          <br />
          {{blogData.creator.name}}
        </h5>
      </div>
      <div class="col-2">
        <img :src="blogData.creator.picture" class="profile-image rounded-circle" />
      </div>
    </div>
    <div class="row" v-if="blogData.creatorEmail==this.$auth.userInfo.email">
      <div class="col-md-4 offset-10 text-center mt-5 m-auto">
        <button class="btn btn-warning m-1 border border-info text-light px-4 rounded shadow">Edit</button>
        <button class="btn btn-danger border border-info text-left rounded shadow">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "blog",
  data() {
    return {};
  },
  props: ["blogData"],
  computed: {},
  methods: {
    selectBlog() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "ActiveBlog",
        params: { blogId: this.blogData.id }
      });
    }
  },

  components: {}
};
</script>


<style scoped>
.profile-image {
  min-height: 8vh;
  max-height: 8vh;
}
</style>