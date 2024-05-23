import Hero from "@/components/hero";
import Video from "@/components/video";
import CoverArts from "@/components/cover-arts";
import AnimatedLogo from "@/components/animated-logo";
import Social from "@/components/social";
import '@/assets/scss/_global.scss';
import ParticleCanvas from "@/components/particles";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <AnimatedLogo />
      <CoverArts />
      <Social />
      <ParticleCanvas />
    </>
  );
}
