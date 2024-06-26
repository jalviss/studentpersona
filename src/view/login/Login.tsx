import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { studentData } from "../../utils/data";
import { IStudent } from "../../interfaces/Student.interfaces";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState<IStudent>();

  const navigate = useNavigate();
  const dtdnt = localStorage.getItem("student");

  useEffect(() => {
    console.log('currStudent')
    if (dtdnt) {
      const currStudent: IStudent = JSON.parse(dtdnt);
      console.log(currStudent)
    }
    if(user){
        localStorage.setItem('student', JSON.stringify(user));
        navigate("/")
    }
  }, [user, navigate, dtdnt]);

  const handleSubmitLogin = () => {
    if ("" === email || "" === password) {
      setError("Please enter both your email and password");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("Please enter a valid email");
    } else {
      const data = studentData;

      const foundStudent = data.find(student => email === student.email && password === student.password);

      while (foundStudent === null){
        setError("Please enter the right credentials");
      }

      if (foundStudent) {
        setUser(foundStudent);
      } else {
        setError("Please enter the right credentials");
      }
    }
  };

  return (
    <div className="h-screen w-screen bg-[#F3F3F3] flex justify-center items-center">
      <div className="relative h-[97vh] w-[99vw] flex justify-center">
        <div className="h-1/2 w-3/12 flex bg-[#FAFAFA] z-50 my-auto rounded-xl p-10 py-14 shadow-xl">
          <div
            className="w-full h-full"
            // onSubmit={() => {
            //   handleSubmitLogin();
            // }}
            // action=''
          >
            <div className="text-2xl">
              <b>Welcome to Student Persona!</b>
            </div>
            <div className="text-xl mt-2">Please log in to your account.</div>

            <div className="w-full h-14 relative mt-7">
              <input
                className="w-full h-full bg-transparent outline-none focus:border-[#0097DA] border-2 py-3 pr-14 pl-4 rounded-3xl text-lg text-black"
                value={email}
                placeholder="Email"
                onChange={(ev) => setEmail(ev.target.value)}
                type="text"
                required
              />
              <FaUser className="absolute right-5 top-5 text-lg" />
            </div>

            <div className="w-full h-14 relative mt-7">
              <input
                className="w-full h-full bg-transparent outline-none focus:border-[#0097DA] border-2 py-3 pr-14 pl-4 rounded-3xl text-lg text-black"
                value={password}
                placeholder="Password"
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                required
              />
              <FaLock className="absolute right-5 top-5 text-lg" />
            </div>
            <label className="text-red-600 pl-4">{error}</label>

            <div>
              <button
                className="w-full h-14 mt-7 bg-[#0097DA] rounded-3xl text-xl border-none outline-none shadow-lg hover:bg-[#015581] hover:text-slate-50"
                // type="submit" 
                onClick={() => { handleSubmitLogin() }}
              >
                <b>Login</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
