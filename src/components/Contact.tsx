
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 gradient-text">
          Interested in This Domain?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Don't miss out on this unique opportunity to own nfts.feedback - 
          the perfect domain for building the future of NFT feedback systems.
        </p>
        <Button size="lg" variant="default" className="text-lg">
          Contact for Purchase
        </Button>
      </div>
    </section>
  );
};

export default Contact;
