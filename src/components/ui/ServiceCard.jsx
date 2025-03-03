const ServiceCard = ({ title, description, imageSrc }) => {
  return (
    <div className="mx-auto w-full max-w-[350px] px-4 sm:px-0">
      <div className="flex flex-col items-center">
        <img
          src={imageSrc}
          alt={title}
          className="mb-4 h-[200px] w-full rounded-[10px] border border-[#E7E9ED] object-cover sm:h-[250px]"
        />
        <div className="w-full text-center sm:text-left">
          <h3 className="mb-2 font-poppins text-[18px] font-bold leading-[24px] tracking-[-0.5px] text-[#161C2D] sm:text-[21px] sm:leading-[32px]">
            {title}
          </h3>
          <p className="font-poppins text-[15px] font-normal leading-[24px] tracking-[-0.2px] text-[#161C2D] opacity-70 sm:text-[17px] sm:leading-[29px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
