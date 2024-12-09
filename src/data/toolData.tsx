import { Code, DraftingCompass, Palette, PencilRuler } from "lucide-react";
import ideationTools from "./categories/product/ideation/ideationTools";
import colorTools from "./categories/design/color/colorTools";
import typographyTools from "./categories/design/typography/typographyTools";
import templateTools from "./categories/development/templates/templateTools";
import organizationTools from "./categories/development/organization/organizationTools";
import colorDevTools from "./categories/development/color/colorDevTools";
import validationTools from "./categories/product/validation/validationTools";
import shaderTools from "./categories/creativeCoding/shaders/shaderTools";

const toolData = [
  {
    category: "Design",
    color: "purple",
    icon: (
      <PencilRuler
        size={32}
        strokeWidth={1}
      />
    ),
    subcategories: [
      {
        name: "Color",
        tools: colorTools,
      },
      {
        name: "Typography",
        tools: typographyTools,
      },
    ],
  },

  {
    category: "Product Design",
    color: "emerald",
    icon: (
      <DraftingCompass
        size={32}
        strokeWidth={1}
      />
    ),
    subcategories: [
      {
        name: "Ideation",
        tools: ideationTools,
      },
      {
        name: "Validation",
        tools: validationTools,
      },
    ],
  },

  {
    category: "Development",
    color: "orange",
    icon: (
      <Code
        size={32}
        strokeWidth={1}
      />
    ),
    subcategories: [
      {
        name: "Organization",
        tools: organizationTools,
      },
      {
        name: "Templates",
        tools: templateTools,
      },
      {
        name: "Color Manipulation",
        tools: colorDevTools,
      },
    ],
  },

  {
    category: "Creative Coding",
    color: "indigo",
    icon: (
      <Palette
        size={32}
        strokeWidth={1}
      />
    ),
    subcategories: [
      {
        name: "Shaders",
        tools: shaderTools,
      },
    ],
  },
];

export default toolData;
