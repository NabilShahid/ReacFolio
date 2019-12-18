import { ReactComponent as Web } from "./assets/svgs/webicon.svg";
import { ReactComponent as Desktop } from "./assets/svgs/computericon.svg";
import { ReactComponent as Sqlserver } from "./assets/svgs/mssql.svg";
import { ReactComponent as Sql } from "./assets/svgs/sql.svg";

export const PROJECTS = [
  {
    Name: "Gohab",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    ImageFile: "gohab.PNG",
    Platform: "Web",
    ImagesFolder: "Gohab",
    ImageCount: 7,
    Technologies: ["Javascript", "React", "Node", "Firebase"]
  },
  {
    Name: "RarpidFlow",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-3)",
    ImageFile: "rapidflow.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlow",
    ImageCount: 9,
    Technologies: ["Javascript", "Angular", "Csharp"]
  },
  {
    Name: "RapidFlow App Studio",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-4)",
    ImageFile: "appstudio.PNG",
    Platform: "Web",
    ImagesFolder: "RapidFlowAppStudio",
    ImageCount: 9,
    Technologies: ["Javascript", "Node", "Postgresql"]
  },
  {
    Name: "Cointec",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-5)",
    ImageFile: "cointec.PNG",
    Platform: "Web",
    ImagesFolder: "Cointec",
    ImageCount: 3,
    Technologies: ["Javascript", "Node", "Postgresql"]
  },
  {
    Name: "Eventrone",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-2)",
    ImageFile: "eventrone.PNG",
    Platform: "Web",
    ImagesFolder: "Eventrone",
    ImageCount: 5,
    Technologies: ["Javascript", "Node", "Postgresql"]
  },
  {
    Name: "Ndis",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    ImageFile: "ndis.PNG",
    Platform: "Desktop",
    ImagesFolder: "Ndis",
    ImageCount: 5,
    Technologies: ["Javascript", "Node", "Postgresql"]
  }
];

export const SKILLS = [
  {
   
    Title: "Front End",
    Items: [
      { Name: "Angular", Color: "#575fcf", Icon: "Angular" },
      { Name: "React", Color: "#596275", Icon: "React" },
      { Name: "JavaScript", Color: "#0984e3", Icon: "Javascript" },
      { Name: "TypeScript", Color: "#575fcf", Icon: "Typescript" },
      { Name: "Redux", Color: "#ff5e57", Icon: "Redux" },
      { Name: "Webpack", Color: "#0984e3", Icon: "Webpack" },
      { Name: "Babel", Color: "#596275", Icon: "Babel" },
      { Name: "Rxjs", Color: "#ff5e57", Icon: "Rxjs" },
      { Name: "HTML", Color: "#0984e3", Icon: "Html" },
      { Name: "CSS", Color: "#1289A7", Icon: "Css" }
    ]
  },
  {
     
    Title: "Back End",
    Items: [
      { Name: "Node.js", Color: "#575fcf", Icon: "Node" },
      { Name: "NestJS", Color: "#596275", Icon: "Nest" },
      { Name: "CSharp", Color: "#8e44ad", Icon: "Csharp" },
      { Name: ".Net", Color: "#ff5e57", Icon: "Dotnet" },
      { Name: "JavaScript", Color: "#8e44ad", Icon: "Javascript" },
      { Name: "TypeScript", Color: "#596275", Icon: "Typescript" },
      { Name: "Express.js", Color: "#1289A7", Icon: "Express" },
      {
        Name: "Google Cloud Functions",
        Color: "#596275",
        Icon: "Googlecloudfunctions"
      }
    ]
  },
  {
    Title: "Database",
    Items: [
      { Name: "Postgresql", Color: "#575fcf", Icon: "Postgresql" },
      { Name: "Firestore", Color: "#596275", Icon: "Firebase" },
      { Name: "SQL", Color: "#0984e3", Icon: Sql, IconSvg: true },
      {
        Name: "MS SQL Server",
        Color: "#ff5e57",
        Icon: Sqlserver,
        IconSvg: true
      }
    ]
  },
  {
    Title: "Version Control",
    Items: [
      { Name: "Git", Color: " #596275 ", Icon: "Git" }
    ]
  },
  {/*
   #575fcf #596275  #0984e3 #ff5e57 #8e44ad #1289A7
    */
    Title: "Other",
    Items: [
      { Name: "Debugging", Color: "#596275"  },
      { Name: "Troubleshooting", Color: "#ff5e57" },
      { Name: "Database Indexing", Color: "#575fcf" },
      { Name: "Query Optimization", Color: "#1289A7" }
    ]
  }
];
export const PLATFORM_ICONS = { Web, Desktop };
