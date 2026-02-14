export type BusinessType = 'physical' | 'online' | 'both'
export type ChambaType = 'offer' | 'seek'

export type Category = 'comida' | 'tiendas' | 'servicios' | 'chambas' | 'enlinea'

export interface Business {
  id: string
  name: string
  description: string
  category: Category
  businessType: BusinessType
  whatsapp: string
  location: { lat: number; lng: number } | null
  address: string
  deliveryZones: string[]
  schedule: { [key: string]: { open: string; close: string } | null }
  coverPhoto: string
  isOpen: boolean
  isLiveLocation: boolean
  ratingAvg: number
  reviewCount: number
  viewCount: number
  products?: Product[]
  services?: Service[]
  reviews?: Review[]
  createdAt: string
}

export interface Product {
  id: string
  businessId: string
  name: string
  price: number
  photo: string
  available: boolean
}

export interface Service {
  id: string
  businessId: string
  title: string
  description: string
  priceRange: string
}

export interface Chamba {
  id: string
  title: string
  description: string
  category: string
  chambaType: ChambaType
  location: { lat: number; lng: number } | null
  address: string
  whatsapp: string
  isActive: boolean
  createdAt: string
}

export interface Review {
  id: string
  businessId: string
  reviewerName: string
  rating: number
  comment: string
  createdAt: string
}

export const CATEGORIES: { id: Category; label: string; icon: string; color: string }[] = [
  { id: 'comida', label: 'Comida', icon: '🍽️', color: 'category-comida' },
  { id: 'tiendas', label: 'Tiendas', icon: '🏪', color: 'category-tiendas' },
  { id: 'servicios', label: 'Servicios', icon: '🔧', color: 'category-servicios' },
  { id: 'chambas', label: 'Chambas', icon: '💼', color: 'category-chambas' },
  { id: 'enlinea', label: 'En Línea', icon: '🌐', color: 'category-enlinea' },
]

export const CHAMBA_CATEGORIES = [
  'Plomería',
  'Electricidad',
  'Carpintería',
  'Albañilería',
  'Limpieza',
  'Jardinería',
  'Niñera',
  'Cuidado de adultos',
  'Cocina',
  'Transporte',
  'Reparaciones',
  'Tecnología',
  'Belleza',
  'Otro',
]

export const HONDURAS_DEPARTMENTS = [
  'Atlántida',
  'Choluteca',
  'Colón',
  'Comayagua',
  'Copán',
  'Cortés',
  'El Paraíso',
  'Francisco Morazán',
  'Gracias a Dios',
  'Intibucá',
  'Islas de la Bahía',
  'La Paz',
  'Lempira',
  'Ocotepeque',
  'Olancho',
  'Santa Bárbara',
  'Valle',
  'Yoro',
]
