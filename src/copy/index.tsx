const en = {
  "hero.1": "Tired of Your Tech-Debt?",
  "hero.2": "Full stack Typescript coaching and mentoring from Matt Jewell",
};

const de: typeof en = {
  "hero.1": "Kein bock auf Tech-Debt?",
  "hero.2": "Full Stack Typescript-Coaching und -Mentoring von Matt Jewell",
};

type CopyKey = keyof typeof en;

// todo: many languages
export const _: (key: CopyKey) => string = key => {
  if (isGerman()) return de[key];
  return en[key];
};

// todo: make this sometimes return true
const isGerman = () => false as boolean;
