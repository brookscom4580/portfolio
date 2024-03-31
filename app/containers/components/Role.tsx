type RoleProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
  achievements?: string[];
};

export default function Role({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  achievements,
}: RoleProps) {
  return (
    <div className="resume--role">
      <h4>{title}</h4>
      <h5>{company}</h5>
      <p>{location}</p>
      <p>
        {startDate} - {endDate || "Present"}
      </p>
      {description && <p>{description}</p>}
      {achievements && (
        <>
          <h5>Notable Achievements</h5>
          <ul>
            {achievements?.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
