
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="default" className="text-lg">
                  Make an Offer
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Make an Offer</DialogTitle>
                  <DialogDescription>
                    Contact us to discuss purchasing the nfts.feedback domain.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>Please use the contact form at the bottom of the page to submit your offer.</p>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Why NFTs.Feedback?</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-4">
                  <h3 className="text-lg font-semibold gradient-text">Perfect Domain for NFT Projects</h3>
                  <p className="text-gray-300">
                    This premium domain name combines two powerful elements: NFTs and feedback systems. 
                    It's ideal for building platforms where users can provide and receive feedback on NFT projects, 
                    artwork, or collections.
                  </p>
                  
                  <h3 className="text-lg font-semibold gradient-text">Potential Use Cases</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>NFT review and rating platform</li>
                    <li>Community feedback system for NFT projects</li>
                    <li>NFT authentication and verification service</li>
                    <li>NFT marketplace with integrated feedback</li>
                    <li>Artist-collector communication platform</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold gradient-text">Premium Investment</h3>
                  <p className="text-gray-300">
                    As the NFT market continues to grow, this domain represents a valuable 
                    investment opportunity. Its memorable and descriptive nature makes it 
                    perfect for building a trusted platform in the NFT space.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
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
