<template>
  <div class="carousel">
    <v-carousel
      :cycle="false"
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="!isAutoRun"
      dark
      v-model="index"
    >
      <v-carousel-item >
        <AssemblyStation/>
      </v-carousel-item>
      <v-carousel-item >
        <TestStation/>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Charts from './Charts';
import AssemblyStation from './AssemblyStation';
import TestStation from './TestStation';
import { mapState, mapMutations ,mapActions } from 'vuex';
export default {
  name: 'charts',
  data(){
    return {
      carouselItemNum:0,
      isAutoRun:false,
      timeout:null,
      interval:1000,
      index:0
    }
  },
  mounted(){
  },
  components:{
    Charts,AssemblyStation,TestStation
  },
  watch:{
    reportData(data){
      clearTimeout(this.timeout);
      this.carouselItemNum = Math.ceil(data.length/9);
      this.timeout = setTimeout(()=>{
        this.interval = 2000
      },2000);
    },
    index(val){
      console.log(val);
      val ? this.setTitle(this.$t("testStation.title")) : this.setTitle(this.$t("assemblyStation.title"));
    }
  },
  computed:{
    ...mapState({
      reportData: state => state.dashboard.reportData,
      // isAutoRunning: state => state.common.reportData,
    }),
  },
  methods:{
    ...mapActions({
      getReportData: 'dashboard/GET_REPORTDATA',
    }),
    ...mapMutations({
      setAutoRun: 'common/SET_AUTORUN',
      setTitle:'common/SET_TITLE'
    }),
    setAuto(){
      this.isAutoRun = false;
      this.setAutoRun(false);
      clearTimeout(this.timeout)
      this.timeout = setTimeout(()=>{
        this.isAutoRun = true;
        this.setAutoRun(true);
      },20000);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .carousel{
    height:100%;
    position:relative;
    color: #fff;
    .v-window-item{
      padding: 10px 20px;
    }
    .v-window__next{
      right: 0;
    }
  }
  
    
</style>
