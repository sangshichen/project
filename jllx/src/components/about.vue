<template>
  <div class="about">
    <div class="page-header">
        <h1>关于本人的一些信息 <small>something about me</small></h1>
    </div>
    <div class="progress">
        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
    </div>
    <div id="famousecontent">
        <p>优秀的代码是它自己最好的文档。当你考虑要添加一个注释时，问问自己，“如何能改进这段代码，以让它不需要注释？</p>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-2">

            </div>
            <div class="col-md-3">
                <img src="../assets/u=2250072999,270499519&fm=26&gp=0.jpg" alt="" class="img-circle" width="200px" title="这不是我，但是我比他有趣">
            </div>
            <div class="col-md-3">
                <div class="introduce"><p>姓名<span class="glyphicon glyphicon-menu-right"></span>桑士琛</p></div>
                <div class="introduce"><p>性别<span class="glyphicon glyphicon-menu-right"></span>男</p></div>
                <div class="introduce"><p>出生<span class="glyphicon glyphicon-menu-right"></span>1997.2.9</p></div>
                <div class="introduce"><p>居住<span class="glyphicon glyphicon-menu-right"></span>北京</p></div>
                <div class="introduce"><p>学历<span class="glyphicon glyphicon-menu-right"></span>本科</p></div>
                <div class="introduce"><p>专业<span class="glyphicon glyphicon-menu-right"></span>计算机科学与技术</p></div>
            </div>
            <div class="col-md-4">
                <div class="introduce"><p>手机<span class="glyphicon glyphicon-menu-right"></span>17694849729</p></div>
                <div class="introduce"><p>邮箱<span class="glyphicon glyphicon-menu-right"></span>1442884430@qq.com</p></div>
                <div class="introduce"><p>qq<span class="glyphicon glyphicon-menu-right"></span>1442884430</p></div>
                <div class="introduce"><p>户籍<span class="glyphicon glyphicon-menu-right"></span>天津</p></div>
                <div class="introduce"><p>学校<span class="glyphicon glyphicon-menu-right"></span>北京科技大学天津学院</p></div>
                <div class="introduce"><p>英语<span class="glyphicon glyphicon-menu-right"></span>听说读写熟练</p></div>
            </div>
            <div class="self">
                <p id="self"><em>自我评价</em>：喜欢与人交流，乐观积极，诚实守信，上进心强，具有较强
                的自主学习能力，每天平均自学相关知识2-3小时，熟悉项目基本开发流程，具有较好的团队协作精神</p>
            </div>
        </div>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '111'
    }
  }
}
</script>


<style scoped>
.page-header{
    text-align: center
}
.progress{
    width: 1000px;
    margin: 0 auto;
    height: 40px;
}
p{
    font-size: 20px;
}
#famousecontent{
    text-align: center;
    margin-top: 30px
}
img{
    margin-top: 130px
}
.introduce{
    margin-top: 40px
}
.self{
    padding: 50px
}
#self{
    line-height: 50px
}
</style>
