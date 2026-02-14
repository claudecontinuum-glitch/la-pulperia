export interface Product {
  name: string;
  price: number;
}

export interface Business {
  id: string;
  name: string;
  category: "comida" | "tienda" | "servicios";
  type: "physical" | "online" | "both";
  description: string;
  whatsapp: string;
  rating: number;
  reviews: number;
  lat?: number;
  lng?: number;
  schedule?: string;
  products?: Product[];
  deliveryZones?: string[];
}

export const businesses: Business[] = [
  {
    id: "1",
    name: "Baleadas Doña María",
    category: "comida",
    type: "physical",
    description: "Las mejores baleadas de Siguatepeque desde 1998",
    whatsapp: "50498765432",
    rating: 4.8,
    reviews: 23,
    lat: 14.6,
    lng: -87.83,
    schedule: "Lun-Sáb 6am-10am",
    products: [
      { name: "Baleada sencilla", price: 15 },
      { name: "Baleada con todo", price: 25 },
    ],
  },
  {
    id: "2",
    name: "Pulpería El Buen Precio",
    category: "tienda",
    type: "physical",
    description: "Todo lo que necesitás para tu hogar",
    whatsapp: "50498765433",
    rating: 4.5,
    reviews: 15,
    lat: 14.601,
    lng: -87.831,
  },
  {
    id: "3",
    name: "TechFix Honduras",
    category: "servicios",
    type: "online",
    description: "Reparación de celulares y computadoras. Envíos a todo el país.",
    whatsapp: "50498765434",
    rating: 4.9,
    reviews: 45,
    deliveryZones: ["Francisco Morazán", "Comayagua"],
  },
  {
    id: "4",
    name: "Carpintería Los Pinos",
    category: "servicios",
    type: "physical",
    description: "Muebles a medida, puertas, closets",
    whatsapp: "50498765435",
    rating: 4.7,
    reviews: 12,
    lat: 14.602,
    lng: -87.828,
  },
  {
    id: "5",
    name: "Tienda Lupita",
    category: "tienda",
    type: "both",
    description: "Ropa americana de calidad. Local en el centro + envíos",
    whatsapp: "50498765436",
    rating: 4.3,
    reviews: 8,
    lat: 14.599,
    lng: -87.832,
  },
  {
    id: "6",
    name: "Tacos El Güero",
    category: "comida",
    type: "physical",
    description: "Tacos, burritos y quesadillas",
    whatsapp: "50498765437",
    rating: 4.6,
    reviews: 31,
    lat: 14.598,
    lng: -87.829,
  },
  {
    id: "7",
    name: "Electricista Rápido",
    category: "servicios",
    type: "physical",
    description: "Instalaciones eléctricas, emergencias 24/7",
    whatsapp: "50498765438",
    rating: 4.4,
    reviews: 19,
    lat: 14.603,
    lng: -87.827,
  },
  {
    id: "8",
    name: "Pastelería Sweet Dreams",
    category: "comida",
    type: "both",
    description: "Pasteles personalizados para toda ocasión",
    whatsapp: "50498765439",
    rating: 5.0,
    reviews: 52,
    lat: 14.597,
    lng: -87.833,
  },
  {
    id: "9",
    name: "Barbería Los Compas",
    category: "servicios",
    type: "physical",
    description: "Cortes modernos, barba y cejas",
    whatsapp: "50498765440",
    rating: 4.2,
    reviews: 7,
    lat: 14.604,
    lng: -87.826,
  },
  {
    id: "10",
    name: "Mini Súper La Economía",
    category: "tienda",
    type: "physical",
    description: "Abarrotes, lácteos, carnes frías",
    whatsapp: "50498765441",
    rating: 4.1,
    reviews: 5,
    lat: 14.596,
    lng: -87.834,
  },
  {
    id: "11",
    name: "Diseños Catracha",
    category: "servicios",
    type: "online",
    description: "Logos, flyers, social media. 100% digital",
    whatsapp: "50498765442",
    rating: 4.8,
    reviews: 28,
    deliveryZones: ["Todo Honduras"],
  },
  {
    id: "12",
    name: "Verduras Frescas Don Pedro",
    category: "comida",
    type: "physical",
    description: "Verduras del campo directo a tu mesa",
    whatsapp: "50498765443",
    rating: 4.6,
    reviews: 14,
    lat: 14.605,
    lng: -87.825,
  },
];

export interface Chamba {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  whatsapp: string;
  type: "busco_trabajo" | "busco_alguien";
}

export const chambas: Chamba[] = [
  {
    id: "1",
    title: "Busco trabajo de mesero",
    description: "Tengo experiencia en restaurantes, horario flexible",
    category: "comida",
    location: "Tegucigalpa",
    whatsapp: "50498111222",
    type: "busco_trabajo",
  },
  {
    id: "2",
    title: "Necesito electricista urgente",
    description: "Para instalación de aire acondicionado",
    category: "servicios",
    location: "San Pedro Sula",
    whatsapp: "50498333444",
    type: "busco_alguien",
  },
  {
    id: "3",
    title: "Diseñador gráfico freelance",
    description: "Hago logos, flyers, redes sociales. Trabajo remoto",
    category: "servicios",
    location: "En línea",
    whatsapp: "50498555666",
    type: "busco_trabajo",
  },
  {
    id: "4",
    title: "Busco ayudante de cocina",
    description: "Para comedor, horario de almuerzo",
    category: "comida",
    location: "Comayagüela",
    whatsapp: "50498777888",
    type: "busco_alguien",
  },
];
