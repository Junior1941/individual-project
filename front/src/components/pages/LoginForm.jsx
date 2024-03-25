import axios from "axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const { setUser } = useAuth();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    console.log(input)
    try {
      // validation
      const rs = await axios.post("http://localhost:8889/auth/login", input);
      // console.log(rs.data.token)
      localStorage.setItem("token", rs.data.token);
      const rs1 = await axios.get("http://localhost:8889/auth/me", {
        headers: { Authorization: `Bearer ${rs.data.token}` },
      });
      // console.log(rs1.data)
      setUser(rs1.data);
      // navigateToHome()
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="p-20 border border-solid border-Gray White bg-white  shadow-md w-96 min-w-[500px] mx-auto rounded mt-4">
      <p className="text-1xl mb-5 text-left Font ">ยินดีต้อนรับกลับ !!!</p>
      <div className="text-4xl mb-5 text-left font-fantasy font-bold Font">
        เข้าสู่ระบบ
      </div>
      <form className="flex flex-col " onSubmit={hdlSubmit}>
        <div className=" flex-col justify-center items-center ">
          <label className="form-control w-full max-w-xs mt-5">
            <span className="text-gray-800 font-bold Font  ">Username</span>
            <input
              type="text"
              className="input input-bordered gap-8 w-auto"
              name="username"
              placeholder="Username"
              value={input.username}
              onChange={hdlChange}
            />
          </label>

          <label className="form-control w-full max-w-xs mt-8">
            <span className="text-gray-800 font-bold Font">Password</span>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs "
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={hdlChange}
            />
          </label>

          <div className="flex mt-4 items-center justify-end">
            <Link
              to="/forgotpassword"
              className="text-[#828282] underline Font-position Font"
            >
              ลืมรหัสผ่าน?
            </Link>
            <p className="ml-2 font-bold Font">ㅤ⠀</p>
          </div>

          <div className="flex items-center justify-center mt-16 ">
            <p className="mr-2 font-bold Font">ฉันยังไม่มีบัญชี ?</p>
            <Link
              to="/register"
              className="text-black underline font-bold Font"
            >
              สมัครสมาชิก
            </Link>
          </div>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="btn bg-black border-white border-[1px] text-white shadow-md hover:shadow-white pl-2 ml-3 mt-5 w-40 h-10 rounded-[30px] Font"
            >
            เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
