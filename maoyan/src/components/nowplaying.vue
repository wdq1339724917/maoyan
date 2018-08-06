<template>
	<div class="box">
		<ul>
			<li v-for="data in datalist" @click="toDetail(data.id)" :key="data.id">
				<div class="pic">
					<img :src="data.img" >
				</div>
					<div class="detail-main">
					 	<div class="title">
					 		<span class="nm">{{data.nm}}</span>
						 	<!-- <span class="version">{{data.version}}</span> -->
						 </div>
						<div class="score">
							<span class="scoresuffix" >观众评</span>
							<span class="grade">{{data.sc}}</span>
						</div>	
						<div class="actor">
							<div class="star">主演:{{data.star}}</div>
							<div class="showinfo">{{data.showInfo}}</div>
						</div>
					</div>
					<div class="botton-block">
						<div class="button-normal" @click="handelClick" isShow="!isShow">
							<span class="botton">购买</span>
						</div>
					</div>
			</li>
		</ul>
	</div>
</template>


<script type="text/javascript">
	import axios from "axios"
	import router from "../router"
	export default{
		name:"nowplaying",
		data(){
			return{
				datalist:[],
				
			

			}
		},
		methods:{
			handelClick(){

			},
			toDetail(data){
				router.push(`/detail/${data}`);
			}
		},
		mounted(){
			axios.get('/ajax/movieOnInfoList?token=').then(res=>{
				console.log(res.data)
				this.datalist = res.data.movieList;

				

				for(var i =0;i<this.datalist.length;i++){
					this.datalist[i].img=this.datalist[i].img.slice(0,22)+ "170.230" + this.datalist[i].img.slice(25);

					
				}

			})
		}
	}


</script>


<style type="text/css" scoped lang="scss">
	.box{
		width: 100%;
		margin-top:90px;

		ul{
			width:100%;
			background: #fff;
			li{
				width:100%;
				height:92px;
				display: flex;
				padding:12px 0 12px 0;
				border-bottom: 1px solid rgba(238, 238 ,238 ,.6 );
				.pic{
					width:64px;
					height:90px;
					margin-left:15px;
					img{
						width:64px;
						height:90px;
					}
				}
				.detail-main{
					width:202px;
					height:92px;
					margin-left:15px;
					.title{
						height:24px;
						
						span{
							display:inline-block; 
							line-height: 24px;
							
						}
						.nm{
							font-size: 17px;
							font-weight:bold;

						}
					}
					.score{
						
						height:24px;
						span{
							display:inline-block; 
							line-height: 24px;
						}
						.scoresuffix{
							font-size: 14px;
							line-height: 24px;
							color:#666;
						}
						.grade{
							font-weight: 700;
						    color: #faaf00;
						    font-size: 15px;
						}
					}
					.actor{
						height: 24px;
						div{
							line-height: 24px;
						}
						.star{
							width:202px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							color:#666;

						}
						.showinfo{
							height:24px;
							line-height: 24px;
							color:#666;
						}
					}
					
				}
				.botton-block{
					width:100%;
					height:92px;
					position: relative;

					
						.button-normal{

							width: 47px;
							height: 27px;
							line-height: 28px;
							text-align: center;
							box-sizing: border-box;
							background-color: #f03d37;
							color: #fff;
							border-radius: 4px;
							white-space: nowrap;
							font-size: 12px;
							cursor: pointer;
							position: absolute;
							right:34px;
							top:30px;

							span{
							   
							    width: 47px;
							    height: 27px;
							    line-height: 28px;
							    text-align: center;
							    box-sizing: border-box;
							    background-color: #f03d37;
							    color: #fff;
							    border-radius: 4px;
							    white-space: nowrap;
							    font-size: 12px;
							    cursor: pointer;
							}
						}
						
					}
			}
		}
	}
	

</style>