import dva from 'dva';
import './index.css';
import { createBrowserHistory } from "history";

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
  initialState: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('state')) : undefined,
  onError(e, dispatch){
    console.log(e.message);
  },
  onStateChange(state) {
    console.log(state)
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
