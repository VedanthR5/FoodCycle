import React, { useState } from "react";
import { useContext } from 'react';
import MenuContext from "../../contexts/MenuContext";
import { Card, Table, Button } from "antd";
import dishes from "../../assets/data/dishes.json";
import addeddishes from "../../assets/data/addeddishes.json";
import { Link } from "react-router-dom";

const VendorMenu = () => {
  const [data, setData] = useState(dishes);

  const tableColumns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button danger onClick={() => handleRemoveItem(record.id)}>
          Remove
        </Button>
      ),
    },
  ];

  const renderNewItemButton = () => (
    <Link to={"create"}>
      <Button type="primary">New Item</Button>
    </Link>
  );

  const handleRemoveItem = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };

  return (
    <Card title={"Items"} style={{ margin: 20 }} extra={renderNewItemButton()}>
      <Table dataSource={data} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default VendorMenu;
