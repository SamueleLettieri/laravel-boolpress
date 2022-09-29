<template>
  <section>
    <HeaderNav />



    <router-view></router-view>
  </section>
</template>

<script>
import HeaderNav from "../components/HeaderNav.vue";


export default {
    components: {
    HeaderNav
}
}
</script>

<style>

</style>