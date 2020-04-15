<template>
  <div class="charts">
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import {  mapMutations } from 'vuex';
export default {
  name: 'charts',
  components:{
    Carousel
  },
  methods:{
    ...mapMutations({
      setTitle: 'common/SET_TITLE',
    }),
  },
  created(){
    // this.setTitle('KPI Report');
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
