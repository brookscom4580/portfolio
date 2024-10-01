import { useCallback } from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";

import { ClientOnly } from "remix-utils/client-only";

import portfolioData from "../data/portfolios.json";

import useEmblaCarousel from "embla-carousel-react";

export default function PortfolioItem({ slug }: { slug: string | null }) {
  const portfolioItem =
    portfolioData.find((item) => item.slug === slug) || null;

    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
      }, [emblaApi]);
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

  return (
    <div className="container resume">
      <aside>
        <div className="wrapper">
          <Intro />
          <Contact />
        </div>
      </aside>
      <main>
        {portfolioItem ? (
          <div className="portfolio-item panel">
            <a href="/portfolio" className="back">
              <span className="icon material-symbols-outlined">arrow_back</span>{" "}
              Back to Portfolio
            </a>

            <div className="card--content">
              <h3>{portfolioItem.title}</h3>
              <p>{portfolioItem.copy}</p>
            </div>

            <ClientOnly
              fallback={
                <div
                  className="card--media"
                  data-count={portfolioItem.media.length}
                >
                  {portfolioItem.media.map((media, index) => (
                    <div
                      className="img"
                      key={index}
                      title={media.alt}
                      style={{ backgroundImage: `url(${media.url})` }}
                    />
                  ))}
                </div>
              }
            >
              {() => {                
                return (
                  <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                      <div className="embla__container">
                        {portfolioItem.media.map((media, index) => (
                          <div className="embla__slide" key={index}>
                            <img src={media.url} alt={media.alt} />
                            {media.caption && (
                              <p className="legend">{media.caption}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <button className="embla__prev" onClick={scrollPrev}>
                      Prev
                    </button>
                    <button className="embla__next" onClick={scrollNext}>
                      Next
                    </button>
                  </div>
                );
              }}
            </ClientOnly>
          </div>
        ) : (
          <p className="panel">
            <a href="/portfolio" className="back">
              <span className="icon material-symbols-outlined">arrow_back</span>{" "}
              View Full Portfolio
            </a>
            <br />
            <br />
            Sorry, I couldn't find that portfolio item.
          </p>
        )}
      </main>
    </div>
  );
}
