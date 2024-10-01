import type { MetaFunction } from "@remix-run/node";
import PortfolioItem from "~/containers/PortfolioItem";
import { useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Greg Brooks - Software Engineering Leader - Seattle, WA" },
    {
      name: "description",
      content:
        "Greg Brooks is a software engineering leader based in Seattle, WA.",
    },
  ];
};

export default function FolioItem() {
  const { item } = useParams();
  return (
    <div className="root">
      <PortfolioItem slug={item || null} />
    </div>
  );
}
