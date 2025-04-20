
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    // This will be replaced with actual email sending functionality once Supabase is connected
    toast({
      title: "Message received",
      description: "Please connect Supabase to enable email sending functionality.",
    });
    setMessage("");
  };

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
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="default" className="text-lg">
              Contact for Purchase
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
              <DialogDescription>
                Send us your offer or inquiry about nfts.feedback domain.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Textarea
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px]"
              />
            </div>
            <DialogFooter>
              <Button onClick={handleSubmit} className="w-full">
                Send Message
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Contact;
