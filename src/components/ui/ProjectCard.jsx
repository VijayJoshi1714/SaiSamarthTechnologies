const ProjectCard = ({ title, description, imageSrc }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border-[3px] border-[#C0D0E1] p-4 sm:h-[147px] sm:w-[472px] sm:flex-row sm:gap-5">
      <img
        src={imageSrc}
        alt={title}
        className="mx-auto h-[200px] w-full rounded-lg object-cover sm:mx-0 sm:h-[131px] sm:w-[173px]"
      />
      <div className="flex flex-1 items-center justify-center text-center sm:justify-start sm:text-left">
        <p className="font-poppins text-[16px] font-normal leading-[24px] text-[#3D3D3D]">
          {title} {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
