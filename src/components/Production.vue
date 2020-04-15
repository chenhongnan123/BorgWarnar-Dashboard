<template>
  <div style="height:100%;" class="production">
      <p class="d-flex justify-space-between px-4">
        <span>{{$t("common.production")}}</span>
        <span>RUNNING</span>
      </p>
      <v-row justify="space-between" class="pt-3 pl-4">
        <v-col cols="6">
          <p>{{$t("common.availability")}}</p>
          <h3>98.32%</h3>
          <p class="mt-7">{{$t("common.performance")}}</p>
          <h3>85.77%</h3>
          <p class="mt-5">{{$t("common.quantity")}}</p>
          <h3>80.49%</h3>
        </v-col>
        <v-col cols="6">
          <p>{{$t("common.operator")}}</p>
          <h3>Li Wei</h3>
          <v-row class="mt-5">
            <v-col cols="2">
               <p>{{$t("common.oee")}}</p>
            </v-col>
            <v-col  cols="10">
              <v-progress-circular
                :rotate="-90"
                :size="140"
                :width="22"
                :value="75"
                color="#FF3800"
              >
              <div style="width:100px;color:#fff;font-size:34px;word-wrap: break-word;text-align: center;line-height: 40px;">{{ 75.23+'%' }}</div>
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
  .production{
    background: #283B52;
    border-radius: 18px;
    >p{
      height: 44px;
      background:#37C102;
      border-radius: 8px;
      font-size: 20px;
      line-height: 44px;
    }
    >.row{
      >.col{
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
  }
</style>
