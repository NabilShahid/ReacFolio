import { ReactComponent as Web } from "./assets/svgs/webicon.svg";
import { ReactComponent as Desktop } from "./assets/svgs/computericon.svg";
import { ReactComponent as Sqlserver } from "./assets/svgs/mssql.svg";
import { ReactComponent as Sql } from "./assets/svgs/sql.svg";
import { ReactComponent as AntDesign } from "./assets/svgs/antdesign.svg";

export const PROJECTS = [
  {
    Name: "Gohab",
    Description:
      "Elegantly designed, intuitive and engaging web application focusing on personal development by allowing users to manage and track personal goals, habits and tasks effectually.<br/> Offers extensive features including assigning importance to each item, tracking habits, calendar views, notifications, reports and charts of viewing progress and much more.",
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
    Target: "Personal Project",
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
    Name: "RarpidFlow",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-3)",
    Subtitle: "test",
    ImageFile: "rapidflow.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlow",
    ImageCount: 9,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason: "This was delea",
    NoRepoReason: "34234324324234",
    Target: "Personal Project",
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
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-4)",
    Subtitle: "test",
    ImageFile: "appstudio.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlowAppStudio",
    ImageCount: 9,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason: "fasdf",
    NoRepoReason: "f sdf asdf adsf sdf ",
    Target: "Personal Project",
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
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    Subtitle: "test",
    ImageFile: "ndis.PNG",
    Platform: "Desktop",
    ImagesFolder: "Ndis",
    ImageCount: 5,
    HasRepo: false,
    HasUrl: false,
    RepoLink: "",
    UrlLink: "",
    NoUrlReason: " sdf sdf a",
    NoRepoReason: " fsdfasdf sdf sa",
    Target: "Personal Project",
    Technologies: [
      "Csharp",
      "Dotnet",
      { Name: "Sql", Icon: Sql },
      { Name: "Mssql", Icon: Sqlserver }
    ]
  },
  {
    Name: "Portfolio",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    Subtitle: "test",
    ImageFile: "portfolio.PNG",
    Platform: "Web",
    ImagesFolder: "Portfolio",
    ImageCount: 1,
    HasRepo: true,
    HasUrl: false,
    RepoLink: "https://github.com/NabilShahid/ReacFolio",
    UrlLink: "",
    NoUrlReason: " dsf asfasdf sd fsdf",
    NoRepoReason: "",
    Target: "Personal Project",
    Technologies: ["React", "Javascript", "Firebase"]
  },
  {
    Name: "Cointec",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-5)",
    Subtitle: "test",
    ImageFile: "cointec.PNG",
    Platform: "Web",
    ImagesFolder: "Cointec",
    ImageCount: 3,
    HasRepo: false,
    HasUrl: true,
    RepoLink: "",
    UrlLink: "http://staging.cointec.co.uk/",
    NoUrlReason: "",
    NoRepoReason: "dsfds fdsf asdf ds",
    Target: "Personal Project",
    Technologies: ["React", "Javascript", "Node"]
  },
  {
    Name: "Eventrone",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-2)",
    Subtitle: "test",
    ImageFile: "eventrone.PNG",
    Platform: "Web",
    ImagesFolder: "Eventrone",
    ImageCount: 5,
    HasRepo: false,
    HasUrl: true,
    RepoLink: "",
    UrlLink: "https://www.eventrone.com/",
    NoUrlReason: "",
    NoRepoReason: "fsdfdsf sdf asdf s",
    Target: "Personal Project",
    Technologies: ["Javascript", "Jquery", "Python", "Django"]
  }
];
const SkillColor = "#a9a9a9";
export const SKILLS = [
  {
    Title: "Front End",
    Items: [
      { Name: "Angular", Color: SkillColor, Icon: "Angular" },
      { Name: "React", Color: SkillColor, Icon: "React" },
      { Name: "JavaScript", Color: SkillColor, Icon: "Javascript" },
      { Name: "TypeScript", Color: SkillColor, Icon: "Typescript" },
      { Name: "Redux", Color: SkillColor, Icon: "Redux" },
      { Name: "Webpack", Color: SkillColor, Icon: "Webpack" },
      { Name: "Babel", Color: SkillColor, Icon: "Babel" },
      { Name: "Rxjs", Color: SkillColor, Icon: "Rxjs" },
      { Name: "HTML", Color: SkillColor, Icon: "Html" },
      { Name: "CSS", Color: SkillColor, Icon: "Css" }
    ]
  },
  {
    Title: "Back End",
    Items: [
      { Name: "Node.js", Color: SkillColor, Icon: "Node" },
      { Name: "NestJS", Color: SkillColor, Icon: "Nest" },
      { Name: "CSharp", Color: SkillColor, Icon: "Csharp" },
      { Name: ".Net", Color: SkillColor, Icon: "Dotnet" },
      { Name: "JavaScript", Color: SkillColor, Icon: "Javascript" },
      { Name: "TypeScript", Color: SkillColor, Icon: "Typescript" },
      { Name: "Express.js", Color: SkillColor, Icon: "Express" },
      {
        Name: "Google Cloud Functions",
        Color: SkillColor,
        Icon: "Googlecloudfunctions"
      }
    ]
  },
  {
    Title: "Database",
    Items: [
      { Name: "Postgresql", Color: SkillColor, Icon: "Postgresql" },
      { Name: "Firestore", Color: SkillColor, Icon: "Firebase" },
      { Name: "SQL", Color: SkillColor, Icon: Sql, IconSvg: true },
      {
        Name: "MS SQL Server",
        Color: SkillColor,
        Icon: Sqlserver,
        IconSvg: true
      }
    ]
  },
  {
    Title: "Version Control",
    Items: [{ Name: "Git", Color: SkillColor, Icon: "Git" }]
  },
  {
    /*
   #575fcf #596275  #0984e3 #ff5e57 #8e44ad #1289A7
    */
    Title: "Other",
    Items: [
      { Name: "Debugging", Color: SkillColor },
      { Name: "Troubleshooting", Color: SkillColor },
      { Name: "Database Indexing", Color: SkillColor },
      { Name: "Query Optimization", Color: SkillColor }
    ]
  }
];
export const PLATFORM_ICONS = { Web, Desktop };

export const ICON_TOOLTIPS = {
  Postgresql: "PostgreSQL",
  React: "React",
  Angular: "Angular",
  Firebase: "Firebase",
  Javascript: "JavaScript",
  Node: "Node",
  Csharp: "C#",
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
  Python: "Python"
};
