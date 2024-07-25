import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccessMessage("");
      setLoading(true);
      const res = await axios.post("https://profile-project-api.vercel.app/api/users/register", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      setLoading(false);
      if (res.success === false) {
        setError(true);
        setSuccessMessage(res.message)
        return;
      }
      navigate("/login");
      setSuccessMessage(res.message || "User register successfully");
    } catch (error) {
      setLoading(false);
      setSuccessMessage("Email or password is not available");
    }
  };
  

  return (
    <div className="py-32 bg-orange-50 min-h-screen flex flex-col justify-center dark:bg-[#111827] items-center">
      <div>
        <h1 className="text-2xl font-bold py-5">Create An Account <span className="font-semibold text-sm">(Admin only)</span></h1>
      </div>
      <div>
        <Card className="w-[350px] md:w-[600px] flex flex-col px-5 py-2">
          <form onSubmit={handleSubmit}>
            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="username" value="Enter Your Name" />
              </div>
              <TextInput
                id="username"
                type="username"
                icon={CgProfile}
                placeholder="Jon Doe"
                required
                onChange={handleChange}
              />
            </div>
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
              {loading ? "Loading..." : "Sign Up"}
            </Button>
          </form>
          <p>{successMessage}</p>
          <p className="text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Register;
