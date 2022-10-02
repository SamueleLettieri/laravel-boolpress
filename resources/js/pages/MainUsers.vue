<template>
    <section>
      <div class="container">
        <Loading class="text-center" v-if="isLoading" />
        <div v-else>
            <CardUser v-for="user in users"  :key="user.id" :user="user" />
        </div>
      </div>
    </section>
</template>
  
<script>
import axios from "axios";
import Loading from "../components/loading.vue";
import CardUser from "../components/CardUser.vue";
  
export default {
    components: {
    Loading,
    CardUser
},
  
  
    data: function(){
        return{
            users : [],
            isLoading : true,
        }
    },

    methods: {
        getUsers() {
            axios.get( `/api/users`)
            .then((response) => {
                console.log(response.data.results.data)
                this.users = response.data.results.data; 
                this.isLoading = false
            })
            .catch((error) => {
                console.warn(error);
            });
        },
    },
    created(){
        this.getUsers();
    }
}
</script>

<style>

</style>