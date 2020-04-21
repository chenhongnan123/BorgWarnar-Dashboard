<template>
  <div style="height:100%;" class="time-moudle">
    <v-row  class="text-center">
      <v-col cols="6" >
        <span>{{dateTime}}</span>
      </v-col>
      <v-col cols="3">
        <span>Shift1</span>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="languange"
          :items="languangeItems"
          item-text="name"
          item-value="id"
          label="Select languange"
          solo
          height=".4rem"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapMutations ,mapState } from 'vuex';
export default {
  name: 'TimeMoudle',
  data(){
    return {
      dateTime:null,
      languange:'',
      languangeItems: [{
        name:"中文",
        id:"zh"
      },{
        name:"English",
        id:"en"
      }],
    }
  },
  props:['languangeG'],
  mounted(){
    this.languange = this.languangeG;
    setInterval(()=>{
      this.dateTime = this.getDateTime();
    },1000);
  },
  computed:{
    // ...mapState({
    //   languangeG: state => state.common.languangeG
    // }),
  },
  methods:{
    getDateTime(dateNum){
      const dateObj = new Date(dateNum||new Date().getTime());
      const monthList = ['January','February','March','April','May','June','July','August','September','October','November','December',]
      // return this.addZero(dateObj.getFullYear())+"-"+this.addZero((dateObj.getMonth()+1))+"-"+this.addZero(dateObj.getDate())+" "+this.addZero(dateObj.getHours())+":"+this.addZero(dateObj.getMinutes())+":"+this.addZero(dateObj.getSeconds());
      
      return this.addZero(dateObj.getDate())+" "+monthList[dateObj.getMonth()]+", "+this.addZero(dateObj.getFullYear())+" "+this.addZero(dateObj.getHours())+":"+this.addZero(dateObj.getMinutes())+":"+this.addZero(dateObj.getSeconds());
    },
    addZero(num){
      return num.toString().length == 1 ? "0" + num : num;
    },
    ...mapMutations({
      setLanguange: 'common/SET_LANGUANGE',
    }),
  },
  watch:{
    languange(val){
      this.$i18n.locale = val;
      this.setLanguange(val)
    },
    languangeG(val){
      this.languange = val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .time-moudle{
    .text-center{
      >.col{
        opacity: 0.7;
        background: #0E1826;
        border: .01rem solid #778DA8;
        height: .44rem;
        line-height: .44rem;
        box-sizing: border-box;
        font-size: .24rem;
      }
      >.col:nth-child(1){
        border-right:none;
      }
    }
    .theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{
      background: none;
    }
    .v-select__selections,.v-select__slot{
      height: 100%;
    }
    .theme--dark.v-select .v-select__selection--comma,.v-text-field.v-text-field--solo .v-label{
      height: 100%;
      top: 0;
      font-size: .25rem;
      line-height: .4rem;
      color: #fff;
    }
    .v-icon.v-icon{
      font-size: .25rem;
    }
    
  }
  .v-list-item .v-list-item__subtitle, .v-list-item .v-list-item__title {
    line-height: .5rem;
    font-size: .2rem;
  }
</style>
