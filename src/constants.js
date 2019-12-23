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
      { Name: "Angular", Color: "var(--color-1)", Icon: "Angular" },
      { Name: "React", Color: "var(--color-1)", Icon: "React" },
      { Name: "JavaScript", Color: "var(--color-1)", Icon: "Javascript" },
      { Name: "TypeScript", Color: "var(--color-1)", Icon: "Typescript" },
      { Name: "Redux", Color: "var(--color-1)", Icon: "Redux" },
      { Name: "Webpack", Color: "var(--color-1)", Icon: "Webpack" },
      { Name: "Babel", Color: "var(--color-1)", Icon: "Babel" },
      { Name: "Rxjs", Color: "var(--color-1)", Icon: "Rxjs" },
      { Name: "HTML", Color: "var(--color-1)", Icon: "Html" },
      { Name: "CSS", Color: "var(--color-1)", Icon: "Css" }
    ]
  },
  {
     
    Title: "Back End",
    Items: [
      { Name: "Node.js", Color: "var(--color-5)", Icon: "Node" },
      { Name: "NestJS", Color: "var(--color-5)", Icon: "Nest" },
      { Name: "CSharp", Color: "var(--color-5)", Icon: "Csharp" },
      { Name: ".Net", Color: "var(--color-5)", Icon: "Dotnet" },
      { Name: "JavaScript", Color: "var(--color-5)", Icon: "Javascript" },
      { Name: "TypeScript", Color: "var(--color-5)", Icon: "Typescript" },
      { Name: "Express.js", Color: "var(--color-5)", Icon: "Express" },
      {
        Name: "Google Cloud Functions",
        Color: "var(--color-5)",
        Icon: "Googlecloudfunctions"
      }
    ]
  },
  {
    Title: "Database",
    Items: [
      { Name: "Postgresql", Color: "var(--color-2)", Icon: "Postgresql" },
      { Name: "Firestore", Color: "var(--color-2)", Icon: "Firebase" },
      { Name: "SQL", Color: "var(--color-2)", Icon: Sql, IconSvg: true },
      {
        Name: "MS SQL Server",
        Color: "var(--color-2)",
        Icon: Sqlserver,
        IconSvg: true
      }
    ]
  },
  {
    Title: "Version Control",
    Items: [
      { Name: "Git", Color: " var(--color-4) ", Icon: "Git" }
    ]
  },
  {/*
   #575fcf #596275  #0984e3 #ff5e57 #8e44ad #1289A7
    */
    Title: "Other",
    Items: [
      { Name: "Debugging", Color: "var(--color-3)"  },
      { Name: "Troubleshooting", Color: "var(--color-3)" },
      { Name: "Database Indexing", Color: "var(--color-3)" },
      { Name: "Query Optimization", Color: "var(--color-3)" }
    ]
  }
];
export const PLATFORM_ICONS = { Web, Desktop };
