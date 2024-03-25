import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function makepayment() {
  const {} = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    username: "",
    password: "",
  });

  const handleQuantityChange = (event) => {
    // Ensure the quantity is a positive integer
    const newQuantity = Math.max(1, Math.floor(event.target.value));
    setQuantity(newQuantity);
  };
  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      const rs = await axios.post("http://localhost:8889/auth/register", input);
      console.log(rs);
      if (rs.status === 200) {
        alert("Register Successful");
      }
    } catch (err) {
      console.log(err.message);
    }
  };



  return (
    <div>
      <div className=" mt-[200px]">
        <div className="flex ">
          <div className="flex flex-col  mt-10 ml-[100px]">
            <h1 className="text-[30px] Font1 font-bold">การชำระเงิน</h1>
            <select className="select select-bordered w-full max-w-xs Font1">
              <option disabled selected>
                เลือกการชำระเงิน
              </option>
              <option>บัตรเครดิตหรือเดบิต</option>
              <option>qr code</option>
              <option>mastercard</option>
            </select>
            <div className=" flex">
              <div className=" mt-8">
                <div className="form-control mx-auto ">
                  <input
                    type="text"
                    placeholder="name on card"
                    className="input input-bordered pe-20 Font1"
                  />
                </div>
              </div>
              <div className=" flex">
                <div className=" mt-8">
                  <div className="form-control mx-auto ">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="input input-bordered pe-20  Font1 ml-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex">
              <div className=" mt-[15px]">
                <div className="form-control mx-auto ">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input input-bordered pe-1 Font1"
                  />
                </div>
              </div>
              <div className=" flex">
                <div className=" mt-[15px]">
                  <div className="form-control mx-auto ">
                    <input
                      type="text"
                      placeholder="CVV"
                      className="input input-bordered pe-1  Font1 ml-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />
            <div className="">
              <h className="text-[28px] Font1 font-bold">
              ป้อนชื่อและที่อยู่:
              </h>
            </div>
            <div className=" flex">
              <div className=" mt-1">
                <div className="form-control mx-auto ">
                  <input
                    type="text"
                    placeholder="ชื่อ"
                    className="input input-bordered pe-20 Font1"
                  />
                </div>
              </div>
              <div className=" flex">
                <div className=" mt-1">
                  <div className="form-control mx-auto ">
                    <input
                      type="text"
                      placeholder="นามสกุล"
                      className="input input-bordered pe-20  Font1 ml-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex">
              <div className=" mt-5">
                <div className="form-control mx-auto ">
                  <input
                    type="text"
                    placeholder="ที่อยู่"
                    className="input input-bordered pe-15 Font1"
                  />
                </div>
              </div>
              <div className=" flex">
                <div className=" mt-5">
                  <div className="form-control mx-auto ">
                    <input
                      type="text"
                      placeholder="เขต/อำเภอ"
                      className="input input-bordered pe-15  Font1 ml-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex">
              <div className=" mt-5">
                <div className="form-control mx-auto ">
                <select className="select select-bordered w-full max-w-xs Font1">
              <option disabled selected>
              จังหวัด
              </option>
              <option>เชียงใหม่</option>
              <option>นครราชสีมา</option>
              <option>กาญจนบุรี</option>
              <option>ตาก</option>
              <option>อุบลราชธานี</option>
              <option>สุราษฎร์ธานี</option>
              <option>ชัยภูมิ</option>
              <option>แม่ฮ่องสอน</option>
              <option>เพชรบูรณ์</option>
              <option>ลำปาง</option>
              <option>อุดรธานี</option>
              <option>เชียงราย</option>
              <option>น่าน</option>
              <option>	เลย</option>
              <option>	ขอนแก่น</option>
              <option>	พิษณุโลก</option>
              <option>บุรีรัมย์</option>
              <option>นครศรีธรรมราช</option>
              <option>สกลนคร</option>
              <option>นครสวรรค์</option>
              <option>	ศรีสะเกษ</option>
              <option>	กำแพงเพชร</option>
              <option>	ร้อยเอ็ด</option>
              <option>	มหาสารคาม</option>
              <option>	ยโสธร</option>
            </select>
                </div>
                
              </div>


              <div className=" flex">
                <div className=" mt-5">
                  <div className="form-control mx-auto ">
                    <input
                      type="text"
                      placeholder="รหัสไปรษณัย์"
                      className="input input-bordered pe-[0px]  FontP ml-5"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex">
                <div className=" mt-5">
                  <div className="form-control mx-auto ml-5">
                  <select className="select select-bordered w-full max-w-xs Font1">
              <option disabled selected>
              ประเทศ
              </option>
              <option>ไทย</option>
            </select>

                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">อีเมล</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="block text-left ml-5">
              <span className="text-gray-800 Font">เบอร์โทร</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="phone"
                value={input.phone}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
          </div>

          <div className="flex flex-col  mt-10 ml-[500px]">
            <h1 className="text-[30px] Font1 font-bold">ทั้งหมด</h1>
            <div className="flex mt-6 ml-6 ">
              <p className="text-[20px] FontP">
                รองเท้า Nike Air Jordan 1 Mid SE{" "}
              </p>
              <div className="flex items-center justify-center ml-[215px]">
                <p className="text-[20px] FontP">8,700.00 บาท</p>
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
                <p className="text-[20px] FontP ml-[230px]">8,700.00 บาท</p>
                
              </div>
            </div>
            <hr style={{ border: "1px solid gray-200", margin: "10px 0" }} />

            <div className="flex ">
              <Link to="/product">
                <img
                  src="/Product1.jpg"
                  alt=""
                  style={{ width: "200px", height: "170px" }}
                  className="mb-4 mt-2 ]"
                />
              </Link>
              <div className="flex flex-col ml-[20px] ">
                <p className="text-[20px]   FontP">
                  รองเท้า Nike Air Jordan 1 Mid SE{" "}
                </p>
                <p className="text-[20px] mt-1 FontP">‘Elephant Toe’</p>
                <p className="text-[19px] mt-1 FontP text-gray-400">
                  สี : Black/University Red-White
                </p>
                <p className="text-[19px] mt-1 FontP text-gray-400">
                  ขนาด /45/
                </p>
                <div className="flex ">
                  <p className="text-[19px] FontP text-gray-400">
                    8,700.00 บาท
                  </p>
                </div>
                <div className=" mt-16">
                <Link  to=""
                  
                  className=" font-bold Font btn bg-black text-white rounded-[30px] Font w-56 text-center mb-4 text-[15px]"
                >
                  ดำเนินการต่อ
          </Link>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
