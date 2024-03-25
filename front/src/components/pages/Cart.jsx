import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBarcart from "../navbar/NavBarcart";

export default function Cart() {
  const { price } = useAuth(); // Assuming price is obtained from the useAuth hook
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    // Ensure the quantity is a positive integer
    const newQuantity = Math.max(1, Math.floor(event.target.value));
    setQuantity(newQuantity);
  };

  return (
    <div>
      <NavBarcart />
      <div className=" mt-[200px]">
        <div className="flex ">
          <div className="flex flex-col items-center mt-10 ">
            <h1 className="text-[30px] Font1 font-bold">ตะกร้า</h1>
            <div className="flex flex-col mt-5 mx-4 ">
              <Link to="/product">
                <img
                  src="/Product1.jpg"
                  alt=""
                  style={{ width: "250px", height: "200px" }}
                  className="mb-4 ml-[100px]"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-[65px] ">
            <p className="text-[20px] mt-10  FontP">
              รองเท้า Nike Air Jordan 1 Mid SE{" "}
            </p>
            <p className="text-[20px] mt-1 FontP">‘Elephant Toe’</p>
            <p className="text-[18px] mt-1 FontP text-gray-400">
              สี : Black/University Red-White
            </p>
            <p className="text-[18px] mt-1 FontP text-gray-400">
              ขนาด M11US/45/29CM
            </p>
            <div className="flex items-center mt-4">
              <label htmlFor="quantity" className="mr-2 FontP">
                จำนวน:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="ml-5 border border-gray-400 px-[10px] py-[5px] rounded"
              />
              <span className="ml-2 FontP">ราคา: {quantity * 8700} บาท</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-20 mx-4 ml-[300px]">
            <span className="text-[22px] mt-16  FontP text-gray-800">
              {(quantity * 8700).toLocaleString()} บาท
            </span>
            <hr style={{ border: "1px solid gray-200", margin: "50px 0" }} />
          </div>

          <div className="flex flex-col  mt-10 ">
            <h1 className="text-[30px] Font1 font-bold">ทั้งหมด</h1>
            <div className="flex mt-6 ml-6 ">
              <p className="text-[20px] FontP">
                รองเท้า Nike Air Jordan 1 Mid SE{" "}
              </p>
              <div className="flex items-center justify-center ml-[215px]">
                <span className="text-[20px] FontP">
                  {(quantity * 8700).toLocaleString()} บาท{" "}
                </span>
              </div>
            </div>
            <div className="flex items-center  ml-6 ">
              <p className="text-[20px] FontP">‘Elephant Toe’</p>
            </div>
            <div className="flex mt-6 ml-6 ">
              <p className="text-[20px] FontP">
                ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ
              </p>
              <div className="flex items-center justify-center ml-[187px]">
                <p className="text-[20px] FontP">ฟรี</p>
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />
            <div className="flex ml-6 ">
              <p className="text-[20px] FontP">ยอดรวม</p>
              <div className="flex items-center justify-center ml-[200px]">
                <span className="text-[20px] FontP ml-[230px]"> {(quantity * 8700).toLocaleString()} บาท</span>
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />
            <div className="flex flex-col align-top ">
              <div className="flex justify-center items-center flex-col mt-20 ">
                <Link
                  to="/makepayment"
                  className=" font-bold Font btn bg-black text-white rounded-[30px] Font w-56 text-center mb-4 text-[15px]"
                >
                  ขำระสินค้า
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
