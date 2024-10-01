import type { MetaFunction } from "@remix-run/node";
import Portfolio from "~/containers/Portfolio";

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

export default function Folio() {
  return <div className="root">
    <Portfolio />
  </div>;
}
