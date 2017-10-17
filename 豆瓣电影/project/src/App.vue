<template>
  <div id="app">
    <Douban-header></Douban-header>
    <router-view></router-view>
    <DoubanFooter></DoubanFooter>
  </div>
</template>

<script>
import DoubanHeader from '@/components/header'
import DoubanFooter from '@/components/footer'
export default {
  name: 'app',
  components:{
    DoubanHeader,
    DoubanFooter
  }
}
</script>

<style>
</style>
