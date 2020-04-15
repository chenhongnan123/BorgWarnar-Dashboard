<template>
  <header>
    <img src="../assets/customerLogo.png" style="height:50px;"/>
    <h2>{{title}}</h2>
    <img src="../assets/shopworx.png" style="height:100%;"/>
  </header>
</template>

<script>
import {  mapState,mapMutations } from 'vuex';
export default {
  name: 'charts',
  computed:{
    ...mapState({
      title: state => state.common.title,
      isAutoRunning: state => state.common.isAutoRunning,
    })
  },
  mounted(){
    // console.log(this.$i18n.locale)
    // this.$i18n.locale = 'zh'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
    position: fixed;
    width: 100%;
    height: 80px;
    background: #fff;
    top: 0;
    color: rgba(0, 0, 0,.7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    line-height:80px;
    h2{
      font-size: 36px;
      color: rgba(0,0,0,0.87);
    }
  }
</style>
