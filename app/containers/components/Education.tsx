import Role from "./Role";

export default function Education() {
  return (
    <div className="resume--education resume--roles panel">
      <h3>Education</h3>
      <Role
        title="Certified Cloud Solutions Architect - Associate"
        company="Amazon Web Services"
        location="Seattle, WA"
        startDate="2023"
        endDate="2026"
        link="https://www.credly.com/badges/390ba2d3-3bf6-41e6-bbeb-259e85414406/linked_in_profile"
      />
      <Role
        title="Certified Cloud Practitioner"
        company="Amazon Web Services"
        location="Seattle, WA"
        startDate="2022"
        endDate="2026"
        link="https://www.credly.com/badges/6493e984-d2ff-43d9-9a4e-05305cff8b4c/linked_in_profile"
      />
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
