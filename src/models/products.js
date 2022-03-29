import  * as services from '../services/products';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {

      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: content }) {
      let temp= JSON.parse(JSON.stringify(state));//深拷贝
      console.log(temp);
      temp.push({id:33,name:content});
      console.log(temp);
      return  temp;
    },

  },
  effects: {
    *'fetch'(state) {
      const { data } = yield services.query();
      console.log(data);
      return state;
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({
            type: '/fetch',
          });
        }
      });
    },
  },
};
