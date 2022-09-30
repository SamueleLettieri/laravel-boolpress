<template>
<div class="ms_width  mx-1 mt-5 mb-5">
  <div class="card-body">
    <h2 class="card-title">{{tag.name}}</h2>
    <router-link :to="`tags/${tag.id}`" class="card-link">Card link</router-link>
  </div>
</div>
</template>

<script>
export default {
props: {
  tag: Object,
}
}
</script>

<style scoped>
.ms_width{
    width:  calc((100% / 4) - 1%);
    display: inline-block;
    min-width: 0;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}
</style>

