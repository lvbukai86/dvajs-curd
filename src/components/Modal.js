import React, {useState,useRef} from "react";
import {Input, Modal} from 'antd';

const _Modal = (props) =>  {
  const {visible,action,handleShow,title}=props;
  const textInput = useRef(null);

  const handleOk = () => {
    //setIsModalVisible(false);
    const content=textInput.current.input.value;
    action({
      type: 'products/add',
      payload: content
    })
    handleShow(false);
  };

  const handleCancel = () => {
    handleShow(false);
  };
  return <Modal visible={visible} onOk={handleOk} onCancel={handleCancel} title={title}>
    <p><Input ref={textInput} placeholder="输入添加内容" /></p>
  </Modal>
}
export default _Modal
