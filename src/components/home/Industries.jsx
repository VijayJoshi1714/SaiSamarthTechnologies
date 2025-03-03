import IndustryCard from "../ui/IndustryCard";
import Industry1 from "../../assets/images/services1.png";
import Industry2 from "../../assets/images/services2.png";
import Industry3 from "../../assets/images/services4.png";

const Industries = () => {
  const industries = [
    {
      id: 1,
      title: "Laser Tracker Services",
      description:
        "Our Laser Tracker solutions offer high-accuracy measurements for large-scale projects. We ensure precise alignment, positioning, and calibration of industrial components.",
      features: [
        "Large-volume measurement",
        "High-accuracy positioning",
        "Real-time data analysis",
        "Ideal for aerospace, automotive, and heavy engineering industries",
      ],
      imageSrc: Industry1,
    },
    {
      id: 2,
      title: "3D Scanner Services",
      description:
        "Using advanced 3D scanning technology, we capture precise digital replicas of physical objects for various applications.",
      features: [
        "High-resolution 3D scanning",
        "Non-contact measurement",
        "Reverse engineering & quality control",
        "Ideal for prototyping, industrial design, and manufacturing",
      ],
      imageSrc: Industry2,
    },
    {
      id: 3,
      title: "Reverse Engineering",
      description:
        "Our Reverse Engineering services help reconstruct CAD models from physical components, enabling efficient modifications and improvements.",
      features: [
        "Recreating lost designs",
        "Component optimization",
        "CAD modeling from physical parts",
        "Enhanced product development & innovation",
      ],
      imageSrc: Industry3,
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-4">
        {/* Title Section */}
        <div className="mx-auto mb-16 max-w-[769px] text-center">
          <h2 className="mb-4 font-poppins text-[36px] font-bold leading-[48px] tracking-[-1.2px] text-[#161C2D]">
            Our Services
          </h2>
          <p className="mx-auto max-w-[572px] font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
            Comprehensive measurement and alignment solutions for industry
            leaders
          </p>
        </div>

        {/* Industries Stack */}
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              title={industry.title}
              description={industry.description}
              features={industry.features}
              imageSrc={industry.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
