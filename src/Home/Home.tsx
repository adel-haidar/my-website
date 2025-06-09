import {FaGithub, FaInstagram} from "react-icons/fa";
import {CiLinkedin, CiMail} from "react-icons/ci";
import {LiaXingSquare} from "react-icons/lia";



const Home = () => {

    const mailToLink = `mailto:info@adel-haidar.com`;
    return(
    <div
        className="text-white max-w-6xl w-full mx-auto bg-black border border-gray-800 grid grid-cols-3 overflow-hidden"
        style={{gridTemplateRows: "330px auto"}}
    >
      <div
          className="col-span-2 row-span-1 relative flex items-center justify-start overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"/>
        <img
            src="/assets/name-and-title.svg"
            alt="Adel Haidar Software Engineer"
            className="h-full w-auto object-contain"
        />
      </div>

      <div className="col-span-1 row-span-1 relative w-full flex items-center justify-end"
           style={{paddingLeft: "40px"}}>
        <div>
          <div className="absolute top-0 left-0 h-full w-[2px] bg-white"/>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white"/>
        </div>
        <img
            src="/assets/personal-pic.jpg"
            alt="Adel Haidar profile"
            className="h-[330px] w-auto object-cover "
        />
      </div>

      <div className="col-span-2 row-span-1 relative flex items-start justify-start" style={{paddingRight: "15px"}}>
        <p className="text-xs md:text-sm lg:text-base xl:text-3xl text-justify leading-relaxed">
          I am a senior software engineer with 5+ years experience. I worked on several
          web development projects in scrum teams where I developed backend services in
          Java and Spring Boot and UI with Angular and Vue Js. I am also passionate
          about graphic design and video editing.
        </p>
      </div>

      <div className="col-span-1 row-span-1 relative flex items-center justify-center p-4">
        <div className="absolute top-0 left-0 h-full w-[2px] bg-white"/>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <a
              href="/assets/my-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View my Resume"
          >
            <img
                src="/assets/cv.svg"
                alt="My Resume Icon"
                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24 object-contain"
            />
          </a>
          <a
              href="https://github.com/adel-haidar"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
          >
            <FaGithub className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"/>
          </a>
          <a
              href="https://www.linkedin.com/in/adel-haidar-7937689a/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
          >
            <CiLinkedin className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"/>
          </a>
          <a
              href="https://www.xing.com/profile/Adel_Haidar/web_profiles"
              target="_blank"
              rel="noopener noreferrer"
              title="Xing"
          >
            <LiaXingSquare className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"/>
          </a>
          <a href={mailToLink} target="_blank" rel="noopener noreferrer" title="Mail">
            <CiMail className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"/>
          </a>
          <a
              href="https://www.instagram.com/adel.haider.946/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
          >
            <FaInstagram className="w-10 h-10 sm:w-16 sm:h-16 lg:w-24 lg:h-24"/>
          </a>
        </div>
      </div>
    </div>
)};

export default Home;
