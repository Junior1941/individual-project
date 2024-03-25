import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBar from "../navbar/NavBar";

export default function Home() {
  const {} = useAuth();

  const lineStyle = {
    textDecoration: 'line-through' // หรือใช้ 'overline' สำหรับเส้นบน
  };

  return (
    <div>
      <NavBar />
      <div className="ml-4">
        <div className="flex items-center justify-center mt-44 ml-96">
          <Link to="/home" className="text-[#1e6899] mr-20  Font1 text-[20px]  ">
            หน้าแรก
          </Link>
          <Link
            to="/"
            className="text-[#1e6899] text-center   Font1 text-[20px] mr-20 "
          >
            สินค้าทั้งหมด
          </Link>
          <Link
            to="/"
            className="text-[#1e6899] text-center  Font1 text-[20px]  mr-20 "
          >
            สินค้าลดราคา
          </Link>
          <h1 className="text-[#1e6899] text-center  Font1 text-[20px]  mr-20 ">
            ผู้ชาย
          </h1>
          <h1 className="text-[#1e6899] text-center  Font1 text-[20px] mr-20 ">
            ผู้หญิง
          </h1>
          <div className="flex ml-52 ">
            <h1 className="text-[#1e6899] text-center Font1 text-[20px] mr-20  underline">
              การสั่งซื้อ
            </h1>
            <h1 className="text-[#1e6899] text-center  Font1 text-[20px] mr-22 underline">
              ประวัติการสั่งซื้อ
            </h1>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col items-center mt-20 mx-4 ml-72">
            <Link to="/product">
              <img
                src="/Product1.jpg"
                alt=""
                style={{ width: "400px", height: "350px" }}
                className="mb-4"
              />
            </Link>
            <Link to="/product" className="text-[20px] mt-4  FontP">
              รองเท้า Nike Air Jordan 1 Mid SE
            </Link>
            <Link to="/product" className="text-[20px] mt-2  FontP">
              ‘Elephant Toe’ (M11US)
            </Link>
            <Link to="/product" className="text-[20px] mt-2  FontP">
              M11US/45/29CM
            </Link>
            <p className="text-[18px] mt-10  FontP text-gray-400">
              รหัสสินค้า DM1200-016-11
            </p>
            <div className="flex items-center justify-center mt-10 ">
              <p className="mr-2 Font text-[25px] text-[#1e6899]">8,700 บาท</p>
              <div className="text-gray-400" >
              <span style={lineStyle}>9,000 บาท</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-20 mx-4 ml-14">
            <Link to="" className="">
              <img
                src="/Product3.jpg"
                alt=""
                style={{ width: "400px", height: "350px" }}
                className="mb-4"
              />
            </Link>
            <Link to="" className="text-[20px] mt-4  FontP">
              รองเท้า Nike Blazer Low Platform{" "}
            </Link>
            <Link to="" className="text-[20px] mt-4  FontP">
              Women (W8.5US)
            </Link>
            <p className="text-[18px] mt-16  FontP text-gray-400">
              รหัสสินค้า DJ0292-103
            </p>
            <div className="flex items-center justify-center mt-12 ">
              <p className="mr-2 Font text-[25px] text-[#1e6899]">6,400 บาท</p>
              <div className="text-gray-400" >
              <span style={lineStyle}>6,900 บาท</span>
              </div>
            </div>
            </div>
          

          <div className="flex flex-col items-center mt-20 mx-4 ml-14">
            <Link to="" className="">
              <img
                src="/Product2.webp"
                alt=""
                style={{ width: "400px", height: "350px" }}
                className="mb-4"
              />
            </Link>
            <Link to="" className="text-[20px] mt-4  FontP">
              adidas Buty dla dzieci Grand Court{" "}
            </Link>
            <Link to="" className="text-[20px] mt-4 FontP">
              Spider-man K IG7169
            </Link>
            <p className="text-[18px] mt-16  FontP text-gray-400">
              รหัสสินค้า 1201A744-020-10
            </p>
            <div className="flex items-center justify-center mt-12 ">
              <p className="mr-2 Font text-[25px] text-[#1e6899]">10,700 บาท</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
