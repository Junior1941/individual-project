import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBarcart from "../components/NavBarcart";

export default function Cart() {
  const {} = useAuth();

  return (
    <div>
     <div className="flex flex-col  mt-20 mx-4 ">
          <p className="font-bold FontP text-[24px]">
            รองเท้า Nike Air Jordan 1 Mid SE ‘Elephant Toe’
          </p>
          <p className="font-bold FontP text-[24px]">(M11US) M11US/45/29CM</p>
          <p className="FontP text-[21px] text-gray-400 mt-1">รองเท้าผู้ชาย</p>
          <div className="flex flex-col ">
            <p className="FontP text-[21px] text-gray-500 mt-1">
              รหัสสินค้า DM1200-016-11
            </p>

            <p className="FontP text-[27px] text-[#1e6899] mb-1 mt-1">
              8,700 บาท
            </p>
            <p className="FontP text-[21px] text-gray-400">
              ราคาปกติ 9,000 บาท
            </p>
         
          </div>
        </div>
    </div>
  );
}
