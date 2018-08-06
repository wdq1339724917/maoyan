<template>
	<div>
		<ul>
			<li v-for="data in datalist">
				<h2>{{data.nm}}</h2>
				<h4>{{data.addr}}</h4>
			</li>
		</ul>
	</div>
</template>


<script type="text/javascript">
    import axios from "axios";
	import router from "../router"
	export default{
		name:"cinema",
		data(){
			return{
				datalist:[]
			}
		},
		mounted(){
			axios.get("/ajax/cinemaList?day=2018-08-06&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1533512399172&cityId=65").then(res=>{
				console.log(res.data)
				this.datalist =res.data.cinemas
			})
		}
	}


</script>


<style type="text/css">
	
	div{
			
			width:100%;
			height:100%;
		}
	li{
		border-bottom: 1px solid #ccc;
	}

</style>