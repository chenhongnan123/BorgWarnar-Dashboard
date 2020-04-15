<template>
  <div style="height:100%;" class="line-status">
      <div class="sub-title pl-5">
        <span>{{$t(type+"Station.avgCt")}}</span>
        <div class="time-moudle-container"><TimeMoudle/></div>
      </div>
    <div>
      <div class="mt-4">
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
          categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        },
        series: [{
            name: '东京',
            data: [7.0, 6.9, 9.5, 14.5]
        }],
        yAxis:{
          plotLines: [{
            value: 15,
            color: '#FFA100',
            width: 2,
            label: {
                text: 'IDEAL CT: 15',
                align: 'center',
                style: {
                    color: '#fff',
                    fontSize:20
                }
            }
          }]
        }
        
      }
    }
  },
  props:['type'],
  mounted(){
    this.chartsData = {...this.chartsData}
  },
  components:{
    TimeMoudle,Charts
  },
  computed:{
    ...mapState({
      title: state => state.common.title,
      isAutoRunning: state => state.common.isAutoRunning,
    })
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .line-status{
    background: #283B52;
    border-radius: 18px;
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
