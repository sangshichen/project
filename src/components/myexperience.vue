<template>
  <div class="hello">
   <div class="title">
       <p><span class="glyphicon glyphicon-wrench">相关经历</span></p>
   </div>
   <div class="container">
       <div class="row">
           <div class="col-md-6">
                <ul class="list-group">
                    <router-link to="/project1" class="button" @mousemove="mousese"><li class="list-group-item list-group-item-success">简易新闻网站的制作</li></router-link>
                    <router-link to="/project2" class="button" @mousemove="mousese"><li class="list-group-item list-group-item-info">小游戏的制作与WEB形式说明书</li></router-link>
                    <router-link to="/project3" class="button" @mousemove="mousese"><li class="list-group-item list-group-item-warning">其他技能</li></router-link>
                </ul>
           </div>
           <div class="col-md-6 linkrouter">
               <router-view></router-view>
           </div>
       </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.title{
    text-align: center;
    margin-top: 50px;
    font-size: 50px
}
.list-group{
    margin: 50px;
}
li{
    height: 100px;
    font-size: 30px;
    margin-top: 20px;
    line-height: 100px;
}
.linkrouter{
    margin-top: 50px
}
.button{
    text-decoration: none;
}

</style>
