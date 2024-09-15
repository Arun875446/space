// // import React from "react";
// // import ProjectCard from "../sub/ProjectCard";

// // const Projects = () => {
// //   return (
// //     <div
// //       className="flex flex-col items-center justify-center py-20"
// //       id="projects"
// //     >
// //       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
// //         My Projects
// //       </h1>
// //       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
// //         <ProjectCard
// //           src="/htmlcss.png"
// //           title="Modern Next.js Portfolio"
// //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// //         />
// //         <ProjectCard
// //           src="/javas.png"
// //           title="Interactive Website Cards"
// //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// //         />
// //         <ProjectCard
// //           src="/reactt.png"
// //           title="Space Themed Website"
// //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div
//       className="flex flex-col items-center justify-center py-20"
//       id="projects"
//     >
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         My Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/htmlcss.png"
//           title="Modern Next.js Portfolio"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           downloadLink="/syllabus/modern-nextjs-portfolio.pdf" // Add the link
//         />
//         <ProjectCard
//           src="/javas.png"
//           title="Interactive Website Cards"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           downloadLink="/syllabus/interactive-website-cards.pdf" // Add the link
//         />
//         <ProjectCard
//           src="/reactt.png"
//           title="Space Themed Website"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           downloadLink="/syllabus/space-themed-website.pdf" // Add the link
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-10 w-full max-w-6xl">
        <ProjectCard
          src="/htmlcss.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          downloadLink="/path/to/modern-nextjs-portfolio.pdf" // Link to the PDF
        />
        <ProjectCard
          src="/javas.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          downloadLink="/path/to/interactive-website-cards.pdf" // Link to the PDF
        />
        <ProjectCard
          src="/reactt.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          downloadLink="/path/to/space-themed-website.pdf" // Link to the PDF
        />
      </div>
    </div>
  );
};

export default Projects;
