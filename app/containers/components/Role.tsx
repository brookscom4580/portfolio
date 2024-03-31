type RoleProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
  tags?: string[];
  link?: string;
};

export default function Role({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  achievements,
  tags,
  link
}: RoleProps) {
  return (
    <div className="resume--role">
      <h4>{title} {link && <a href={link} target="_blank"><span className="icon material-symbols-outlined">link</span></a>}</h4> 
      <h5 className="place">
        <span>{company}</span>
        <p className="location">{location}</p>
      </h5>
      <p className="timeline">
        {startDate} - {endDate || "Present"}
      </p>

      {description && <p>{description}</p>}
      {achievements && (
        <>
          <h6>Notable Achievements</h6>
          <ul>
            {achievements?.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </>
      )}
      {tags && (
        <>
          {tags?.map((tag, index) => (
            <span className="tag" key={index}>
              {tag}
            </span>
          ))}
        </>
      )}
    </div>
  );
}
