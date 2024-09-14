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
import unhiraAgrikultur from "../../public/assets/Unhira-Agrikultur.png";
// import syncWrite from "../../public/assets/SyncWrite.png";
import { StaticImageData } from "next/image";

export type TProject = {
  image: StaticImageData;
  title: string;
  desc: string;
  deployLink: string;
  githubLink: string;
};

export const projectData: TProject[] = [
  {
    image: unhiraAgrikultur,
    title: "Unhira Agrikultur",
    desc: "The company profile website which operates in the field of supplying vegetables and fruits for restaurants, eating places, and others.",
    deployLink: "https://www.unhiraagrikultur.com/",
    githubLink: "",
  },
  // {
  //   image: syncWrite,
  //   title: "Sync Write",
  //   desc: "The Simple Google Doc Clone",
  //   deployLink: "",
  //   githubLink: "https://github.com/raxle789/syncwrite-client",
  // },
  {
    image: atsImg,
    title: "ATS NEW",
    desc: "The New Recruitment System of Erajaya",
    deployLink: "",
    githubLink: "https://github.com/raxle789/ats-new",
  },
  {
    image: BoldImg,
    title: "Bold.",
    desc: "A website for automatic rote management.",
    deployLink: "https://bold-site.netlify.app/",
    githubLink: "https://github.com/raxle789/bold.",
  },
  {
    image: WeatherImg,
    title: "Weather App",
    desc: "A weather forecast website that can find out weather data in more than 200,000 cities throughout the world.",
    deployLink: "https://findsweather.netlify.app/",
    githubLink: "https://github.com/raxle789/Weather",
  },
  {
    image: VDPlayerImg,
    title: "Video Player",
    desc: "A web video player that can be used on any device.",
    deployLink: "https://vd-player.netlify.app/",
    githubLink: "https://github.com/raxle789/Video-Player",
  },
  {
    image: birthdayImg,
    title: "Birthday Web",
    desc: "A beautiful birthday web for everyone.",
    deployLink: "https://birthday-web-theta.vercel.app/",
    githubLink: "https://github.com/raxle789/birthday-web",
  },
  {
    image: TeamImg,
    title: "Company Landing Page",
    desc: "The Team Company Landing Page",
    deployLink: "https://team-chi.vercel.app/",
    githubLink: "https://github.com/raxle789/company-landing-page",
  },
  {
    image: designSystemImg,
    title: "Design System",
    desc: "A design system that is useful for speeding up website development.",
    deployLink: "",
    githubLink: "https://github.com/raxle789/eskit-tailwind-reactjs-starter",
  },
  {
    image: MLModelImg,
    title: "Drowsiness Detection ML Model",
    desc: "A ML Model that can detect drowsiness face of human.",
    deployLink: "",
    githubLink: "https://github.com/raxle789/drowsiness-detection",
  },
  {
    image: bookshelfAppImg,
    title: "Bookshelf App",
    desc: "A website for managing book titles you want to read.",
    deployLink: "https://ur-bookshelf.netlify.app/",
    githubLink: "https://github.com/raxle789/Bookshelf-App",
  },
  {
    image: decimalConvertImg,
    title: "Decimal Convert",
    desc: "A website for converting decimal numbers into binary, octal and hexadecimal numbers.",
    deployLink: "https://konversbilangan.netlify.app/",
    githubLink: "https://github.com/raxle789/Konvers-Desimal",
  },
  {
    image: phoneNumberImg,
    title: "Phone Number",
    desc: "A simple web program to generate phone numbers.",
    deployLink: "https://nomor-telepon.netlify.app/",
    githubLink: "https://github.com/raxle789/Phone-Number",
  },
];
