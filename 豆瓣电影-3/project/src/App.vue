<template>
  <div id="app">
    <DoubanHeader></DoubanHeader>
    <router-view></router-view>
    <DoubanFooter></DoubanFooter>
  </div>
</template>

<script>
import DoubanFooter from '@/components/footer'
//import DoubanContent from '@/components/content'
import DoubanHeader from '@/views/header'

export default {
  name: 'app',
  components:{
    DoubanFooter,
    DoubanHeader
  }
}
</script>

<style>
  #app{
    position: relative;
  }
</style>