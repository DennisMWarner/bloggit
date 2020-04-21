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
    profileBlogs: [],
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
    setProfileBlogs(state, blogs) {
      state.profileBlogs = blogs;
    },
  },
  actions: {
    async getAllBlogs({ commit }) {
      try {
        let res = await api.get("blogs");
        commit("setAllBlogs", res.data);
        console.log("all blogs: ", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async createComment({ commit, dispatch }, newComment) {
      try {
        let res = await api.post("comments", newComment);
        dispatch("getBlog", newComment.blogId);
      } catch (error) {
        console.error(error);
      }
    },

    async createBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post("blogs", newBlog);
      } catch (error) {
        console.error(error);
      }
    },

    async getBlog({ commit, dispatch }, blogId) {
      try {
        let res = await api.get(`blogs/${blogId}`);
        commit("setActiveBlog", res.data);
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

    async getProfileBlogs({ commit }, profileId) {
      try {
        let res = await api.get("profile/blogs");
        commit("setProfileBlogs", res.data);
        console.log("profileBlogs: ", this.state.profileBlogs);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
