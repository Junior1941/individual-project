import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";

export default function Product() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

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

      <div className=" flex">
        <div className="flex flex-col items-center mt-20 mx-4 ml-14">
          <p to="/">
            <img
              src="/Product1.jpg"
              alt=""
              style={{ width: "520px", height: "400px" }}
              className="mb-4"
            />
          </p>
        </div>

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
            <div className="flex ">
            <p className="FontP text-[21px] text-gray-400">
              ราคาปกติ 
            </p>

            <div className="text-gray-400 text-[21px] ml-2"  >
              <span style={lineStyle}>9,000 บาท</span>
              </div>
            </div>

            <div className="flex ">
              <p className="FontP text-[21px] text-gray-500 mt-1">แบบสินค้า</p>
              <p className="FontP text-[23px] text-gray-500 mt-1 ml-36">Nike</p>
            </div>
            <div className="flex ">
              <p className="FontP text-[21px] text-gray-500 mt-1">คงเหลือ</p>
              <p className="FontP text-[23px] text-gray-500 mt-2 ml-40">
                74 คู่
              </p>
            </div>
            <div className="flex ">
              <p className="FontP text-[21px] text-gray-500 mt-4">จำนวน</p>
              <div className="flex justify-center items-center flex-col ml-[142px] FontP">
                <div className="flex items-center mt-2">
                  <button
                    className="btn-quantity mr-2 p-2 border rounded-md"
                    onClick={handleDecrement}
                  >
                    <span className="text-lg">-</span>
                  </button>

                  <span className="quantity text-[20px] font-semibold">
                    {count}
                  </span>

                  <button
                    className="btn-quantity ml-2 p-2 border rounded-md"
                    onClick={handleIncrement}
                  >
                    <span className="text-lg">+</span>
                  </button>
                </div>
              </div>
              <div className="mt-1 ml-5">
              <select className="select select-bordered w-[100px] h-[30px] FontP text-[18px]">
              <option disabled selected>
              ไซส์
              </option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
            </select>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-[195px]  ">
          <Link
            to="/cart"
            className="font-bold Font btn bg-info text-white w-56 text-center mb-4"
          >
            ซื้อเลย
          </Link>
          <Link
            to="/cart"
            className="font-bold Font btn bg-white text-[#537eda] w-56 text-center border border-black"
          >
            หยิบใส่ตะกร้า
          </Link>
        </div>
      </div>
      <div className=" flex mt-4">
          <img
            src="/Product1.1.jpg"
            alt=""
            style={{ width: "200px", height: "170px" }}
            className="mb-4"
          />

          <img
            src="/Product1.2.jpg"
            alt=""
            style={{ width: "170px", height: "150px" }}
            className="mb-4"
          />
          <div className="ml-3">
            <img
              src="/Product1.3.jpg"
              alt=""
              style={{ width: "200px", height: "170px" }}
              className="mb-4"
            />
          </div>
          <div className="ml-3">
            <img
              src="/Product1.4.jpg"
              alt=""
              style={{ width: "200px", height: "170px" }}
              className="mb-4"
            />
          </div>
          <div className="ml-4">
            <div className=" flex Font1 text-[19px]">
              <p>ข้อมูล</p>
            </div>
            <div className="flex Font1 text-[19px] ">
              <p> รายละเอียดสินค้า</p>
            </div>
            <div className=" FontP ml-10">
              <p className="text-[19px]">
                รองเท้า Nike Air Jordan 1 Mid SE ‘Elephant Toe’ : DM1200-016-11
              </p>
              <p className="text-[19px]">สี : Black/University Red-White</p>
              <p className="text-[19px]"> แนะนำ : เท้าทุกประเภท </p>
              <p className="text-[19px]">
                #รองเท้ามือ1 พร้อมกล่อง + เชือกสีแดง 1 ชุด{" "}
              </p>
              <p className="text-[19px]">SKU : DM1200-016-11</p>
              <p className="text-[19px] mt-5">Nike Air Jordan 1 Mid SE ‘Elephant Toe’ รองเท้าสนีกเกอร์รุ่นระดับท็อปจากซีรี่ย์ Air Jordan ได้รับความนิยมเป็นอย่างสูง</p>
              <p className="text-[19px] ">โดดเด่นด้วยเทคโนโลยี Air ช่วยรองรับแรงกระแทกบริเวณส้นเท้า หน้าผ้าอัปเปอร์ใช้วัสดุระดับพรีเมียมหลากหลายชนิด อาทิหนังแท้ </p>
              <p className="text-[19px] ">แต่งลายด้วยหนังช้าง (Elephant Printed) ให้ดูมีมิติ ปิดท้ายด้วยตราโลโก้ Air Jordan บริเวณข้อเท้า </p>
              <p className="text-[19px] ">เหมาะสำหรับเป็นเพื่อนคู่ใจตะลุยไปพร้อมกับคุณได้ทุกที่เลยครับ 🥳 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
