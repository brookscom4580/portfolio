import type { MetaFunction } from "@remix-run/node";
import Resume from "~/containers/Resume";

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

export default function Index() {
  return <div className="root">
    <Resume />
  </div>;
}
