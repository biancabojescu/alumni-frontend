export interface AlumnData {
  id: string | number;
  nume: string;
  anul_alumnizarii: string;
  activitati: string;
  testimonial: string;
  acord_publicare: boolean;
}

export interface GetAlumnData {
  anul_alumnizarii?: string;
  page?: number;
  per_page?: number;
}
