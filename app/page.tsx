import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Shield, Zap, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden mt-20 pt-8 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <img
            src="/images/ups-corridor-installation.jpg"
            alt="UPS Technology"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
              {" "}
                <span className="italic" style={{ color: "#ED1C24" }}>
                GÜÇ
                </span>{" "}
                {""}
                
                <span className="italic" style={{ color: "#37C3FF" }}>
                  
                </span>{" "}
               güvencesi,{""}
              <div>
                <span className="italic" style={{ color: "#37C3FF" }}>İŞ</span>{" "}
                <span style={{ color: "white" }}>sürekliliği</span>
              </div>
              
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Enerji yönetiminde 20 yılı aşkın tecrübe. Finans, sağlık, 
              telekom ve sanayi sektörlerinde güvenilir çözüm ortağınız.              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm p-8 -mt-12 lg:mt-0">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#37C3FF" }}>
                UPS ÇÖZÜMLERİ
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
              İş sürekliliğiniz bizim güvencemiz altında. Özelleştirilmiş 
              KGK çözümleriyle maksimum koruma sağlıyoruz.
              </p>
              <Button size="lg" className="w-full text-white font-semibold" style={{ backgroundColor: "#ED1C24" }}>
                Devamını Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Tüm endüstriyel Uygulamalar için <span style={{ color: "#37C3FF" }}>DİNAMİK</span> güç
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Orta ve büyük ölçekli işletmeler, Hastaneler, Basın Yayın, Havacılık, Fabrikalar, Spor Tesisleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#37C3FF20" }}
              >
                <Shield className="h-8 w-8" style={{ color: "#37C3FF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Güvenilirlik</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kritik sistemleriniz için %99.9 uptime garantisi ile kesintisiz güç sağlıyoruz.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#ED1C2420" }}
              >
                <Zap className="h-8 w-8" style={{ color: "#ED1C24" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Yüksek Performans</h3>
              <p className="text-muted-foreground leading-relaxed">
                En son teknoloji ile donatılmış UPS sistemleri ile maksimum verimlilik.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#37C3FF20" }}
              >
                <Settings className="h-8 w-8" style={{ color: "#37C3FF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kolay Yönetim</h3>
              <p className="text-muted-foreground leading-relaxed">
                Uzaktan izleme ve yönetim özellikleri ile sistemlerinizi her yerden kontrol edin.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 inline-block" style={{ backgroundColor: "#ED1C24", color: "white" }}>
                    KESİNTİSİZ
                  </span>
                  <span>Enerji,</span>
                </div>
                <span className="px-3 py-1 inline-block" style={{ backgroundColor: "#37C3FF", color: "white" }}>
                    SINIRSIZ
                  </span>
                  <span> Güven</span>

              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Her zaman etkin olması gereken kritik işlemlerinizi sürdürün. Kesintisiz güç kaynakları (KGK) ile
                bağlantı odalarına ve veri merkezi altyapısına kadar etkisiz bir çözüm sağlar.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: "#37C3FF" }} />
                  <p className="text-muted-foreground">7/24 teknik destek ve bakım hizmeti</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: "#37C3FF" }} />
                  <p className="text-muted-foreground">Özelleştirilmiş UPS çözümleri</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: "#37C3FF" }} />
                  <p className="text-muted-foreground">Enerji verimliliği ve maliyet tasarrufu</p>
                </div>
              </div>
              <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#ED1C24" }} asChild>
                <Link href="/urunler">
                  Ürünlerimizi İnceleyin
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img src="/images/ups-installation-3.jpg" alt="UPS Installation" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Çözüm Ortaklarımız
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <div className="flex items-center justify-center">
              <img
                src="/images/partners/riello-ups.png"
                alt="Riello UPS"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/partners/yuasa.png"
                alt="YUASA"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/partners/exide-batteries.png"
                alt="EXIDE Batteries"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/partners/csb-battery.png"
                alt="CSB Battery"
                className="h-16 w-auto grayscale hover:grayscale-0 transition-all hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#37C3FF" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Projeniz için doğru UPS çözümünü bulalım</h2>
          <p className="text-xl text-white/90 mb-8">
            Uzman ekibimiz size en uygun kesintisiz güç kaynağı sistemini önerir
          </p>
          <Button size="lg" className="font-semibold" style={{ backgroundColor: "#ED1C24", color: "white" }} asChild>
            <Link href="/iletisim">
              Hemen İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
