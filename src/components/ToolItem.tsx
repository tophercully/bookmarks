import { Tool } from "@/types";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  tool: Tool;
  color: string;
}

const ToolItem = ({ tool, color }: Props) => {
  const { name, description, link, favorite } = tool;

  return (
    <li className={`flex flex-wrap items-start gap-2 p-0.5`}>
      <h4 className="flex h-fit items-center gap-1">
        <Heart
          className={
            favorite ?
              `aspect-square h-4/5 px-1.5 text-${color}-300 opacity-100`
            : "opacity-0"
          }
          fill="currentColor"
        />
        <Link
          href={link}
          target="_blank"
          className={`text-nowrap text-base-700 bg-${color}-50 px-1 font-medium hover:bg-${color}-100`}
          // rel="noopener noreferrer"
        >
          {name}
        </Link>
      </h4>
      <p className="flex flex-wrap text-base-600">- {description}</p>
      {/* {tags && <p>Tags: {tags.join(", ")}</p>} */}
    </li>
  );
};

export default ToolItem;
