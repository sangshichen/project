<template>
  <div class="project1">
    <div class="panel panel-success">
        <div class="panel-heading"><em>Bootstrap jQuery urllib</em></div>
        <div class="panel-body">
            <p><strong>开发时间</strong>：2018/4-2018/5</p>
            <p><strong>开发工具</strong>：HbuilderX</p>
            <p><strong>项目概述</strong>：</p>
            <p>该项目是一个对于校园内网网页的一个简单设计，其中还有很多标签来跳转至详情页面，
                包含可下拉的菜单和一些UI界面的设计</p>
            <p><strong>责任描述</strong>：</p>
            <ul>
                <li>根据需求使用bootstrap进行响应式布局式设计</li>
                <li>参与部分美工设计</li>
                <li>对页面的信息使用python中的urllib库对新浪网页信息进行一定抓取</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project1',
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
