import React,{ useState } from 'react';
import { connect} from 'dva';
import ProductList from '../components/ProductList';
import {Button,Modal,Input} from "antd";




const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleAdd(content) {
    dispatch({
      type: 'products/add',
      payload: content,
    });
    dispatch({
      type: 'products/query',
      payload: content,
    });
  }


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState('');
  const showModal = () => {
    setIsModalVisible(true);
  };
  const inputChange=(event)=>{
   // console.log(event.target.value);
    //把表单输入的值赋值给username
    setContent(event.target.value);
  }

  const handleOk = () => {
    setIsModalVisible(false);
    handleAdd(content);

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <h2>List of Products</h2>
      <Button onClick={showModal}>添加数据</Button>
      <Modal title="添加数据" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><Input placeholder="输入添加内容"  onChange={inputChange} /></p>
      </Modal>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
function mapStateToProps(state, ownProps) {
  return {
  products: state.products,
  };
}
export default connect(mapStateToProps)(Products);
