import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
  }, {
    title: '操作',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>删除</Button>
        </Popconfirm>

      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey={products=>products.id}
    />
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
