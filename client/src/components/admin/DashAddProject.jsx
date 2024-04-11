import {
  Button,
  Card,
  FileInput,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
import React, { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";
import { GrReactjs } from "react-icons/gr";
import { FaNode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import axios from "axios";
import { useSelector } from "react-redux";

const DashAddProject = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    feature: "",
    category: "",
    frontendStack: "",
    backendStack: "",
    sourceCode: "",
    liveWebsiteLink: "",
    projectImages: [],
  });

  const { accessToken } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, projectImages: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "projectImages") {
        value.forEach((file) => {
          formDataToSend.append("projectImages", file);
        });
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      setLoading(true);
      setMessage("");
      const response = await axios.post("/api/project/addProject", formDataToSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      if (response.status === 201) {
        setMessage("Project added successfully");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error adding project:", error);
      setMessage("Failed to add project");
    }
  };


  return (
    <div className="mx-auto py-10 flex flex-col">
      <div>
        <h1 className="text-center text-lg font-bold py-2">Add New Project</h1>
      </div>
      <div className="py-10">
        <Card className="w-96 lg:w-[600px] flex flex-col px-5 py-2">
          <form onSubmit={handleSubmit}>
            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="name" value="Project Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={GoProjectRoadmap}
                placeholder="E-commerce..."
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="py-2 max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="projectImages" value="Upload file" />
              </div>
              <FileInput
                id="projectImages"
                name="projectImages" // Make sure the name attribute matches the backend expectation
                onChange={handleFileChange}
                multiple
              />
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Project Description" />
              </div>
              <Textarea
                id="description"
                type="description"
                placeholder="This project ..."
                rows={4}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="feature" value="Project Feature" />
              </div>
              <Textarea
                id="feature"
                type="feature"
                placeholder="This project ..."
                rows={3}
                value={formData.feature}
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Select Project type" />
              </div>
              <Select
                id="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="full-stack">Full Stack</option>
                <option value="mern-stack">Mern Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </Select>
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="frontendStack" value="Frontend Tech Stack" />
              </div>
              <TextInput
                id="frontendStack"
                type="text"
                icon={GrReactjs}
                placeholder="React, HTML, CSS..."
                value={formData.frontendStack}
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="backendStack" value="Backend Tech Stack" />
              </div>
              <TextInput
                id="backendStack"
                type="text"
                icon={FaNode}
                placeholder="Node.js, Express, MongoDB..."
                value={formData.backendStack}
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md py-2">
              <div className="mb-2 block">
                <Label htmlFor="sourceCode" value="Source Code Link" />
              </div>
              <TextInput
                id="sourceCode"
                type="text"
                icon={FaCode}
                placeholder="https://github.com/yourproject"
                value={formData.sourceCode}
                onChange={handleChange}
                required
              />
            </div>

            <div className="max-w-md pt-2 pb-5">
              <div className="mb-2 block">
                <Label htmlFor="liveWebsiteLink" value="Live Website Link" />
              </div>
              <TextInput
                id="liveWebsiteLink"
                type="text"
                icon={CgWebsite}
                placeholder="https://www.yourwebsite.com"
                value={formData.liveWebsiteLink}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              outline
              gradientDuoTone="purpleToPink"
              className="w-40"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
          <p className="text-blue-500">{message}</p>
        </Card>
      </div>
    </div>
  );
};

export default DashAddProject;
