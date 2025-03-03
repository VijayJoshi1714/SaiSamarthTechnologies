import overview from "../../assets/images/overview.png";

const Overview = () => {
  return (
    <section id="company" className="py-16">
      <div className="mx-auto max-w-[1285px] px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left Column - Overview Text */}
          <div className="max-w-[339px]">
            <h2 className="mb-6 font-poppins text-[32px] font-bold leading-[44px] tracking-[-1.2px] text-[#161C2D]">
              Overview
            </h2>
            <p className="font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
              Shiv Samarth Technologies offers comprehensive laser tracker
              services aimed at precision measurement and alignment solutions
              across various industries. Our services are tailored to meet the
              demanding requirements of manufacturing, aerospace, automotive,
              and other sectors where accuracy is paramount.
            </p>
          </div>

          {/* Middle Column - Image */}
          <div className="w-[308px]">
            <img
              src={overview}
              alt="Overview"
              className="h-[419px] w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            {/* Growth Stats */}
            <div>
              <h3 className="mb-2 font-poppins text-[32px] font-bold leading-[44px] tracking-[-1.2px] text-[#161C2D]">
                Growth
              </h3>
              <p className="font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
                Our services are increasingly trusted by a growing number of
                customers each month.
              </p>
            </div>

            {/* 92% Stats */}
            <div>
              <h3 className="mb-2 font-poppins text-[32px] font-bold leading-[44px] tracking-[-1.2px] text-[#161C2D]">
                92%
              </h3>
              <p className="font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
                Our customers have given us a 92% satisfaction rate, reflecting
                our commitment.
              </p>
            </div>

            {/* Rating Stats */}
            <div>
              <h3 className="mb-2 font-poppins text-[32px] font-bold leading-[44px] tracking-[-1.2px] text-[#161C2D]">
                4.9 / 5.0
              </h3>
              <p className="font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
                We proudly maintain an average rating of 4.9 out of 5.0 across
                various review platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
