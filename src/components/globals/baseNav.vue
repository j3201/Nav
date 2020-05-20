<template>
        <div id="navMenu">
          <el-menu mode="horizontal" :default-active="activeMenu" active-text-color="red" router @select='changeNav'>
            <template v-for="(item,index) in showNav">
              <el-menu-item  :key="index" :index="item.path"><span>{{item.name}}</span></el-menu-item>
            </template>
          </el-menu>
        </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
//该组件中只用到一种模块，所以可以使用createNamespacedHelpers 创建基于某个命名空间辅助函数
const {mapGetters,mapActions} = createNamespacedHelpers('navModules')
export default {
  data(){
    return {
        showNav:[
            {name:'首页',path:'index'},
            {name:'博客',path:'blog'},
            {name:'论坛',path:'luntan'},
        ],
        activeMenu:'index'
    }
  },
  methods:{
    changeNav(index){
      sessionStorage.removeItem('index','')
    }
  }
}
</script>
<style lang='scss' scoped>
$backColor:rgb(248, 246, 246);
$color:rgb(7, 7, 7);
$hoverColor:rgb(250, 4, 4);
#navMenu{
    width:auto;
    min-width: 1200px;
    background-color: $backColor;
  .el-menu{
    display: flex;
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    border: 0;
    background-color: $backColor;
    .el-menu-item{
      height: 50px;
      line-height: 50px;
      color: $color
    }
    .navBt{
      height: 40px;
      border:0;
      background-color: $hoverColor;
      color: $color
    }
  }
  .el-menu-item:hover{
    background-color: $backColor;
    color: $hoverColor
  }
}
</style>
