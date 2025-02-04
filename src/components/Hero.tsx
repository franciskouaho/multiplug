import { Button } from "@/components/ui/button";

export const Hero = () => {
  const handleMatch = () => {
    // TODO: Implement matching logic
    console.log("Finding a match...");
  };

  return (
    <div className="pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 heading-gradient">
          DareTo - Ose Parler
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Trouvez un partenaire de conversation et améliorez vos compétences linguistiques
        </p>
        <div className="flex justify-center mb-12">
          <Button size="lg" className="text-lg" onClick={handleMatch}>
            Trouver un partenaire
          </Button>
        </div>
      </div>
    </div>
  );
};