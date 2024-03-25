import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    username: "",
    password: "",
  });

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
    <div className="border border-solid border-Gray White bg-white rounded-md shadow-md w-full max-w-[800px] mx-auto mt-10 text-center p-8 ">
      <div className=" text-4xl mb-5 text-center Font font-bold">สมัครสมาชิก</div>
      <form className="flex flex-col gap-10 mt-16" onSubmit={hdlSubmit}>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">ชื่อ</span>
              <input
                type="text"
                className="form-input mt-1 block w-full h-12 border rounded-md"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-1/2 ">
            <label className="block text-left">
              <span className="text-gray-800 Font">นามสกุล</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="flex gap-4">
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
            <label className="block text-left">
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

        <label className="block text-left">
          <span className="text-gray-800 Font">ที่อยู่</span>
          <input
            type="text"
            className="form-input mt-1 block w-full border rounded-md h-12"
            name="address"
            value={input.address}
            onChange={handleChange}
          />
        </label>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">Username</span>
              <input
                type="text"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="username"
                value={input.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="w-1/2">
            <label className="block text-left">
              <span className="text-gray-800 Font">Password</span>
              <input
                type="password"
                className="form-input mt-1 block w-full border rounded-md h-12"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 ">
          <button
            type="submit"
            className="btn bg-black text-white rounded-[30px] Font w-40">
            สมัครสมาชิก
          </button>
        </div>

        <div className="flex items-center justify-center mt-4 ">
          <p className="mr-2 font-bold Font">ฉันมีบัญชีอยู่แล้ว ?</p>
          <Link to="/login" className="text-black underline font-bold Font">
            เข้าสู่ระบบ
          </Link>
        </div>
      </form>
    </div>
  );
}
