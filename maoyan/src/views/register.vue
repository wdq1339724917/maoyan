<template>
	<div>
		<header>
			<div class="icon"><i class="iconfont icon-back"></i></div>
			<div class="font"><h2>猫眼电影</h2></div>
		</header>

		


	</div>



</template>


<script type="text/javascript">
	export default {
		name:'register',
		data(){
			return{

			}
		},
	}



</script>


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
			color: white
			
			
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



</style>