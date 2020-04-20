<template>
  <div class="comment p-2 bg-info text-danger m-3 rounded">
    <h5>{{commentData.body}}</h5>
    <h5 class="text-right">-{{commentData.creator.name}}</h5>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
  created() {}
};
</script>


<style scoped>
</style>