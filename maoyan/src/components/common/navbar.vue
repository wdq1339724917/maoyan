<template>
	<div>
		<div>
			<h2>猫眼电影</h2>
		</div>
	</div>
</template>


<script type="text/javascript">
	import router from "../../router"
	export default{
		name:"navbar",
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
		background:#e54847;
		
		div{
			z-index: 100;
			width:100%;
			height:50px;
			position: fixed;
			top:0;
		}
		h2{

			width:100%;
			height: 50px;
			font-size: 20px;
			line-height: 50px;
			color:#fff;
			text-align: center;
			
	}
	}
	 

</style>


