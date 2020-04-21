<template>
  <div style="height:100%;" class="production">
      <p class="d-flex justify-space-between" style="padding:0 .16rem;">
        <span>{{$t("common.production")}}</span>
        <span>RUNNING</span>
      </p>
      <v-row justify="space-between" style="padding:.12rem 0 0 .16rem;">
        <v-col cols="6">
          <p>{{$t("common.availability")}}</p>
          <h3>98.32%</h3>
          <p style="margin-top:.28rem;">{{$t("common.performance")}}</p>
          <h3>85.77%</h3>
          <p style="margin-top:.2rem;">{{$t("common.quantity")}}</p>
          <h3>80.49%</h3>
        </v-col>
        <v-col cols="6">
          <p>{{$t("common.operator")}}</p>
          <h3>Li Wei</h3>
          <v-row style="margin-top:.2rem;">
            <v-col cols="2">
               <p>{{$t("common.oee")}}</p>
            </v-col>
            <v-col  cols="10">
              <v-progress-circular
                :rotate="-90"
                :size="150*count"
                :width="22*count"
                :value="75"
                color="#FF3800"
              >
              <div style="width:1rem;color:#fff;font-size:.34rem;word-wrap: break-word;text-align: center;line-height: .4rem;">{{ 75.2+'%' }}</div>
              </v-progress-circular>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import {  mapState,mapMutations } from 'vuex';
export default {
  name: 'Production',
  data(){
    return {
      count:document.documentElement.clientWidth/1920
    }
  },
  props:['type'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .production{
    background: #283B52;
    border-radius: .18rem;
    >p{
      height: .44rem;
      background:#37C102;
      border-radius: .08rem;
      font-size: .2rem;
      line-height: .44rem;
    }
    >.row{
      >.col{
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
  }
</style>
