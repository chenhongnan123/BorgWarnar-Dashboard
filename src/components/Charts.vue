<template>
  <div class="charts" :style="{width: '100%', height: '100%'}">
    <div :style="{width: '100%', height: '100%'}" v-if="show">
        <highcharts :options="data" theme="dark"></highcharts>
        <div class="cicle-sign-container">
          <div v-for="(item,k) in chartsData.series" :key="k">
            <span class="circle cicle-sign" :style="{background:colors[k]}"></span>
            <span  class="cicle-sign cicle-sign-text">{{item.name}}</span>
          </div>
          <!-- <div>
            <span class="circle cicle-sign" style="background:#D0021B"></span>
            <span  class="cicle-sign cicle-sign-text">{{$t("common.abnormal")}}<br/>{{$t("common.production")}}</span>
          </div> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data(){
    return {
      show:true,
      colors: ['#55D802', '#FFA100', '#FF3800', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
      data:{
        chart: {
          type: 'column',
          height:'22%',
        },
        title: {
          text: '',
        },
        subtitle: {
          text: ''
        },
        xAxis: {
        },
        yAxis: {
          title: {
            style:{
              color:'#fff',
            },
            text:'',
          },
          gridLineColor: 'rgba(255,255,255,.1)'
        },
        
        // series: [{
        //     name: '东京',
        //     data: [7.0, 6.9, 9.5, 14.5]
        // }, {
        //     name: '伦敦',
        //     data: [3.9, 4.2, 5.7, 8.5]
        // }],
      }
    }
  },
  props:{
    chartsData:{
      type:Object,
      required:false
    },
    index:{
      type:Number,
      required:false
    },
  },
  components:{
  },
  watch:{
    chartsData:{
      handler(newVal,oldVal){
        this.show = true;
        this.data.xAxis = newVal.xData;
        this.data.yAxis = {
          ...this.data.yAxis,
          ...newVal.yAxis
        }
        // this.data.yAxis = {...this.data.yAxis,...newVal.yAxis};
        this.data.series = newVal.series;
        this.data.chart = {
          ...this.data.chart,
          ...newVal.chart,
        }
        // this.data.legend.data =  newVal.title;
        // this.data.title.text =  newVal.title;
      },
      deep:true,
      immediate: true,
    }
    
  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .charts{
    position: relative;
  }
  .echarts{
    width: 100%;
    height: 100%;
  }
  .cicle-sign-container{
    position: absolute;
    top: 50%;
    left: 11rem;
    transform: translateY(-50%);
    >div{
      margin-bottom: .2rem;
    }
  }
  .circle{
    width:.2rem;
    height:.2rem;
    background:#37C102;
    border-radius:50%;
    top:0;
  }
  .cicle-sign{
    display: inline-block;
    vertical-align: middle;
  }
  .cicle-sign-text{
    font-size: .1rem;
    line-height: .11rem;
    margin-left: .2rem;
  }
</style>
