import { FaGitAlt, FaLinux } from "react-icons/fa";
import classes from "./OtherSkillData.module.css";
import {
  SiAdobexd,
  SiAdobepremierepro,
  SiFirebase,
  SiAiohttp,
} from "react-icons/si";
import { FaGlobeEurope } from "react-icons/fa";
import { GitHub } from "../../ContactIcon/ContactIcons";

const OtherSkillData = [
  {
    id: 1,
    title: "Other",
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
      {
        id: 4,
        icon: <SiAdobexd />,
        type: "AdobeXD (UI/UX)",
      },
      {
        id: 5,
        icon: <SiAdobepremierepro />,
        type: "Adobe Premiere Pro (Video Editing)",
      },
    ],
  },
  {
    id: 2,
    title: "Certificate",
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
    title: "My Projects",
    skill: [
      {
        id: 1,
        icon: <GitHub className={classes.icon} />,
        type: (
          <a
            className={classes.link}
            href="https://github.com/DevIdol?tab=repositories"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            https://github.com/DevIdol
          </a>
        ),
      },
    ],
  },
];

export const getOtherSkillData = () => OtherSkillData;
