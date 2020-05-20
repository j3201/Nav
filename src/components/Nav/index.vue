<template>
    <el-container id="container">
        <el-aside style="width:140px;" :class="navBarFixed == true ? 'navBarWrap' :''">
            <!--方法一：使用事件委托，向子组件传递值，判断渲染全部，还是部分-->
            <!--方法二：使用路由传参，判定。具体实现待定；方法三：使用组件间通信-->
            <el-menu id="aside" mode="horizintal" :default-active="activeIndex" active-text-color="red" router @select='changeIndex'>
                <el-menu-item class="item" v-for="(menu,index) in Menu" :key="index" :index="menu.id"><span>{{menu.name}}</span></el-menu-item>
            </el-menu>
        </el-aside>
        <el-main :class="navBarFixed == true ? 'navBar' :''">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </el-container>
</template>
<script>
export default {
    data () {
        return {
            navBarFixed:'',
            activeIndex:"",
            Menu:[                
                {name:'推荐',id:'tuijian'},
                {name:'动态',id:'dongtai'},
                {name:'程序人生',id:'3'},
                {name:'Python',id:'4'},
                {name:'Java',id:'5'},
                {name:'前端',id:'6'},
                {name:'架构',id:'7'},
                {name:'区块链',id:'8'},
                {name:'数据库开发',id:'9'},
                {name:'游戏开发',id:'10'},
                {name:'移动开发',id:'11'},
                {name:'运维',id:'12'},
            ]
        }
    },
    mounted() {
        window.addEventListener("scroll", this.hidemenu); //监听滚动事件
    },
    methods: {
        //使用js实现侧边栏吸顶效果
        hidemenu() {
            const scrollTop =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;
            //当滚动超过50时，实现吸顶效果（导航高度为50）
            if (scrollTop > 49) {
                this.navBarFixed = true
            }else{
                this.navBarFixed = false
            }
        },
        //侧边栏高亮问题
        changeIndex(index){
            sessionStorage.setItem('index',index)
        }
    },
    created(){
        if(!sessionStorage.getItem('index')){
            this.activeIndex='tuijian'
        }else{
            this.activeIndex=sessionStorage.getItem('index')
        }
    }
}
</script>
<style lang="scss" scoped>
#container{
    width: 1206px;
    height: 100%;
    margin: 0 auto;
    .el-aside{
        height:672px;
    }
    .el-menu{
        text-align: center;
        box-shadow:0 0 5px rgb(223, 219, 219);
        .el-menu-item{
            color: rgb(12, 12, 12)
        }
    }
    .el-main{
        max-width:1066px;
    }
}
.el-menu-item:hover{
    color: rgb(230, 20, 20)
}
.navBarWrap {
    position: fixed;
    top: 60px;
    z-index:1000
 }
 .navBar{
     min-width:1066px;
     margin-left:12%
 }
</style>