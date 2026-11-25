import { MotionProvider } from "@/components/MotionProvider";
import { Booking, MobileBar } from "@/components/Closing";
import { Footer } from "@/components/Footer";
import { Facts } from "@/components/Facts";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Nav } from "@/components/Nav";
import { Reviews } from "@/components/Reviews";
import { Rooms } from "@/components/Rooms";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Rooms />
        <Reviews />
        <Highlights />
        <Booking />
      </main>
      <Footer />
      <MobileBar />
    </MotionProvider>
  );
}
