import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ClientBenefits = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    "Openness",
    "Ideas",
    "Feedbacks",
    "Critics",
    "Collaborations",
    "Associations",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[570px] w-full bg-[#161C2D] px-4 py-12 lg:h-[570px]">
      <div className="mx-auto max-w-[1601px]">
        {/* Title */}
        <h2 className="text-center font-poppins text-[24px] font-bold leading-[36px] tracking-[-1.2px] text-white sm:text-[36px] sm:leading-[48px]">
          Client Benefits
        </h2>

        {/* We Achieve + Animated Word */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-24 sm:flex-row">
          <span className="text-center font-poppins text-[24px] font-medium leading-[28px] tracking-[-0.2px] text-white opacity-70 sm:text-[34px] sm:leading-[32px]">
            We Achieve
          </span>

          <motion.div
            className="relative h-[60px] w-[300px] overflow-hidden bg-[#61A6D0] sm:h-[90px] sm:w-[365px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 w-[280px] -translate-x-1/2 -translate-y-1/2 text-center font-rubik text-[28px] font-semibold leading-[32px] text-white sm:w-[322px] sm:text-[45px] sm:leading-[50px]"
              key={currentWordIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWordIndex]}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.p
          className="mx-auto mt-8 max-w-[1335px] text-center font-poppins text-[20px] font-normal leading-[26px] tracking-[-0.2px] text-[#979797] sm:mt-28 sm:text-[30px] sm:leading-[32px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Maximize Precision, Efficiency, and Compliance with Customized
          Solutions for Your Projects
        </motion.p>
      </div>
    </section>
  );
};

export default ClientBenefits;
