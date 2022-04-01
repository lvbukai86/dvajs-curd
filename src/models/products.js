import  {query} from '../services/products';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {

      return state.filter(item => item.id !== id);
    },
    'add'(state, { payload: content }) {
      console.log(state);
      let temp= JSON.parse(JSON.stringify(state));//深拷贝
      const id=Date.parse(new Date());
      temp = 'undefined' ? [] : temp;

      temp.push({name:content,id:id});
       state=temp;
      return  state;
    },
    'query'(state, { payload:{data}  }) {
     if (state ==='underfined')
     {
       return  state;
     }else {
       console.log(data);
       return null;
     }

    },
    'getDate'(state, { payload: id }) {
      console.log(id);
    },

  },
  effects: {
    *'fetch'({payload},{select,put,call}) {
      const condition = yield select(state => state.products);
     // console.log('日你妈'+JSON.stringify(condition));
     const data= yield call(query, condition );
      yield put({ type: 'query', payload: {data} });
    }
  },
  subscriptions: {//切换时获取数据dd
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/products') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },
};
