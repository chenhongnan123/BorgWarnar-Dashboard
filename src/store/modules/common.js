import { set } from '../../utils/helper';

export default {
  state: {
    title:'CA HCM #2 ASSEMBLY LINE & TEST STATION',
    isAutoRunning:true,
    languangeG:'',
  },
  mutations: {
    SET_TITLE: set('title'),
    SET_AUTORUN: set('isAutoRunning'),
    SET_LANGUANGE: set('languangeG'),
  },
  actions: {
   
  },
};
