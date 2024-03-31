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
          "Designed and managed the development of a new UI, service and library to manage the content on Ansira Edge Channel Engagement module websites, saving ~40% of one developer's time and simplifying the process overall.",
          "Managed the continuous development, maintenance and troubleshooting of ~390 vendor integrations with Ansira's proprietary website platform.",
          "Managed the continuous development and maintenance of hundreds of custom/niche solutions that extend the functionality of Ansira's proprietary website platform.",
          "Managed the continuous development and maintenance of ~60 mostly internally facing tools that support and bring efficiencies to workflows of many teams within Ansira.",
          "Ran weekly sprint planning, grooming, and retrospectives for the team. Managed the team's Jira boards and ensured that the team was working on the highest priority items.",
          "Conducted 1:1s with each team member to provide feedback, coaching, and support. Conducted yearly performance reviews and set goals for each team member.",
        ]}
        tags={[
          "Management",
          "Leadership",
          "Architecture",
          "System Design",
          "AWS",
          "Terraform",
          "JavaScript",
          "Node.js",
          "Express.js",
          "React",
          "Postgres",
          "TypeScript",
          "Docker",
          "Jest",
          "Git",
          "Agile",
          "Scrum",
          "CI/CD",
          "TDD",
        ]}
      />
      <Role
        title="Software Engineer IV"
        company="Ansira / Sincro"
        location="Seattle, WA"
        startDate="September 2019"
        endDate="April 2022"
        description="Heads down focus on leading development work on several simultaneous technical projects while leading, mentoring and growing the technical chops of a great team of engineers in the US and India"
        achievements={[
          "Designed and implemented a developer friendly, scalable, and maintainable system (dubbed IZ) to manage the development and continuous deployment of custom/niche code solutions that extend Ansira's proprietary website platform while maintaining a high level of code quality with low regression rates.",
          "Designed and implemented a UI and service to manage the triage and resolution of website platform bugs and escalations, unifying the process and providing a single source of truth (vs. manual management of  Jira issues, Salesforce cases and intake form submission) for stakeholders.",
          "Started bi-weekly 3 hour Learning and Social sessions for the team to share knowledge, learn new technologies, and build camaraderie.",
        ]}
        tags={[
          "Mentorship",
          "System Design",
          "AWS",
          "Terraform",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MySQL",
          "React",
          "PHP",
          "Docker",
          "Jest",
          "Git",
          "TDD",
        ]}
      />
      <Role
        title="Software Engineer III"
        company="Sincro / CDK Global"
        location="Seattle, WA"
        startDate="September 2016"
        endDate="September 2019"
        description="In my role I technically lead and own projects from conception, mentor junior developers and act as a technical co-lead for my team. The web applications I build improve workflows / create efficiencies for various dealer and OEM promotional deployment processes that affect thousands of automotive dealer websites and advertising campaigns."
        achievements={[
          "Started weekly coding challenges for the team to improve their skills and learn new technologies each Monday morning after our sprint entry meeting.",
          "Designed and engineered an in browser tool to allow designers to create and manage complex display advertising templates, saving ~2 weeks of engineering time per template and gives designers complete control over the final product.",
          "Engineered a component builder tool that enhances the LPB tool mentioned below in the Software Engineer II role but allowing for the creation of reusable components in browser by non-engineers.",
          "Engineered a tool chain that allowed for the scalable management of reusable and extendable styled and branded vehicle offer templates for major OEMs and vehicle dealers.",
        ]}
        tags={[
          "React",
          "Vue.js",
          "JavaScript",
          "Node.js",
          "Express.js",
          "MySQL",
          "PHP",
        ]}
      />
      <Role
        title="Software Engineer II"
        company="CDK Global"
        location="Seattle, WA"
        startDate="August 2015"
        endDate="September 2016"
        description="My core focus is creating internal web applications that improve workflow and efficiency for OEM promotional deployment across endorsed dealer website networks. I also provide front end web development and design work for OEM accounts including General Motors (US, Canada (EN & FR), Mexico (ES), Australia, New Zealand), Toyota, Lexus, Kia, Hyundai, Volkswagen, BMW, and MINI."
        achievements={[
          "Designed and engineered a tool (LPB) to allows for the creation of OEM promotional landing pages by in browser using drag and drop components. This tool allowed a team of engineers who had been hand creating these pages in the past to instead focus on building out the reusable components that make up the pages.",
          "Engineered a tool (PDPV) that allowed account managers for large OEM clients to provide data in a consistent format that could be used to automate the creation and deployment of promotional content to thousands of dealer websites. Saving hundreds of hours of manual engineering effort per month.",
        ]}
        tags={[
          "HTML",
          "CSS",
          "jQuery",
          "Bootstrap",
          "JavaScript",
          "PHP"
        ]}
      />
      <Role
        title="Software Engineer I"
        company="CDK Global / ADP Dealer Services"
        location="Seattle, WA"
        startDate="October 2013"
        endDate="August 2015"
        description="My day to day tasks include troubleshooting and finding resolutions to existing bugs in code as well as writing new code to provide enhancements to the Cobalt 'Websites' platform. I also provide front end web development and design work for OEM accounts including General Motors (US, Canada (EN & FR), Mexico (ES), Australia, New Zealand), Toyota, Lexus, Kia, Hyundai, Volkswagen, BMW, and MINI."
        tags={[
          "HTML",
          "CSS",
          "jQuery",
          "JavaScript",
          "PHP",
          "Photoshop"
        ]}
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
