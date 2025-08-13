import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Dumbbell, Star, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface PricingPackage {
  id: string
  name: string
  price: number
  duration: number
  description: string
  popular?: boolean
  discount?: number
  originalPrice?: number
}

const pricingPackages: PricingPackage[] = [
  {
    id: 'quick',
    name: 'Rychlý trénink',
    price: 160,
    duration: 70,
    description: 'Perfektní pro rychlou porci cvičení'
  },
  {
    id: 'standard',
    name: 'Standardní trénink',
    price: 200,
    duration: 90,
    description: 'Nejoblíbenější volba pro kompletní trénink',
    popular: true
  },
  {
    id: 'pack10',
    name: 'Balíček 10 vstupů',
    price: 1800,
    originalPrice: 2000,
    duration: 90,
    description: '10× 90minutový vstup se slevou 10%',
    discount: 10
  },
  {
    id: 'pack15',
    name: 'Balíček 15 vstupů',
    price: 2700,
    originalPrice: 3000,
    duration: 90,
    description: '15× 90minutový vstup se slevou 10%',
    discount: 10
  }
]

export default function PricingPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const handlePurchase = (packageId: string) => {
    setSelectedPackage(packageId)
    // Zde by byla integrace s platební branou
    alert('Simulace nákupu - v reálné aplikaci by se otevřela platební brána')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Zpět</span>
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                LitFit
              </span>
            </div>
          </div>
          <Button asChild variant="outline">
            <Link to="/prihlaseni">Přihlášení</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
            Vyber si svůj balíček
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Flexibilní ceny bez závazků. Plať jen za to, co využiješ.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  pkg.popular ? 'border-2 border-orange-400 shadow-lg' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-orange-600 text-white px-3 py-1 text-sm font-medium">
                    <Star className="inline h-4 w-4 mr-1" />
                    Nejoblíbenější
                  </div>
                )}
                {pkg.discount && (
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 text-sm font-medium">
                    -{pkg.discount}%
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className={`h-8 w-8 ${
                      pkg.popular ? 'text-orange-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    {pkg.originalPrice && (
                      <div className="text-lg text-gray-400 line-through mb-1">
                        {pkg.originalPrice} Kč
                      </div>
                    )}
                    <div className={`text-4xl font-bold mb-2 ${
                      pkg.popular ? 'text-orange-600' : 'text-purple-600'
                    }`}>
                      {pkg.price} Kč
                    </div>
                    <div className="text-gray-600">
                      {pkg.id.includes('pack') ? 
                        `${pkg.duration} min / vstup` : 
                        `${pkg.duration} minut`
                      }
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6 text-left">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>24/7 přístup</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>SMS kód okamžitě</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Moderní vybavení</span>
                    </div>
                    {pkg.discount && (
                      <div className="flex items-center space-x-2 text-sm text-green-600 font-medium">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Úspora {pkg.originalPrice! - pkg.price} Kč</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
                        : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                    }`}
                    onClick={() => handlePurchase(pkg.id)}
                  >
                    Koupit nyní
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Co je zahrnuto v každém balíčku</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Každý vstup zahrnuje přístup ke kompletnímu vybavení a službám.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Kompletní vybavení</h3>
              <p className="text-gray-600">Moderní stroje, činky, kabelové stroje a kardio zóna</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexibilní časy</h3>
              <p className="text-gray-600">Přijď kdykoliv během 24 hodin, 7 dní v týdnu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bez závazků</h3>
              <p className="text-gray-600">Žádné smlouvy, zrušit kdykoli, platíš jen za využité vstupy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Často kladené otázky</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Jak dlouho platí zakoupený vstup?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Jednotlivé vstupy platí 30 dní od zakoupení. Balíčky platí 90 dní.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Co když se mi nedaří dostat do posilovny?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kontaktuj nás na telefonu nebo emailu a problém vyřešíme okamžitě.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mohu si koupit vstup pro někoho jiného?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Ano, při nákupu zadáš telefonní číslo osoby, které chceš vstup darovat.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">LitFit</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 LitFit. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  )
}