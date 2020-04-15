import Vue from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import HighchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';

Highcharts.theme = {
  colors: ['#55D802', '#FFA100', '#FF3800', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: 'Poppins',
    },
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    labels: {
      style: {
        color: '#fff',
        "font-size":'20px',
      },
      y:20

    }
  },
  yAxis: {
    labels: {
      style: {
        color: '#fff',
        "font-size":'20px',
      },
      y:10
    },
    
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    itemStyle: {
      color: '#fff',
      width:100,
      fontSize:20,
      padding:120,
      transform:'translateY(-5px)'
    },
    symbolPadding: 20,
    // symbolHeight:30,
  },
  tooltip: {
    shared: true,
    useHTML: true,
    headerFormat: '<small style="font-size:20px;">{point.key}</small><table  style="font-size:20px;">',
    pointFormat: '<tr><td style="color: {series.color};font-size:20px;">{series.name}: </td>' +
    '<td style="text-align: right;font-size:20px;"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    // style: {
    //   fontWeight: 'bold',
    //   fontSize:40,
    //   lineHeight:60
    // },
    padding:20
  },
  plotOptions: {
    column: {
        dataLabels: {
            enabled: true,
            style:{
              fontSize:20,
              color:'#fff'
            }
        }
    }
  },
};

Highcharts.setOptions(Highcharts.theme);
HighchartsMore(Highcharts);
solidGauge(Highcharts);
Vue.use(HighchartsVue);
