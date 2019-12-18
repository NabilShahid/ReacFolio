
import { ReactComponent as Web } from "./assets/svgs/webicon.svg";
import { ReactComponent as Desktop } from "./assets/svgs/computericon.svg";

export const PROJECTS = [
  {
    Name: "Gohab",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    ImageFile: "gohab.PNG",
    Platform:"Web",
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
    Platform:"Web",
    ImagesFolder: "RapidFlow",
    ImageCount: 9,
    Technologies: ["Javascript", "Angular", "Csharp"]
  }
  ,
  {
    Name: "RapidFlow App Studio",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-4)",
    ImageFile: "appstudio.PNG",
    Platform:"Web",
    ImagesFolder: "RapidFlowAppStudio",
    ImageCount: 9,
    Technologies: ["Javascript", "Node", "Postgresql"]
  }
  ,
  {
    Name: "Cointec",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-5)",
    ImageFile: "cointec.PNG",
    Platform:"Web",
    ImagesFolder: "Cointec",
    ImageCount: 3,
    Technologies: ["Javascript", "Node", "Postgresql"]
  }
  ,
  {
    Name: "Eventrone",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-2)",
    ImageFile: "eventrone.PNG",
    Platform:"Web",
    ImagesFolder: "Eventrone",
    ImageCount: 5,
    Technologies: ["Javascript", "Node", "Postgresql"]
  }
  ,
  {
    Name: "Ndis",
    Description:
      "Simple Image Resizer. Drag-n-Drop. Click. Done. Resize batches.",
    Color: "var(--color-1)",
    ImageFile: "ndis.PNG",
    Platform:"Desktop",
    ImagesFolder: "Ndis",
    ImageCount: 5,
    Technologies: ["Javascript", "Node", "Postgresql"]
  }
];

export const SKILLS = [
  {
    Title: "Front End Development",
    Items: [
      { Name: "Angular", Color: "var(--color-1)", Icon: "Angular" },
      { Name: "React", Color: "var(--color-2)", Icon: "React" }
  ]
  },
  {
    Title: "Back End Development",
    Items: [{ Name: "Node", Color: "var(--color-3)", Icon: "Node" }]
  }
  ,
  {
    Title: "Database",
    Items: [{ Name: "Postgresql", Color: "var(--color-4)", Icon: "Postgresql" }]
  }
];
export const PLATFORM_ICONS={Web,Desktop}