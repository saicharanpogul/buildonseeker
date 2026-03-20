import { Hero } from "@/components/Hero";
import { WhySeeker } from "@/components/WhySeeker";
import { LiveStats } from "@/components/LiveStats";
import { Resources } from "@/components/Resources";
import { Grants } from "@/components/Grants";
import { Ideas } from "@/components/Ideas";
import { SeekerStack } from "@/components/SeekerStack";
import { GetStarted } from "@/components/GetStarted";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhySeeker />
      <LiveStats />
      <Resources />
      <Grants />
      <Ideas />
      <GetStarted />
      <Footer />
    </main>
  );
}
