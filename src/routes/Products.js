import React,{ useState } from 'react';
import { connect} from 'dva';
import ProductList from '../components/ProductList';
import {Button} from "antd";
import _Modal from "../components/Modal"

const Products = ({ dispatch, products }) => {
  const [IsClick, setIsClick] = useState(false);
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function  show(num){
    setIsClick(true);
  }
  function  handleShow(num){
    setIsClick(num);
  }

  return (
    <div>
      <h2>数据列表</h2>
      <Button onClick={show}>添加数据</Button>
     {/* <Modal title="添加数据" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><Input placeholder="输入添加内容"  onChange={inputChange} /></p>
      </Modal>*/}
      <_Modal visible={IsClick} handleShow={handleShow} action={dispatch}   title="请填写数据"/>
      <ProductList onDelete={handleDelete} products={products} action={dispatch} />
    </div>
  );
};

// export default Products;
function mapStateToProps(state) {
  return {
  products: state.products,
  };
}
export default connect(mapStateToProps)(Products);
