export interface AnniversaryCard {
    year: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    reverse?: boolean;
  }
  
  export interface AlumniCard {
    letter: string;
    number: string;
    title: string;
    description: string;
  }
  
  export interface Testimonial {
    name: string;
    surname: string;
    graduationYear: string;
    generation: string;
    imageUrl: string;
    quote: string;
  }
  