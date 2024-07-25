import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      dispatch(signInStart());
      const res = await axios.post(
        "https://profile-project-api.vercel.app/api/users/login",
        JSON.stringify(formData), // Serialize form data
        {
          headers: {
            "Content-Type": "application/json", // Set content type to JSON
          },
        }
      );
      const data = res.data;
      if (data.success === false) {
        dispatch(signInFailure(data));
        setMessage("You are not admin");
        return;
      }

      const { user, accessToken } = data.data;
      dispatch(signInSuccess({ user, accessToken }));

      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
      setMessage("You are not admin");
    }
  };


  return (
    <div className="py-32 min-h-screen bg-orange-50 dark:bg-[#111827] flex flex-col justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold py-5">Login <span className="font-semibold text-sm">(Admin only)</span></h1>
      </div>
      <div>
        <Card className="w-[350px] md:w-[600px] flex flex-col px-5 py-2">
          <form onSubmit={handleSubmit}>
            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Enter Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="name@flowbite.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Enter Your Password" />
              </div>
              <TextInput
                id="password"
                type="password"
                icon={RiLockPasswordFill}
                placeholder="............."
                required
                onChange={handleChange}
              />
            </div>

            <Button
              outline
              gradientDuoTone="purpleToPink"
              className="w-40 mt-2"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/signup" className="text-xs text-gray-500 uppercase dark:text-gray-50">
              or sign up
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          <p className="dark:text-gray-50 text-black">{message}</p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
