export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials?: {
    itch?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    name: 'PeryLoth',
    role: 'Founder & Lead Developer',
    bio: 'Game developer and team leader. Always dreamed of making games, which led to becoming a systems engineer. Years of study and hard work built this studio from the ground up.',
    image: 'https://peryloth.com/images/Profile.jpg',
    socials: {
      itch: 'https://peryloth.itch.io/',
      github: 'https://github.com/Bellseboss-Studio',
    },
  },
  {
    name: 'VanyaBel',
    role: 'Audiovisual Composer & Sound Designer',
    bio: 'Crafts immersive audio landscapes and original soundtracks that bring game worlds to life. Every sound tells a story.',
    image: '/images/vanyabel.jpg',
    socials: {},
  },
  {
    name: 'Nirmax',
    role: 'Animator & Rigger',
    bio: 'Brings characters to life through fluid motion and detailed rigging. Movement is storytelling.',
    image: '/images/nirmax.jpg',
    socials: {},
  },
  {
    name: 'Amado',
    role: 'Environment Artist',
    bio: 'Builds the worlds players explore. Every texture, every light, every detail creates atmosphere.',
    image: '/images/amado.jpg',
    socials: {},
  },
  {
    name: 'Angel',
    role: 'Unity Programmer',
    bio: 'Turns design into reality through clean, efficient code. Architecture meets creativity.',
    image: '/images/angel.png',
    socials: {},
  },
  {
    name: 'Danlo',
    role: 'Environment, Character & Texture Artist',
    bio: 'Lifetime gamer. Director of Project Development Operations. Makes it happen across all visual disciplines.',
    image: '/images/danlo.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/daniel-camacho-chaljub/',
    },
  },
  {
    name: 'Kero',
    role: 'General Project Manager',
    bio: 'Keeps the team aligned, deadlines met, and vision clear. The glue that holds production together.',
    image: '/images/kero.jpg',
    socials: {},
  },
  {
    name: 'Noir',
    role: 'Lead Character Designer',
    bio: 'Creates memorable characters that players connect with. Been making games since childhood, now shaping Bellseboss visual identity.',
    image: '/images/noir.png',
    socials: {
      itch: 'https://limonsalmonmon.itch.io/',
    },
  },
];
