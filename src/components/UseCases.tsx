
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    title: "NFT Authentication",
    description: "Verified feedback for NFT authenticity and value verification.",
  },
  {
    title: "Creator Reputation",
    description: "Build trust through blockchain-verified feedback systems.",
  },
  {
    title: "Community Engagement",
    description: "Foster community growth through tokenized feedback mechanisms.",
  },
  {
    title: "Market Analytics",
    description: "Real-time NFT market insights through community feedback.",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Endless Possibilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-secondary/50 border-purple-500/20 hover-card">
              <CardHeader>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
