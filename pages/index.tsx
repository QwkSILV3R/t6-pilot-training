import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-sky-800 to-sky-950 text-white px-4 py-8 md:px-10 md:py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/clouds.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <header className="mb-10 text-center">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome, T-6 Student Pilots
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-sky-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your UNOFFICIAL go-to resource for mastering the T-6 Texan II
        </motion.p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Checklists", desc: "From engine start to shutdown." },
          { title: "Maneuvers", desc: "Pattern work, stalls, aerobatics." },
          { title: "EPs", desc: "Emergency procedures and memory items." },
          { title: "Comms", desc: "Radio calls and standard phraseology." },
        ].map((module, idx) => (
          <Card key={idx} className="bg-sky-900/80 border-sky-700 hover:shadow-lg transition">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-1 flex items-center">
                <Plane className="w-5 h-5 mr-2 text-sky-300" />
                {module.title}
              </h2>
              <p className="text-sky-200 text-sm md:text-base mb-2">{module.desc}</p>
              <Button variant="secondary" className="text-sm md:text-base">
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    <footer className="mt-12 text-center text-sm text-sky-300 px-4">
        <p>
          Disclaimer: This site is not endorsed or vetted by the United States Air Force. The content includes techniques that can be used as a tool to enhance formal military aviation training.
        </p>
      </footer>
    </div>
  );
}
