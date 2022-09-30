<template>
  <main>
      <div class="container">
        <Loading class="text-center" v-if="isLoading" />
        <h1 class="mb-5" v-else>Posts</h1>
        <CardPost v-for="post in posts" :key="post.id" :post="post"/>
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
            posts : [],
            currentPagge : 1,
            lastPage : null,
            isLoading : true,
        }
    },

    methods: {
        getPosts(postsPage = 1) {
            axios.get( `/api/posts`, {page: postsPage})
                .then((response) => {
                console.log(response.data.results.data); 
                this.posts = response.data.results.data;
                this.currentPagge = response.data.results.currentPagge;
                this.lastPage = response.data.results.lastPage;
                this.isLoading = false;
            })
                .catch((error) => {
                console.warn(error);
            });
        },
    },
    created(){
        this.getPosts();
    }
}
</script>

<style>

</style>