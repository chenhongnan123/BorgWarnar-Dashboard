<template>
  <div class="charts">
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import {  mapState, mapMutations ,mapActions } from 'vuex';
export default {
  name: 'charts',
  components:{
    Carousel
  },
  methods:{
    ...mapMutations({
      setTitle: 'common/SET_TITLE',
    }),
    ...mapActions({
      getAssemblyReportData: 'assemblyStation/GET_ASSEMBLYREPORTDATA',
      getTestReportData: 'testStation/GET_TESTREPORTDATA',
    }),
  },
  created(){
    this.setTitle(this.$t("assemblyStation.title"));
    this.getAssemblyReportData();
    this.getTestReportData();
    setInterval(()=>{
      this.getAssemblyReportData();
      this.getTestReportData();
    },3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .charts{
    height:100%;
    background-color: #13253C;
  }
</style>
