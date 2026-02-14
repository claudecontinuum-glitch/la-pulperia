'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CHAMBA_CATEGORIES } from '@/lib/types'
import { cn } from '@/lib/utils'
import { 
  ChevronLeft, 
  Briefcase, 
  Search,
  MapPin,
  Check,
  Lock,
  Loader2
} from 'lucide-react'

export default function PublicarChambaPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    chambaType: '' as 'offer' | 'seek' | '',
    title: '',
    description: '',
    category: '',
    address: '',
    location: null as { lat: number; lng: number } | null,
    whatsapp: '',
  })

  const updateForm = (field: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getLocation = () => {
    setIsGettingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        updateForm('location', {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
        setIsGettingLocation(false)
      },
      () => {
        setIsGettingLocation(false)
      },
      { enableHighAccuracy: true }
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setSuccess(true)
  }

  const isValid = 
    formData.chambaType &&
    formData.title.trim() &&
    formData.category &&
    formData.whatsapp.length >= 8

  if (success) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2">¡Chamba publicada!</h2>
              <p className="text-muted-foreground mb-6">
                Tu publicación ya está visible. La gente te escribirá por WhatsApp.
              </p>
              <div className="space-y-3">
                <Button onClick={() => router.push('/chambas')} className="w-full">
                  Ver todas las chambas
                </Button>
                <Button variant="outline" onClick={() => {
                  setSuccess(false)
                  setFormData({
                    chambaType: '',
                    title: '',
                    description: '',
                    category: '',
                    address: '',
                    location: null,
                    whatsapp: '',
                  })
                }} className="w-full">
                  Publicar otra
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-lg">
          <Link href="/chambas" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground mb-6">
            <ChevronLeft className="w-4 h-4" />
            Volver a chambas
          </Link>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Lock className="w-4 h-4" />
            <span>Solo usamos tu número para que te contacten</span>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Publicar Chamba</CardTitle>
              <CardDescription>
                Llená los datos y tu publicación estará visible de inmediato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    ¿Qué querés hacer?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => updateForm('chambaType', 'seek')}
                      className={cn(
                        'p-4 rounded-xl border-2 transition-all text-center',
                        formData.chambaType === 'seek'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <Search className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <span className="font-medium">Busco a alguien</span>
                      <p className="text-xs text-muted-foreground mt-1">Necesito ayuda</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => updateForm('chambaType', 'offer')}
                      className={cn(
                        'p-4 rounded-xl border-2 transition-all text-center',
                        formData.chambaType === 'offer'
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <Briefcase className="w-6 h-6 mx-auto mb-2 text-secondary" />
                      <span className="font-medium">Ofrezco servicio</span>
                      <p className="text-xs text-muted-foreground mt-1">Busco trabajo</p>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Título</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => updateForm('title', e.target.value)}
                    placeholder={formData.chambaType === 'seek' 
                      ? 'Ej: Busco plomero para reparación' 
                      : 'Ej: Electricista con 10 años de experiencia'}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Descripción (opcional)</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateForm('description', e.target.value)}
                    placeholder="Más detalles..."
                    rows={3}
                    className="flex w-full rounded-lg border border-border bg-surface px-4 py-3 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Categoría</label>
                  <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                    {CHAMBA_CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => updateForm('category', cat)}
                        className={cn(
                          'px-3 py-2 rounded-lg text-sm transition-colors text-left',
                          formData.category === cat
                            ? 'bg-primary text-white'
                            : 'bg-muted hover:bg-muted/80'
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Ubicación (opcional)</label>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full gap-2 mb-2"
                    onClick={getLocation}
                    disabled={isGettingLocation}
                  >
                    {isGettingLocation ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <MapPin className="w-5 h-5" />
                    )}
                    {formData.location ? '📍 Ubicación guardada' : 'Usar mi ubicación'}
                  </Button>
                  <Input
                    value={formData.address}
                    onChange={(e) => updateForm('address', e.target.value)}
                    placeholder="O escribí tu ubicación"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tu número de WhatsApp</label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3 bg-muted rounded-lg text-sm">
                      🇭🇳 +504
                    </div>
                    <Input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => updateForm('whatsapp', e.target.value.replace(/\D/g, ''))}
                      placeholder="9999-9999"
                      maxLength={8}
                      className="flex-1"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  disabled={!isValid || isLoading}
                  className="w-full gap-2"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Publicando...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Publicar Chamba
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
