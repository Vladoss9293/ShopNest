export const productTabsData = [
  { id: "about", text: "ПРО ТОВАР" },
  { id: "specs", text: "ХАРАКТЕРИСТИКИ" },
  { id: "reviews", text: "ОТЗЫВЫ / ВОПРОСЫ" },
  { id: "accessories", text: "АКСЕССУАРЫ" },
  { id: "services", text: "СЕРВИСЫ" },
  { id: "availability", text: "НАЛИЧИЕ" },
  
] as const;

export type ProductTabId = typeof productTabsData[number]["id"];