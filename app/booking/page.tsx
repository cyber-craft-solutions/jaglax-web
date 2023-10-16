"use client";
import React, { useContext, useEffect, useState } from "react";
import Header from "@/shared/Header";
import Text from "@/shared/Text";
import localFont from "next/font/local";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import { fetchMarsierraProperties } from "@/sanity/api/property.api";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});
const { RangePicker } = DatePicker;
const { Option, OptGroup } = Select;
const Booking = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMarsierraProperties();
      setData(result);
    };
    fetchData();
  }, []);

  const onFinish = (event: any) => {
    setLoading(true);
    const startDate = new Date(event.date[0]).toLocaleDateString();
    const endDate = new Date(event.date[1]).toLocaleDateString();
    const finalObj = {
      name: event.name,
      email: event?.email,
      contact: event?.email,
      property: event?.property,
      marselvaProperty: event?.marselvaProperty,
      startDate: startDate,
      endDate: endDate,
      guestCount: event.guestCount,
    };

    emailjs
      .send(
        "service_41yw145",
        "template_xgob5yr",
        finalObj,
        "CuiYfDlMjJtTfgsWK"
      )
      .then(
        (result) => {
          setLoading(false);
          messageApi
            .open({
              type: "loading",
              content: "Booking in progress..",
              duration: 2.5,
            })
            .then(() => message.success("Booking Confirmed", 2.5));
        },
        (error) => {
          setLoading(false);
          messageApi
            .open({
              type: "loading",
              content: "Booking in progress..",
              duration: 2.5,
            })
            .then(() => message.success("Booking Error", 2.5));
        }
      );
  };

  return (
    <div>
      {contextHolder}
      <Header />
      <div className="flex flex-col mb-8 items-center justify-center container">
        <div className="pt-20 pb-12 px-7 flex justify-center">
          <Text
            className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
          >
            {`Book you're Villa or appartment now`}
          </Text>
        </div>
        <div className="w-[90%] md:w-[40%] border border-black p-4 rounded-lg">
          <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Form.Item
              className="font-nunito"
              name="name"
              label="Name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                placeholder="Name"
                className="!bg-transparent border-black"
              />
            </Form.Item>
            <Form.Item
              className="font-nunito"
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Email is required" },
                {
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              ]}
            >
              <Input
                placeholder="Email"
                className="!bg-transparent border-black"
              />
            </Form.Item>
            <Form.Item
              className="font-nunito"
              name="contact"
              label="Contact"
              rules={[
                { required: true, message: "Contact is required" },
                {
                  pattern: /^[6-9]\d{9}$/,
                  message: "Invalid Indian phone number format",
                },
              ]}
            >
              <Input
                placeholder="Contact"
                className="!bg-transparent border-black"
              />
            </Form.Item>
            <Form.Item
              name="property"
              label="Properties"
              rules={[{ required: true, message: "Please select a property" }]}
            >
              <Select className="bg-transparent" virtual={false}>
                <OptGroup label="Mar Selva properties">
                  {data?.marselvaVillas?.map((el: any, index: string) => (
                    <Option key={index} value={el?.value}>
                      {el?.label}
                    </Option>
                  ))}
                </OptGroup>
                <OptGroup label="Marsierra properties">
                  {data?.marsierra?.map((el: any, index: string) => (
                    <Option key={index} value={el?.value}>
                      {el?.label}
                    </Option>
                  ))}
                </OptGroup>
              </Select>
            </Form.Item>
            <Form.Item
              name="date"
              label="Start and End date"
              rules={[
                { required: true, message: "Start and End date are required" },
              ]}
            >
              <RangePicker className="bg-transparent" />
            </Form.Item>
            <Form.Item
              name="guestCount"
              label="No of guest's"
              rules={[{ required: true, message: "Guest count is required" }]}
            >
              <InputNumber
                type="number"
                placeholder="Guest count"
                className="bg-transparent w-2/4 border-black"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="bg-black w-full"
                type="primary"
                loading={loading}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
