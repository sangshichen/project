<template>
  <div class="home">
      <div id="headimg">
          <img src="../assets/u=2250072999,270499519&fm=26&gp=0.jpg" alt="" width="150px" class="img-circle">
          <h1>桑士琛 <span class="label label-default">一个2019应届生</span></h1>
          <hr>
          <h2><span class="label label-info">桑士琛</span></h2>
          <h1><span class="label label-success">WEB前端工程师</span></h1>
          <h1 id="city">北京/天津</h1>
          <a href="https://pan.baidu.com/s/1n9fLtxyDyNg7EXWpVkFeUg" class="btn btn-info">点击查看纸质版简历</a>
      </div>
     

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: ''
    }
  }
}
</script>


<style scoped>

    .home{
        width: 1920px;
        height: 860px;
        background-image: url('../assets/ChMlWl1ksc2IRkiuADw2SJ3TI00AAM0DQNNbW4APDZg807.jpg')
    }
    #headimg{
        text-align: center
    }
    img{
        margin-top: 200px
    }
    #city{
        color: white
    }
    .btn-info{
        font-size: 20px;
        margin-top: 100px
    }
</style>