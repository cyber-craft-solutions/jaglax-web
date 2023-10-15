"use client";
import React, { useContext, useEffect, useState } from "react";
import Header from "@/shared/Header";
import Text from "@/shared/Text";
import localFont from "next/font/local";
import { Form, Input, InputNumber, Select } from "antd";
import { fetchMarsierraProperties } from "@/sanity/api/property.api";
import { SidebarContext } from "@/components/individual-villa/page";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const Booking = () => {
  const [data, setData] = useState<any>(null);
  let { propertyData } = useContext(SidebarContext);
  console.log("propertyId323", propertyData);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMarsierraProperties();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col mb-8 items-center justify-center container">
        <div className="pt-20 pb-12 px-7 flex justify-center">
          <Text
            className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
          >
            {`Book you're Villa or appartment now`}
          </Text>
        </div>
        <div className="w-[90%] border border-black p-4 rounded-lg">
          <Form layout="vertical" autoComplete="off">
            <Form.Item className="font-nunito" name="name" label="Name">
              <Input className="bg-transparent border-black" />
            </Form.Item>
            <Form.Item name="age" label="No of guest's">
              <Select className="bg-transparent  border-black" />
            </Form.Item>
            <Form.Item name="age" label="No of guest's">
              <InputNumber className="bg-transparent border-black" />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
