/*
  請求地址:http://wthrcdn.etouch.cn/weather_mini
  請求方法:get
  請求参数:city(城市名)
  響應内容:天氣信息

  1. 點擊回車
  2. 查詢數據
  3. 渲染數據
  */
 
var app = new Vue({
    el:"#app",
    data:{
        city:"",
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            console.log("天氣查詢: "+ this.city);
            // 調用接口
            // 保存this
            var that = this;
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city="
            +this.city)
            .then(function(response){
                //console.log(response);
                console.log(response.data.data.forecast);
                that.weatherList = response.data.data.forecast;
            })
            .catch(function(err){

            })
        },
        changeCity:function(city){
            this.city = city;
            this.searchWeather();
        }
    }
})