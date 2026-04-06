import { Alert, Button, Form, Input, message } from "antd"
import { useState } from "react";


export default function FormTab() {

   const [showAlert, setShowAlert] = useState(false);

   const onFinish = (e) => {
      setTimeout(() => {
         setShowAlert(true);
      }, 2000);
   }

   return (
      <>
      {showAlert&&
      <Alert type="error" message="Error" description = 'There was an error on login!' closable />}
         <Form onFinish={onFinish}>
            <Form.Item label='User Name' name='username'>
               <Input placeholder="User name" required></Input>
            </Form.Item>
            <Form.Item label='Password' name='password'>
               <Input.Password placeholder="Password" required></Input.Password>
            </Form.Item>
            <Form.Item>
               <Button block type="primary" htmlType="submit">Log In</Button>
            </Form.Item>
         </Form>
      </>
   )
}