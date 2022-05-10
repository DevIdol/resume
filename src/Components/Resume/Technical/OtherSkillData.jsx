import { FaGitAlt, FaLinux } from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobepremierepro,
  SiFirebase,
  SiAiohttp,
} from "react-icons/si";
import { FaGlobeEurope } from "react-icons/fa";


const OtherSkillData = [
  {
    id: 1,
    title: "Cloud & Version Control System",
    skill: [
      {
        id: 1,
        icon: <SiFirebase />,
        type: "Firebase",
      },
      {
        id: 2,
        icon: <FaGitAlt />,
        type: "Git/GitHub",
      },
      {
        id: 3,
        icon: <FaLinux />,
        type: "Linux (Ubuntu)",
      },
    ],
  },
  {
    id: 2,
    title: "Design",
    skill: [
      {
        id: 1,
        icon: <SiAdobexd />,
        type: "Adobe XD",
      },
      {
        id: 2,
        icon: <SiAdobepremierepro />,
        type: "Adobe Premiere Pro",
      },
    ],
  },
  {
    id: 3,
    title: "Language",
    skill: [
      {
        id: 1,
        icon: "🇲🇲",
        type: "Myanmar",
      },
      {
        id: 2,
        icon: "🇬🇧",
        type: "English (Intermediate)",
      },
    ],
  },
  {
    id: 4,
    title: "Certification",
    skill: [
      {
        id: 1,
        icon: <SiAiohttp />,
        type: "Web Design Complete Course",
      },
      {
        id: 2,
        icon: <FaGlobeEurope />,
        type: "English (Intermediate)",
      },
    ],
  },
];

export const getOtherSkillData = () => OtherSkillData;
