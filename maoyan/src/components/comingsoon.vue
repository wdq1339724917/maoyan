<template>
	<div>
		<p>
			近期最受期待
		</p>
		<div class="lb">
			<div class="zzc"></div>
			<ul>
				<li v-for="data in datalist" @click="toDetail(data.id)" :key="data.id">
					<img :src="data.img"/>
					<span>{{data.wish}}人想看</span>
					<h5>{{data.nm}}</h5>
					<h6>{{data.comingTitle}}</h6>
				</li>
			</ul>
		</div>
		<div class="two">
			<ul>
				<li v-for="data in datalista" @click="toDetail(data.id)" :key="data.id">
					<img :src="data.img"/>
					<ul class="xlb">
						<li class="boa">{{data.nm}}</li>
						<li class="bob">点映评<span>{{data.sc}}</span></li>
						<li class="boc">主演：{{data.star}}</li>
						<li class="bod">{{data.rt}}上映</li>
					</ul>
					<div class="ys">预售</div>
				</li>
			</ul>
		</div>
	</div>
</template>


<script type="text/javascript">
	
	import axios from "axios";
	import router from "../router"
	export default{
		name:"comingsoon",
		data(){
			return{
				datalist:[],
				 datalista:[]
			}
		},
		methods:{

			toDetail(data){
				router.push(`/detail/${data}`);
			}

		},
		mounted(){
			axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(
				res=>{
					//console.log(res.data)
					this.datalist =res.data.coming



					for (var i = 0; i < this.datalist.length; i++) {
						this.datalist[i].img =this.datalist[i].img.slice(0,22) + "170.230"+this.datalist[i].img.slice(25)
						//console.log(pic)
					

					};
				}),





			axios.get("/ajax/comingList?ci=65&token=&limit=10").then(
				res=>{
					console.log(res.data);
					this.datalista =res.data.coming



					for (var i = 0; i < this.datalista.length; i++) {
						this.datalista[i].img =this.datalista[i].img.slice(0,22) + "170.230"+this.datalista[i].img.slice(25)
						//console.log(pic)
					

					}
				})

			}

		}
	

</script>


<style type="text/css" scoped lang="scss">
	

	div{

			width: 100%;
			height: 100%;
			background: #f8f8f8;
			p{
				margin-top: 100px;
			}
			.lb{
				/* width: 980px; */
				/* height: 216px; */
				/* width: 100%;
				height: 100%; */
				height: 17px;
				margin-top: 10px;
				position: relative;
				.zzc{
					background: #f8f8f8;
					height: 27px;
					position: absolute;
					top: 151px;
					z-index: 10;
			}
				/* height: 157px; */
				ul{/* width: 980px; 
					 height: 216px; */
					/* width: 100%;
					height: 100%; */
					margin-top: 10px;
					overflow: auto;
					display: flex;
					padding-bottom: 20px;
					border-bottom:10px solid #ccc;
					
					li{
						float: left;
						list-style: none;
						width: 95px;
						height: 157px;
						position: relative;
						/* overflow:auto; */
						margin-left: 15px;
						img{
							width: 85px;
							height: 115px;
						}
						span{
							display:block;
							width: 95px;
							font-size: 11px;
							color:#e7a201;
							position: absolute;
							top: 100px;
							font-weight: bold;
						}
						h5{
							width: 85px;
							height: 17px;
							color: #000;
							font-size: 13px;
							white-space: nowrap;
							overflow: hidden;
							text-overflow:ellipsis;
						}
						h6{
							width: 60px;
							height: 16px;
							color:#999;
							font-size: 12px;
							overflow: hidden;
						}
						
					}
				}

			}
			.two{
				margin-top: 185px;
				ul{
					li{
						display: flex;
						width: 350px;
						height: 114px;
						margin: auto;
						border-bottom: 1px solid #ccc;
						img{
							width: 64px;
							height: 90px;
							margin: 12px;
							margin-left: 0;
						}
						.xlb{
							width: 202px;
							height: 88px;
							.boa{
								width: 202px;
								height: 24px;
								font-size: 17px;
								font-weight: bold;
								margin-top: 12px;
								border-bottom: 0;
							}
							.bob{
								width: 202px;
								height: 17px;
								color: #666666;
								border-bottom: 0;
								span{
									color:#faaf00;
									font-size: 15px;
									display: inline-block;
									margin-left: 5px;
								}
							}
							.boc{
								display: inline-block;
								width: 202px;
								height: 15px;
								font-size: 12px;
								white-space: nowrap;
								overflow: hidden;
								text-overflow:ellipsis;
								color: #2e2e2e;
								border-bottom: 0;
							}
							.bod{
								width: 202px;
								height: 15px;
								font-size: 13px;
								color: #666;
								border-bottom: 0;
							}

						}
						.ys{
							display: inline-block;
							width: 47px;
							height: 27px;
							background: #3c9fe6;
							border-radius: 4px;
							color: #fff;
							font-size: 12px;
							line-height: 27px;
							text-align: center;
							margin: auto 0;
							border-bottom: 1px solid #ccc;
						}
					}
				}
			}

		}
		



</style>

