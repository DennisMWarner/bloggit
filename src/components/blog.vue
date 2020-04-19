<template>
  <div class="blog col-4 bg-danger m-2 p-3 rounded border border-secondary" @click="selectBlog()">
    <h5 class="text-info">{{blogData.title}}</h5>
    <h5 class="text-warning">{{blogData.creator.name}}</h5>
    <img :src="blogData.creator.picture" class="profile-image" />
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
      console.log("Blog id: ", this.blogData.id);
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "ActiveBlog",
        params: { blogId: this.blogData.id }
      });
      console.log(this.$router);
    }
  },
  components: {}
};
</script>


<style scoped>
.profile-image {
  min-height: 5vh;
  max-height: 5vh;
}
</style>