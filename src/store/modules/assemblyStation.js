import { set } from '../../utils/helper';
import reportService from '@/service/reportsService';

export default {
  state: {
    assemblyReportData:{},
  },
  mutations: {
    SET_ASSEMBLYREPORTDATA: set('assemblyReportData'),
  },
  actions: {
    GET_ASSEMBLYREPORTDATA:async ({commit}) => {
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
      const { data } = await reportService.getJson('./testAssembly.json');
      const { reportData } = data;
      reportData['ordernumber'] = Math.random();
      commit('SET_ASSEMBLYREPORTDATA',reportData);
    }
  },
};
