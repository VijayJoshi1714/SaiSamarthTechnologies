import ServiceCard from "../ui/ServiceCard";
import services1 from "../../assets/images/industry1.png";
import services2 from "../../assets/images/industry2.png";
import services3 from "../../assets/images/industry3.png";
import services4 from "../../assets/images/industry4.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Manufacturing",
      description: "Precision alignment of production equipment.",
      imageSrc: services1,
    },
    {
      id: 2,
      title: "Aerospace",
      description: "Critical measurements for aircraft components.",
      imageSrc: services2,
    },
    {
      id: 3,
      title: "Alignment and Inspection",
      description: "Quality control and inspection of vehicle assemblies.",
      imageSrc: services3,
    },
    {
      id: 4,
      title: "Energy",
      description: "Monitoring and alignment of power plant components.",
      imageSrc: services4,
    },
  ];

  return (
    <section id="industries" className="bg-[#F4F7FA] py-20">
      <div className="mx-auto max-w-[1600px] px-4">
        {/* Title Section */}
        <div className="mx-auto mb-16 max-w-[769px] text-center">
          <h2 className="mb-4 font-poppins text-[36px] font-bold leading-[48px] tracking-[-1.2px] text-[#161C2D]">
            Industries We Serve
          </h2>
          <p className="mx-auto max-w-[589px] font-poppins text-[19px] font-normal leading-[32px] tracking-[-0.2px] text-[#161C2D] opacity-70">
            Empowering small businesses with tailored industry solutions.
          </p>
        </div>

        {/* Services Grid with Larger Gap and More Offset */}
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-x-[80px] gap-y-[50px] px-4 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-300 ${
                index % 2 !== 0 ? "mt-16" : "mt-0"
              }`} // More offset for the right side
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
