import { Carousel } from "flowbite-react";
import sust2 from "../../assets/sust2.png";
import ideal from "../../assets/ideal.png";

const Education = () => {
  return (
    <div
      className=" py-16 px-10 lg:px-20 bg-orange-50 dark:bg-[#111827] flex flex-col justify-center items-center"
      id="education"
    >
      <div className="py-5">
        <h1 className="text-center text-2xl font-bold py-2">Education</h1>
        <p className="px-16 lg:px-24 xl:px-32 font-semibold text-sm">
          Currently pursuing a degree in Computer Science and Engineering,
          actively engaged in both collegiate and secondary education
          environments. Balancing academic studies with practical experiences to
          foster a well-rounded understanding of technology.
        </p>
      </div>
      <div className="h-[500px] sm:h-80 xl:h-80 2xl:h-96 md:w-[600px] lg:w-[900px] w-[350px] sm:w-[400px]">
        <Carousel>
          <div className="flex flex-col h-full bg-gray-400 dark:bg-gray-700 dark:text-white gap-5  justify-center items-center">
            <div className="flex">
              <img
                src={sust2}
                alt=""
                className="h-20 w-20 py-2 float-start px-5"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">
                  Shahjalal University of Science and Technology
                </h1>
                <p className="font-bold">
                  B.Sc (Engineering) degree-Computer Science and Engineering{" "}
                </p>
              </div>
            </div>
            <div className="px-5 items-center">
              <p>
                <span className="font-semibold">Grade</span> : Still Enrolled
              </p>
              <p>
                In the Computer Science and Engineering program at SUST,
                students delve into the intricate world of computing, mastering
                a diverse array of concepts spanning from software development
                to hardware design. With a focus on innovation and
                problem-solving, this esteemed course equips students with the
                skills and knowledge to tackle real-world challenges in the
                ever-evolving tech landscape.
              </p>
              <p>
                <span className="font-semibold">Duration</span>: March-2022 - Jan-2026
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full bg-gray-400 dark:bg-gray-700 dark:text-white gap-5  justify-center items-center">
            <div className="flex">
              <img
                src={ideal}
                alt=""
                className="h-20 w-20 py-2 float-start px-5"
              />
              <div className="flex flex-col">
                <h1 className="font-semibold">Ideal College, Dhanmondi</h1>
                <p className="font-bold">Science Group</p>
              </div>
            </div>
            <div className="px-5 items-center">
              <p>
                <span className="font-semibold">Grade</span> : 5.00
              </p>
              <p>
                I pursued my education in the science stream at college,
                focusing on subjects like physics, chemistry, and mathematics to
                gain a comprehensive understanding of scientific principles and
                theories.
              </p>
              <p>
                <span className="font-semibold">Duration</span>: January-2018 - Decemember-2020
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Education;
