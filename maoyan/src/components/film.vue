<template>
	<div>
		<ul>
			<router-link to="/film/location" tag="li" activeClass="active">大连<i class="iconfont icon-moreunfold"></i></router-link>
            <router-link to="/film/nowplaying" tag="li" activeClass="active">正在热映</router-link>
            <router-link to="/film/comingsoon" tag="li" activeClass="active">即将上映</router-link>
            <router-link to="/film/search" tag="li" activeClass="active"><i class="iconfont icon-search"></i></router-link>
        </ul>
		<router-view></router-view>		
	</div>
</template>


<script type="text/javascript">
	import router from "../router"


	export default{
		name:"film",
		data(){
			return{

			}
		},
		
	}


</script>


<style type="text/css" lang="scss" scoped>
	div{

		width:100%;
		height:40px;

		ul{
			z-index: 100;
			width:100%;
			height:40px;
			margin-top:50px;
			display: flex;
			background: #fff;
			border-bottom: 1px solid #ccc;
			position: fixed;
			top:0px;


			li{
				width:25%;
				height:40px;
				text-align: center;
				line-height: 40px;
				color: #a0a0a0;

			}
		}
		.active{
			border-bottom: 2px solid red;
			color:red;
		}
	}

</style>