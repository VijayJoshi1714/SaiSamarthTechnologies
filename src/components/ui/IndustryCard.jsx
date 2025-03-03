const IndustryCard = ({ title, description, features, imageSrc }) => {
  return (
    <div className="flex min-h-[300px] w-full flex-col gap-8 rounded-xl bg-[#161C2D] p-8 lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="h-[300px] w-full rounded-lg object-cover lg:w-[500px]"
        />
      </div>

      <div className="flex w-full flex-col lg:w-1/2">
        <h3 className="mb-4 text-center font-poppins text-2xl font-bold text-white lg:text-left">
          {title}
        </h3>
        <p className="mb-4 text-center font-poppins text-base leading-relaxed text-gray-400 lg:text-left">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1 text-sm font-bold text-gray-400">✔</span>
              <span className="font-poppins text-sm text-gray-400">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndustryCard;
