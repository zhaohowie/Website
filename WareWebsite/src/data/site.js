export const site = {
  name: 'Ware Therapeutic Massage & Acupuncture',
  shortName: 'Ware Massage',
  tagline: 'Therapeutic Massage & Acupuncture in Windermere, Edmonton',
  address: '#203 – 6055 Andrews Way SW, Edmonton, AB T6W 3S9',
  phones: ['780-566-0136', '780-758-6699'],
  email: 'ware@waremassage.com',
  hours: 'Open 7 days a week · 9 AM – 9 PM',
  bookingUrl: 'https://booking.waremassage.com/book-now',
  facebookUrl: 'https://www.facebook.com/waremassage',
  mapsUrl:
    'https://www.google.com/maps?q=6055+Andrews+Way+SW,+Edmonton,+AB+T6W+3S9',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=6055+Andrews+Way+SW,+Edmonton,+AB+T6W+3S9&output=embed',
};

// Prices in CAD, GST applies unless noted otherwise.
export const services = [
  {
    name: 'Therapeutic Massage',
    slug: 'therapeutic-massage',
    featured: true,
    description:
      'Targeted treatment for pain, injury recovery and everyday tension, tailored to your needs by a registered massage therapist.',
    prices: [
      { duration: '30 min', price: 80 },
      { duration: '45 min', price: 95 },
      { duration: '60 min', price: 110 },
      { duration: '75 min', price: 145 },
      { duration: '90 min', price: 165 },
      { duration: '120 min', price: 220 },
    ],
  },
  {
    name: 'Deep Tissue Massage',
    slug: 'deep-tissue-massage',
    featured: true,
    description:
      'Focused pressure on chronic pain and tension in problem areas, always adjusted to your comfort level.',
    prices: [
      { duration: '30 min', price: 80 },
      { duration: '45 min', price: 95 },
      { duration: '60 min', price: 110 },
      { duration: '75 min', price: 145 },
      { duration: '90 min', price: 165 },
      { duration: '120 min', price: 220 },
    ],
  },
  {
    name: 'Swedish Massage',
    slug: 'swedish-massage',
    featured: false,
    description:
      'A full-body relaxation technique using light pressure to soothe your body and mind into a tranquil state.',
    prices: [
      { duration: '30 min', price: 80 },
      { duration: '45 min', price: 95 },
      { duration: '60 min', price: 110 },
      { duration: '75 min', price: 145 },
      { duration: '90 min', price: 165 },
      { duration: '120 min', price: 220 },
    ],
  },
  {
    name: 'Acupuncture',
    slug: 'acupuncture',
    featured: true,
    description:
      'Traditional acupuncture by an Alberta Registered Acupuncturist for pain management, stress, insomnia, digestive and gynecological concerns.',
    prices: [
      { duration: '60 min', price: 110 },
      { duration: '90 min (first visit)', price: 150 },
    ],
  },
  {
    name: 'Manual Osteopathy',
    slug: 'manual-osteopathy',
    featured: true,
    description:
      'A hands-on, whole-body approach examining joints, soft tissue and fluid dynamics to resolve dysfunction and pain.',
    prices: [
      { duration: '30 min', price: 95 },
      { duration: '45 min', price: 120 },
      { duration: '60 min', price: 140 },
      { duration: '90 min', price: 195 },
      { duration: '120 min', price: 275 },
    ],
  },
  {
    name: 'Hot Stone Massage',
    slug: 'hot-stone-massage',
    featured: true,
    description:
      'Warm stones combined with traditional massage techniques to melt tension and induce deep relaxation.',
    prices: [
      { duration: '30 min', price: 90 },
      { duration: '45 min', price: 110 },
      { duration: '60 min', price: 140 },
      { duration: '90 min', price: 185 },
      { duration: '120 min', price: 240 },
    ],
  },
  {
    name: 'Fire Cupping with Massage',
    slug: 'fire-cupping',
    featured: true,
    description:
      'Fire cupping and Gua Sha combined with massage therapy to release deep muscle tension and improve circulation.',
    prices: [
      { duration: '60 min', price: 140 },
      { duration: '90 min', price: 195 },
      { duration: '120 min', price: 250 },
      { duration: '150 min', price: 305 },
    ],
  },
  {
    name: 'Maternity Massage',
    slug: 'maternity-massage',
    featured: false,
    description:
      'Gentle prenatal care with comfortable side-lying positioning, adapted to every stage of pregnancy.',
    prices: [
      { duration: '30 min', price: 85 },
      { duration: '45 min', price: 105 },
      { duration: '60 min', price: 120 },
      { duration: '90 min', price: 175 },
      { duration: '120 min', price: 225 },
    ],
  },
  {
    name: 'Foot Reflexology',
    slug: 'foot-reflexology',
    featured: false,
    description:
      'Pressure-point therapy for the feet that promotes relaxation and supports whole-body wellness.',
    prices: [
      { duration: '60 min', price: 120 },
      { duration: '90 min', price: 170 },
    ],
  },
  {
    name: 'Lymphatic Drainage Massage',
    slug: 'lymphatic-drainage',
    featured: false,
    description:
      'Light, rhythmic strokes that encourage lymph flow, reduce swelling and support your immune system.',
    prices: [
      { duration: '60 min', price: 140 },
      { duration: '90 min', price: 195 },
    ],
  },
  {
    name: 'Hot Oil Scalp Massage',
    slug: 'hot-oil-scalp-massage',
    featured: false,
    description:
      'A warm oiled scalp treatment that relieves tension and hydrates while massaging the scalp, jawline and neck.',
    prices: [
      { duration: '30 min', price: 80 },
      { duration: '30 min add-on', price: 75, note: 'starting from' },
    ],
  },
  {
    name: 'Thai Massage',
    slug: 'thai-massage',
    featured: false,
    description:
      'Assisted stretching and rhythmic compression along energy lines to restore flexibility and flow.',
    prices: [{ duration: '75 min', price: 145 }],
  },
  {
    name: 'Couples Massage (Same Room)',
    slug: 'couples-massage',
    featured: false,
    description:
      'Relax side by side. Each person can customize pressure and add-ons such as hot stones.',
    prices: [
      { duration: '30 min', price: 160, note: '$80/person' },
      { duration: '45 min', price: 190, note: '$95/person' },
      { duration: '60 min', price: 220, note: '$110/person' },
      { duration: '90 min', price: 330, note: '$165/person' },
      { duration: '120 min', price: 440, note: '$220/person' },
    ],
  },
  {
    name: 'MVA Treatment',
    slug: 'mva-treatment',
    featured: false,
    description:
      'Deep and medium-pressure massage for motor vehicle accident recovery, billed through MVA insurance claims.',
    prices: [
      { duration: '60 min', price: 135 },
      { duration: '90 min', price: 190 },
    ],
  },
];

