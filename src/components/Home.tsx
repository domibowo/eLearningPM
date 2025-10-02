import { Introduction } from "./Introduction";
import { Reasons } from "./Reasons";
import { Curriculum } from "./Curriculum";
import { Portfolio } from "./Portfolio";
import { Mentors } from "./Mentors";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { Registration } from "./Registration";
import { Footer } from "./Footer";

interface HomeProps {
  onModuleClick: (moduleId: string) => void;
}

export function Home({ onModuleClick }: HomeProps) {
  return (
    <>
      <Introduction />
      <Reasons />
      <Curriculum onModuleClick={onModuleClick} />
      <Portfolio />
      <Mentors />
      <Testimonials />
      <Contact />
      <Registration />
      <Footer />
    </>
  );
}
