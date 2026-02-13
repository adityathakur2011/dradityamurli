/**
 * Central site content and copy (single source of truth).
 * Edit strings here to update site-wide text.
 */

// ---------------------------------------------------------------------------
// Typed interfaces
// ---------------------------------------------------------------------------

export interface DoctorInfo {
  name: string;
  tagline: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  /** Optional intro or body paragraphs before bullets */
  paragraphs?: string[];
  bullets?: string[];
}

export interface AreasOfInterest {
  intro: string;
  bullets: string[];
}

export interface SiteContentType {
  doctor: DoctorInfo;
  introParagraph: string;
  services: ServiceItem[];
  areasOfInterest: AreasOfInterest;
  faq: FaqItem[];
  disclaimer: string;
  nav: NavItem[];
  cta: {
    bookConsultation: string;
    connect: string;
    exploreCare: string;
    learnMethodology: string;
    viewMarathonJourney: string;
    browseArticles: string;
    commonQuestions: string;
  };
  hero: {
    subtitle: string;
    keyDifferentiators: Array<{ value: string; description: string }>;
  };
  philosophy: {
    heading: string;
    paragraphs: string[];
    linkLabel: string;
  };
  expertise: {
    heading: string;
    cards: Array<{ title: string; description: string }>;
  };
  athlete: {
    heading: string;
    paragraph: string;
    ctaLabel: string;
  };
  resources: {
    educationHub: { description: string; linkLabel: string };
    treatmentFaq: { description: string; linkLabel: string };
  };
  footer: {
    quote: string;
    copyright: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    whatsappUrl?: string;
  };
}

// ---------------------------------------------------------------------------
// Site content
// ---------------------------------------------------------------------------

