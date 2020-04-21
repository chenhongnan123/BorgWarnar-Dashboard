<template>
  <div style="height:100%;" >
    <v-row  no-gutters style="height:3.2rem;">
        <v-col cols='4' style="height:3.2rem;padding-right:.1rem;">
          <Production type='assembly'/>
        </v-col>
        <v-col cols='8'  style="height:3.2rem;">
          <LineStatus type='assembly'/>
        </v-col>
    </v-row>
    <v-row  no-gutters style="height:3.2rem;margin-top:.1rem;">
        <v-col cols='4'  style="padding-right:.1rem;">
          <PlanInfo type='assembly'/>
        </v-col>
        <v-col cols='8' style="height:3.2rem;background:#283B52;border-radius:.18rem;">
          <div>
            <p  class="sub-title">{{$t("assemblyStation.quantityTrend")}}</p>
            <div style="padding-top:.1rem;">
              <Charts :chartsData = 'chartsData'/>
            </div>
          </div>
        </v-col>
    </v-row>
    <div  style="height:3.2rem;background:#283B52;border-radius:.18rem;position:relative;margin-top:.1rem;">
      <p class="sub-title">{{$t("assemblyStation.lineStatus")}}</p>
      <div  class="line-sign">
        <img src="../assets/line.png"  style="height:100%">
        <p 
        v-for="(item,key) in lineStatusList" 
        :key="key" 
        :style="{background:item.type?'#37C102':'#D0021B',top:item.top,left:item.left,position:'absolute'}" 
        class="circle">
          <!-- <span>{{item.name}}<br/>{{item.type ? "NORMAL" : "ABNORMAL"}}</span> -->
          <span>{{item.name}}</span>
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
  name: 'AssemblyStation',
  data(){
    return {
      chartsData:{
        chart:{
          type:'area',
          // height:'17%'
        },
        xData:{
          categories: ['13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00',],
        },
        series: [{
            name: 'PRODUCED',
            data: [70, 69, 95, 145]
        }, {
            name: 'REALISTIC',
            data: [39, 42, 57, 85]
        }, {
            name: 'IDEAL CT',
            data: [23, 32, 47, 65]
        }],
      },
      lineStatusList:[
        {name:'10.1',type:1,top:'23%',left:'20%'},
        {name:'20.1',type:0,top:'23%',left:'25%'},
        {name:'20.2',type:0,top:'23%',left:'28.5%'},
        {name:'40.1',type:1,top:'23%',left:'32%'},
        {name:'40.2',type:1,top:'23%',left:'34%'},
        {name:'40.3',type:1,top:'23%',left:'36%'},
        {name:'40.4',type:0,top:'23%',left:'38.5%'},
        {name:'60.1',type:0,top:'23%',left:'41%'},
        {name:'60.2',type:1,top:'23%',left:'44%'},
        {name:'60.3',type:1,top:'23%',left:'46.5%'},
        {name:'70.1',type:1,top:'23%',left:'49%'},
        {name:'70.2',type:1,top:'23%',left:'52.5%'},
        {name:'70.3',type:1,top:'23%',left:'55%'},
        {name:'70.4',type:1,top:'23%',left:'57%'},
        {name:'70.5',type:1,top:'23%',left:'60%'},
        {name:'75.1',type:1,top:'23%',left:'62%'},
        {name:'80.5',type:1,top:'23%',left:'65%'},
        {name:'30.1',type:1,top:'66%',left:'20%'},
        {name:'30.2',type:1,top:'66%',left:'24%'},
      ]
    }
  },
  components:{
    Production,LineStatus,PlanInfo,Charts
  },
  mounted(){
    // this.chartsData = {...this.chartsData}
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
    height: 2.76rem;
    >img{
      height: 100%;
    }
    // .circle:hover{
    //   background: #fff!important;
    //   >span{
    //     display: block;
    //   }
    // }
  }
  .cicle-sign-container{
    position: absolute;
    top: 1.15rem;
    right: .32rem;
    >div{
      margin-bottom: .5rem;
    }
  }
  .circle{
    width:.4rem;
    height:.4rem;
    background:#37C102;
    
    border-radius:50%;
    top:0;
    >span{
      position: absolute;
      width: 100%;
      height:100%;
      // display: none;
      // color: #000;
      font-size: .15rem;
      // background: #fff;
      top: 0.1rem;
      left: 0rem;
      text-align: center;
      border-radius: .18rem;
      z-index: 100;
    }
  }
  .cicle-sign{
    display: inline-block;
    vertical-align: middle;
  }
  .cicle-sign-text{
    font-size: .2rem;
    line-height: .22rem;
    margin-left: .2rem;
  }
</style>
