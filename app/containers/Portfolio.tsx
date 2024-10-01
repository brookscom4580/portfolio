import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Card from "./components/Card";

import portfolioData from "../data/portfolios.json";

export default function Portfolio() {
  return (
    <div className="container resume">
      <aside>
        <div className="wrapper">
          <Intro />
          <Contact />
        </div>
      </aside>
      <main>
        <Cards>
          <>
            {portfolioData.map((item) => (
              <Card
                key={item.slug}
                media={item.media}
                title={item.title}
                copy={item.copy}
                tags={item.tags}
                linkLabel="View Details"
                href={`/portfolio/${item.slug}`}
                linkCard={true}
              />
            ))}
          </>
        </Cards>
      </main>
    </div>
  );
}
