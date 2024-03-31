import Intro from "./components/Intro";
import Roles from "./components/Roles";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Resume() {
  return (
    <div className="container resume">
      <aside>
        <div className="wrapper">
            <Intro />
            <Contact />
            <Skills />
        </div>
      </aside>
      <main>
        <Roles />
        <Education />
      </main>
    </div>
  );
}
