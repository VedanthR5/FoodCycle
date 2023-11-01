import React from 'react';
import { Form, Input, Card, Button } from 'antd';
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete';
import { useFormData } from '../FormDataContext';

const Settings = () => {
  const { formData, setFormData } = useFormData();

  const getAddressLatLng = async (address) => {
    setFormData({
      ...formData,
      address,
    });

    if (address) {
      const geocodedByAddress = await geocodeByAddress(address.label);
      const latLng = await getLatLng(geocodedByAddress[0]);
      setFormData({
        ...formData,
        coordinates: latLng,
      });
    }
  };

  return (
    <Card title="Vendor Details" style={{ margin: 20 }}>
      <Form layout="vertical" wrapperCol={{ span: 8 }}>
        <Form.Item label="Vendor Name" required>
          <Input
            placeholder="Enter vendor name here"
            value={formData.vendorName}
            onChange={(e) =>
              setFormData({
                ...formData,
                vendorName: e.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item label="Vendor Address" required>
          <GooglePlacesAutocomplete
            apiKey="HiddenKey"
            selectProps={{
              value: formData.address,
              onChange: getAddressLatLng,
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      <span>
        {formData.coordinates?.lat} - {formData.coordinates?.lng}
      </span>
    </Card>
  );
};

export default Settings;
