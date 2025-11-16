export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "TechFlow",
    quote:
      "Ario Studio transformed our vision into a stunning reality. The website they built not only looks incredible but has become our strongest sales tool. The attention to detail and understanding of our brand was exceptional.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "InnovateLab",
    quote:
      "Working with Ario was a game-changer. They didn't just build a website—they designed an experience. Our conversion rates doubled, and we're getting constant compliments on the design. Highly recommend.",
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "StyleCraft",
    quote:
      "The AI chatbot Ario built for us handles 70% of our customer inquiries now. It's saved us countless hours and our customers love how responsive it is. The whole process was smooth and professional.",
  },
];

