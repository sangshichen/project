<template>
  <div class="appheader">
    <div class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 visible-lg">{{msg}}</div>
          <div class="col-lg-6">
            <ul class="nav nav-pills">
              <li><router-link to="/"><strong>首页</strong></router-link></li>
              <li role="presentation" ><router-link to="/about">关于我</router-link></li>
              <li role="presentation"><router-link to="/skill">技能</router-link></li>
              <li role="presentation"><router-link to="/myexperience">相关经历</router-link></li>
              <li role="presentation"><router-link to="/connect">联系我</router-link></li>
              <li role="presentation"><router-link to="/thanks">致谢</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appheader',
  data () {
    return {
      msg: '个人简历'
    }
  },
  methods:{
    mouseover:function(){
      this.style.color='black'
    }
  }
}
</script>


<style scoped>
 a{
   font-size: 20px;
 }
 
 .col-lg-5{
   font-size: 32px;
 
 }
 
</style>
