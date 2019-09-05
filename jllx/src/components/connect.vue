<template>
  <div class="hello">
      <div class="title">
          <h1>联系我</h1>
      </div>
      <hr>
      <div class="container">
          <div class="row">
              <div class="col-md-1"></div>
              <div class="col-md-3">
                  <span class="glyphicon glyphicon-user"></span>
                  <h3>微信：sangshichen</h3>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-3">
                  <span class="glyphicon glyphicon-envelope"></span>
                  <h3>1442884430@qq.com</h3>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-3">
                  <span class="glyphicon glyphicon-phone"></span>
                  <h3>17694849729</h3>
              </div>
          </div>
          <div class="row" v-if="!submit">
              <div class="col-md-4">
                  <form>
                      <div class="from-group">
                          <label>您的姓名</label>
                          <input type="text" class="form-control" required placeholder="请输入您的姓名" v-model="msg.name">
                      </div>
                  </form>
              </div>
              <div class="col-md-4">
                    <div class="from-group">
                          <label>您的邮箱</label>
                          <input type="email" class="form-control" required placeholder="请输入您的邮箱" v-model="msg.email">
                    </div>
              </div>
              <div class="col-md-4">
                    <div class="from-group">
                          <label>您的联系方式</label>
                          <input type="text" class="form-control" required placeholder="请输入您的联系方式" v-model="msg.tel">
                    </div>
              </div>
          </div>
          <div class="suggestion" v-if="!submit">
              <label for="">请输入您的意见</label>
              <textarea class="form-control" v-model="msg.suggestion" cols="30" rows="10" placeholder="请输入您的意见"></textarea>
          </div>
          <div class="evaluate" v-if="!submit">
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="蛮好的" v-model="msg.evaluate"> 蛮好的！
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="just so so" v-model="msg.evaluate"> just so so
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="平淡无奇" v-model="msg.evaluate"> 平淡无奇
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="so boring!" v-model="msg.evaluate"> so boring!
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="差到极致" v-model="msg.evaluate"> 差到极致
            </label>
          </div>
          <button class="btn btn-info" @click.prevent="post" v-if="!submit" style="margin-bottom: 0px">提交</button>
          <div class="media">
              <div class="media-body" v-if="submit">
                  <h3>您的姓名：{{msg.name}}</h3>
                  <p>您的邮箱：{{msg.email}}</p>
                  <p>您的电话：{{msg.tel}}</p>
                  <p>您的评价：{{msg.evaluate}}</p>
                  <p>您的建议：{{msg.suggestion}}</p>
              </div>
              <button class="btn -btn-info" v-if="submit" @click="submit = !submit">返回</button>
              <p>(请爬梯子哟，不然会无法加载提交结果！）</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: {
          name:'',
          email:'',
          tel:'',
          suggestion:'',
          evaluate:''
      },
      submit:false
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://myfirstproject-424bc.firebaseio.com/posts.json',this.msg)
          .then(function(data){
            //   console.log(data)
              this.submit = true
          })
      }
  }
}
</script>


<style scoped>
.title{
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px
}
.col-md-3{
    border: 2px dashed lightgray;
    text-align: center;
    padding: 30px;

}
span{
    font-size: 100px;
    margin-bottom: 50pxl;
    color: lightblue
}
.col-md-4{
    margin-top: 50px;
    padding-left: 40px
}
.suggestion{
    margin-top: 30px;
    margin-left: 28px;
}
.evaluate{
    padding: 30px
}
button{
    margin: 10px 550px
}
.media{
    text-align: center
}
</style>
