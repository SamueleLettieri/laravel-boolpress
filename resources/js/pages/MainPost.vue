<template>
  <section>
    <div class="container">
        <CardPost :key="post.id" :post="post" />
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
            post : {
                user: '',
            },
            loading : false,
        }
    },

    methods: {
        getpost() {
            const id = this.$route.params.id;
            
            axios.get( `/api/posts/${id}`)
            .then((response) => {
                console.log(response)
                this.post = response.data.results;
                this.loading = false
            })
            .catch((error) => {
                console.warn(error);
            });
            console.log(this.id)
        },
    },
    created(){
        this.getpost();
    }
}
</script>

<style>

</style>