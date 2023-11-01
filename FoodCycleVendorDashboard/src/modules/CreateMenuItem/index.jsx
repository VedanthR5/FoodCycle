import React, { useState } from 'react';
import { useContext } from 'react';
import MenuContext from '../../contexts/MenuContext';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, InputNumber } from 'antd';

const CreateMenuItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleSubmit = (values) => {
    const dataToSubmit = {
      ...values,
    };

    // Call any necessary submission methods here
    // ...

    navigate(-1);
  }

  return (
    <Card title="New Menu Item" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }} onFinish={handleSubmit}>
        <Form.Item label="Item Name" name="itemName" required>
          <Input />
        </Form.Item>

        <Form.Item label="Item Description" name="itemDescription" required>
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Price ($)" name="itemPrice" required>
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ backgroundColor: 'green', borderColor: 'green' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}


export default CreateMenuItem;
