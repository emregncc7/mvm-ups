import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Battery, Zap, Server, Activity, Database, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      icon: Battery,
      title: "Kesintisiz Güç Kaynakları (UPS)",
      description:
        "Kritik sistemleriniz için kesintisiz güç sağlayan, çift dönüşümlü online UPS sistemleri. 1-800 kVA arası güç kapasiteleri ile her ölçekte işletme için uygun çözümler.",
      features: ["Çift dönüşüm teknolojisi", "Geniş güç aralığı", "7/24 teknik destek"],
      color: "#37C3FF",
    },
    {
      icon: Battery,
      title: "Kuru Tip Akümülatör",
      description:
        "Bakım gerektirmeyen, uzun ömürlü kuru tip akümülatörler. UPS sistemleriniz için güvenilir enerji depolama çözümleri.",
      features: ["Bakım gerektirmez", "Uzun ömürlü", "Çevre dostu"],
      color: "#ED1C24",
    },
    {
      icon: Zap,
      title: "Voltaj Regülatörleri",
      description:
        "Statik ve IGBT teknolojisi ile üretilmiş son teknoloji voltaj regülatörleri. Elektrik şebekesindeki dalgalanmalara karşı ekipmanlarınızı korur.",
      features: ["IGBT teknolojisi", "Hızlı tepki süresi", "Geniş voltaj aralığı"],
      color: "#37C3FF",
    },
    {
      icon: Activity,
      title: "Tıbbi Güç Sistemleri (IT Pano)",
      description:
        "Hastaneler ve sağlık tesisleri için özel tasarlanmış IT panoları. Hasta güvenliğini ön planda tutan, standartlara uygun çözümler.",
      features: ["Hasta güvenliği", "Standartlara uygun", "İzolasyon transformatörü"],
      color: "#ED1C24",
    },
    {
      icon: Database,
      title: "Enerji Yönetimi",
      description:
        "Enerji tüketiminizi optimize eden akıllı enerji yönetim sistemleri. Maliyetlerinizi düşürün, verimliliğinizi artırın.",
      features: ["Enerji tasarrufu", "Uzaktan izleme", "Detaylı raporlama"],
      color: "#37C3FF",
    },
    {
      icon: Server,
      title: "Veri Merkezi Çözümleri",
      description:
        "Veri merkezleri için kapsamlı güç altyapısı çözümleri. Yüksek kapasiteli UPS sistemleri, soğutma ve izleme sistemleri.",
      features: ["Modüler yapı", "N+1 redundancy", "Merkezi izleme"],
      color: "#ED1C24",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <img
            src="/ups-power-systems-equipment.jpg"
            alt="Products"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Ürünlerimiz</h1>
          <p className="text-xl text-gray-300">Her ihtiyaca uygun güç çözümleri</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{ color: "#37C3FF" }}>Kapsamlı</span> Ürün ve Hizmet Yelpazesi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kesintisiz güç kaynakları başta olmak üzere tüm enerji altyapısı ihtiyaçlarınız için profesyonel çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div
                      className="w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <Icon className="h-8 w-8" style={{ color: product.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="font-semibold bg-transparent"
                        style={{ borderColor: product.color, color: product.color }}
                        asChild
                      >
                        <Link href="/iletisim">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/images/logo-icon.png"
                alt="Technical Specifications"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Teknik <span style={{ color: "#ED1C24" }}>Mükemmellik</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Tüm ürünlerimiz en son teknoloji ile üretilmiş olup, uluslararası kalite standartlarına uygun
                sertifikalara sahiptir. Riello UPS, CSB Battery, YUASA, DATASAFE, EXIDE AKÜ gibi dünyanın önde gelen
                markalarının bayiliğini yapmaktayız.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Güç Aralığı</h3>
                  <p className="text-muted-foreground text-sm">1 kVA - 800 kVA arası çözümler</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Verimlilik</h3>
                  <p className="text-muted-foreground text-sm">%95'e varan enerji verimliliği</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Garanti</h3>
                  <p className="text-muted-foreground text-sm">2 yıl kapsamlı garanti ve 7/24 destek</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Sertifikalar</h3>
                  <p className="text-muted-foreground text-sm">CE, ISO 9001, TSE onaylı ürünler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span style={{ color: "#37C3FF" }}>Kapsamlı</span> Hizmetlerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Danışmanlıktan kuruluma, bakımdan eğitime kadar tüm süreçlerde yanınızdayız
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Danışmanlık",
              "Projelendirme",
              "Kontrolörlük",
              "Devreye Alma",
              "Süpervizörlük",
              "Proje Yönetimi",
              "Kurulum",
              "Bakım-Onarım",
              "Teknik Destek",
              "Eğitim Hizmetleri",
            ].map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold">{service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">İhtiyacınıza en uygun çözümü birlikte bulalım</h2>
          <p className="text-xl text-muted-foreground mb-8">
            25 yıllık tecrübemiz ve uzman ekibimizle size özel çözüm önerileri sunmak için hazırız
          </p>
          <Button size="lg" className="text-white font-semibold" style={{ backgroundColor: "#37C3FF" }} asChild>
            <Link href="/iletisim">
              Teklif Alın
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
