import { useEffect, useState } from "react";

const sections = ["about", "experience", "projects"];
const Navbar = () => {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <ul className="text-gray-700 font-medium">
      {sections.map((id) => (
        <li key={id}>
          {/* {active === id && <span className="transition-all delay-50 duration-50 ease-in-out">→</span>} */}

          <a
            href={`#${id}`}
            className={
              active === id
                ? "active  text-blue-500 ml-2 transition-all delay-50 duration-50 ease-in-out"
                : ""
            }
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
