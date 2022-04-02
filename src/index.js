import dva from 'dva';
import './index.css';
import { createBrowserHistory } from "history";
const name=localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : undefined;

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),

  initialState: {
    products: name//就是在这里卡了很久没加索引,改变就存
  },
  onError(e, dispatch){
    console.log(e.message);
  },
  onStateChange(state) {
     localStorage.setItem('products',JSON.stringify(state.products));//改变就存

  }
});
// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
