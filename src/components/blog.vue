<template>
  <div class="blog bg-danger m-4 p-3 rounded border border-secondary" @click="selectBlog()">
    <h2 class="text-info">{{blogData.title}}</h2>
    <div class="row mt-4">
      <div class="col-10">
        <h5 class="text-warning text-right">
          <br />
          {{blogData.creator.name}}
        </h5>
      </div>
      <div class="col-2">
        <img :src="blogData.creator.picture" class="profile-image" />
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
      //console.log("Blog id: ", this.blogData.id);
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "ActiveBlog",
        params: { blogId: this.blogData.id }
      });
      //console.log(this.$router);
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