<template>
  <div class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .navbar {
    text-align: center;
    height: 80px;
    background-color: lighten($black, 90%);
    line-height: 80px;
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline;
        margin: 0 10px;
      }
    }
  }
</style>