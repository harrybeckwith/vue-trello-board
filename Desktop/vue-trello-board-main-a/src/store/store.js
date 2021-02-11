import Vue from "vue";
import Vuex from "vuex";
import  trelloBoard  from './trelloBoard';
import devTo  from './devTo';

Vue.use(Vuex);



export default new Vuex.Store({
    modules: {
      trelloBoard,
      devTo
    }
});
