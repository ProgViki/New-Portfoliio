import React from "react";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Submitted:", values);
    message.success("Message sent successfully!");
    form.resetFields(); // Reset form after successful submission
  };

  const onFinishFailed = (errorInfo: any) => {
    console.error("Form Failed:", errorInfo);
    message.error("Failed to submit the form. Please check the fields.");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Contact Me
        </h2>

        <Form
          form={form}
          name="contact-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg dark:text-white"
        >
          {/* Name Field */}
          <Form.Item
            label="Your Name"
            labelCol={{ className: 'text-blue-200 dark:text-white'  }}
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
             className="text-blue-200 dark:text-white"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="John Doe"
              className="dark:bg-gray-700 dark:text-gray-200"
            />
          </Form.Item>

          {/* Email Field */}
          <Form.Item
            label="Your Email"
            labelCol={{ className: 'text-blue-200 dark:text-white' }}
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" }
            ]}
            className="text-blue-200 dark:text-white"
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="john.doe@example.com"
              className="dark:bg-gray-700 dark:text-gray-200"
            />
          </Form.Item>

          {/* Message Field */}
          <Form.Item
            label="Your Message"
            name="message"
            labelCol={{ className: 'text-blue-200 dark:text-white' }}
            // rules={[{ required: true, message: "Please enter your message!" }]}
             className=" text-blue-200 dark:text-white"
          >
            <TextArea
              rows={4}
              placeholder="Your message here..."
              className="dark:bg-gray-700 dark:text-white"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-800 dark:bg-gray-600 dark:hover:bg-gray-400 dark:text-blue-200"
            >
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
