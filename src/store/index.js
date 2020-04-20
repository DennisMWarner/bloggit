import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog;
    },
  },
  actions: {
    async getAllBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        commit("setAllBlogs", res.data);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    async createComment({ commit, dispatch }, newComment) {
      console.log("createComment called...");
      try {
        let res = await api.post("comments", newComment);
        dispatch("getBlog", newComment.blogId);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get("blogs/" + blogId);

        commit("setActiveBlog", res.data);
        console.log(".../blogs/blogId/: ", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
