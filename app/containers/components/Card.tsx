type CardMediaProps = {
  url: string;
  alt: string;
  caption?: string | null;
};

type Props = {
  media: CardMediaProps[];
  title: string;
  copy: string;
  tags?: string[];
  linkLabel?: string;
  href?: string;
  target?: string;
  linkCard?: boolean;
};

const CardWrapper = ({
  linkCard,
  href,
  target,
  children,
}: {
  linkCard?: boolean;
  href?: string;
  target?: string;
  children: React.ReactNode;
}) => {
  if (linkCard) {
    return (
      <a href={href} target={target} className="card card-linking">
        {children}
      </a>
    );
  }
  return <div className="card">{children}</div>;
};

export default function Card({
  media,
  title,
  copy,
  tags,
  linkLabel,
  href,
  target,
  linkCard = false,
}: Props) {
  return (
    <CardWrapper linkCard={linkCard} href={href} target={target}>
      <div className="card--media" data-count={media.length}>
        {media.map((media, index) => (
          <div
            className="img"
            key={index}
            title={media.alt}
            style={{ backgroundImage: `url(${media.url}), linear-gradient(90deg, #f7f7f7, #eaeaea)` }}
          />
        ))}
      </div>
      <div className="card--content">
        <h3>{title}</h3>
        {tags && (
          <>
            {tags?.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </>
        )}
        <p>{copy}</p>
        {linkLabel && !linkCard && (
          <a className="cta" href={href} target={target || "_self"}>
            {linkLabel}
          </a>
        )}
        {linkLabel && linkCard && (
          <div className="cta">
            {linkLabel}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
