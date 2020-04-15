<template>
  <div style="height:100%;" class="plan-info">
      <p class="d-flex justify-space-between px-4 sub-title">
        <span>{{$t(type+"Station.productionPlan")}}</span>
        <span v-if="type === 'assembly'">{{$t(type+"Station.hcm")}}</span>
      </p>
      <div  class="pa-5">
        <p>{{$t(type+"Station.planedQuantity")}}</p>
        <h3>1000/2000</h3>
        <p class="mt-6">{{$t(type+"Station.currentlyQuantity")}}</p>
        <h3>892</h3>
        <p class="mt-6">{{type === "assembly" ? $t("assemblyStation.orderNumber") : $t("testStation.arAlarm")}}</p>
        <h3>XXX980</h3>
      </div>
  </div>
</template>

<script>
import {  mapState,mapMutations } from 'vuex';
export default {
  name: 'Production',
  data(){
    return {
    }
  },
  props:['type'],
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
  .plan-info{
    background: #283B52;
    border-radius: 18px;
    >p{
      // height: 5vh;
      // background:#37C102;
      // font-size: 40px;
      // line-height: 5vh;
    }
    >div{
      p{
        font-size: 18px;
        line-height: 21px;
        opacity: 0.7;
        margin-bottom: 10px;
      }
      >h3{
        font-size: 28px;
        line-height: 32px!important;
      }
    }
  }
</style>
