// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const ProjectCard = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-[400px] h-[350px] object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//       <button className="bg-[#2A0E61] text-white mb-4 py-2 rounded-lg mx-auto block">
//   download syllabus
// </button>

//     </div>
//   );
// };

// export default ProjectCard;
import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  downloadLink: string; // New prop for the download link
}

const ProjectCard = ({ src, title, description, downloadLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-4">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-[400px] h-[350px] object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex justify-center mb-4">
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2A0E61] text-white py-2 px-4 rounded-lg"
        >
          Download Syllabus
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
