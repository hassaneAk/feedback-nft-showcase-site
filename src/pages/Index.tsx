
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <header>
        <Hero />
      </header>
      <section aria-label="Use Cases">
        <UseCases />
      </section>
      <section aria-label="Contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
