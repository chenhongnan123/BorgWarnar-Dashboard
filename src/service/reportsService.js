import Service from '@/plugins/axios';

// const reqConfig = { timeout: 45000 };
const reqConfig = {};
const base = '/server/executereport';

export default {
  getReport(reportName, customerId, userId, postData, queryParams) {
    try {
      const query = queryParams || '';
      const url = `${base}/${reportName}?customerid=${customerId}&userid=${userId}${query}`;
      return Service.post(url, postData, reqConfig);
    } catch (e) {
      throw new Error(e);
    }
  },
  getJson(filename) {
    try {
      const url = filename;
      return Service.get(url, reqConfig);
    } catch (e) {
      throw new Error(e);
    }
  },
};
