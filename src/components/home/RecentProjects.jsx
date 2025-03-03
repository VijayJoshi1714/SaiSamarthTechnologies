import ProjectCard from "../ui/ProjectCard";
import recent1 from "../../assets/images/recent1.png";
import recent2 from "../../assets/images/recent2.png";
import recent3 from "../../assets/images/recent3.png";

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Alignment of robotic assembly lines",
      description: "For an automotive manufacturer",
      imageSrc: recent1,
    },
    {
      id: 2,
      title: "Inspection and verification of turbine components",
      description: "For a power generation plant",
      imageSrc: recent2,
    },
    {
      id: 3,
      title: "Calibration and certification of laser trackers",
      description: "For a defense contractor",
      imageSrc: recent3,
    },
  ];

  return (
    <section id="projects" className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-[1600px] px-4">
        {/* Title Section */}
        <div className="mx-auto mb-8 max-w-[769px] text-center sm:mb-16">
          <h2 className="mb-4 font-poppins text-[28px] font-bold leading-[36px] tracking-[-1.2px] text-[#161C2D] sm:text-[36px] sm:leading-[48px]">
            Recent Projects
          </h2>
          <p className="mx-auto max-w-[753px] font-poppins text-[16px] font-normal leading-[26px] tracking-[-0.2px] text-[#161C2D] opacity-70 sm:text-[19px] sm:leading-[32px]">
            Working on innovative solutions and transformative ideas, trusted by
            world-class clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto flex max-w-[1044px] flex-col gap-8">
          <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-x-[100px]">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="mx-auto flex w-full justify-center sm:w-[472px]">
            {projects.slice(2).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
