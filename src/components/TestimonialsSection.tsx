import { Star, Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SectionWrapper from "@/components/SectionWrapper";

const testimonials = [
  {
    name: "Aleksandar Damjanov",
    text: "Prezadovoljni kvalitetom usluge. Odličan dreser i pansion, sve preporuke! Kad covek voli svoj posao... :)",
  },
  {
    name: "Emilija Stankijević",
    text: "Pomogao mi je da brzo resim problem uz jasne smernice i prisutnost. Izuzetno posten, pouzdan i u radu i u pansionu, sto dovoljno govori i to da su moji kljucevi od stana kod njega za ne daj Boze! 😊",
  },
  {
    name: "Dusan Sevo",
    text: "Sve preporuke za ovaj pansion i dresera! Izuzetno profesionalan, ljubazan i uvek spreman da izađe u susret svim našim potrebama. Od prvog dana smo imali potpuno poverenje, a to nam je najvažnije kada ostavljamo našu Muru, koja zahteva ljude koji znaju kako da se pravilno ponašaju sa njenom rasom, ovde je u sigurnim rukama.",
  },
  {
    name: "Vladimir Jevremov",
    text: "Sve preporuke za Milana! Radio je socijalizaciju sa mojim stafordom od 10 meseci i razlika je neverovatna. Milan je veliki profesionalac i pravi ljubitelj pasa koji tačno zna kako da kanališe njihovu energiju.",
  },
  {
    name: "Bojana Velvet",
    text: "Najbolji dreser i pansion, potpisujem. Milan mi je mnogo pomogao da postavimo dobre osnove od prvog dana sa kučetom. Aura je sada (skoro) odrastao pas, i iako je mažena i pažena, isto tako zna svoje granice i sluša sve komande - čak i u igri sa drugim psima ili kada vidi hranu na ulici. U pansionu obožava da bude do te mere da se ne osvrne za mnom, a svi znamo koliko je staford dramatičani vezan za svog vlasnika. Sigurnost, znanje i poverenje - eto to je sve DUH.",
  },
  {
    name: "Radovan Mijatov",
    text: "Sve preporuke, trenirao je mog psa Leu. Dolazio u grad na treninge, pokazivao mi je i ucio kako treba da radim sa psom. Sto se tice pansiona takodje preporuka, redovno istrcavanje, pas je u svakom momentu bio srecan ponasao se prema mom psu kao da je njegov!",
  },
  {
    name: "Igor Tosic",
    text: "Milan je vrhunski profesionalac, sa kojim znamo da su nasi psi sigurni i u najboljim mogucim uslovima. Uvek izadje u susret cak i kada je poziv u zadnjem momentu. Zato sa njim imamo vec dugu saradnju koja ce se i nastaviti. Sve pohvale i preporuke.",
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <SectionWrapper dark>
      <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wider text-gold text-center">
        Iskustva naših korisnika
      </h2>
      <div className="mt-12 px-12 md:px-16">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 15000, stopOnInteraction: false })]}
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="h-full bg-dark-muted border border-gold/10 rounded-lg p-6 flex flex-col">
                  <Quote className="w-8 h-8 text-gold/30 mb-4 shrink-0" />
                  <p className="font-body text-sm text-dark-foreground/80 leading-relaxed flex-1">
                    {t.text}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gold/10">
                    <Stars />
                    <p className="font-heading text-sm uppercase tracking-wider text-gold mt-2">
                      {t.name}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground -left-6 md:-left-10" />
          <CarouselNext className="border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground -right-6 md:-right-10" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
