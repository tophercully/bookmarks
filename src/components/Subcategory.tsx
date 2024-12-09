import React from "react";

import { Tool } from "@/types";
import ToolItem from "./ToolItem";

export const Subcategory = ({
  name,
  color,
  tools,
}: {
  name: string;
  color: string;
  tools: Tool[];
}) => (
  <div
    id={name}
    className={`flex flex-col gap-4`}
  >
    <h3 className={`ml-8 w-fit font-medium`}>{name}:</h3>
    <ul className="flex flex-col gap-1">
      {tools.map((tool) => (
        <ToolItem
          key={tool.name}
          tool={tool}
          color={color}
        />
      ))}
    </ul>
  </div>
);
