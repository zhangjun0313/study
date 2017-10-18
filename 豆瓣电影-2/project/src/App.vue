<template>
  <div id="app">
    <router-view></router-view>
    <DoubanFooter></DoubanFooter>
  </div>
</template>

<script>
import DoubanFooter from '@/components/footer'

export default {
  name: 'app',
  components:{
    DoubanFooter
  }
}
</script>

<style>
</style>
