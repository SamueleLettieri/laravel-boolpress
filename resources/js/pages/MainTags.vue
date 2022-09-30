<template>
    <section>
      <div class="container">
        <CardTags v-for="tag in tags"  :key="tag.id" :tag="tag" />
      </div>
    </section>
</template>
  
<script>
import axios from "axios";
import CardTags from "../components/CardTags.vue";
  
export default {
    components: {
CardTags
},
  
  
    data: function(){
        return{
            tags : [],
            loading : false,
        }
    },

    methods: {
        getTags() {
            axios.get( `/api/tags`)
            .then((response) => {
                console.log(response.data.results.data)
                this.tags = response.data.results.data; 
                this.loading = false
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