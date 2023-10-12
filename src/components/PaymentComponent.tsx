import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Form, Upload } from "antd";
import { PaymentInterface } from "../interfaces/IPayment";
import { ImageUpload } from "../interfaces/IUpload";
import { BasketInterface } from "../interfaces/IBasket";
import Swal from "sweetalert2";
// import { CreatePayment } from "../services/http";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

function PaymentComponet() {
  const [date, setDate] = useState<Dayjs | null>(dayjs()); // กำหนดตัวแปร state 'date' และให้มีค่าเริ่มต้นเป็นวันที่ปัจจุบันจากไลบรารี 'dayjs'
  const [profile, setProfile] = useState<ImageUpload>();
  const [Basket, setBasket] = React.useState<BasketInterface[]>([]);
  const [payment, setPayment] = React.useState<PaymentInterface>();

  // const [imageString, setImageString] = React.useState<
  //   string | ArrayBuffer | null>(null);
  // กำหนดตัวแปร state 'imageString' สำหรับเก็บข้อมูลรูปภาพ

  // ฟังก์ชัน 'handleImageChange' สำหรับการเลือกไฟล์รูปภาพ
  // const handleImageChange = (event: any) => {
  //   const image = event.target.files[0]; // รับไฟล์รูปที่ถูกเลือก
  //   const reader = new FileReader(); // สร้างออบเจกต์ FileReader
  //   reader.readAsDataURL(image); // อ่านไฟล์รูปเป็น URL ข้อมูล
  //   reader.onload = () => {
  //     const base64Data = reader.result; // รับข้อมูลรูปภาพในรูปแบบ base64
  //     setImageString(base64Data); // ให้ state 'imageString' เป็นข้อมูลรูปภาพในรูปแบบ base64
  //   };
  // };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    setProfile(e?.fileList[0]);
    return e?.fileList;
  };

  // ฟังก์ชัน 'submit' สำหรับจัดการการส่งฟอร์ม
  async function submit() {
    let data = {
      Date: date,
      // Image: imageString,
      Image: profile?.thumbUrl,
      Basket_id: 3,
      Status_id: 2,
    };

    if (!profile) {
      console.error("กรุณาอัปโหลดรูปภาพ");
      Swal.fire({
        title: "กรุณาอัปโหลดรูปภาพ",
        icon: "error",
      });
      return;
    }

    const apiUrl = "http://localhost:8080/Payment"; // กำหนด URL ของ API
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // แปลงออบเจกต์ 'data' เป็น JSON และตั้งค่าให้
    };

    // ส่งคำขอ POST ไปยัง API
    fetch(apiUrl, requestOptions)
      .then((response) => response.json()) // แปลงข้อมูลในคำตอบเป็น JSON
      .then((res) => {
        console.log(res.data); // แสดงข้อมูลในคำตอบในคอนโซล
        if (res.data) {
          Swal.fire({
            title: "บันทึกข้อมูลสำเร็จ",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/Payment/Status"; // นำผู้ใช้ไปยังหน้า "/Payment/Status" หลังจากการยืนยัน
            }
          });
        } else {
          console.log(res);
          console.log("บันทึกข้อมูลไม่สำเร็จ");
          Swal.fire({
            title: "บันทึกไม่สำเร็จ",
            icon: "error",
          });
        }
      });
  }

  // สร้างฟอร์มการชำระเงิน
  return (
    <Form className="box w-100 leading-5 my-1" onFinish={submit}>
      <h5
        className="text-lg font-bold mb-2"
        style={{ color: "rgb(57, 78, 106)" }}
      >
        เลือกวันที่โอนเงิน
      </h5>
      <Form.Item className="datepicker mb-1 text-center" name="Date">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date picker"
            value={date ? dayjs(date) : null} // กำหนดวันที่ที่ถูกเลือก
            onChange={(newValue) => {
              setDate(newValue); // อัปเดตตัวแปร state 'date' เมื่อวันที่เปลี่ยน
            }}
          />
        </LocalizationProvider>
      </Form.Item>
      {/* <Form.Item name="Image" getValueFromEvent={handleImageChange}>
        <input
          type="file" // ประเภทของอินพุตสำหรับการเลือกไฟล์
          className="file-input file-input-bordered w-full max-w-xs"
          // onChange={handleImageChange}  เรียกใช้ 'handleImageChange' 
        />
      </Form.Item> */}
      <div className="border-b border-base-300 pb-2"></div>
      <Form.Item name="Image" valuePropName="fileList">
        <h5
          className="text-lg font-bold mb-1"
          style={{ color: "rgb(57, 78, 106)" }}
        >
          อัปโหลดรูปภาพ
        </h5>
        <Upload
          maxCount={1}
          multiple={false}
          listType="picture-card"
          className="text-center"
          onChange={normFile}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>อัพโหลด</div>
          </div>
        </Upload>
      </Form.Item>
      <button type="submit" className="btn btn-neutral w-full max-w-xs">
        ยืนยันการชำระเงิน {/* ข้อความปุ่มส่งฟอร์ม */}
      </button>
    </Form>
  );
}

export default PaymentComponet; // ส่งออก PaymentComponent เป็นค่าเริ่มต้น (default export)
