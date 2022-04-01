import request from '../utils/request';

export function query(status) {
 const back= localStorage.getItem('products');
  console.log( JSON.parse(back) );
  return back;
}

