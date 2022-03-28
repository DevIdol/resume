import { FaCode, FaCss3Alt, FaBootstrap, FaLaravel } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { ImHtmlFive } from "react-icons/im";
import { RiFlutterFill } from "react-icons/ri";
import { DiJavascript1, DiJqueryLogo } from "react-icons/di";
import { SiPhp, SiFirebase } from "react-icons/si";
import culib from "../../assets/project/culibrary.png";
import five from "../../assets/project/five.png";
import four from "../../assets/project/four.png";
import three from "../../assets/project/three.png";
import two from "../../assets/project/two.png";
import one from "../../assets/project/one.png";
import apk from "../../assets/storage/culibrary.apk";

const language = [
  <ImHtmlFive />,
  <FaCss3Alt />,
  <FaBootstrap />,
  <DiJavascript1 />,
  <DiJqueryLogo />,
];
const code = <FaCode />;
const down = <MdDownload />;

const PortfolioData = [
  {
    id: 1,
    type: "web",
    items: {
      img: five,
      title: "Mini Ecomeerce",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [<FaLaravel />],
      code: code,
      link: "https://github.com/DevIdol/sample_laravel_ecommerce",
      down: down,
      download:
        "https://github.com/DevIdol/sample_laravel_ecommerce/archive/refs/heads/main.zip",
    },
  },
  {
    id: 2,
    type: "web",
    items: {
      img: four,
      title: "CMS",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [...language, <SiPhp />],
      code: code,
      link: "https://github.com/DevIdol/php_tutorials/tree/main/cms",
      down: down,
      download:
        "https://github.com/DevIdol/php_tutorials/archive/refs/heads/main.zip",
    },
  },
  {
    id: 3,
    type: "web",
    items: {
      img: three,
      title: "Blog WebDesign",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [...language],
      code: code,
      link: "https://github.com/DevIdol/portfo",
      down: down,
      download: "https://github.com/DevIdol/portfo/archive/refs/heads/main.zip",
    },
  },
  {
    id: 4,
    type: "web",
    items: {
      img: one,
      title: "Ecommerce WebDesign",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [...language],
      code: code,
      link: "https://github.com/DevIdol/onlineshop-webDesign",
      down: down,
      download:
        "https://github.com/DevIdol/onlineshop-webDesign/archive/refs/heads/main.zip",
    },
  },
  {
    id: 5,
    type: "web",
    items: {
      img: two,
      title: "Portfolio WebSite",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [<FaLaravel />],
      code: code,
      link: "https://github.com/DevIdol/sample_portfolio_website_with_laravel",
      down: down,
      download:
        "https://github.com/DevIdol/sample_portfolio_website_with_laravel/archive/refs/heads/main.zip",
    },
  },
  {
    id: 6,
    type: "mobile",
    items: {
      img: culib,
      title: "CULIBRARY",
      describtion:
        "Quae esse totam blanditiis modi aspernatur! Libero aspernatur autem voluptatibus modi doloremque perspiciatis rem id, deleniti accusantium minus nam ea quae vero!",
      language: [<RiFlutterFill />, <SiFirebase />],
      code: code,
      link: "https://github.com/DevIdol/culibrary_mobileApp_sourceCode",
      down: down,
      download: apk,
    },
  },
];

export const getPortfolioData = () => PortfolioData;
