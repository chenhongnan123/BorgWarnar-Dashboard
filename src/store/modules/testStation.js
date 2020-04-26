import { set } from '../../utils/helper';
import reportService from '@/service/reportsService';

export default {
  state: {
    testReportData:{},
  },
  mutations: {
    SET_TESTREPORTDATA: set('testReportData'),
  },
  actions: {
    GET_TESTREPORTDATA:async ({commit}) => {
      // const enddate = new Date().getTime();
      // const { data } = await reportService.getReport(
      //   'assemblydashboardreport',
      //   '1',
      //   '1',
      //   {
      //     "startdate": enddate - 30000,
      //     "enddate": enddate,
      //     "singledaterange":true,
      //     "all":false
      //   },
      //   '&all=true'
      // );
      const { data } = await reportService.getJson('./testTest.json');
      const { reportData } = data;
      reportData['ordernumber'] = Math.random();
      console.log(reportData,222)
      commit('SET_TESTREPORTDATA',reportData);
    }
  },
};
