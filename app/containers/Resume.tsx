import Intro from "./components/Intro";
import Roles from "./components/Roles";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Resume() {
  return (
    <div className="container resume">
      <aside>
        <div className="wrapper">
            <Intro />
            <Contact />
        </div>
      </aside>
      <main>
        <Roles />
        <Education />
      </main>
    </div>
  );
}
