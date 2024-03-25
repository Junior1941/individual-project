import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBar from "../navbar/NavBar";

export default function Profile() {
  const {} = useAuth();

  return (
    <div>
      <NavBar />
      <div className="ml-4">
        <div className="flex items-center justify-center mt-44 ml-[700px]">
          <Link to="/home" className="text-[#1e6899] mr-20 Font1 text-[20px]">
            หน้าแรก
          </Link>
          <div className="flex ml-[530px]">
            <h1 className="text-[#1e6899] text-center Font1 text-[20px] mr-20 underline">
              การสั่งซื้อ
            </h1>
            <h1 className="text-[#1e6899] text-center Font1 text-[20px] mr-22 underline">
              ประวัติการสั่งซื้อ
            </h1>
          </div>
        </div>

        <div className=" flex ">
          <div className="flex  ml-[90px] mt-[60px]">
            <div className="avatar">
              <div className="w-[180px] rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className=" mt-[50px] ml-[20px] ">
              <p className="text-[27px] FontP">ปีเตอร พาร์คเกอร์์</p>
            </div>
          </div>

          <div className="flex  ml-[150px] mt-[70px]">
            <div className="mt-[60px] ml-[20px] ">
              <p className="text-[27px] FontP">ข้อมูลของฉัน</p>
              <p className="text-[18px] FontP">
                จัดการข้อมูลส่วนตัวคุณเพื่อความปลอดภัยของบัญชีผู้ใช้นี้
              </p>    
            </div>
          </div>
        </div>
        <div className=" ml-[850px] FontP mt-[50px]">
              <p className=" text-[18px]">ชื่อผู้ใช้ </p>
            </div>
      </div>
    </div>
  );
}
