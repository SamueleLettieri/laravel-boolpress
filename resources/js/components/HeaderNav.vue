<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Boolpress</router-link>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" to="/users">Post</router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" to="/tags">Tags</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>