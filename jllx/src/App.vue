<template>
  <div id="app">
   <appheader></appheader>
    <!-- <home></home> -->
    <!-- <appabout></appabout> -->
    <!-- <skill></skill> -->
    <router-view></router-view>
    <appfooter></appfooter>
    
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import appheader from './components/appheader'
import home from './components/home'
import appabout from './components/about'
import skill from './components/skill'
import myexperience from './components/myexperience'
import thanks from './components/thanks'
import appfooter from './components/appfooter'


export default {
  name: 'App',
  components: {
    HelloWorld,
    appheader,
    home,
    appabout,
    skill,
    myexperience,
    thanks,
    appfooter
  }
}
</script>

<style>
*{
  margin: 0;
}
</style>
