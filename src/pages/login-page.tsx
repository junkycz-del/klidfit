import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Dumbbell, Smartphone, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginPage() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (code.length !== 6) {
      alert('Kód musí mít 6 číslic')
      return
    }
    
    setIsLoading(true)
    // Simulace ověření kódu
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // V reálné aplikaci by zde byla validace kódu na backendu
    if (code === '123456') {
      navigate('/dashboard')
    } else {
      alert('Neplatný kód. Zkuste znovu nebo kontaktujte podporu.')
    }
    setIsLoading(false)
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
            <Link to="/ceniky">Koupit vstup</Link>
          </Button>
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <Card className="shadow-xl border-0">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800">
                Zadej svůj kód
              </CardTitle>
              <CardDescription className="text-lg">
                Kód jsi dostal ve SMS po zakoupení vstupu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="code" className="text-sm font-medium text-gray-700">
                    6místný kód
                  </label>
                  <input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={code}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 6)
                      setCode(value)
                    }}
                    className="w-full px-4 py-3 text-center text-2xl font-mono border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    maxLength={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 py-3 text-lg"
                  disabled={isLoading || code.length !== 6}
                >
                  {isLoading ? 'Ověřuji kód...' : 'Vstoupit do posilovny'}
                </Button>
              </form>
              
              <div className="mt-6 text-center space-y-4">
                <p className="text-sm text-gray-500">
                  Nemáš ještě žádný vstup?
                </p>
                <Button asChild variant="outline" className="w-full border-2 border-orange-300 hover:bg-orange-50">
                  <Link to="/ceniky">Koupit vstup nyní</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg text-blue-800">Potřebuješ pomoc?</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="text-blue-700">
                <strong>SMS nedorazila?</strong>
                <p className="text-blue-600">Zkontroluj spam nebo kontaktuj podporu</p>
              </div>
              <div className="text-blue-700">
                <strong>Kód nefunguje?</strong>
                <p className="text-blue-600">Možná vypršel nebo byl už použit</p>
              </div>
              <div className="pt-2">
                <Button variant="link" className="text-blue-600 p-0 h-auto">
                  Kontaktovat podporu
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <Card className="mt-6 bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <div className="text-center text-sm text-yellow-800">
                <p className="font-medium mb-1">Demo režim</p>
                <p className="text-yellow-700">Použij kód <strong>123456</strong> pro testování</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}