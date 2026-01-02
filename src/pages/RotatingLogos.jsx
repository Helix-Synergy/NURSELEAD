import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.webp";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.avif";
import img6 from "../assets/tracks/img6.webp"
import img7 from "../assets/tracks/img7.jpg";
import img8 from "../assets/tracks/img8.webp"
import img9 from "../assets/tracks/img9.png";
import img10 from "../assets/tracks/img10.avif"
import img11 from "../assets/tracks/img11.jpg";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.webp";
import img14 from "../assets/tracks/img14.png"
import img15 from "../assets/tracks/img15.webp";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.jpg";
import img19 from "../assets/tracks/img19.webp"
import img20 from "../assets/tracks/img20.webp"

export const tracks = [
  {
    image: img1,
    title: "Leadership Strategy",
    description: (
      <>
 {" "}
        <Link
          to= "/nurselead-conference-tracks/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Leadership strategy
        </Link> in nursing focuses on vision, planning, and decision-making to guide healthcare teams effectively. It aligns organizational goals with patient care priorities, workforce development, and quality improvement. Strong leadership strategies enable adaptability, innovation, accountability, and sustainable performance within complex and evolving healthcare environments globally today.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Nurse Empowerment",
    description: (
      <>
{" "}
        <Link
          to= "/nurselead-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nurse empowerment
        </Link>{" "} promotes autonomy, confidence, and participation in decision-making. It supports professional growth, leadership opportunities, and recognition of nursing contributions. Empowered nurses deliver higher-quality care, improve patient outcomes, enhance job satisfaction, and strengthen healthcare systems by fostering accountability, collaboration, and continuous improvement across clinical and organizational settings.
      </>
    ),
  },

  {
    image: img3,
    title: "AI in Nursing",
    description: (
      <>
{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI in nursing
        </Link>integrates intelligent technologies to support clinical decision-making, documentation, and patient monitoring. It enhances efficiency, accuracy, and predictive insights. Nurses use AI tools to reduce workload, improve care coordination, identify risks early, and deliver personalized, data-driven care while maintaining ethical, patient-centered practice standards.
      </>
    ),
  },

  {
    image: img4,
    title: "Workforce Optimization",
    description: (
      <>
  {" "}
        <Link
          to="/nurselead-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > Workforce optimization </Link>{" "} focuses on aligning staffing levels, skills, and resources with patient care demands. It uses data-driven planning, flexible models, and performance analysis. Effective optimization improves efficiency, reduces burnout, enhances care quality, and ensures the right nursing expertise is available at the right time and place.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Nursing Research",
    description: (
      <>
{" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nursing research
        </Link>{" "}  advances evidence-based practice by generating knowledge that improves patient care and healthcare systems. It explores clinical outcomes, education, leadership, and policy. Nurses conduct and apply research to enhance quality, safety, innovation, and professional practice while contributing to scientific advancement and healthcare transformation globally.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Skill Advancement",
    description: (
      <>

        <Link
          to= "/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Skill advancement 
        </Link>{" "}  in nursing focuses on developing clinical, technical, and leadership competencies. It supports continuous learning through training, certification, and hands-on experience. Advancing skills enhances clinical confidence, adaptability, patient safety, and career progression, ensuring nurses remain competent and effective in rapidly evolving healthcare environments worldwide.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Clinical Education",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Clinical education
        </Link>{" "}   prepares nurses for safe, competent practice through structured training and real-world experience. It integrates simulation, mentorship, and evidence-based learning. Strong clinical education bridges theory and practice, enhances critical thinking, and ensures nurses are equipped to manage complex patient needs across diverse healthcare settings.
      </>
    ),
  },

  {
    image:  img8,
    title: "Decision Making",
    description: (
      <>
  {" "}
        <Link
          to= "/about-nurselead"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Decision making
        </Link>{" "}  in nursing involves critical thinking, clinical judgment, and ethical reasoning. Nurses assess information, evaluate risks, and choose appropriate interventions. Effective decision making improves patient safety, care quality, and outcomes while supporting accountability, autonomy, and collaboration within multidisciplinary healthcare teams in high-pressure clinical environments.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Workforce Forecasting",
    description: (
      <>
{" "}
        <Link
          to="/about-nurselead" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Workforce forecasting  
        </Link>{" "} predicts future nursing workforce needs based on population trends, healthcare demand, and workforce data. It supports strategic planning, education capacity, and policy development. Accurate forecasting ensures sustainable staffing, reduces shortages, improves service delivery, and strengthens healthcare system preparedness for future challenges and demographic changes.

      </>
    ),
  },

  {
    image: img10,
    title: "Nurse Autonomy",
    description: (
      <>
{" "}
        <Link
          to="/nurselead-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nurse autonomy
        </Link>{" "} refers to the ability to make independent clinical decisions within professional scope. It enhances accountability, confidence, and job satisfaction. Autonomous nurses deliver timely, patient-centered care, support innovation, and improve outcomes while strengthening professional identity and contributing meaningfully to interdisciplinary healthcare teams.
      </>
    ),
  },

  {
    image: img11,
    title: "Nurse Well-Being",
    description: (
      <>
     {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Nurse well-being
        </Link>  focuses on physical, emotional, and mental health of nursing professionals. It addresses stress, burnout, workload balance, and workplace support. Promoting well-being improves retention, performance, patient safety, and organizational culture, ensuring nurses remain resilient, motivated, and capable of delivering high-quality care.
      </>

    ),
  },

  {
    image: img12,
    title: "Pharmacodynamics",
    description: (
      <>
 {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Remote Nursing
        </Link>{" "}  uses digital technologies to deliver care outside traditional clinical settings. It supports virtual assessments, monitoring, education, and follow-up. Remote nursing improves access, continuity, and efficiency while enabling nurses to manage chronic conditions, support underserved populations, and adapt to flexible, technology-driven care models. 
      
      </>
    ),
  },

  {
    image: img13,
    title: "Professional Development",
    description: (
      <>
{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Professional development
        </Link> in nursing supports lifelong learning, career advancement, and leadership growth. It includes education, training, mentoring, and skill enhancement. Continuous development strengthens competence, adaptability, and confidence, enabling nurses to meet evolving healthcare demands, pursue diverse roles, and contribute effectively to organizational and patient care goals.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Behavioral Health",
    description: (
      <>
 {" "}
        <Link
          to="/about-nurselead" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Behavioral health
        </Link>  nursing addresses emotional, psychological, and behavioral well-being. It supports assessment, therapeutic communication, crisis intervention, and recovery-oriented care. Nurses play a key role in managing mental health conditions, reducing stigma, supporting patients and families, and integrating behavioral health services across healthcare and community settings.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Communication Skills",
    description: (
      <>
      {" "}
        <Link
          to= "/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Communication skills
        </Link>are essential for effective nursing practice. They support patient education, teamwork, conflict resolution, and safety. Clear, compassionate communication improves trust, reduces errors, enhances collaboration, and ensures patient-centered care, particularly in complex, high-stress healthcare environments requiring coordination among diverse professionals and patients.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Staffing Innovation",
    description: (
      <>
{" "}
        <Link
          to= "/nurselead-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Staffing innovation
        </Link>  explores new models to address workforce challenges and improve care delivery. It includes flexible scheduling, skill mix optimization, technology integration, and new roles. Innovative staffing enhances efficiency, reduces burnout, improves patient outcomes, and supports sustainable workforce solutions in dynamic healthcare systems.
</>
    ),
  },

  {
    image:img17,
    title: "Future of Nursing Leadership",
    description: (
      <>
 The{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
future of nursing leadership
        </Link>  emphasizes innovation, inclusivity, and strategic influence. It prepares leaders to navigate digital transformation, workforce challenges, and policy change. Future-focused nurse leaders drive quality improvement, advocate for the profession, and shape resilient healthcare systems that prioritize patient-centered and equitable care.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Mental Health Nursing",
    description: (
      <>
   {" "}
        <Link
          to="/about-nurselead" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Mental health nursing
        </Link>  focuses on supporting individuals with psychological and emotional conditions. It emphasizes assessment, therapeutic relationships, crisis management, and recovery-oriented care. Mental health nurses promote resilience, dignity, and integration of services while addressing stigma and improving access to compassionate, evidence-based mental healthcare.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Women in Nursing Leadership",
    description: (
      <>
  {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Women in nursing leadership 
        </Link>   highlights the advancement and influence of women in executive and decision-making roles. It addresses equity, mentorship, and leadership development. Empowering women leaders strengthens organizational performance, diversity, innovation, and advocacy, ensuring nursing perspectives shape healthcare policy and system-level transformation effectively.
      </>
    ),
  },
  {
    image:img20,
    title: "Mentorship in Nursing",
    description: (
      <>
{" "}
        <Link
          to="/contact" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          Mentorship in nursing
</Link>{" "} nursing supports professional growth through guidance, knowledge sharing, and role modeling. Experienced nurses mentor others to build confidence, competence, and leadership skills. Strong mentorship improves retention, career satisfaction, clinical excellence, and succession planning while fostering a supportive and collaborative nursing culture.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
