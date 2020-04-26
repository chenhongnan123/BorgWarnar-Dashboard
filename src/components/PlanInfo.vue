<template>
  <div style="height:100%;" class="plan-info">
      <p class="d-flex justify-space-between sub-title" style="padding-right:.1rem;">
        <span>{{$t(type+"Station.productionPlan")}}</span>
        <span v-if="type === 'assembly'">{{$t(type+"Station.hcm")}}</span>
      </p>
      <div style="position:relative;padding:.2rem;">
        <p>{{$t(type+"Station.planedQuantity")}}</p>
        <h3>{{`${reportData.shiftplannedquantity}/${reportData.dayplannedquantity}`}}</h3>
        <p style="margin-top:.24rem;">{{$t(type+"Station.currentlyQuantity")}}</p>
        <h3>{{reportData.totalproduction}}</h3>
        <p style="margin-top:.24rem;">{{type === "assembly" ? $t("assemblyStation.orderNumber") : $t("testStation.arAlarm")}}</p>
        <h3>{{reportData.ordernumber}}</h3>
        <div v-if="type === 'test'" style="position:absolute;top:1.95rem;right:1.5rem;">
          <p>{{$t("testStation.vfsAlarm")}}</p>
          <h3>892</h3>
        </div>
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
  props:['type','reportData'],
  computed:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .plan-info{
    background: #283B52;
    border-radius: .18rem;
    >p{
      // height: 5vh;
      // background:#37C102;
      // font-size: 40px;
      // line-height: 5vh;
    }
    div{
      p{
        font-size: .18rem;
        line-height: .21rem;
        opacity: 0.7;
        margin-bottom: .1rem;
      }
      >h3{
        font-size: .28rem;
        line-height: .32rem!important;
      }
    }
  }
</style>
