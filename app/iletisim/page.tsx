"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Formspree endpoint'inizi buraya ekleyin
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldpnlwg" // Bu kısmı kendi endpoint'inizle değiştirin
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          _subject: `MvM UPS - ${formData.name} adlı kişiden yeni mesaj`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        throw new Error('Form gönderiminde hata oluştu')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <img
            src="/modern-office-contact-customer-service.jpg"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">İletişim</h1>
          <p className="text-xl text-gray-300">Size nasıl yardımcı olabiliriz?</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Bize <span style={{ color: "#37C3FF" }}>Ulaşın</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                UPS sistemleri hakkında detaylı bilgi almak, teklif talep etmek veya teknik destek için formu doldurun.
                Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Formspree Hidden Fields */}
                <input type="hidden" name="_next" value="https://mvmups.com.tr/iletisim" />
                <input type="hidden" name="_subject" value="MvM UPS - Yeni İletişim Formu" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0XXX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Şirket Adı
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Şirket adınız (opsiyonel)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesajınız *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Lütfen ihtiyacınızı detaylı olarak açıklayın..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-white font-semibold"
                  style={{ backgroundColor: "#ED1C24" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </Button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-semibold">✅ Mesajınız başarıyla gönderildi!</p>
                    <p className="text-green-600 text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-semibold">❌ Mesaj gönderilemedi!</p>
                    <p className="text-red-600 text-sm mt-1">Lütfen tekrar deneyin veya doğrudan telefon ile iletişime geçin.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#37C3FF20" }}
                    >
                      <Phone className="h-6 w-6" style={{ color: "#37C3FF" }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telefon</h4>
                      <p className="text-muted-foreground">+90 506 560 67 67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#ED1C2420" }}
                    >
                      <Mail className="h-6 w-6" style={{ color: "#ED1C24" }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-posta</h4>
                      <p className="text-muted-foreground">info@mvmups.com.tr</p>
                      <p className="text-muted-foreground">mvmupselektronik@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#37C3FF20" }}
                    >
                      <MapPin className="h-6 w-6" style={{ color: "#37C3FF" }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adres</h4>
                      <p className="text-muted-foreground">
                        Aydınlı Mah. Ardıçlı Sokak No: 12/43
                        <br />
                        Tuzla / İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#ED1C2420" }}
                    >
                      <Clock className="h-6 w-6" style={{ color: "#ED1C24" }} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Çalışma Saatleri</h4>
                      <p className="text-muted-foreground">Pazartesi - Cuma: 09:00 - 18:00</p>
                      <p className="text-muted-foreground">Cumartesi: 09:00 - 14:00</p>
                      <p className="text-sm mt-2" style={{ color: "#37C3FF" }}>
                        7/24 Acil Teknik Destek
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8" style={{ backgroundColor: "#37C3FF" }}>
                <h3 className="text-2xl font-bold text-white mb-4">Acil Teknik Destek</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  UPS sisteminizde acil bir sorun mu var? 7/24 teknik destek hattımızdan anında yardım alabilirsiniz.
                </p>
                <Button
                  size="lg"
                  className="w-full font-semibold"
                  style={{ backgroundColor: "#ED1C24", color: "white" }}
                >
                  Acil Destek: +90 506 560 67 67
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Information */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Şirket Bilgileri</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Ünvan:</span>
                  <span className="text-muted-foreground text-right">MVM UPS ELEKTRONİK</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Yetkili:</span>
                  <span className="text-muted-foreground">Murat Komşu</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Vergi Dairesi:</span>
                  <span className="text-muted-foreground">Tuzla Vergi Dairesi</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-semibold">Vergi No:</span>
                  <span className="text-muted-foreground">5011679047</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Adres:</span>
                  <span className="text-muted-foreground text-right">
                    Aydınlı Mah. Ardıçlı Sokak No: 12/43
                    <br />
                    Tuzla / İstanbul
                  </span>
                </div>
              </div>
            </Card>

            {/* Bank Information */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Banka Bilgileri</h3>
              <div className="space-y-4">
                <div className="mb-4">
                  <p className="font-semibold mb-2">Garanti BBVA</p>
                  <p className="text-sm text-muted-foreground">Deri Sanayi Şubesi</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">TL Hesap:</p>
                    <p className="text-muted-foreground font-mono">TR13 0006 2001 4760 0006 2963 61</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">EUR Hesap:</p>
                    <p className="text-muted-foreground font-mono">TR72 0006 2001 4760 0009 0845 34</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-semibold mb-1">USD Hesap:</p>
                    <p className="text-muted-foreground font-mono">TR45 0006 2001 4760 0009 0845 35</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bizi Ziyaret Edin</h2>
            <p className="text-muted-foreground">
              Ofisimize gelerek ürünlerimizi yakından inceleyebilir ve uzman ekibimizle görüşebilirsiniz
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=40.86196703623962,29.33936061935474&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MvM Ups Elektronik Konum"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
