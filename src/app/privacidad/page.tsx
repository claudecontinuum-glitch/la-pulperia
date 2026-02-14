import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Lock, Shield, Trash2, Eye } from 'lucide-react'

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
              <Shield className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Privacidad en La Pulpería</h1>
            <p className="text-muted-foreground">
              Tu privacidad es importante. Acá te explicamos cómo manejamos tus datos.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">No vendemos tus datos</h2>
                    <p className="text-muted-foreground">
                      Tu información personal nunca se vende ni se comparte con terceros para publicidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Qué guardamos</h2>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• <strong>Tu número de teléfono:</strong> Para que los clientes te contacten</li>
                      <li>• <strong>Nombre del negocio:</strong> Para que te encuentren</li>
                      <li>• <strong>Ubicación (opcional):</strong> Para mostrar tu negocio en el mapa</li>
                      <li>• <strong>Fotos que subís:</strong> Para mostrar tu negocio y productos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Trash2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Tu derecho a eliminar</h2>
                    <p className="text-muted-foreground">
                      Podés eliminar tu cuenta cuando quieras desde Mi Negocio. 
                      Borramos todo: perfil, productos, reseñas. Sin rodeos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">Resumen simple</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-800 mb-2">✓ Lo que hacemos</p>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Mostrar tu negocio en el mapa</li>
                      <li>• Conectar clientes via WhatsApp</li>
                      <li>• Guardar tus datos de forma segura</li>
                      <li>• Borrar todo si lo pedís</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-red-800 mb-2">✗ Lo que NO hacemos</p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Vender tus datos</li>
                      <li>• Enviarte spam</li>
                      <li>• Compartir tu número sin permiso</li>
                      <li>• Guardar datos después de eliminar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>
                ¿Tenés preguntas? Escribinos por{' '}
                <a 
                  href="https://wa.me/50499999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  WhatsApp
                </a>
              </p>
              <p className="mt-2">Última actualización: Febrero 2024</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
