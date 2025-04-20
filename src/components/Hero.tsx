
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            NFTs.Feedback
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The Perfect Domain for Your Next-Generation NFT Feedback Platform
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="default" className="text-lg">
              Make an Offer
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>
          <div className="mt-12 animate-float">
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
