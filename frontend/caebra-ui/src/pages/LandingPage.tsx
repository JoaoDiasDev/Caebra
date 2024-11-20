import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import { Mic, Type } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

const features: Feature[] = [
  {
    title: 'Text2Tone',
    description: 'Convert your text into natural-sounding speech with customizable voices.',
    icon: Type,
    color: 'text-pink-400',
    link: '/text2tone',
  },
  {
    title: 'Tone2Text',
    description: 'Transcribe and analyze audio with our advanced speech recognition technology.',
    icon: Mic,
    color: 'text-violet-400',
    link: '/tone2text',
  },
]

export default function LandingPage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <section className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </section>
    </div>
  )
}