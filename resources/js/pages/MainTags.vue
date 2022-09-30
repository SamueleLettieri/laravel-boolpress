<template>
    <section>
      <div class="container">
        <Loading class="text-center" v-if="isLoading" />
        <div v-else>
            <CardTags v-for="tag in tags"  :key="tag.id" :tag="tag" />
        </div>
      </div>
    </section>
</template>
  
<script>
import axios from "axios";
import CardTags from "../components/CardTags.vue";
import Loading from "../components/loading.vue";
  
export default {
    components: {
    CardTags,
    Loading
},
  
  
    data: function(){
        return{
            tags : [],
            isLoading : true,
        }
    },

    methods: {
        getTags() {
            axios.get( `/api/tags`)
            .then((response) => {
                console.log(response.data.results.data)
                this.tags = response.data.results.data; 
                this.isLoading = false
            })
            .catch((error) => {
                console.warn(error);
            });
        },
    },
    created(){
        this.getTags();
    }
}
</script>

<style>

</style>