import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        "Laser Tracker Services",
        "3D Scanner Services",
        "Reverse Engineering",
      ],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms"],
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg width="17" height="15" viewBox="0 0 17 15" fill="#ffffff">
          <path d="M17 1.875C16.375 2.1875 15.7188 2.40625 15 2.5C15.75 2 16.2812 1.28125 16.5312 0.4375C15.875 0.84375 15.125 1.15625 14.3438 1.3125C13.7188 0.59375 12.8438 0.15625 11.875 0.15625C9.96875 0.15625 8.46875 1.65625 8.46875 3.5625C8.46875 3.84375 8.5 4.125 8.5625 4.375C5.59375 4.21875 2.96875 2.875 1.21875 0.875C0.90625 1.40625 0.71875 2 0.71875 2.65625C0.71875 3.84375 1.34375 4.9375 2.28125 5.5625C1.71875 5.5625 1.15625 5.40625 0.6875 5.15625V5.1875C0.6875 6.84375 1.84375 8.21875 3.375 8.53125C3.0625 8.625 2.75 8.65625 2.40625 8.65625C2.1875 8.65625 1.96875 8.65625 1.78125 8.59375C2.1875 9.9375 3.40625 10.9375 4.84375 10.9375C3.71875 11.8125 2.3125 12.3125 0.78125 12.3125C0.5 12.3125 0.25 12.3125 0 12.28125C1.4375 13.2188 3.15625 13.75 5 13.75C11.875 13.75 15.4375 8.71875 15.4375 4.375C15.4375 4.21875 15.4375 4.0625 15.4375 3.90625C16.125 3.34375 16.7188 2.65625 17 1.875Z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff">
          <path d="M17 0H1C0.4 0 0 0.4 0 1V17C0 17.6 0.4 18 1 18H9.6V11H7.3V8.3H9.6V6.3C9.6 4 11.1 2.7 13.2 2.7C14.2 2.7 15.1 2.8 15.3 2.8V5.2H13.9C12.9 5.2 12.7 5.7 12.7 6.4V8.3H15.2L14.9 11H12.7V18H17C17.6 18 18 17.6 18 17V1C18 0.4 17.6 0 17 0Z" />
        </svg>
      ),
      href: "#",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="#ffffff">
          <path d="M9 1.6C11.4 1.6 11.7 1.6 12.7 1.7C13.6 1.8 14 1.9 14.3 2C14.7 2.2 15 2.3 15.3 2.7C15.7 3 15.9 3.3 16 3.7C16.1 4 16.3 4.4 16.3 5.3C16.4 6.3 16.4 6.6 16.4 9C16.4 11.4 16.4 11.7 16.3 12.7C16.2 13.6 16.1 14 16 14.3C15.8 14.7 15.7 15 15.3 15.3C15 15.7 14.7 15.9 14.3 16C14 16.1 13.6 16.3 12.7 16.3C11.7 16.4 11.4 16.4 9 16.4C6.6 16.4 6.3 16.4 5.3 16.3C4.4 16.2 4 16.1 3.7 16C3.3 15.8 3 15.7 2.7 15.3C2.3 15 2.1 14.7 2 14.3C1.9 14 1.7 13.6 1.7 12.7C1.6 11.7 1.6 11.4 1.6 9C1.6 6.6 1.6 6.3 1.7 5.3C1.8 4.4 1.9 4 2 3.7C2.2 3.3 2.3 3 2.7 2.7C3 2.3 3.3 2.1 3.7 2C4 1.9 4.4 1.7 5.3 1.7C6.3 1.6 6.6 1.6 9 1.6ZM9 0C6.6 0 6.2 0 5.3 0.1C4.3 0.2 3.7 0.3 3.1 0.6C2.5 0.9 2 1.2 1.5 1.7C1 2.2 0.7 2.7 0.4 3.3C0.1 3.9 0 4.5 0 5.5C0 6.5 0 6.9 0 9.3C0 11.7 0 12.1 0.1 13C0.2 14 0.3 14.6 0.6 15.2C0.9 15.8 1.2 16.3 1.7 16.8C2.2 17.3 2.7 17.6 3.3 17.9C3.9 18.2 4.5 18.3 5.5 18.3C6.5 18.4 6.9 18.4 9.3 18.4C11.7 18.4 12.1 18.4 13 18.3C14 18.2 14.6 18.1 15.2 17.8C15.8 17.5 16.3 17.2 16.8 16.7C17.3 16.2 17.6 15.7 17.9 15.1C18.2 14.5 18.3 13.9 18.3 12.9C18.4 11.9 18.4 11.5 18.4 9.1C18.4 6.7 18.4 6.3 18.3 5.4C18.2 4.4 18.1 3.8 17.8 3.2C17.5 2.6 17.2 2.1 16.7 1.6C16.2 1.1 15.7 0.8 15.1 0.5C14.5 0.2 13.9 0.1 12.9 0.1C11.9 0 11.5 0 9 0Z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer id="contact" className="bg-[#161C2D] py-24">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        {/* Grid for Large Screens, Stacks on Small Screens */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left gap-y-12">
          {/* Logo and Description */}
          <div className="lg:w-1/5 flex flex-col items-center lg:items-start">
            <a href="/" className="text-xl font-bold text-white mb-4">
              LOGO
            </a>
            <p className="font-poppins text-[15px] leading-[26px] text-white opacity-65 max-w-[280px]">
              Empowering businesses with precision measurement solutions
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row lg:gap-24">
            {footerLinks.map((column, index) => (
              <div key={index} className="text-center lg:text-left">
                <h3 className="mb-6 font-poppins text-[15px] text-white opacity-65">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to="#"
                        className="font-poppins text-[17px] text-white transition-opacity hover:opacity-80"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Links and Contact */}
          <div className="lg:w-1/5 flex flex-col items-center lg:items-start lg:text-left">
            <h3 className="mb-6 font-poppins text-[15px] text-white opacity-65">
              Follow Us
            </h3>
            <div className="flex gap-6 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* Contact Details */}
            <p className="font-poppins text-[15px] text-white opacity-65">
              Email: shivsamarthtechnologies@gmail.com
            </p>
            <p className="font-poppins text-[15px] text-white opacity-65">
              Ph No.: +91-7204222028
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
