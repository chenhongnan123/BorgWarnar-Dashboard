<template>
  <div style="height:100%;" class="time-moudle">
    <v-row  class="text-center">
      <v-col cols="9" >
        <span>{{dateTime}}</span>
      </v-col>
      <v-col cols="3">
        <span>Shift1</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TimeMoudle',
  data(){
    return {
      dateTime:null,
    }
  },
  mounted(){
    setInterval(()=>{
      this.dateTime = this.getDateTime();
    },1000);
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .time-moudle{
    .text-center{
      >.col{
        opacity: 0.7;
        background: #0E1826;
        border: .01rem solid #778DA8;
        height: .44rem;
        line-height: .30rem;
        box-sizing: border-box;
        font-size: .24rem;
      }
      >.col:nth-child(1){
        border-right:none;
      }
    }
  }
</style>
