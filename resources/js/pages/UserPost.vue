<template>
    <section>
      <div class="container">
        <Loading class="text-center" v-if="isLoading" />
        <h1 class="mb-5" v-else>User: {{user.name}}</h1>
          <CardPost v-for="post in user.posts" :key="post.id" :post="post" />
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
              user : {
                post: '',
              },
              isLoading : true,
          }
      },
  
      methods: {
          getUsers() {
              const id = this.$route.params.id;
              
              axios.get( `/api/users/${id}`)
              .then((response) => {
                  console.log(response.data.results)
                  this.user = response.data.results;
                  this.isLoading = false
              })
              .catch((error) => {
                  console.warn(error);
              });
              console.log(this.id)
          },
      },
      created(){
          this.getUsers();
      }
  }
  </script>
  
  <style>
  
  </style>