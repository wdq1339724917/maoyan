<template>
	<div class="box">
		
		<div class="filmtitle" :style="{backgroundImage: 'url(' + detaillist.img + ')'}">
			<div class="hyaline">
				<div class="filmimg">
					<img :src="detaillist.img">
				</div>
				<div class="filmflex">
					<div class="nm">{{detaillist.nm}}</div>
					<div class="enm">{{detaillist.enm}}</div>
					<span class="sc">{{detaillist.sc}}</span>
					<span class="snum">({{detaillist.snum}}人评)</span>
					<div class="cat">{{detaillist.cat}}</div>
					<div class="dur">{{detaillist.src}}/{{detaillist.dur}}分钟</div>
					<div class="pubDesc">{{detaillist.pubDesc}}</div>
				</div>
				<div class="iconfont icon-more"></div>
			</div>
		</div>	

		<div class="showDays">
			<ul class="date">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="table">
			<div class="region"></div>
			<div class="brand"></div>
			<div class="special"></div>
		</div>
		<div class="location">
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
	

</template>


<script type="text/javascript">
	import router from "../router"
	import axios from "axios"

	export default{
		name:"detail",
		data(){
			return{
				detaillist:[],
			}
		},
		mounted(){
			axios.get(`/ajax/detailmovie?movieId=${this.$route.params.id}`).then(res=>{
				
				this.detaillist = res.data.detailMovie;
					console.log(this.detaillist);
				
				/*for(var i in this.detaillist){
					i.img=i.img.slice(0,22)+ "170.230" + i.img.slice(25);
				console.log(i);
				};
					*/
					this.detaillist.img = this.detaillist.img.substr(0,22)+"170.230" +this.detaillist.img.substr(25)
			})
		},
	}


</script>


<style type="text/css" lang="scss">
	div{
		width:100%;

		.filmtitle{
			width:100%;
			height:188px;
			margin-top:50px;
			position: relative;
			background-repeat: no-repeat;
			background-size: 100%;
			.filmtitle:after{
			    content: "";
			    width:100%;
			    height:100%;
			    position: absolute;
			    left:0;
			    top:0;
			    background: inherit;
			    filter: blur(5px);
			    
			}

			.hyaline{
				display: block;
				width:100%;
				height:188px;
				position: absolute;
				background: rgba(50,50,50,.9);
				display: flex;
				

				.filmimg{
					width:100px;
					height:150px;
					padding: 19px 0 19px 15px;
					img{
						width:110px;
						height:150px;

					}
				}
				.filmflex{
					width:100%;
					height:150px;
					padding: 19px 30px 19px 0;
					margin-left:19px;
					position: relative;
					.nm{
						font-size: 20px;
						color:#fff;
						margin-top: 2px;
    					font-weight: 700;
					}
					.enm{
						margin-top: 10px;
					    font-size: 12px;
					    color: #fff;
					    opacity: .8;
					}
					.sc{
						font-size: 18px;
					    font-weight: 700;
					    color: #fc0;
					    margin-top: 11px;
					}
					.snum{
						margin-top: 10px;
					    font-size: 12px;
					    color: #fff;
					    opacity: .8;
					}
					.cat{

						font-size: 12px;
						color: #fff;
						opacity: .8;
						margin-top:5px;
					}
					.dur{
						margin-top: 10px;
						font-size: 12px;
						color: #fff;
						opacity: .8;
					}
					.pubDesc{
						margin-top: 10px;
						font-size: 12px;
						color: #fff;
						opacity: .8;
					}
				}
				.iconfont{
					width:70px;
					position: absolute;
					right:-30px;
					top:40%;
					color:#fff;
					font-size: 30px;

				}
			}
			
		}
		.showDays{
			width: 100%;
			height:43px;
			background:blue;
		}
		.table{
			width:100%;
			height:40px;
			background:red;
		}
	}
	

</style>