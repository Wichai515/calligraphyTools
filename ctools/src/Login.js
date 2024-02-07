// Login.js

import React, { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false); // 添加状态来控制注册和登录视图的切换
  const isMobile = window.innerWidth <= 768; // 判断设备类型

  const onFinish = (values) => {
    console.log('Received values:', values);
    // 在此处可以处理表单提交的逻辑，比如发送请求给后端进行验证等
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: isMobile ? '90%' : 300 }}>
        <h2 style={{ textAlign: 'center' }}>{isRegistering ? '注册' : '登录'}</h2> {/* 根据状态显示标题 */}
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="密码" />
          </Form.Item>
          {isRegistering && (
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: '请确认密码!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('两次输入的密码不一致!');
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isRegistering ? '注册' : '登录'}
            </Button>
            <Button type="link" onClick={toggleRegister} block>
              {isRegistering ? '已有账号？点击登录' : '没有账号？点击注册'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
