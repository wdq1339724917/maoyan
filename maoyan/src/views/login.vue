<template>
	<div>
		<header>
			<div class="icon"><i class="iconfont icon-back"></i></div>
			<div class="font"><h2>猫眼电影</h2></div>
		</header>

		<!-- <transition name="bounce" mode="out-in">
       	 </transition> -->
       <ul>
         
         <li :class="isA?'':'aa'" @click="handleClick"><a @click="who='home'">美团账号登陆</a></li>
         <li :class="isA?'aa':''" @click="handleClick"><a @click="who='list'">手机验证登陆</a></li>
        
       </ul>

  	   <keep-alive>

         <component :is="who"></component>
      
      </keep-alive>
     
    <router-link to="/register" tag="div" activeClass="active"><span class="rightnow"><a href="#">立即注册</a></span></router-link>
		<span class="findpla"><a href="#">找回密码</a></span>
		<footer>© 猫眼电影 客服电话：<span>400-670-5335</span></footer>

	</div>

      
      
     
    <!-- 	<div class="login2">
    
       <ul>
         
         <li class="aa" @click="">美团账号登陆</li>
         <li @click="">手机验证登陆</li>
        
       </ul>
		
          <form id="logupdetail"  >
            <input type="" name="" placeholder="账户/手机号/E-mail" class="username" ><br>
            <input type="" name="" placeholder="请输入您的密码" class="password"><br>
          </form>
          <form id="logupdetail" >
            <input type="" name="" placeholder="请输入手机号" class="username" ><br>
            <input type="" name="" placeholder="请输入验证码" class="password"><br>
          </form>
        

   </div> -->
    
		
		


</template>
<script type="text/javascript">
	 var home={
      template:`

        <div>
          <form id="logupdetail"  >
            <input type="" name="" placeholder="账户/手机号/E-mail" class="username" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;"><br>
            <input type="" name="" placeholder="请输入您的密码" class="password" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;"><br>
          </form>
          <button class="btn" style="width:355px;
			height:50px;
			background-color: #df2d2d;
			color: white;
			border:0;
			margin-top: 15px;
			margin-left: 10px;
			text-align: center;
			border-radius: 5px;">登录</button>
        </div>
      `,

    
    }
    var list={
      template:`

        <div>
        <form>
      <input type="" name="" placeholder="请输入手机号" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;">
      <input type="" name="" placeholder="请输入短信验证码" style="height:40px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;">
      </form>
      <button class="btn" style="width:355px;
			height:50px;
			background-color: #df2d2d;
			color: white;
			border:0;
			margin-top: 15px;
			margin-left: 10px;
			text-align: center;
			border-radius: 5px;">登录</button>
      </div>
      `,
     
    }

	export default {
		name:'login',
		data(){
			return{
				who:"home",
				isA:false,
			}
		},
		  components:{
          home,
          list,
          
        },
        methods:{
        	handleClick(){
        		this.isA=!this.isA
        	}
        }
	

	}



   
      
     
    

</script>



<!-- <script type="text/javascript">
        //根据屏幕大小及dpi调整缩放和大小
        (function() {
            var scale = 1.0;
            var ratio = 1;
            if (window.devicePixelRatio >= 2) {
                scale *= 0.5;
                ratio *= 2;
            }
            var text = '<meta name="viewport" content="initial-scale=' + scale + ', maximum-scale=' + scale +', minimum-scale=' + scale + ', width=device-width, user-scalable=no" />';
            document.write(text);
            document.documentElement.style.fontSize = 50*ratio + "px";
        })();
    </script>  -->


<style lang="scss" scoped>
	header{
		width:100%;
		height:50px;
		background-color: #df2d2d;
		display: flex;
		
		.icon{
			width:20%;
			height:50px;
			i{
			font-size: 20px;
			line-height: 50px;
			text-align: center;
			display: block;
			color:white	;
			
			}

		}
		.font{
			
			width:80%;
			height:50px;
			h2{
			font-size: 20px;			
			color:#fff;
			line-height: 50px;
			text-align: center;
			
			
			}
		}
		
		
	}
	/*.login2{
		ul{
			display: flex;
			text-align: center;
			li{
				flex:1;
				list-style: none;
				height:35px;
				line-height: 35px;
			}
		}
		form{
			input{
				height:35px;
				width:100%;
				border:0;
				border-bottom: 1px solid #CCC;
				border-top: 1px solid #CCC;
			}
		}
	}*/
	

	
		span a{
			color:#df2d2d;
			display: block;
			width:100%;
			height:100%;
		}
		.rightnow{
			margin-left: 10px;
			margin-top: 10px;
			float: left;
		}
		.findpla{
			float: right;
			margin-right: 10px;
			margin-top:10px; 	
		}
		footer{
			margin-top: 50px;
			text-align: center;
		}
		footer span{
			color: #df2d2d;
		}
	.showform{
		display: block;
	}
	.hiddenform{
		display: none;
	}

	.aa{
		
		border-bottom: 2px solid #df2d2d;
		
		a{
			color: #df2d2d;
		}
	}
	ul{
			display: flex;
			text-align: center;
			li{
				flex:1;
				list-style: none;
				height:40px;
				line-height: 40px;
			}
		}
	
	/*.bounce-enter-active {
     animation: bounce-in .5s;
   }
   .bounce-leave-active {
     animation: bounce-in .5s reverse;
   }
   @keyframes bounce-in {
     0% {
       transform: translateX(100px);
       opacity: 0;
     }
     
     100% {
       transform: translateX(0px);
       opacity: 1;
     }
		}*/
</style>






   
