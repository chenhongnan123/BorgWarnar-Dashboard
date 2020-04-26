<template>
  <div style="height:100%;" class="line-status">
      <div class="sub-title">
        <span>{{$t(type+"Station.avgCt")}}</span>
        <div class="time-moudle-container"><TimeMoudle :languangeG="languangeG" :shift="reportData.shift" /></div>
      </div>
    <div>
      <div style="margin-top:.2rem;">
        <Charts :chartsData = 'chartsData'/>
      </div>
    </div>
  </div>
</template>

<script>
import TimeMoudle from './TimeMoudle';
import Charts from './Charts';
import {  mapState,mapMutations } from 'vuex';
export default {
  name: 'LineStatus',
  data(){
    return {
      chartsData:{
        // type:'column',
        xData:{
          categories: ['T1', 'T2', 'T3', 'T4', 'T5',],
        },
        series: [{
            name: 'CT',
            showInLegend:false,
            data: [70, 69, 95, 14.5]
        }],
        yAxis:{
          plotLines: [{
            value: 90,
            color: '#FFA100',
            width: 2*count,
            zIndex:100,
            label: {
                text: 'IDEAL CT: 90',
                align: 'center',
                style: {
                    color: '#fff',
                    fontSize:20*count
                }
            }
          }]
        }
        
      }
    }
  },
  props:['type','reportData'],
  mounted(){
    // this.chartsData = {...this.chartsData}
  },
  components:{
    TimeMoudle,Charts
  },
  computed:{
    ...mapState({
      languangeG: state => state.common.languangeG
    }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .line-status{
    background: #283B52;
    border-radius: .18rem;
    .sub-title{
      position: relative;
      .time-moudle-container{
        width:50%;
        height:100%;
        position:absolute;
        top:0;
        right:0;
        transform:scale(.9);
      }
    }
  }
</style>