export const siteContent: SiteContentType = {
  doctor: {
    name: "Dr. Aditya Murali",
    tagline: "Medical Oncologist | Ultra-Marathon Runner",
  },

  introParagraph:
    "Combining clinical excellence with the discipline of an endurance athlete, I believe in treating the person, not just the disease. My approach integrates cutting-edge evidence-based medicine with holistic lifestyle support for lasting recovery.",

  services: [
    {
      title: "Preventive Oncology",
      description:
        "Screening for Cervical cancer, Colon cancer, Lung cancer.",
    },
    {
      title: "Precision medicine",
      description:
        "Advanced testing platforms like PET-CT, Next Generation Sequencing, Liquid Biopsy.",
    },
    {
      title: "Targeted therapy",
      description:
        "Incorporating the latest targeted therapies in the management of various hematological and solid tumor malignancies.",
    },
    {
      title: "Immunotherapy",
      description:
        "Bringing the latest immunotherapy protocols from across the world for the management of all advanced stage cancers.",
    },
    {
      title: "Transplant and Cellular therapy",
      description:
        "All types of bone marrow transplants including Autologous, Allogenic, Haplo-identical transplants. Cellular therapies including CAR-T cell therapy for Lymphomas, Leukemias and Multiple Myeloma.",
    },
  ],

  areasOfInterest: {
    intro:
      "Core focus on medical oncology, evidence-based treatment protocols, and integrated care that supports both physical and emotional well-being. Personal commitment to endurance running informs a philosophy of sustained, step-by-step progress in recovery.",
    bullets: [
      "Medical oncology and solid tumor management",
      "Hematological malignancies and transplant",
      "Immunotherapy and targeted therapies",
      "Precision medicine and molecular testing",
      "Preventive oncology and screening",
      "Survivorship and long-term wellness",
      "Holistic and lifestyle-integrated cancer care",
    ],
  },

  faq: [
    {
      question: "I just got diagnosed with cancer – What next?",
    },
    {
      question: "What is cancer?",
      paragraphs: [
        "Abnormal and excessive growth of cells which have lost the natural self-destruct mechanism.",
      ],
    },
    {
      question: "How does cancer affect the body?",
      paragraphs: [
        "Due to uncontrolled growth of cancer cells, the normal cells get crowded out. Nutrition and blood flow is diverted to the cancer cells and the normal cells are unable to function leading to worsening general health.",
      ],
    },
    {
      question: "What are the common symptoms of cancer?",
      paragraphs: [
        "There isn't one characteristic symptom that can define cancer. However, here are some of the symptoms that may be suspicious for cancer:",
      ],
      bullets: [
        "Lumps in any part of the body that grow over a period of weeks to months and are often not accompanied by pain or tenderness.",
        "Ulcer in any part of the body especially the oral cavity which do not heal for weeks and months with normal over the counter therapy.",
        "Persistent cough and blood in sputum which does not go away even after antibiotics for a few weeks.",
        "Unexplained weight loss for 3-6 months.",
        "Altered bowel habits – especially onset of complaints after the age of 50.",
        "Persistent fever or night sweats or weakness for 3-6 months.",
      ],
    },
    {
      question: "What are the risk factors for developing cancer?",
      bullets: [
        "Hereditary / Genetic factors – About 5% of the cancer are hereditary in nature. Especially patients who develop breast cancer, ovarian cancer, endometrial cancer and colon cancer are usually advised to undergo genetic testing. Once the mutated gene is identified, the other family members can potentially be screened for the same.",
        "Modifiable risk factors – Tobacco usage in any form can lead to a host of cancers including – Head & Neck cancers, Lung cancer, Pancreatic cancer, Genito-urinary cancers. Excessive alcohol usage has been implicated in many Gastro-intestinal malignancies. There has been a rising incidence of cancers in women linked to obesity and lack of physical activity including breast and endometrial cancers.",
      ],
    },
    {
      question: "What are the screening tests for cancer?",
      bullets: [
        "Breast cancer – Self breast examination starting from the age of 25, annual mammograms starting from the age of 40.",
        "Colon cancer – Stool test for occult blood for men and women above the age of 50. Routine sigmoidoscopy once in 5 years or colonoscopy once in 10 years.",
        "Lung cancer – For current smokers or ex-smokers with significant history of tobacco use, annual low dose CT scan of chest between the ages of 55-74 years.",
      ],
    },
    {
      question: "How do we diagnose cancer?",
      paragraphs: [
        "A biopsy or tissue sample from the suspected site of cancer is the most definitive way of diagnosing cancer. Apart from this, certain imaging tests like CT scans, MRI or PET scan may be done to check the stage of cancer. In the era of precision medicine, genetic sequencing using either tissue based NGS or liquid biopsy may be recommended for many advanced cancers including blood cancers.",
      ],
    },
    {
      question: "Is cancer curable?",
      paragraphs: [
        "Most early stage cancers and a few advanced blood cancers can be completely cured using advanced treatment modalities like targeted therapy, immunotherapy and chemotherapy. Each cancer is different and treatment has to be tailor made on an individual basis to achieve the best outcomes.",
      ],
    },
    {
      question: "How do we prevent cancer?",
      bullets: [
        "Diet and exercise – Emphasis has to be on ensuring a balanced diet and sticking to recommended calorie intake. Avoid fast food and frozen food to the extent possible. Ensure a minimum of 45 minutes of mild intensity activity like walking or 25 minutes of moderate intensity activity like running for at least 4-5 days a week.",
        "Strict avoidance of tobacco in any form including smokeless tobacco and e-cigarettes.",
      ],
    },
  ],

  disclaimer:
    "This website provides general information and is not a substitute for medical advice.",

  nav: [
    { label: "Expertise", href: "/#expertise" },
    // { label: "Philosophy", href: "/#philosophy" },
    { label: "The Athlete", href: "/#athlete" },
    // { label: "Resources", href: "/#resources" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
  ],

  cta: {
    bookConsultation: "Book Consultation",
    connect: "Connect with Dr. Aditya Murali",
    exploreCare: "Explore Holistic Cancer Care",
    learnMethodology: "Learn more about my care methodology",
    viewMarathonJourney: "View Marathon Journey",
    browseArticles: "Browse Articles",
    commonQuestions: "Common Questions",
  },

  hero: {
    subtitle: "MEDICAL ONCOLOGY",
    keyDifferentiators: [
      {
        value: "25+ Years",
        description:
          "Dedicated experience in medical oncology and research.",
      },
      {
        value: "Evidence-Based",
        description:
          "Treatment protocols backed by clinical data and global standards.",
      },
      {
        value: "Holistic Care",
        description:
          "Integrated approach focusing on nutritional and mental well-being.",
      },
    ],
  },

  philosophy: {
    heading: "A Holistic, Integrated Approach to Cancer Care",
    paragraphs: [
      "The journey through cancer is more than a medical challenge; it is a physical, emotional, and spiritual endurance test. My philosophy is rooted in the belief that effective cancer care must address the whole person.",
      "By combining the latest advancements in medical oncology with personalized lifestyle modifications, we empower patients to not just fight the disease, but to thrive throughout their recovery journey.",
    ],
    linkLabel: "Learn more about my care methodology +",
  },

  expertise: {
    heading: "Core Clinical Expertise",
    cards: [
      {
        title: "Medical Oncology",
        description:
          "Comprehensive diagnosis and management of solid tumors and hematological malignancies.",
      },
      {
        title: "Chemotherapy",
        description:
          "Personalized chemotherapy regimens designed to maximize efficacy and minimize side effects.",
      },
      {
        title: "Immunotherapy",
        description:
          "Harnessing the power of your own immune system through targeted modern therapies.",
      },
      {
        title: "Survivorship",
        description:
          "Long-term care plans focusing on wellness and monitoring after primary treatment.",
      },
    ],
  },

  athlete: {
    heading: "Lessons from Ultra-Marathon Running",
    paragraph:
      "Endurance running has taught me that limits are often self-imposed. The grit, determination, and consistency required to finish a 100km race are the same qualities I encourage in my patients. Every step forward, no matter how small, is progress toward the finish line of recovery.",
    ctaLabel: "View Marathon Journey",
  },

  resources: {
    educationHub: {
      description:
        "Access our library of expert-reviewed articles and FAQs about cancer types, treatment options, and lifestyle management.",
      linkLabel: "Browse Articles",
    },
    treatmentFaq: {
      description:
        "Find answers to common questions about starting chemotherapy, nutrition during treatment, and navigating survivorship.",
      linkLabel: "Common Questions",
    },
  },

  footer: {
    quote:
      '"In both medicine and marathons, the goal isn\'t just to finish, but to finish strong and with dignity."',
    copyright:
      "© 2026 Dr. Aditya Murali Medical Oncology. All rights reserved. Developed by Aditya Thakur.",
  },
  contact: {
    email: "contact@example.com",
    phone: "+1 (000) 000-0000",
    address: "123 Medical Center Drive, City, State 00000",
    whatsappUrl: "https://wa.me/1234567890",
  },
};
