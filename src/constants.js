import { ReactComponent as Web } from "./assets/svgs/webicon.svg";
import { ReactComponent as Desktop } from "./assets/svgs/computericon.svg";
import { ReactComponent as Sqlserver } from "./assets/svgs/mssql.svg";
import { ReactComponent as Sql } from "./assets/svgs/sql.svg";
import { ReactComponent as AntDesign } from "./assets/svgs/antdesign.svg";
const PROJECT_TARGETS = {
  Personal: "Personal Project",
  AbbVie: "Created for AbbVie Inc.",
  FreelanceClient: "Freelance Project for Client",
  FreelanceStartup: "Freelance Project for a Startup"
};
const PROPRIETARY_SOFTWARE_TEXT =
  "No repository link as it is company's proprietary software";
export const PROJECTS = [
  {
    Name: "Gohab",
    Description:
      "Elegantly desinged, intutive and engaging web application focusing on personal development by allowing users to manage and track personal goals, habits and tasks effectually.Offers extensive features including tracking habits, calendar views, notifications, reports and charts of viewing progress and much more.",
    Color: "var(--color-1)",
    Subtitle: "Goals, tasks and habits management system",
    ImageFile: "gohab.PNG",
    Platform: "Web",
    ImagesFolder: "Gohab",
    ImageCount: 7,
    HasRepo: true,
    HasUrl: true,
    RepoLink: "https://github.com/NabilShahid/GoHab",
    UrlLink: "https://gohab-prod.firebaseapp.com/main/home",
    NoUrlReason: "",
    NoRepoReason: "",
    Target: PROJECT_TARGETS.Personal,
    Technologies: [
      "React",
      "Redux",
      "Javascript",
      "Firebase",
      "Googlecloudfunctions",
      "Typescript",
      { Name: "Antdesign", Icon: AntDesign }
    ]
  },
  {
    Name: "RapidFlow",
    Description:
      "A custom developed web based platform that automates complex business workflows. Became a principal platform within the organization for automating all kind of workflows and is used by 35000+ of employees, replacing all previous solutions and implementations of workflow automation.",
    Color: "var(--color-3)",
    Subtitle: "Workflow Automation Platform",
    ImageFile: "rapidflow.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlow",
    ImageCount: 9,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason:
      "This application can only be accessed through company's VPN and is for company's internal users only.",
    NoRepoReason: PROPRIETARY_SOFTWARE_TEXT,
    Target: PROJECT_TARGETS.AbbVie,
    Technologies: [
      "Angular",
      "Typescript",
      "Csharp",
      "Dotnet",

      { Name: "Sql", Icon: Sql },
      { Name: "Mssql", Icon: Sqlserver }
    ]
  },
  {
    Name: "RapidFlow App Studio",
    Description:
      "A web based Integrated development environment(IDE) for developing business processes for RapidFlow Platform used by hundreds of developers within the organization, providing advanced features like syntax highlighting, version control, IntelliSense and many others, making the development of business processes seamless for the developers.",
    Color: "var(--color-4)",
    Subtitle: "Workflow Development Framework",
    ImageFile: "appstudio.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlowAppStudio",
    ImageCount: 9,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason:
      "This application can only be accessed through company's VPN and is for company's internal users only.",
    NoRepoReason: PROPRIETARY_SOFTWARE_TEXT,
    Target: PROJECT_TARGETS.AbbVie,
    Technologies: [
      "Angular",
      "Typescript",
      "Nest",
      "Node",

      { Name: "Sql", Icon: Sql },
      "Postgresql"
    ]
  },
  {
    Name: "Ndis",
    Description:
      "A windows form application for tracking distributions, sales and purchases. Offers extensive features and reporting facilities for better tracking and analyzation of transactions. Being used extensively as the primary system for distribution management within client’s organization.",
    Color: "var(--color-1)",
    Subtitle: "Distrubution Management System",
    ImageFile: "ndis.PNG",
    Platform: "Desktop",
    ImagesFolder: "Ndis",
    ImageCount: 5,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason: "No Link as it is a Windows desktop application",
    NoRepoReason: PROPRIETARY_SOFTWARE_TEXT,
    Target: PROJECT_TARGETS.FreelanceClient,
    Technologies: [
      "Csharp",
      "Dotnet",
      { Name: "Sql", Icon: Sql },
      { Name: "Mssql", Icon: Sqlserver }
    ]
  },
  {
    Name: "Portfolio",
    Description: "",
    Color: "var(--color-1)",
    Subtitle: "",
    ImageFile: "portfolio.PNG",
    Platform: "Web",
    ImagesFolder: "Portfolio",
    ImageCount: 1,
    HasRepo: true,
    HasUrl: false,
    RepoLink: "https://github.com/NabilShahid/ReacFolio",
    UrlLink: "",
    NoUrlReason: "You are on the same website !",
    NoRepoReason: "",
    Target: PROJECT_TARGETS.Personal,
    Technologies: ["React", "Javascript", "Firebase"]
  },
  {
    Name: "Cointec",
    Description:
      "A Web Application for facilitating cryptocurrency investments. Offers extensive features like Wallet management, learning resources, payments and reporting.",
    Color: "var(--color-5)",
    Subtitle: "Crypto Asset Investing",
    ImageFile: "cointec.PNG",
    Platform: "Web",
    ImagesFolder: "Cointec",
    ImageCount: 5,
    HasRepo: false,
    HasUrl: true,
    RepoLink: "",
    UrlLink: "http://staging.cointec.co.uk/",
    NoUrlReason: "",
    NoRepoReason: PROPRIETARY_SOFTWARE_TEXT,
    Target: PROJECT_TARGETS.FreelanceStartup+", Currently in Development",
    Technologies: ["React", "Javascript", "Node"]
  },
  {
    Name: "Eventrone",
    Description:
      "A Web Application for customers and vendors for managing wedding services i.e. venue, catering, décor, photographer, car rentals etc.  Offers features like comparing different services, reviews and rankings of services, booking manager and quote manager.",
    Color: "var(--color-2)",
    Subtitle: "Online Wedding Services",
    ImageFile: "eventrone.PNG",
    Platform: "Web",
    ImagesFolder: "Eventrone",
    ImageCount: 5,
    HasRepo: false,
    HasUrl: true,
    RepoLink: "",
    UrlLink: "https://www.eventrone.com/",
    NoUrlReason: "",
    NoRepoReason: PROPRIETARY_SOFTWARE_TEXT,
    Target: PROJECT_TARGETS.FreelanceStartup,
    Technologies: ["Javascript", "Jquery", "Python", "Django"]
  }
];
export const SKILLS = [
  {
    Title: "Front End",
    Items: [
      { Name: "Angular", Icon: "Angular" },
      { Name: "React", Icon: "React" },
      { Name: "JavaScript", Icon: "Javascript" },
      { Name: "TypeScript", Icon: "Typescript" },
      { Name: "Redux", Icon: "Redux" },
      { Name: "Webpack", Icon: "Webpack" },
      { Name: "Babel", Icon: "Babel" },
      { Name: "Rxjs", Icon: "Rxjs" },
      { Name: "HTML", Icon: "Html" },
      { Name: "CSS", Icon: "Css" }
    ]
  },
  {
    Title: "Back End",
    Items: [
      { Name: "Node.js", Icon: "Node" },
      { Name: "NestJS", Icon: "Nest" },
      { Name: "CSharp", Icon: "Csharp" },
      { Name: ".Net", Icon: "Dotnet" },
      { Name: "JavaScript", Icon: "Javascript" },
      { Name: "TypeScript", Icon: "Typescript" },
      { Name: "Express.js", Icon: "Express" },
      {
        Name: "Google Cloud Functions",

        Icon: "Googlecloudfunctions"
      }
    ]
  },
  {
    Title: "Database",
    Items: [
      { Name: "Postgresql", Icon: "Postgresql" },
      { Name: "Firestore", Icon: "Firebase" },
      { Name: "SQL", Icon: Sql, IconSvg: true },
      {
        Name: "MS SQL Server",

        Icon: Sqlserver,
        IconSvg: true
      }
    ]
  },
  {
    Title: "Version Control",
    Items: [{ Name: "Git", Icon: "Git" }]
  },
  {
    /*
   #575fcf #596275  #0984e3 #ff5e57 #8e44ad #1289A7
    */
    Title: "Other",
    Items: [
      { Name: "Debugging" },
      { Name: "Troubleshooting" },
      { Name: "Functional Programming" },
      { Name: "Object Oriented Programming" },
      { Name: "Database Indexing and Tuning" },
      { Name: "Query Optimization" }
    ]
  }
];
export const PLATFORM_ICONS = { Web, Desktop };

export const ICON_LABELS = {
  Postgresql: "PostgreSQL",
  React: "React",
  Angular: "Angular",
  Firebase: "Firebase",
  Javascript: "JavaScript",
  Node: "Node",
  Csharp: "CSharp",
  Vscode: "VS Code",
  Npm: "NPM",
  Nest: "NestJS",
  Redux: "Redux",
  Webpack: "Webpack",
  Typescript: "Typescript",
  Html: "Html",
  Css: "Css",
  Ionic: "Ionic",
  Rxjs: "Rxjs",
  Babel: "Babel",
  Express: "Express",
  Googlecloudfunctions: "Google Cloud Functions",
  Dotnet: ".NET",
  Git: "Git",
  Sql: "SQL",
  Antdesign: "Ant Design",
  Jquery: "JQuery",
  Python: "Python",
  Mssql: "MS SQL Server",
  Django:"Django"
};
