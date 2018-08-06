<template>
	<div>
		<ul>
			<router-link to="/film" tag="li" activeClass="changColor">
				<i class="iconfont icon-video"></i>
				<!-- <span>电影</span> -->
				电影
			</router-link>
			<router-link to="/cinema" tag="li" activeClass="changColor">
				<i class="iconfont icon-pic"></i>
				<!-- <span>影院</span> -->
				影院
			</router-link>
			<router-link to="/login" tag="li" activeClass="changColor">
				<i class="iconfont icon-account"></i>
				<!-- <span>我的</span> -->
				我的
			</router-link>
		</ul>

	</div>
	
</template>


<script type="text/javascript">
	import router from "../../router"
	export default{
		name:"footerbar",
		data(){
			return{

			}
		},
	}


</script>


<style type="text/css" scoped lang="scss">
	div{
		width:100%;
		height:50px;
		position:fixed;
		bottom:1px;

		ul{

			width:100%;
			height:50px;
			display: flex;
			
			li{
				width:100%;
				height:50px;
				background: #fff;				
				text-align: center;
				i{
					margin-top:5px;
					display: block;
					font-size: 20px;
				}
				span{
					
					display: block;
					margin-top:5px;
					font-size:12px;
					color:#6b6b6b;
				}
			}
		}
		.changColor{
			color: #f03d37;
		}
	
	}

</style>