import { Link } from 'react-router-dom'
import { Clock, Dumbbell, Shield, Smartphone, Star, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              LitFit
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Domů</Link>
            <Link to="/ceniky" className="text-gray-600 hover:text-orange-600 transition-colors">Ceník</Link>
            <Link to="/prihlaseni" className="text-gray-600 hover:text-orange-600 transition-colors">Přihlášení</Link>
          </nav>
          <Button asChild className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
            <Link to="/ceniky">Koupit vstup</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-purple-600 to-orange-600 bg-clip-text text-transparent leading-tight">
              Trénuj 24/7
              <br />
              <span className="text-4xl md:text-6xl">Bez závazků</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              Moderní posilovna s kódovým systémem. Kup si vstup, dorazí ti SMS s kódem a můžeš začít trénovat kdykoli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-lg px-8 py-4">
                <Link to="/ceniky">Vyzkoušej nyní</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-orange-300 hover:bg-orange-50">
                <Link to="#funkce">Zjistit více</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funkce" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Proč LitFit?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revoluce ve fitness. Jednoduše, rychle a dostupně 24 hodin denně.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">24/7 Přístup</CardTitle>
                <CardDescription className="text-lg">
                  Trénuj kdykoliv, i v noci. Žádné omezené hodiny.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">SMS Kódy</CardTitle>
                <CardDescription className="text-lg">
                  Koupíš vstup, přijde ti kód. Zadáš ho a jdeš trénovat.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Bez závazků</CardTitle>
                <CardDescription className="text-lg">
                  Žádné smlouvy, žádné poplatky. Platíš jen za to, co využiješ.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Jednoduché ceny</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Bez skrytých poplatků. Vyber si, co ti vyhovuje.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="text-4xl font-bold text-orange-600 mb-2">200 Kč</div>
                <CardTitle className="text-2xl text-gray-800">90 minut</CardTitle>
                <CardDescription className="text-lg">
                  Perfektní pro delší trénink
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Link to="/ceniky">Koupit nyní</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-2">
                <div className="text-4xl font-bold text-purple-600 mb-2">160 Kč</div>
                <CardTitle className="text-2xl text-gray-800">70 minut</CardTitle>
                <CardDescription className="text-lg">
                  Ideální pro rychlý trénink
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
                  <Link to="/ceniky">Koupit nyní</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-4">
              <Star className="inline h-5 w-5 text-yellow-500 mr-2" />
              Permanentky s 10% slevou dostupné v ceníku
            </p>
            <Button asChild variant="outline" size="lg" className="border-2 border-orange-300 hover:bg-orange-50">
              <Link to="/ceniky">Zobrazit všechny možnosti</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Jak to funguje?</h2>
            <p className="text-xl text-gray-600">Tři jednoduché kroky k tvému tréninku</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Koupíš vstup</h3>
              <p className="text-gray-600">Vyber si balíček, který ti vyhovuje a zaplať online</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dostaneš SMS</h3>
              <p className="text-gray-600">Na tvoje číslo přijde SMS s unikátním přístupovým kódem</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Jdeš trénovat</h3>
              <p className="text-gray-600">Zadáš kód do panelu u vchodu a můžeš začít</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <p className="text-xl text-gray-600">Otevřeno nonstop</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-xl text-gray-600">Spokojených klientů</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-xl text-gray-600">Úspěšných tréninků</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Začni trénovat ještě dnes</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Připoj se k stovkám spokojených klientů a objevuj sílu flexibilního fitness.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
            <Link to="/ceniky">Koupit první vstup</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">LitFit</span>
          </div>
          <p className="text-gray-400 mb-4">
            Moderní 24/7 posilovna s kódovým přístupem
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 LitFit. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  )
}