<template>
  <div class="appfooter">
      <p>
          本网页由Vue.js和bootstrap制作而成
      </p>
        <h6>由于本简历使用的数据库是Google的firebase，想要提交意见信息请您爬梯子！谢谢！</h6>
  </div>
</template>

<script>
export default {
  name: 'appfooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
    .appfooter{
        text-align: center
    }
    p{
        font-size: 20px;
        max-width: 100%;
    }
</style>
