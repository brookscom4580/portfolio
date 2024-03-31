import Role from "./Role";

export default function Roles() {
  return (
    <div className="resume--roles panel">
      <h3>Work Experience</h3>
      <Role
        title="Software Engineering Manager"
        company="Ansira / Sincro"
        location="Seattle, WA"
        startDate="April 2022"
        description="In this role I manage and mentor a distributed team of 6 full stack engineers that services several products and service lines across Ansira's business. I am responsible for the technical direction, code quality, and the overall health and morale of the team. I work closely with product managers, designers, and other stakeholders to ensure that the team is delivering high quality software that meets the needs of our customers. This role is a mix of technical leadership (system design & direct contribution to our code bases), people management, and project management."
        achievements={[
          "Designed and managed the development a system using AWS serverless services and infrastructure to replace Ansira's use of BluePrism saving the company ~$180k per year.",
          "Designed and managed the development of a new platform to for the simpler integration and management of third party code into Ansira's proprietary website platform.",
          "Designed and managed the development of a new UI, service and library to manage the content on Ansira Edge Channel Engagement module website, saving ~40% of one developer's time and simplifying the process overall.",
          "Managed the continuous development and maintenance of ~390 vendor integrations with Ansira's proprietary website platform.",
          "Managed the continuous development and maintenance of custom and niche solutions that extend the functionality of Ansira's proprietary website platform.",
          "Managed the continuous development and maintenance of ~60 mostly internally facing tools that support and bring efficiencies to workflows of many teams within Ansira.",
        ]}
      />
      <Role
        title="Software Engineer IV"
        company="Ansira / Sincro"
        location="Seattle, WA"
        startDate="September 2019"
        endDate="April 2022"
        description="Heads down focus on leading development work on several simultaneous technical projects while leading, mentoring and growing the technical chops of a great team of engineers in the US and India"
      />
      <Role
        title="Software Engineer III"
        company="Sincro / CDK Global"
        location="Seattle, WA"
        startDate="September 2016"
        endDate="September 2019"
        description="In my role I technically lead and own projects from conception, mentor junior developers and act as a technical co-lead for my team. The web applications I build improve workflows / create efficiencies for various dealer and OEM promotional deployment processes that affect thousands of automotive dealer websites and advertising campaigns."
      />
      <Role
        title="Software Engineer II"
        company="CDK Global"
        location="Seattle, WA"
        startDate="August 2015"
        endDate="September 2016"
        description="My core focus is creating internal web applications that improve workflow and efficiency for OEM promotional deployment across endorsed dealer website networks. I also provide front end web development and design work for OEM accounts including General Motors (US, Canada (EN & FR), Mexico (ES), Australia, New Zealand), Toyota, Lexus, Kia, Hyundai, Volkswagen, BMW, and MINI."
      />
      <Role
        title="Software Engineer I"
        company="CDK Global / ADP Dealer Services"
        location="Seattle, WA"
        startDate="October 2013"
        endDate="August 2015"
        description="My day to day tasks include troubleshooting and finding resolutions to existing bugs in code as well as writing new code to provide enhancements to the Cobalt 'Websites' platform. I also provide front end web development and design work for OEM accounts including General Motors (US, Canada (EN & FR), Mexico (ES), Australia, New Zealand), Toyota, Lexus, Kia, Hyundai, Volkswagen, BMW, and MINI."
      />
      <Role
        title="Web Design Specialist"
        company="ADP Dealer Services / The Cobalt Group"
        location="Seattle, WA"
        startDate="August 2012"
        endDate="October 2013"
        description="At The Cobalt Group (CDK Digital Marketing) I used my design and coding abilities to build automotive dealership and manufacturer websites. My responsibilities included building websites and digital marketing related projects for General Motors as well as 10 other major automotive manufacturers. Cobalt uses an in house proprietary content management system developed using HTML, CSS, JS, jQuery and JSP."
      />
      <Role
        title="Production Designer"
        company="Knotice"
        location="Akron, OH &amp; Seattle, WA"
        startDate="November 2010"
        endDate="August 2012"
        description="As a production designer I worked with companies such as Time Warner Cable and Comcast to design, code and render test marketing emails, lead generating landing pages and forms. I ensured that all work produced by Knotice met industry standards and best practices. I used my knowledge of HTML, CSS, and JavaScript to become a power user of Knotice's Concentri platform."
      />
    </div>
  );
}
