import { useEffect, useState } from "react";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading technologies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg font-semibold">Loading technologies...</p>
      </section>
    );
  }

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-[#0F172A] font-extrabold">
          Explore The <span className="text-[#DB2777]">Technologies</span>
        </h2>

        <p className="mt-3 text-gray-600">
          Pick one technology per category to build your ideal stack..
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="rounded-xl border border-gray-200 p-6"
            >
             <div className="flex items-center justify-between">
               <img
                src={technology.icon}
                alt={technology.name}
                className="h-12 w-12"
              />

              <span className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm">
                {technology.badge}
              </span>
             </div>

              <h3 className="mt-4 text-xl font-bold">
                {technology.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {technology.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-[#DB2777]">
                  {technology.category}
                </span>

                <span className="text-sm text-gray-600">
                  {technology.difficulty}
                </span>
                <span>⭐ {technology.rating}</span>
              </div>

             
                

                <button className="rounded-[30px] bg-[#110a0d] px-30 py-2 text-sm font-medium text-white mt-5 transition hover:bg-[#DB2777]">
                  Add to Stack
                </button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;