import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Dumbbell, LogOut, User, Calendar, CheckCircle, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface WorkoutSession {
  id: string
  date: string
  duration: number
  startTime: string
  endTime: string
  status: 'active' | 'completed'
}

export default function DashboardPage() {
  const [currentSession, setCurrentSession] = useState<WorkoutSession | null>(null)
  const [remainingTime, setRemainingTime] = useState(90 * 60) // 90 minut v sekundách
  const [sessions] = useState<WorkoutSession[]>([
    {
      id: '1',
      date: '2024-01-10',
      duration: 85,
      startTime: '18:30',
      endTime: '19:55',
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-01-08',
      duration: 90,
      startTime: '07:15',
      endTime: '08:45',
      status: 'completed'
    }
  ])

  useEffect(() => {
    // Simulace aktivní session
    setCurrentSession({
      id: '3',
      date: new Date().toISOString().split('T')[0],
      duration: 0,
      startTime: new Date().toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' }),
      endTime: '',
      status: 'active'
    })

    // Countdown timer
    const timer = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const handleEndSession = () => {
    setCurrentSession(null)
    setRemainingTime(0)
    alert('Trénink ukončen. Děkujeme za návštěvu!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              LitFit Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link to="/ceniky">Koupit vstup</Link>
            </Button>
            <Button asChild variant="ghost" className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Odhlásit se</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Vítej v LitFit!</h1>
          <p className="text-lg text-gray-600">Sleduj svůj současný trénink a historii</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Session */}
          <div className="lg:col-span-2 space-y-6">
            {currentSession ? (
              <Card className="border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <CardTitle className="text-2xl text-green-800">Aktivní trénink</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Timer className="h-5 w-5" />
                      <span className="font-mono text-lg">
                        Začátek: {currentSession.startTime}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="text-green-700">
                    Tvůj trénink právě probíhá
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatTime(remainingTime)}
                      </div>
                      <p className="text-green-700 font-medium">Zbývající čas</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {Math.floor((90 * 60 - remainingTime) / 60)} min
                      </div>
                      <p className="text-green-700 font-medium">Už trénuješ</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button 
                      onClick={handleEndSession}
                      variant="outline" 
                      className="w-full border-2 border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Ukončit trénink
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-gray-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="h-8 w-8 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl text-gray-600">Žádný aktivní trénink</CardTitle>
                  <CardDescription>
                    Kup si vstup a začni trénovat
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button asChild className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700">
                    <Link to="/ceniky">Koupit vstup</Link>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Session History */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-xl text-gray-800">Historie tréninků</CardTitle>
                </div>
                <CardDescription>
                  Tvoje poslední návštěvy posilovny
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-800">
                            {new Date(session.date).toLocaleDateString('cs-CZ', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </div>
                          <div className="text-sm text-gray-600">
                            {session.startTime} - {session.endTime}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-800">{session.duration} min</div>
                        <div className="text-sm text-green-600">Dokončen</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* User Info */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg">Profil</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Telefon:</span>
                    <p className="font-medium">+420 123 456 789</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Aktivních vstupů:</span>
                    <p className="font-medium text-green-600">1</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Celkem tréninků:</span>
                    <p className="font-medium">{sessions.length + (currentSession ? 1 : 0)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statistiky</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Tento měsíc</span>
                    <span className="font-bold text-lg">{sessions.length} tréninků</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Průměrná délka</span>
                    <span className="font-bold text-lg">
                      {Math.round(sessions.reduce((acc, s) => acc + s.duration, 0) / sessions.length || 0)} min
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Celkový čas</span>
                    <span className="font-bold text-lg">
                      {Math.round((sessions.reduce((acc, s) => acc + s.duration, 0)) / 60)} hodin
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Nouzový kontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="text-red-700">
                    <strong>Problémy s přístupem:</strong>
                    <p>+420 800 123 456</p>
                  </div>
                  <div className="text-red-700">
                    <strong>Technická podpora:</strong>
                    <p>podpora@litfit.cz</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}