<template>
    <main>
        <div class="container">
          <Loading class="text-center" v-if="isLoading" />
          <h1 class="mb-5" v-else>Posts</h1>
          <div class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model.trim="needle" @keyup.enter="searchInPosts(needle)">
            <a class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="searchInPosts(needle)">Search</a>
          </div>
          <h3 v-if="posts.length > 0">results for {{needle}} in every post's title:</h3>
          <h3 v-else>Please search a valid string</h3>
          <div v-if="!isLoading">
              <CardPost v-for="post in posts" :key="post.id" :post="post"/>
            </div>
      </div>
    </main>
  </template>
  
  <script>
  import axios from "axios";
  import CardPost from '../components/CardPost.vue'
  import Loading from '../components/loading.vue'
  export default {
      components: {
      CardPost,
      Loading
  },
  
  
      data: function(){
          return{
            needle : '',
            posts : [],
            isLoading : true,
          }
      },
  
      methods: {
          getPosts(needle) {
              axios.get( '/api/posts/search/' + needle)
                  .then((response) => {
                  console.log(response.data.results); 
                  this.posts = response.data.results;
                  this.currentPagge = response.data.results.currentPagge;
                  this.isLoading = false;
              })
                  .catch((error) => {
                  console.warn(error);
              });
          },

          searchInPosts(needle){
            if(needle !== ''){
                this.getPosts(needle);
            }
          },
      },
      created(){
      }
  }
  </script>
  
  <style>
  
  </style>