<template>
  <div class="thanks">
   <p>感谢您花时间阅读我的简历</p>
  </div>
</template>

<script>
export default {
  name: 'thanks',
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>
    .thanks{
        width: 1920px;
        height: 860px;
        background-image: url('../assets/0d204f4a20a4462310b2258e9622720e0df3d7e0.jpg');
        text-align: center
    }
    p{
        line-height: 860px;
        font-size: 100px;
    }
</style>
