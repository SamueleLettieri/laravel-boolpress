<template>
    <section>
      <div class="container">
        <Loading class="text-center" v-if="isLoading" />
        <h1 class="mb-5" v-else>tag: {{tag.name}}</h1>
          <CardPost v-for="post in tag.posts" :key="post.id" :post="post" />
      </div>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  import CardPost from "../components/CardPost.vue";
import Loading from "../components/loading.vue";
  
  export default {
      components: {
    CardPost,
    Loading
},
  
  
      data: function(){
          return{
              tag : {
                post: '',
              },
              isLoading : true,
          }
      },
  
      methods: {
          getTags() {
              const id = this.$route.params.id;
              
              axios.get( `/api/tags/${id}`)
              .then((response) => {
                  console.log(response.data.results)
                  this.tag = response.data.results;
                  this.isLoading = false
              })
              .catch((error) => {
                  console.warn(error);
              });
              console.log(this.id)
          },
      },
      created(){
          this.getTags();
      }
  }
  </script>
  
  <style>
  
  </style>