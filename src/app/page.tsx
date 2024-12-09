import { Category } from "@/components/Category";
import toolData from "@/data/toolData";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div className="flex flex-col">
        <h1
          className="text-7xl"
          style={{ fontVariationSettings: '"emoji" 0' }}
        >
          ⛰&#x200C; Useful
        </h1>

        <h2 className="text-xl text-base-400">
          Tools and resources I use daily when creating programs for the web
        </h2>
      </div>
      <nav className="flex flex-col gap-1">
        {toolData.map((category) => (
          <Link
            key={category.category}
            href={`#${category.category}`}
            className="w-fit text-xl hover:underline"
          >
            ☈ {category.category}
          </Link>
        ))}
      </nav>
      {toolData.map((category) => (
        <Category
          key={category.category}
          {...category}
          color={category.color as string}
        />
      ))}
    </div>
  );
}
