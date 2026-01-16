import Image from "next/image";
import { GradualSpacing } from "./ui/GradualSpacing";
import { ShineBorder } from "./ui/ShineBorder";
import { aboutData } from "@/data";

function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center w-full py-20 container">
        <GradualSpacing text="About Me" />
        <ShineBorder
          className="relative w-full flex-col overflow-hidden rounded-lg border !bg-[#020617] md:shadow-xl p-5 sm:p-10"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex gap-x-10 gap-y-5 flex-col items-center md:items-start text-center md:text-start md:flex-row w-full font-cairo">
            <div className="rounded-full overflow-hidden size-32 sm:!size-60">
              <Image
                src="/me2.jpeg"
                alt="Marwan Abdalrady"
                width={400}
                height={400}
                className="rounded-full w-full object-cover"
                priority
              />
            </div>
            <div className="!leading-relaxed text-sm md:text-lg flex-1 text-start">
              <p>
                I’m Marwan Abdalrady, MERN Stack Developer skilled in React.js, Next.js, and Node.js, 
                with additional expertise in automation scripting using Python and Selenium. Passionate about building 
                scalable applications and automation systems.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-10 mt-5 w-full justify-between">
                {aboutData.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center flex-1 justify-start"
                  >
                    <span className="text-3xl font-bold text-black dark:text-white">
                      +{item.number}
                    </span>
                    <span className="text-sm md:text-md text-gray-600 dark:text-gray-400">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
}
export default About;
