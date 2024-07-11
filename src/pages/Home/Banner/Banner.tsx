import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32 bg-[url('https://i.ibb.co/KWZBH3n/8411.jpg')] bg-cover bg-center">
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-[#000000bf]"></div>
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center text-white mx-auto">
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Welcome To MB Online Nursery
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-white text-muted-foreground">
                  Over 10+ fully responsive, UI blocks you can drop into your
                  Shadcn UI projects and customize to your heart&apos;s content.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 gap-3 text-black flex justify-center">
                <Button size={"lg"}>Get started</Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
};

export default Banner;
