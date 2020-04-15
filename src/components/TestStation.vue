<template>
  <div style="height:100%;" >
    <v-row  no-gutters style="height:320px;">
        <v-col cols='4' class="pr-2"  style="height:320px;">
          <Production :type="'test'"/>
        </v-col>
        <v-col cols='8'  style="height:320px;">
          <LineStatus type='test'/>
        </v-col>
    </v-row>
    <v-row  no-gutters style="height:320px;" class="mt-2">
        <v-col cols='4' class="pr-2">
          <PlanInfo type='test'/>
        </v-col>
        <v-col cols='8' style="height:320px;background:#283B52;border-radius:18px;">
          <div>
            <p  class="sub-title pl-5">{{$t("testStation.quantityTrend")}}</p>
            <div  style="height:20vh" class="pt-4">
              <Charts :chartsData = 'chartsData'/>
            </div>
          </div>
        </v-col>
    </v-row>
    <div  style="height:320px;background:#283B52;border-radius:18px;position:relative;" class="mt-2">
      <p class="sub-title pl-5">{{$t("testStation.lineStatus")}}</p>
      <div  class="line-sign">
        <img src="../assets/line.png"  style="height:100%">
        <p 
        v-for="(item,key) in lineStatusList" 
        :key="key" 
        :style="{background:item.type?'#37C102':'#D0021B',top:item.top,left:item.left,position:'absolute'}" 
        class="circle">
          <span>{{item.name}}<br/>{{item.type ? "NORMAL" : "ABNORMAL"}}</span>
        </p>
      </div>
      <div class="cicle-sign-container">
         <div>
          <span class="circle cicle-sign"></span>
          <span  class="cicle-sign cicle-sign-text">{{$t("common.normal")}}<br/>{{$t("common.production")}}</span>
        </div>
        <div>
          <span class="circle cicle-sign" style="background:#D0021B"></span>
          <span  class="cicle-sign cicle-sign-text">{{$t("common.abnormal")}}<br/>{{$t("common.production")}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState,mapMutations } from 'vuex';
import Production from './Production';
import LineStatus from './LineStatus';
import PlanInfo from './PlanInfo';
import Charts from './Charts';

export default {
  name: 'TestStation',
  data(){
    return {
      chartsData:{
        chart:{
          type:'area',
          // height:'17%'
        },
        xData:{
          categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        },
        series: [{
            name: '东京',
            data: [7.0, 6.9, 9.5, 14.5]
        }, {
            name: '伦敦',
            data: [3.9, 4.2, 5.7, 8.5]
        }],
      },
      lineStatusList:[
        {name:'10.1',type:1,top:'23%',left:'1%'},
        {name:'20.1',type:0,top:'23%',left:'7.5%'},
        {name:'20.2',type:0,top:'23%',left:'10.5%'},
        {name:'40.1',type:1,top:'23%',left:'13%'},
        {name:'40.2',type:1,top:'23%',left:'15%'},
        {name:'40.3',type:1,top:'23%',left:'17%'},
        {name:'40.4',type:0,top:'23%',left:'19.5%'},
        {name:'60.1',type:0,top:'23%',left:'22.5%'},
        {name:'60.2',type:1,top:'23%',left:'25%'},
        {name:'60.3',type:1,top:'23%',left:'27.5%'},
      ]
    }
  },
  components:{
    Production,LineStatus,PlanInfo,Charts
  },
  mounted(){
    this.chartsData = {...this.chartsData}
  },
  computed:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .line-sign{
    position:relative;
    text-align: center;
    height: 276px;
    >img{
      height: 100%;
    }
    .circle:hover{
      background: #fff!important;
      >span{
        display: block;
      }
    }
  }
  .cicle-sign-container{
    position: absolute;
    top: 115px;
    right: 32px;
    >div{
      margin-bottom: 50px;
    }
  }
  .circle{
    width:40px;
    height:40px;
    background:#37C102;
    
    border-radius:50%;
    top:0;
    >span{
      position: absolute;
      width: 200px;
      height: 120px;
      display: none;
      color: #000;
      font-size: 20px;
      background: #fff;
      top: -120px;
      left: -50px;
      text-align: center;
    }
  }
  .cicle-sign{
    display: inline-block;
    vertical-align: middle;
  }
  .cicle-sign-text{
    font-size: 20px;
    line-height: 22px;
    margin-left: 20px;
  }
</style>
