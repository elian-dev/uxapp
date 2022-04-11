<template>
  
  <Header></Header>
  
  <div class="wrapper"> 
    <router-view></router-view>
  </div>

</template>

<script>
  import Header from '@/views/Header.vue'
  import Card from '@/views/Card.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Card
    }
  }
</script>

<style>
  @import url('@/assets/css/base.css');
</style>