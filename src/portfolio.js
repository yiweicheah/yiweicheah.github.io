/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yi Wei's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yi Wei Cheah Portfolio",
    type: "website",
    url: "http://yiweicheah.github.io",
  },
};

//Home Page
const greeting = {
  title: "Yi Wei Cheah",
  logo_name: "YiWeiCheah",
  nickname: "26KaZu",
  subTitle:
    "Dedicated and versatile professional with experience in administrative support, translation, and web development.",
  resumeLink:
    "https://www.canva.com/design/DAF9-bX1h2c/de9hO0_L9RzRf5DiUGijOA/view?utm_content=DAF9-bX1h2c&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  portfolio_repository: "",
  githubProfile: "https://github.com/yiweicheah",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/yiweicheah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yi-wei-cheah-aab04827b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ywieicheah.26@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/26kazu/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/wintercyw/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full-Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter, and React Native",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "akar-icons:node-fill",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Zhejiang University",
      subtitle: "B.A. in Translation and Interpreting",
      logo_path: "zhejiang.png",
      alt_name: "Zhejiang",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I have studied translation and interpreting techniques and theories for different fields such as business, news, literature, and more.",
        "⚡ Apart from this, I have done courses on Machine-Assisted Translation.",
      ],
      website_link: "https://www.zju.edu.cn/english/",
    },
    {
      title: "Sunway University",
      subtitle: "M.S. in Data Science (Part-time)",
      logo_path: "sunway.png",
      alt_name: "Sunway",
      duration: "2024 - Current",
      descriptions: [
        "⚡ I am taking varity of courses related to Data Science and Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
      ],
      website_link: "https://sunwayuniversity.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Open",
      subtitle: "- University of Helsinki",
      logo_path: "helsinki.png",
      certificate_link:
        "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/2c33319e66d42435f94cbc2f26ae2c08",
      alt_name: "University of Helsinki",
      color_code: "#8C151599",
    },
    {
      title: "The Complete Javascript Course",
      subtitle: "- Jonas Schmedtmann",
      logo_path: "javascript.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d3024e2a-c821-4bce-a11a-dd2971dba6cf/",
      alt_name: "javascript",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "As a full-stack web developer, I create custom digital solutions; as a freelance translator, I bridge linguistic gaps; and as a veterinary clinic's manager's assistant, I ensure smooth operations. My diverse skills enable me to excel in administration, language services, and technical development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Freelance Full-stack Developer",
          company: "Self-Employed",
          // company_url: "https://legatohealthtech.com/",
          logo_path: "javascript.png",
          duration: "March 2023 - Current",
          location: "Malaysia",
          description:
            "As a freelance full-stack web developer, I design and develop dynamic websites and applications, handling both front-end and back-end development. I work with clients to create tailored solutions that meet their needs, utilizing the latest technologies and frameworks. My expertise in coding, problem-solving, and project management ensures the delivery of high-quality, user-friendly digital products.",
          color: "#0879bf",
        },
        {
          title: "Freelance Translator",
          company: "Self-Employed",
          // company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "translate.webp",
          duration: "July 2017 - Current",
          location: "Malaysia",
          description:
            "As a freelance translator, I offer specialized language services, converting written materials from one language to another with precision and cultural sensitivity. I work with diverse clients, ensuring accurate and timely translations across various industries. My expertise in multiple languages enables effective communication and bridges linguistic gaps.",
          color: "#9b1578",
        },
        {
          title: "Manager's Assistant",
          company: "Klinik Haiwan Lian Sdn. Bhd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "lian_clinic.png",
          duration: "July 2021 - March 2023",
          location: "Selangor, Malaysia",
          description:
            "As a manager's assistant at a veterinary clinic, I provide administrative support, coordinate appointments, and manage client communications. I assist in daily operations, ensuring smooth workflow and optimal patient care. My role is crucial in maintaining an organized and efficient environment, contributing to the clinic's success.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create functional and appealing websites and web apps.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const projects = [
  {
    createdAt: "2023-02-07T16:26:54Z",
    id: "0",
    isFork: false,
    name: "TimmyCards",
    description: "Website for TCG players based in Malaysia",
    languages: [
      { name: "HTML", iconifyClass: "logos-html-5" },
      { name: "CSS", iconifyClass: "logos-css-3" },
      { name: "JavaScript", iconifyClass: "logos-javascript" },
      { name: "Python", iconifyClass: "logos-python" },
    ],
    url: "https://www.timmycards.com",
  },
  {
    createdAt: "2024-02-23T16:26:54Z",
    id: "0",
    isFork: false,
    name: "Cambria's Arena",
    description: "Damage Counter Web App for Grand Archive TCG",
    languages: [
      { name: "HTML", iconifyClass: "logos-html-5" },
      { name: "CSS", iconifyClass: "logos-css-3" },
      { name: "JavaScript", iconifyClass: "logos-javascript" },
    ],
    url: "https://github.com/yiweicheah/cambriasarena",
  },
  {
    createdAt: "2023-08-17T16:26:54Z",
    id: "0",
    isFork: false,
    name: "SFA-SS",
    description:
      "Website for SFA-SS, a E-vehicle charging company based in Malaysia",
    languages: [
      { name: "HTML", iconifyClass: "logos-html-5" },
      { name: "CSS", iconifyClass: "logos-css-3" },
      { name: "JavaScript", iconifyClass: "logos-javascript" },
    ],
    url: "https://www.sfa-ss.com",
  },
  {
    createdAt: "2023-06-013T16:26:54Z",
    id: "0",
    isFork: false,
    name: "DME Music",
    description:
      "Website for DME Music Enterprise, a music studio based in Malaysia",
    languages: [
      { name: "HTML", iconifyClass: "logos-html-5" },
      { name: "CSS", iconifyClass: "logos-css-3" },
      { name: "JavaScript", iconifyClass: "logos-javascript" },
    ],
    url: "https://www.dmemusic.com.my",
  },
];

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Passport Photo.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "10, Lorong Samarinda 35D, Taman Mesra Kampung Jawa, 41000 Klang, Selangor, Malaysia",
    locality: "Klang",
    country: "MY",
    region: "Selangor",
    postalCode: "41000",
    streetAddress: "Lorong Samarinda 35D",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/k675AM8mZpbW9bKT6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
