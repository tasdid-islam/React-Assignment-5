import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

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

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const updatedStack = selectedStack.filter((item) => item.id !== id);

    setSelectedStack(updatedStack);
    toast.info("Technology removed from your stack!");
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.error("All technologies removed from your stack!");
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-lg font-semibold">Loading technologies...</p>
      </section>
    );
  }

  return (
    <>
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            Explore The{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-3 text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-4">
            <div className="grid gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => {
                const isAdded = selectedStack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <div
                    key={technology.id}
                    className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#8B5CF6]/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-12 w-12 transition-transform duration-300 hover:scale-110"
                        />

                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600">
                          {technology.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-[#0F172A]">
                        {technology.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {technology.description}
                      </p>
                    </div>

                    <div>
                      <div className="mt-6 flex items-center justify-between">
                        <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-[#EC4899]">
                          {technology.category}
                        </span>

                        <span className="text-sm font-medium text-gray-500">
                          {technology.difficulty}
                        </span>

                        <span className="text-sm font-semibold text-amber-500">
                          ⭐ {technology.rating}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddToStack(technology)}
                        disabled={isAdded}
                        className={`mt-5 w-full rounded-[30px] py-2.5 text-sm font-medium text-white transition-all duration-300 ${
                          isAdded
                            ? "cursor-not-allowed bg-gray-400 opacity-70"
                            : "bg-[#110a0d] hover:!bg-gradient-to-r hover:!from-[#8B5CF6] hover:!to-[#EC4899] hover:shadow-lg hover:scale-[1.02] active:scale-95"
                        }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold text-[#0F172A]">Your Stack</h3>

              <p className="mt-2 text-sm text-gray-500">
                {selectedStack.length}{" "}
                {selectedStack.length === 1 ? "Technology" : "Technologies"}{" "}
                Selected
              </p>

              {selectedStack.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="font-medium text-gray-500">Your stack is empty.</p>
                  <p className="mt-2 text-sm text-gray-400">
                    Add technologies to build your ideal stack.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  {selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition-all hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-10 w-10"
                        />

                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemove(item.id)}
                        className="text-lg font-bold text-[#EC4899] transition hover:scale-125"
                        aria-label={`Remove ${item.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={handleRemoveAll}
                    className="mt-5 w-full rounded-[30px] bg-[#110a0d] py-2 text-sm font-medium text-white transition-all duration-300 hover:!bg-gradient-to-r hover:!from-[#8B5CF6] hover:!to-[#EC4899] hover:shadow-md"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default Technologies;