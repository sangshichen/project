<template>
  <div class="skill">
     <span class="glyphicon glyphicon-chevron-down"></span>
     <h1>技能</h1>
     <span class="glyphicon glyphicon-chevron-up"></span>
    <div class="container">
        <div class="row">
            <div class="col-md-5 visible-lg">
                <img src="../assets/098ce71190ef76c68c34a9839316fdfaae516701.jpg" alt="" width="450px">
            </div>
            <div class="col-md-7">
                <div class="alert alert-success" role="alert">熟练HTML5，并且能够手写符合W3C的标准html页面</div>
                <div class="alert alert-info" role="alert">熟练CSS3中的各种常用对页面布局设计的方法</div>
                <div class="alert alert-warning" role="alert">掌握JavaScript中的常用语法，了解ES6，并且可以使用常用的ES6语法对代码进行编写</div>
                <div class="alert alert-danger" role="alert">熟练掌握Vue.js中的项目流程，对Vue的MVVM有一定的理解，可即时参与至Vue项目中</div>
                 <div class="alert alert-warning" role="alert">常使用bootstrap框架进行网页设计，可设计响应式布局</div>
                <div class="alert alert-success" role="alert">掌握基本的数据类型以及算法</div>
                <div class="alert alert-info" role="alert">使用过谷歌的firebase数据库，中国的wilddog数据库，对MYsql中的增删改查可正常操作</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>
    .skill{
        text-align: center
    }
</style>