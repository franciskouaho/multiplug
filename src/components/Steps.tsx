import { BarChart3, Users, Gauge, BellRing } from "lucide-react";

export const Steps = () => {
  const steps = [
    {
      icon: BarChart3,
      title: "Connect Your Tools",
      description: "Easily integrate Stripe and Google Analytics to centralize your data"
    },
    {
      icon: Users,
      title: "Select Your Competitors",
      description: "Monitor chosen competitors you want to track for accurate market insights"
    },
    {
      icon: Gauge,
      title: "Test, Automate & Optimize",
      description: "Experiment with pricing to fit about dynamically and execute your strategy in real-time"
    },
    {
      icon: BellRing,
      title: "Get Notified of Your Growth",
      description: "Get latest updates on how your pricing boosts revenue and growth"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Discover your perfect pricing model in just 4 simple steps
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};