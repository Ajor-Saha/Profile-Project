import  { useEffect, useRef } from "react";
import avatar from "../../assets/avatar.avif";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const typeWriterRef = useRef(null);

  useEffect(() => {
    typeWriterRef.current?.start();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200 py-32 dark:text-gray-50 dark:bg-[#111827] w-full" id="about">
      <div className="hero-content flex-col lg:flex-row-reverse gap-7">
        <img src={avatar} className="max-w-sm rounded-lg shadow-2xl w-1/2 lg:ml-10" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Hi, I am</h1>
          <h1 className="text-5xl font-bold">Ajor Saha</h1>
          <h3 className="text-3xl font-bold">
          <Typewriter
              options={{
                strings: ["I am a Full stack developer"],
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typeWriterRef.current = typewriter;
              }}
            />
          </h3>
          <p className="py-6">
            Welcome to my portfolio! I'm a full-stack developer passionate about
            crafting seamless digital experiences. With expertise in both
            front-end and back-end technologies, I specialize in creating
            dynamic web solutions. Explore my projects to see how I blend
            innovation with functionality to deliver exceptional results. Let's
            build something amazing together!
          </p>
          <a href="https://drive.google.com/file/d/1-zUpmopPeb1x8TtnIDO6C1nAZydTno4C/view?usp=sharing" target="_blank" className="btn btn-primary">Check Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
