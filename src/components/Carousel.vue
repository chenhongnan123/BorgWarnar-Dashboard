<template>
  <div class="carousel" @click="setAuto">
    <v-carousel
      :cycle="isAutoRun"
      height="100%"
      hide-delimiter-background
      show-arrows-on-hover
      :show-arrows="!isAutoRun"
      :interval="interval"
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
      isAutoRun:true,
      timeout:null,
      interval:4000,
      index:0
    }
  },
  mounted(){
  },
  components:{
    Charts,AssemblyStation,TestStation
  },
  watch:{
    index(val){
      console.log(val);
      val ? this.setTitle(this.$t("testStation.title")) : this.setTitle(this.$t("assemblyStation.title"));
    }
  },
  computed:{
    ...mapState({
    }),
  },
  methods:{
    ...mapActions({
    }),
    ...mapMutations({
      setAutoRun: 'common/SET_AUTORUN',
      setTitle:'common/SET_TITLE'
    }),
    setAuto(){
      // console.log(111)
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
      padding: .1rem .2rem;
    }
    .v-window__next{
      right: 0;
    }
  }
  
    
</style>
