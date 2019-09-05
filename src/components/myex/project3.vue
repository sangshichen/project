<template>
  <div class="project3">
    <div class="panel panel-warning">
        <div class="panel-heading"><strong>其他技能</strong></div>
        <div class="panel-body">
           <ul v-for="msg in msgs" :key="msg">
               <li>{{msg}}</li>
           </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project3',
  data () {
    return {
      msgs: ['熟悉python语言，制作过小游戏，并编写过简单的爬虫，对后端有一定了解',
      '了解正则表达式，Xpath表达式的应用',
      '熟悉在对前端代码抓取的过程中，用户，IP代理池的方法，并会使用Fiddler进行抓包分析ajax异步读取',
      '大三实习时曾担任北京云测信息技术有限公司项目审核一职，了解项目的基本构成',
      '毕业之后经指导老师推荐，有过两个月的测试工程师经验，对手机端的自动化测试也有一定基础']
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
