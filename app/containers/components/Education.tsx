import Role from "./Role";

export default function Education() {
  return (
    <div className="resume--education resume--roles panel">
      <h3>Education</h3>
      <Role
        title="Kent State University"
        company="Bachelor of Science in Computer Science / Technology"
        location="Kent, OH"
        startDate="2009"
        endDate="2011"
        description="This degree is incomplete."
      />
      <Role
        title="East Jackson Comprehensive High School"
        company="High School Diploma"
        location="Commerce, GA"
        startDate="2005"
        endDate="2009"
      />
    </div>
  );
}
