import { set } from '../../utils/helper';
import reportService from '@/service/reportsService';

export default {
  state: {
    reportData:[],
  },
  mutations: {
    SET_REPORTDATA: set('reportData'),
  },
  actions: {
    GET_REPORTDATA:async ({commit}) => {
      const enddate = new Date().getTime();
      const startdateDay = enddate-31*24*3600*1000;
      const nowYear = new Date().getFullYear();
      const startdateMonthly = new Date(nowYear+'-01-01 00:').getTime();
      // const resArr = await Promise.all([
      //   reportService.getReport(
      //     'kpireport',
      //     '1',
      //     '1',
      //     {
      //       "startdate": startdateDay,
      //       "enddate": enddate,
      //       "singledaterange":true,
      //       "all":false
      //     },
      //     '&all=true'
      //   ),
      //   reportService.getReport(
      //     'kpireportmonthly',
      //     '1',
      //     '1',
      //     {
      //       "startdate": startdateMonthly,
      //       "enddate": enddate,
      //       "singledaterange":true,
      //       "all":false
      //     },
      //     '&all=true'
      //   )
      // ]);
      const resArr = await Promise.all([reportService.getJson('/test4.json'),reportService.getJson('/test5.json')]);
      const test = await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(111)
        },5000)
      })
      console.log(test)
      const [resDay,resMonth] = resArr;
      const dataDay = resDay.data;
      const dataMonth = resMonth.data;
      const responseData = [...JSON.parse(dataDay.reportData).reportData];
      console.log(responseData)
      const responseDataMonthly = [...JSON.parse(dataMonth.reportData).reportData].reverse();
      if(responseDataMonthly.length < 12){
        for(let i = responseDataMonthly.length;i < 12;i++){
          responseDataMonthly[i] = {...responseDataMonthly[0]};
          for(let key in responseDataMonthly[i]){
            responseDataMonthly[i][key] = 0;
          }
        }
      }
      const cols = JSON.parse(dataDay.reportData).cols;
      const title = JSON.parse(dataDay.reportData).name;
      commit('common/SET_TITLE',title, {root: true});
      responseData.forEach((item)=>{
        item.count = 1;
        for(let key in item){
          if(typeof(item[key]) === 'string' && item[key].indexOf('%') !== -1){
            item[key] = parseFloat(item[key]);
          }
        }
      });
      responseDataMonthly.forEach((item)=>{
        for(let key in item){
          if(typeof(item[key]) === 'string' && item[key].indexOf('%') !== -1){
            item[key] = parseFloat(item[key]);
          }
        }
      });
      const barList = ['downtimereasoncaptureratio','availability','availability','oee','noplanproductionratio','performance'];
      responseData.forEach((item)=>{
        for(let key in item){
          if(barList.includes(key)){
            item[key] = parseInt(item[key]/item['count']);
          }
        }
      });
      let reportData = [];
      const responseDataDaily = responseData.map(item=>{return {...item}});
      const data7 = responseDataDaily.length > 7 ? responseDataDaily.slice(responseDataDaily.length-7) : responseDataDaily;
      const data30 = responseDataDaily.length > 30 ? responseDataDaily.slice(responseDataDaily.length-30) : responseDataDaily;
      const monthList = [];
      for(let i = 1;i <= 12;i++){
        monthList.push(new Date().getFullYear()+'-'+i);
      }
      const dashboardList = [
        {
          name:'oee',
          yAxis:{
            max:100,
            min:0
          }
        },
        {
          name:'availability',
          yAxis:{
            max:100,
            min:0
          }
        },
        {
          name:'performance',
          yAxis:{
            max:100,
            min:0
          }

        },
        {
          name:'netrunningtime',
        },
        {
          name:'unscheduleddowntime',
        },
        {
          name:'averagechangeovertime',
        },
        {
          name:'noplanproductionratio',
          yAxis:{
            max:100,
            min:0
          }
        },
        {
          name:'downtimereasoncaptureratio',
          yAxis:{
            max:100,
            min:0
          }
        }
      ]
      dashboardList.forEach((dashboard)=>{
        const title = cols.filter((item)=>{
          return dashboard.name === item['name']
        })[0].description;
        reportData.push(
          {
            xData:{
              categories:data7.map(item=>item['date'].match(/\-(\S*)/)[1]),
              labels: {
                autoRotation: false,
              }
            },
            series: [{
              data: data7.map(item=>item[dashboard.name]),
              type: barList.includes(dashboard.name) ? 'line' : 'column',
              // smooth: true,
              // name:title,
              showInLegend:false,
              // lineStyle:{
              //   width:5
              // }
            }],
            title:title,
            yAxis:dashboard.yAxis
          }
        );
        reportData.push(
          {
            xData:{
              categories:data30.map(item=>item['date'].match(/\-(\S*)/)[1]),
              labels: {
                autoRotation: false,
                step:2
              }
            },
            series: [{
              data: data30.map(item=>item[dashboard.name]),
              type: barList.includes(dashboard.name) ? 'line' : 'column',
              smooth: true,
              // name:title,
              showInLegend:false,
            }],
            title:title,
            yAxis:dashboard.yAxis
          }
        );
        reportData.push(
          {
            xData:{
              categories:monthList,
              labels: {
                autoRotation: false,
              }
            },
            series: [{
              data: responseDataMonthly.map(item=>item[dashboard.name]),
              type: 'column',
              // smooth: true,
              // name:title
              showInLegend:false,
            }],
            title:title,
            yAxis:dashboard.yAxis
          }
        );
      });
      commit('SET_REPORTDATA',reportData);
      setTimeout(()=>{
        commit('SET_REPORTDATA',reportData.map(item=>{return {...item}}));
        console.log(document.getElementsByClassName('charts'))
      },1000);
    }
  },
};
