import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { SiNamecheap } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSuccessMessage("");
      setLoading(true);
      const res = await axios.post("/api/contact/createContact", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        setSuccessMessage("Something went wrong")
      }
    
      setLoading(false);
      setSuccessMessage(res.message || "Message sent successfully");
    } catch (error) {
      setLoading(false);
      console.error("Error sending message:", error);
      setSuccessMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col dark:bg-[#111827] justify-center items-center bg-orange-50 py-16"
      id="contact"
    >
      <div>
        <h1 className="py-2 font-bold text-2xl text-center">Contact</h1>
        <p className="text-center font-semibold text-sm font-sans">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <div className="py-5">
        <Card className="w-96 md:w-[600px] px-5 py-2">
          <form onSubmit={handleSubmit} className="gap-5 flex flex-col">
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Your Name" />
              </div>
              <TextInput
                id="fullName"
                type="text"
                icon={CgProfile}
                placeholder="Jon Doe"
                onChange={handleChange}
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="name@flowbite.com"
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Subject" />
              </div>
              <TextInput
                id="subject"
                type="text"
                sizing="lg"
                placeholder="topic to discuss"
                onChange={handleChange}
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="message" value="Your message" />
              </div>
              <Textarea
                id="message"
                placeholder="Leave your Message..."
                required
                rows={4}
                onChange={handleChange}
              />
            </div>
            <Button 
            outline gradientDuoTone="purpleToPink"
             className="w-40 cursor-pointer"
             type="submit"
             disabled={loading}
             >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
          <p className="text-blue-300">{successMessage}</p>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
