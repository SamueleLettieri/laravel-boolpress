<template>
    <section>
      <div class="container">
        <h1 class="mb-5">tag: {{tag.name}}</h1>
          <CardPost v-for="post in tag.posts" :key="post.id" :post="post" />
      </div>
    </section>
  </template>
  
  <script>
  import axios from "axios";
  import CardPost from "../components/CardPost.vue";
  
  export default {
      components: {
      CardPost
  },
  
  
      data: function(){
          return{
              tag : {
                post: '',
              },
              loading : false,
          }
      },
  
      methods: {
          getTags() {
              const id = this.$route.params.id;
              
              axios.get( `/api/tags/${id}`)
              .then((response) => {
                  console.log(response.data.results)
                  this.tag = response.data.results;
                  this.loading = false
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