export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  price: string;
  duration: string;
  category: string;
  rating: number;
  popular: boolean;
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: 'hydrafacial-md',
    title: 'HydraFacial MD',
    description: 'Deep cleansing, exfoliation, and hydration treatment for glowing skin with immediate results.',
    longDescription: 'HydraFacial MD is a non-invasive, multi-step treatment that cleanses, exfoliates, extracts, and hydrates the skin using patented vortex technology. This medical-grade facial is suitable for all skin types and addresses various skin concerns including fine lines, wrinkles, elasticity, skin tone, texture, and more.',
    image: '/homepage/our premium services/HydraFacial-MD.jpg',
    price: 'From $150',
    duration: '45 min',
    category: 'Facial Treatments',
    rating: 4.9,
    popular: true,
    benefits: [
      'Deeply cleanses and exfoliates the skin',
      'Extracts impurities and unclogs pores',
      'Hydrates and nourishes the skin',
      'Improves skin texture and tone',
      'Reduces the appearance of fine lines and wrinkles',
      'Suitable for all skin types'
    ],
    faqs: [
      {
        question: 'How many treatments will I need?',
        answer: 'While you\'ll see immediate results after your first treatment, we recommend a series of 4-6 treatments spaced 2-4 weeks apart for optimal results.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'No, there is no downtime with HydraFacial. You can return to your normal activities immediately after treatment.'
      }
    ]
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    description: 'Permanent hair reduction with advanced laser technology, safe for all skin types.',
    longDescription: 'Our advanced laser hair removal treatment uses state-of-the-art technology to target and disable hair follicles, providing long-term hair reduction. The procedure is safe, effective, and suitable for all skin types when performed by our experienced technicians.',
    image: '/homepage/our premium services/Laser-Hair-Removal.png',
    price: 'From $100',
    duration: '15-60 min',
    category: 'Laser Treatments',
    rating: 4.8,
    popular: true,
    benefits: [
      'Permanent hair reduction',
      'Precision targeting of hair follicles',
      'Minimal discomfort',
      'Suitable for all skin types',
      'No downtime',
      'Prevents ingrown hairs'
    ],
    faqs: [
      {
        question: 'How many sessions will I need?',
        answer: 'Most clients need 6-8 sessions spaced 4-6 weeks apart for optimal results, as hair grows in different cycles.'
      },
      {
        question: 'Does it hurt?',
        answer: 'Most clients describe the sensation as a rubber band snap. We use a cooling device to minimize discomfort.'
      }
    ]
  },
  {
    id: 'prp-hair-therapy',
    title: 'PRP Hair Therapy',
    description: 'Stimulate natural hair growth with platelet-rich plasma for thicker, fuller hair.',
    longDescription: 'PRP (Platelet-Rich Plasma) Hair Therapy is a revolutionary treatment that uses your own blood\'s growth factors to stimulate hair follicles and promote natural hair growth. This non-surgical procedure is ideal for those experiencing hair thinning or early-stage hair loss.',
    image: '/homepage/our premium services/PRP-Hair-Therapy.jpg',
    price: 'From $500',
    duration: '90 min',
    category: 'Hair Treatments',
    rating: 4.7,
    popular: false,
    benefits: [
      'Stimulates natural hair growth',
      'Uses your own blood plasma',
      'Minimally invasive',
      'No synthetic chemicals or drugs',
      'Improves hair thickness and density',
      'Suitable for both men and women'
    ],
    faqs: [
      {
        question: 'How soon will I see results?',
        answer: 'Most clients notice improvement in hair texture and thickness within 2-3 months, with optimal results visible after 6-12 months.'
      },
      {
        question: 'How many treatments are recommended?',
        answer: 'We typically recommend 3-4 initial treatments spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.'
      }
    ]
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    description: 'Rejuvenate your skin with customized peel treatments for smoother, brighter complexion.',
    longDescription: 'Our customized chemical peels exfoliate the outer layers of skin to reveal a fresher, more youthful appearance. We offer various peel strengths to address specific skin concerns including acne, hyperpigmentation, fine lines, and sun damage.',
    image: '/homepage/our premium services/Chemical-Peels.jpg',
    price: 'From $120',
    duration: '30 min',
    category: 'Facial Treatments',
    rating: 4.6,
    popular: false,
    benefits: [
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Minimizes pores',
      'Fades dark spots and hyperpigmentation',
      'Treats acne and acne scars',
      'Stimulates collagen production'
    ],
    faqs: [
      {
        question: 'Will my skin peel?',
        answer: 'Light peels may cause minimal flaking, while deeper peels may cause more noticeable peeling for 3-7 days.'
      },
      {
        question: 'How often should I get a chemical peel?',
        answer: 'This depends on the peel strength and your skin goals. Light peels can be done monthly, while deeper peels are recommended 1-2 times per year.'
      }
    ]
  },
  {
    id: 'ipl-photofacial',
    title: 'IPL Photofacial',
    description: 'Reduce pigmentation, sun damage, and redness with intense pulsed light therapy.',
    longDescription: 'IPL (Intense Pulsed Light) Photofacial is a non-invasive treatment that uses broad-spectrum light to target and reduce pigmentation, sun damage, redness, and other skin imperfections. This versatile treatment can be customized to address various skin concerns with minimal downtime.',
    image: '/homepage/our premium services/IPL-Photofacial.jpeg',
    price: 'From $200',
    duration: '45 min',
    category: 'Laser Treatments',
    rating: 4.7,
    popular: true,
    benefits: [
      'Reduces sun spots and age spots',
      'Minimizes redness and broken capillaries',
      'Improves skin texture',
      'Stimulates collagen production',
      'Minimal downtime',
      'Suitable for face, neck, chest, and hands'
    ],
    faqs: [
      {
        question: 'How many treatments will I need?',
        answer: 'Most clients see optimal results after 3-5 treatments spaced 3-4 weeks apart.'
      },
      {
        question: 'Is there any downtime?',
        answer: 'You may experience mild redness and swelling for a few hours after treatment. Some darkening of pigmented areas may occur before they flake off within 1-2 weeks.'
      }
    ]
  },
  {
    id: 'scalp-treatments',
    title: 'Scalp Treatments',
    description: 'Revitalize your scalp and promote healthy hair growth with specialized treatments.',
    longDescription: 'Our specialized scalp treatments are designed to address various scalp conditions while promoting healthy hair growth. These treatments can help with dandruff, dryness, oiliness, and other scalp concerns that may be affecting hair health.',
    image: '/homepage/our premium services/Scalp-Treatments.webp',
    price: 'From $80',
    duration: '60 min',
    category: 'Hair Treatments',
    rating: 4.5,
    popular: false,
    benefits: [
      'Promotes healthy hair growth',
      'Reduces dandruff and flakiness',
      'Balances oil production',
      'Improves blood circulation',
      'Soothes irritated scalp',
      'Removes product buildup'
    ],
    faqs: [
      {
        question: 'How often should I get a scalp treatment?',
        answer: 'For best results, we recommend a series of treatments every 1-2 weeks for 4-6 weeks, followed by monthly maintenance.'
      },
      {
        question: 'Is this treatment suitable for all hair types?',
        answer: 'Yes, we customize our scalp treatments to address the specific needs of different hair types and conditions.'
      }
    ]
  }
];