export const therapists = [
  {
    name: 'Lijun C.',
    credentials: 'RMT / MOT',
    bio: 'Born in China, Lijun is a registered massage therapist and manual osteopathic therapist with over 10 years of hands-on experience. She is a master at finding your problem spots — often setting clients on the road to recovery in just a few sessions — and also offers traditional Chinese Tuina massage. Her wide-ranging skill set lets her tailor every treatment to your body’s specific needs.',
    specialties: [
      'Deep tissue',
      'Therapeutic & sports massage',
      'Tuina (traditional Chinese massage)',
      'Prenatal / postnatal',
      'Cupping & hot stones',
      'Foot reflexology',
      'Lymphatic drainage',
      'Myofascial release',
      'Craniosacral therapy',
      'Osteopathic manual therapy',
    ],
  },
  {
    name: 'Dr. Maggie Zhao',
    credentials: 'R.Ac. / MOT',
    bio: 'An Alberta Registered Acupuncturist with a Master’s degree in medical science, Dr. Zhao brings an accepting, caring presence and deep medical knowledge to treating a wide range of health concerns.',
    specialties: ['Acupuncture', 'Manual osteopathy', 'Pain management'],
  },
  {
    name: 'Dr. Yueli W.',
    credentials: 'R.Ac.',
    bio: 'Raised in a family of medical practitioners in China, Dr. Yueli specializes in pain management, gynecological issues, digestive disorders, stress and insomnia. She is known for dynamic cupping in combination with needles and moxibustion.',
    specialties: [
      'Acupuncture',
      'Electrostimulation',
      'Cupping & moxibustion',
      'Guasha & tuina',
      'Scalp and ear acupuncture',
    ],
  },
  {
    name: 'Joy M.',
    credentials: 'RMT',
    bio: 'A graduate of MaKami College’s 3,000-hour advanced program, Joy delivers relaxing and effective treatments with a warm, attentive approach.',
    specialties: [
      'Swedish massage',
      'Deep tissue',
      'Maternity massage',
      'Lymphatic drainage',
      'Hot stone',
      'Hot oil scalp massage',
    ],
  },
  {
    name: 'Tony C. L.',
    credentials: 'RMT',
    bio: 'A MaKami 3,000-hour program graduate known for strong client communication, Tony quickly identifies problem areas and builds personalized treatment plans.',
    specialties: [
      'Swedish & deep tissue',
      'Therapeutic massage',
      'Reflexology (feet, hands, ears, face)',
      'Hot stone',
      'Prenatal / postnatal',
      'Traditional Chinese meridian massage',
    ],
  },
  {
    name: 'Jean R.',
    credentials: 'RMT',
    bio: 'A MaKami College graduate with 3,000 training hours, Jean provides relaxing and therapeutic treatments tailored to each client.',
    specialties: [
      'Relaxation massage',
      'Hot stone',
      'Dynamic cupping',
      'Prenatal / postnatal',
      'Deep tissue & therapeutic massage',
    ],
  },
  {
    name: 'Jennifer K.',
    credentials: 'RMT',
    bio: 'A graduate of MaKami’s 3,000-hour program, Jennifer is dedicated to evidence-informed, client-centered care that helps manage pain, restore function and improve overall well-being. She takes a thorough, individualized approach, tailoring each session to her clients’ specific needs and goals — combining a variety of therapeutic techniques to reduce pain, improve mobility, relieve muscle tension and support recovery from injury or everyday physical stress. She is committed to helping clients move better, feel better and achieve lasting results through compassionate, professional care.',
    specialties: [
      'Deep tissue',
      'Therapeutic & sports massage',
      'Prenatal / postnatal',
      'Cupping & hot stones',
      'Lymphatic drainage',
      'Swedish massage',
      'Scalp & facial massage',
      'Muscle scraping',
      'Myofascial release',
    ],
  },
  {
    name: 'Maria F.',
    credentials: 'RMT',
    bio: 'Maria is a caring and dedicated registered massage therapist with over three years of hands-on experience. She provides personalized treatments built around each client’s comfort level, health goals and areas of concern — adjusting her pressure and techniques to keep every session comfortable and effective. Whether you’re managing muscle tension, everyday stress, discomfort from physical activity, or simply need time to unwind, Maria’s friendly, professional approach helps clients feel relaxed, refreshed and supported throughout their wellness journey.',
    specialties: [
      'Deep tissue',
      'Therapeutic massage',
      'Relaxation massage',
      'Hot stone',
      'Pregnancy / prenatal massage',
    ],
  },
];
