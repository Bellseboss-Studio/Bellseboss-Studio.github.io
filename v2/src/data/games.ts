export interface Game {
  title: string;
  description: string;
  genre: string;
  status: 'Released' | 'In Development' | 'Prototype';
  itchEmbed?: string;
  itchLink?: string;
  image?: string;
  tags: string[];
}

export const games: Game[] = [
  {
    title: 'Not a Lazy Sunday',
    description: 'A chaotic Sunday where nothing goes as planned. Navigate through unexpected challenges in this wild adventure.',
    genre: 'Action / Adventure',
    status: 'In Development',
    itchEmbed: 'https://itch.io/embed/2179840?border_width=0&dark=true',
    itchLink: 'https://bellseboss.itch.io/not-a-lazy-sunday',
    tags: ['Unity', '2D', 'Action'],
  },
  {
    title: 'Origin',
    description: 'Uncover the beginning of everything. A journey through mysterious worlds where every choice shapes your destiny.',
    genre: 'Adventure / Puzzle',
    status: 'Released',
    itchEmbed: 'https://itch.io/embed/1755331?bg_color=222222&fg_color=eeeeee&border_color=363636',
    itchLink: 'https://bellseboss.itch.io/origin-game',
    tags: ['Unity', 'Puzzle', 'Narrative'],
  },
  {
    title: 'The Perfect Cake',
    description: 'Bake, create, and deliver the perfect cake in this delightful simulation. Precision and creativity are your best ingredients.',
    genre: 'Simulation / Casual',
    status: 'Released',
    itchEmbed: 'https://itch.io/embed/1680332?dark=true',
    itchLink: 'https://bellseboss.itch.io/the-perfect-cake',
    tags: ['Unity', 'Casual', 'Simulation'],
  },
];
