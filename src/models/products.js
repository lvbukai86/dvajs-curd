

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {

      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: content }) {
      let temp= JSON.parse(JSON.stringify(state));//深拷贝

      const id=Date.parse(new Date());
      temp.push({name:content,id:id});
      console.log(typeof temp)
       state=temp;
      return  temp;
    },
   /* 'query'(state, { payload:{data}  }) {
      console.log('查询');
      return '2';

    },*/
    'getDate'(state, { payload: id }) {
      console.log(id);
    },

  },
  effects: {
 /*   *'fetch'({payload},{put,call}) {

     const data= yield call(function (){}, payload );
      yield put({ type: 'query'});
    }*/
  },
/*  subscriptions: {//切换时获取数据dd
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },*/
};
