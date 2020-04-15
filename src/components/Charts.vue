<template>
  <div class="charts" :style="{width: '100%', height: '100%'}">
    <div :style="{width: '100%', height: '100%'}" v-if="show">
        <highcharts :options="data" theme="dark"></highcharts>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts',
  data(){
    return {
      show:true,
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
      // immediate: true,
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
</style>
