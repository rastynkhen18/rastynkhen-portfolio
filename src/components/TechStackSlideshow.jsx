import React from "react";

// Import icons
import HtmlIcon from "../assets/icons/html.svg";
import CssIcon from "../assets/icons/css.svg";
import JsIcon from "../assets/icons/javascript.svg";
import PhpIcon from "../assets/icons/php.svg";
import MysqlIcon from "../assets/icons/database.svg";
import ReactIcon from "../assets/icons/react.svg";
import TailwindIcon from "../assets/icons/tailwindcss.svg";
import NextIcon from "../assets/icons/next.svg";
import SupabaseIcon from "../assets/icons/supabase.svg";
import AndroidStudioIcon from "../assets/icons/android.svg";
import FirebaseIcon from "../assets/icons/firebase.svg";
import UnityIcon from "../assets/icons/unity.svg";
import ReactNativeIcon from "../assets/icons/react.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import PhotoshopIcon from "../assets/icons/adobe-photoshop.svg";
import PremiereIcon from "../assets/icons/adobe-illustrator.svg";
import CppIcon from "../assets/icons/cpp.svg";
import JavaIcon from "../assets/icons/java.svg";
import CSharpIcon from "../assets/icons/csharp.svg";
import PythonIcon from "../assets/icons/python.svg";
import TypescriptIcon from "../assets/icons/typescript.svg";
import GitIcon from "../assets/icons/git.svg";
import VercelIcon from "../assets/icons/vercel.svg";

const techStack = [
  { icon: <img src={HtmlIcon} alt="HTML" className="w-6 h-6" />, label: "HTML" },
  { icon: <img src={CssIcon} alt="CSS" className="w-6 h-6" />, label: "CSS" },
  { icon: <img src={JsIcon} alt="JavaScript" className="w-6 h-6" />, label: "JavaScript" },
  { icon: <img src={PhpIcon} alt="PHP" className="w-6 h-6" />, label: "PHP" },
  { icon: <img src={MysqlIcon} alt="MySQL" className="w-6 h-6" />, label: "MySQL" },
  { icon: <img src={ReactIcon} alt="React.js" className="w-6 h-6" />, label: "React.js" },
  { icon: <img src={TailwindIcon} alt="Tailwind CSS" className="w-6 h-6" />, label: "Tailwind CSS" },
  { icon: <img src={NextIcon} alt="Next.js" className="w-6 h-6" />, label: "Next.js" },
  { icon: <img src={SupabaseIcon} alt="Supabase" className="w-6 h-6" />, label: "Supabase" },
  { icon: <img src={AndroidStudioIcon} alt="Android Studio" className="w-6 h-6" />, label: "Android Studio" },
  { icon: <img src={FirebaseIcon} alt="Firebase" className="w-6 h-6" />, label: "Firebase" },
  { icon: <img src={UnityIcon} alt="Unity" className="w-6 h-6" />, label: "Unity" },
  { icon: <img src={ReactNativeIcon} alt="React Native" className="w-6 h-6" />, label: "React Native" },
  { icon: <img src={FigmaIcon} alt="Figma" className="w-6 h-6" />, label: "Figma" },
  { icon: <img src={PhotoshopIcon} alt="Adobe Photoshop" className="w-6 h-6" />, label: "Adobe Photoshop" },
  { icon: <img src={PremiereIcon} alt="Adobe Illustrator" className="w-6 h-6" />, label: "Adobe Illustrator" },
  { icon: <img src={CppIcon} alt="C++" className="w-6 h-6" />, label: "C++" },
  { icon: <img src={JavaIcon} alt="Java" className="w-6 h-6" />, label: "Java" },
  { icon: <img src={CSharpIcon} alt="C#" className="w-6 h-6" />, label: "C#" },
  { icon: <img src={PythonIcon} alt="Python" className="w-6 h-6" />, label: "Python" },
  { icon: <img src={JsIcon} alt="JavaScript" className="w-6 h-6" />, label: "JavaScript" },
  { icon: <img src={TypescriptIcon} alt="TypeScript" className="w-6 h-6" />, label: "TypeScript" },
  { icon: <img src={GitIcon} alt="Git/GitHub" className="w-6 h-6" />, label: "Git/GitHub" },
  { icon: <img src={VercelIcon} alt="Vercel" className="w-6 h-6" />, label: "Vercel" },
];

const TechStackSlideshow = () => {
  const repeatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-[70%] flex flex-col justify-center items-center text-center bg-[var(--black-color)] p-5">
        <style>{`
        .slideshow-viewport {
          width: 100%;
          overflow: hidden;
        }
        .slideshow-track {
          display: flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        <div className="relative w-full">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10" />

          {/* Sliding track */}
          <div className="slideshow-viewport">
            <div className="slideshow-track">
              {repeatedTechStack.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center gap-2 cursor-pointer transition-colors shrink-0 text-[var(--white-color)] font-semibold px-6"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-[var(--text-gray)] py-5">Built with the modern development tools that shape my tech stack.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackSlideshow;
