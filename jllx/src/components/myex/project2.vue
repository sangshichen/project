<template>
  <div class="project2">
   <div class="panel panel-info">
        <div class="panel-heading"><em>Bootstrap pygame jQuery Vue.js</em></div>
        <div class="panel-body">
            <p><strong>开发时间</strong>：2018/4-2018/5</p>
            <p><strong>开发工具</strong>：HbuilderX</p>
            <p><strong>项目概述</strong>：</p>
            <p>制作了一款关于跑酷的小游戏，并制作了一款可以进行下载游戏的网页，网页中包含对于
                游戏操作的指导，环境的配置教程，和提出意见部分
            </p>
            <p><strong>责任描述</strong>：</p>
            <ul>
                <li>根据预想的界面进行具体的设计，其中用到了jQueryUI和bootstrap来进行设计</li>
                <li>表单提交界面使用了firebase云端数据库对数据进行vue.js中resource的get和post操作</li>
                <li>对页面的信息使用python中的Pygame模块对游戏进行制作</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project2',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
.panel-body{
    font-size: 20px
}
.panel-heading{
    font-size: 30px
}
</style>
