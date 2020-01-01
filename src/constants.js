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
      { Name: "Database Indexing" },
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
  Mssql:"MS SQL Server"
};
