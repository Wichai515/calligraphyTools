// Login.js

import React, { useState } from 'react';
import { Card, Form, Input, Button , notification } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';


const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false); // 添加状态来控制注册和登录视图的切换
  const isMobile = window.innerWidth <= 768; // 判断设备类型

  const onFinish = async (values) => {
    console.log('Received values:', values);
    // 登录逻辑
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: values.username,
          password: values.password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('登录成功:', data);
        notification.success({
          message: '登录成功',
          description: '欢迎回来！',
        });
        // 在这里可以处理登录成功的逻辑，比如跳转到其他页面等
      } else {
        const data = await response.json();
        console.error('登录失败:', data);
        notification.error({
          message: '登录失败',
          description: '请检查用户名和密码',
        });
        // 在这里可以处理登录失败的逻辑，比如提示错误信息等
      }
    } catch (error) {
      console.error('登录异常:', error);
      notification.error({
        message: '登录异常',
        description: '请稍后重试',
      });
      // 在这里可以处理异常情况，比如提示网络错误等
    }
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
