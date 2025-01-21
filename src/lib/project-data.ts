import WeatherImg from "../../public/assets/Weather.png";
import BoldImg from "../../public/assets/Bold.png";
import VDPlayerImg from "../../public/assets/Video-Player.png";
import TeamImg from "../../public/assets/team.png";
import birthdayImg from "../../public/assets/Birthday-Greetings.png";
import bookshelfAppImg from "../../public/assets/Aplikasi-Rak-Buku.png";
import decimalConvertImg from "../../public/assets/Program-Konversi-Bilangan-Desimal.png";
import phoneNumberImg from "../../public/assets/Program-Pembuatan-Nomor-Telepon.png";
import atsImg from "../../public/assets/ats-img.png";
import MLModelImg from "../../public/assets/raxle789-drowsiness-detection.png";
import designSystemImg from "../../public/assets/Dialog-Default-Storybook.png";
import unhiraAgrikulturImg from "../../public/assets/Unhira-Agrikultur.png";
import syncWriteImg from "../../public/assets/SyncWrite.png";
import medikaMartImg from "../../public/assets/medika-mart.jpg";
import { StaticImageData } from "next/image";

export type TProject = {
  image: StaticImageData;
  title: string;
  stacks: string[];
  deployLink: string;
  githubLink: string;
};

export const projectData: TProject[] = [
  {
    image: medikaMartImg,
    title: "Medika Mart",
    stacks: ["Next.js", "Firebase", "Typescript", "Tailwind CSS"],
    deployLink: "https://medikamart.vercel.app/",
    githubLink: "https://github.com/raxle789/medika-mart",
  },
  {
    image: unhiraAgrikulturImg,
    title: "Unhira Agrikultur",
    stacks: ["Next.js", "Typescript", "Tailwind CSS"],
    deployLink: "https://www.unhiraagrikultur.com/",
    githubLink: "",
  },
  {
    image: syncWriteImg,
    title: "SyncWrite",
    stacks: [
      "Next.js",
      "Express.js",
      "Firebase",
      "MongoDB",
      "Typescript",
      "Tailwind CSS",
    ],
    deployLink: "",
    githubLink: "https://github.com/raxle789/gdocs-clone",
  },
  {
    image: atsImg,
    title: "ATS NEW",
    stacks: ["Next.js", "Typescript", "Bootstrap"],
    deployLink: "",
    githubLink: "https://github.com/raxle789/ats-new",
  },
  {
    image: BoldImg,
    title: "Bold.",
    stacks: ["React js", "Firebase", "CSS"],
    deployLink: "https://bold-site.netlify.app/",
    githubLink: "https://github.com/raxle789/bold.",
  },
  {
    image: WeatherImg,
    title: "Weather App",
    stacks: ["React js", "CSS"],
    deployLink: "https://findsweather.netlify.app/",
    githubLink: "https://github.com/raxle789/Weather",
  },
  {
    image: VDPlayerImg,
    title: "Video Player",
    stacks: ["React js", "CSS"],
    deployLink: "https://vd-player.netlify.app/",
    githubLink: "https://github.com/raxle789/Video-Player",
  },
  {
    image: birthdayImg,
    title: "Birthday Web",
    stacks: ["Next.js", "Typescript", "Tailwind CSS"],
    deployLink: "https://birthday-web-theta.vercel.app/",
    githubLink: "https://github.com/raxle789/birthday-web",
  },
  {
    image: TeamImg,
    title: "Company Landing Page",
    stacks: ["HTML", "Bootstrap"],
    deployLink: "https://team-chi.vercel.app/",
    githubLink: "https://github.com/raxle789/company-landing-page",
  },
  {
    image: designSystemImg,
    title: "Design System",
    stacks: ["React js", "Typescript", "Tailwind CSS"],
    deployLink: "",
    githubLink: "https://github.com/raxle789/eskit-tailwind-reactjs-starter",
  },
  {
    image: MLModelImg,
    title: "Drowsiness Detection ML Model",
    stacks: ["Python", "TensorFlow"],
    deployLink: "",
    githubLink: "https://github.com/raxle789/drowsiness-detection",
  },
  {
    image: bookshelfAppImg,
    title: "Bookshelf App",
    stacks: ["HTML", "Javascript", "CSS"],
    deployLink: "https://ur-bookshelf.netlify.app/",
    githubLink: "https://github.com/raxle789/Bookshelf-App",
  },
  {
    image: decimalConvertImg,
    title: "Decimal Convert",
    stacks: ["HTML", "Javascript", "CSS"],
    deployLink: "https://konversbilangan.netlify.app/",
    githubLink: "https://github.com/raxle789/Konvers-Desimal",
  },
  {
    image: phoneNumberImg,
    title: "Phone Number",
    stacks: ["HTML", "Javascript", "CSS"],
    deployLink: "https://nomor-telepon.netlify.app/",
    githubLink: "https://github.com/raxle789/Phone-Number",
  },
];
