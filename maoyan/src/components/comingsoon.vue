<template>
	<div>
		<div class="zzc"></div>
		<p>
			近期最受期待
		</p>
		<div class="lb">
			
			<ul>
				<li v-for="data in datalist">
					<img :src="data.img"/>
					<span>{{data.wish}}人想看</span>
					<h5>{{data.nm}}</h5>
					<h6>{{data.comingTitle}}</h6>
				</li>
			</ul>
		</div>
		<!-- <div>
			<ul v-for="data in datalista">
				<li>
					<img :src=""/>
				</li>
			</ul>
		</div> -->
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
					console.log(res.data)
					this.datalista =res.data.coming



					for (var i = 0; i < this.datalista.length; i++) {
						this.datalista[i].img =this.datalista[i].img.slice(0,22) + "170.230"+this.datalista[i].img.slice(25)
						//console.log(pic)
					

					};
				})

			}

		}
	

</script>


<style type="text/css" scoped lang="scss">
	
	div{
			width: 100%;
			height: 100%;
			background: #fff;
			p{
				margin-top: 20px;
			}
			.zzc{
				background: #fff;
				height: 5px;
				position: fixed;
				top: 243px;
				z-index: 10;
			}
			.lb{
				/* width: 980px; */
				/* height: 216px; */
				/* width: 100%;
				height: 100%; */
				height: 17px;
				margin-top: 10px;
				/* height: 157px; */
				ul{/* width: 980px; 
					 height: 216px; */
					/* width: 100%;
					height: 100%; */
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
		}

</style>