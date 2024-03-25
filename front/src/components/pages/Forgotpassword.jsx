import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Forgotpassword() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center font-bold text-center">
      <p className="text-[#000000] font-normal text-lg">ลืมก็สมักใหม่เอา</p>
      <div className="flex items-center justify-center mt-4">
        <p className="mr-2 font-bold Font">ไปสมัคร!</p>
        <Link to="/register" className="text-black underline font-bold Font">
          สมัครสมาชิก
        </Link>
      </div>
    </div>
 );
}
