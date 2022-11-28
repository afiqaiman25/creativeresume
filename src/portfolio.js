/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "AFIQ AIMAN",
  description:
    "A commited person to solve the problems and willingly to works as a team. Improving and Learning is my way is the way to thrive",
  og: {
    title: "Afiq Aiman",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Afiq Aiman",
  logo_name: "Afiq Aiman",
  nickname: "Afiq",
  subTitle:
    "A commited person to solve the problems and willingly to works as a team. Improving and Learning is my way is the way to thrive.",
  resumeLink:
    "https://1drv.ms/b/s!Ar5kjj-u6RWIf2bnITGUaAfOYcU?e=G8IRnd",
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
    name: "LinkedIn",
    link: "www.linkedin.com/in/afiq-aiman-b44168228",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:afiq25aiman@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligent",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Currently developing a machine learning model for human Activity recognition",
        "⚡ Using Mobile applicarion to deploy the trained model",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML, CSS and JavaScript",
        "⚡ Developing mobile applications using Xamarin and Android Studio",
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
        },{
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "University Science Malaysia",
      subtitle: "Bachelor in Computer Sciences",
      logo_path: "usm-logo.jpeg",
      alt_name: "USM",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied Artificial Intelligent such as Machine Learning, Deep Learning and Data Analytic",
        "⚡ I have also learned on web development using HTML, CSS and JavaScript",
      ],
      website_link: "http://www.usm.my/",
    },
    {
      title: "UiTM, Dengkil",
      subtitle: "Foundation in Engineering",
      logo_path: "uitm-logo.jpeg",
      alt_name: "UiTM",
      duration: "2018-2019",
      descriptions: [
        "⚡ I have studied basic engineering courses",
        "⚡ Ended with a CGPA of 3.67",
      ],
      website_link: "https://asasi.uitm.edu.my/",
    },
  ],
};

const certifications = {
  certifications: [
  
  ],
};





// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Company",
      experiences: [
        {
          title: "Jabil Sdn. Bhd.",
          logo_path: "jabil_logo.jpeg",
          duration: "Mar 2022- Sept 2022",
          description:
            "Working as an intern for 6 month under a team named incubation which develop devices using Raspberry Pi.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "Portal Development",
          logo_path: "web_logo.jpeg",
          description:
            "I have been task to develop a portal for the Device named Zeus, I develop this portal by using HTML< CSS, JavaScript and Docker",
          color: "#ee3c26",
        },
        {
          title: "Raspberry Pi Application testing",
          logo_path: "pi_logo.png",
          description:
            "i have been task to test the new under-developing OS for the Raspberry Pi.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
};

const publications = {
  data: [
  
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "afiq.jpeg",
    description:
      "If I am the person you are looking for? Please do contact me.",
  },
  blogSection: {
    
  },
  addressSection: {
    title: "Address",
    subtitle:
      "122 Persiaran Mayang Pasir 11900 Bayan Baru Penang",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+601125802139",
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
  experience,
  certifications,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
