<template>
  <div class="setting">
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm" size="large">
      <el-form-item label="report" prop="pass">
        <el-select v-model="ruleForm.report" placeholder="请选择" style="width:30%;">
          <el-option v-for="(item,key) in reportOptions" :label="item.name" :value="item.id" :key="key"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="addDomain">新增Charts</el-button>
      </el-form-item>
      <div  
        class='chart-item-setting'
        v-for="(domain, index) in ruleForm.domains"
        :key="domain.key"
      >
        <el-form-item
          label="KPI类型"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
          }"
        >
          <el-select v-model="domain.kpiType" placeholder="请选择" style="width:100%;">
            <el-option v-for="(item,key) in kpiTypeOptions" :label="item.name" :value="item.id" :key="key"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="时间范围"
          :prop="'domains.' + index + '.value'"
          :rules="{
            required: true, message: '域名不能为空', trigger: 'blur'
          }"
        >
          <el-select v-model="domain.duringTime" placeholder="请选择"  style="width:100%;">
            <el-option v-for="(item,key) in duringTimeOptions" :label="item.name" :value="item.id" :key="key"></el-option>
          </el-select>
        </el-form-item>
        <div style="text-align:center;">
          <span>Charts{{index+1}}</span>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </div>
      </div>
      
    </el-form>
  </div>
</template>

<script>
import {  mapMutations } from 'vuex';
export default {
  name: 'setting',
  data(){
    return {
      reportOptions:[
        {id:'viewstatusofplanning',name:'viewstatusofplanning'},
        {id:'productioncyclecomparison',name:'productioncyclecomparison'},
        {id:'productiondaily',name:'productiondaily'},
      ],
      kpiTypeOptions:[
        {id:'viewstatusofplanning',name:'Downtime Reason Capture Ratio'},
        {id:'productioncyclecomparison',name:'No Plan Production Ratio'},
        {id:'Unscheduled Downtime',name:'Unscheduled Downtime'},
        {id:'Availability Yield',name:'Availability Yield'},
        {id:'Plan Achievement',name:'Plan Achievement'},
      ],
      duringTimeOptions:[
        {id:'seven',name:'近7天'},
        {id:'thirty',name:'近30天'},
        {id:'year',name:'本年度'},
      ],
      ruleForm: {
        report:'',
        domains: [{
          value: '',
          kpiType:'',
          duringTime:'',
        }],
      },
    };
  },
  components:{
  },
  methods:{
    ...mapMutations({
      setTitle: 'common/SET_TITLE',
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.ruleForm.domains.indexOf(item)
      if (index !== -1) {
        this.ruleForm.domains.splice(index, 1)
      }
    },
    addDomain() {
      this.ruleForm.domains.push({
        value: '',
        kpiType:'',
        duringTime:'',
        key: Date.now()
      });
    }
  },
  created(){
    this.setTitle('Setting');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .setting{
    height:100%;
    background:#eee;
    overflow:scroll;
    .chart-item-setting{
      width:30%;
      display:inline-block;
    }
  }
</style>
