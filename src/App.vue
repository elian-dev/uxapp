<template>
  
  <Header></Header>
  
  <div class="wrapper"> 
    <router-view></router-view>
  </div>

</template>

<script>
  import Header from '@/views/Header.vue'

  export default {
    name: 'App',
    components: {
      Header,
    }
  }
</script>

<style>
  @import url('@/assets/css/base.css');

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 50px);
  }

</style>