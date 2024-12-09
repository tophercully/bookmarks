import React from "react";
import { Subcategory } from "./Subcategory";
import { Tool } from "@/types";

export const Category = ({
  category,
  subcategories,
  color,
}: {
  category: string;
  icon: React.ReactElement;
  subcategories: {
    name: string;
    tools: Tool[];
  }[];
  color: string;
}) => (
  <section
    id={category}
    className={`flex w-full border-b border-${color}-100 flex-col items-start gap-4 py-8 lg:flex-row`}
  >
    <h2
      className={`flex w-full items-center gap-2 lg:w-1/3 text-${color}-500 text-5xl font-thin`}
    >
      {/* {icon} */}
      {/* {"﹏"} */}
      {"✺ "}
      {category}
    </h2>
    <div className="flex w-full flex-col gap-16 lg:w-2/3">
      {subcategories.map((subcategory) => (
        <Subcategory
          key={subcategory.name}
          {...subcategory}
          color={color}
        />
      ))}
    </div>
  </section>
);
