import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatWhatsAppLink(phone: string, message?: string): string {
  const cleanPhone = phone.replace(/\D/g, '')
  const baseUrl = `https://wa.me/${cleanPhone}`
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`
  }
  return baseUrl
}

export function formatPhone(phone: string): string {
  const clean = phone.replace(/\D/g, '')
  if (clean.startsWith('504')) {
    return `+504 ${clean.slice(3, 7)}-${clean.slice(7)}`
  }
  return phone
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    comida: '#FF6B2B',
    tiendas: '#2D5016',
    servicios: '#D4A017',
    chambas: '#9333EA',
    enlinea: '#3B82F6',
  }
  return colors[category] || '#FF6B2B'
}

export function getCategoryEmoji(category: string): string {
  const emojis: Record<string, string> = {
    comida: '🍽️',
    tiendas: '🏪',
    servicios: '🔧',
    chambas: '💼',
    enlinea: '🌐',
  }
  return emojis[category] || '📍'
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    comida: 'Comida',
    tiendas: 'Tiendas',
    servicios: 'Servicios',
    chambas: 'Chambas',
    enlinea: 'En Línea',
  }
  return labels[category] || category
}

export function getBusinessTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    physical: 'Local físico',
    online: 'En línea',
    both: 'Físico y en línea',
  }
  return labels[type] || type
}

export function formatScheduleToday(
  schedule: Record<string, { open: string; close: string } | null>
): string {
  const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
  const today = days[new Date().getDay()]
  const todaySchedule = schedule[today]

  if (!todaySchedule) {
    return 'Cerrado hoy'
  }

  return `${todaySchedule.open} - ${todaySchedule.close}`
}

export function isOpenNow(
  schedule: Record<string, { open: string; close: string } | null>
): boolean {
  const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']
  const now = new Date()
  const today = days[now.getDay()]
  const todaySchedule = schedule[today]

  if (!todaySchedule) return false

  const currentTime = now.getHours() * 60 + now.getMinutes()
  const [openHour, openMin] = todaySchedule.open.split(':').map(Number)
  const [closeHour, closeMin] = todaySchedule.close.split(':').map(Number)
  const openTime = openHour * 60 + openMin
  const closeTime = closeHour * 60 + closeMin

  return currentTime >= openTime && currentTime <= closeTime
}

export function generateShareText(businessName: string, url: string): string {
  return `¡Mirá este negocio en La Pulpería! ${businessName} - ${url}`
}

export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => false)
  }
  return Promise.resolve(false)
}

export function shareToWhatsApp(text: string): void {
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
}

export function shareToFacebook(url: string): void {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
}
