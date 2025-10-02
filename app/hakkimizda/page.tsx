import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <img
            src="/professional-business-team-technology.jpg"
            alt="About Us"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-300">MvM UPS Elektronik - Güvenilir Enerji Çözümleri</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <Image
              src="/images/logo-full.png"
              alt="MvM UPS Elektronik - Flexible Power & Stable Protection"
              width={400}
              height={160}
              className="h-auto w-auto max-w-xs sm:max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span style={{ color: "#37C3FF" }}>Kesintisiz</span> enerji çözümlerinde öncü
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                MvM UPS Elektronik, kaliteli ve kesintisiz enerjiyi garanti eden teknik servisiyle çözüm ortaklarına ve
                müşterilerine kesin çözümler sağlayan, sektöründe 25 yıllık tecrübesiyle vizyon sahibi bir firmadır.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tüm sektörlerde gelişen teknolojik ihtiyaçların, profesyonel hizmet anlayışı çerçevesinde karşılanması
                amacı ile hizmet vermeye başladık. Kesintisiz Güç Kaynakları başta olmak üzere Kuru Tip akümülatör,
                Statik ve IGBT teknolojisi ile üretilmiş son teknoloji voltaj regülatörleri, Tıbbi Güç Sistemleri (IT
                Pano), Enerji Yönetimi, Veri Merkezi Çözümleri alanlarında faaliyetlerimizi yürütmekteyiz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MvM UPS Elektronik, Riello UPS, CSB Battery, YUASA, DATASAFE, EXIDE AKÜ gibi dünyanın önde gelen
                markalarının da bayiliklerini yaparak ülkemizin teknolojik kalkınması adına da önemli bir katkı
                sağlamaktadır.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-technician-work.jpg"
                alt="MvM UPS Teknisyeni"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 p-8 bg-muted/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Onarım ve Bakım Hizmetlerimiz</h3>
            <p className="text-muted-foreground leading-relaxed">
              Kontrollü her türlü cihazların ve kartların bakımı ve onarımı en son teknoloji test cihazları ile
              tecrübeli teknik kadromuzla, çok uygun fiyatlarla onarım hizmeti vermekteyiz. Elektronik cihazlarınızdaki
              problemlerin hızlı, güvenilir, uygun fiyatlarla onarılmasını istiyorsanız bizi arayınız.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#37C3FF20" }}
              >
                <Target className="h-8 w-8" style={{ color: "#37C3FF" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sağladığımız tüm hizmetlerin müşterilerinde verimlilik ve rekabet avantajı oluşturacak hızlı ve kaliteli
                çözümler olmasına özen göstererek, müşterilerimize kusursuz bir hizmet sunmaktır.
              </p>
            </Card>

            <Card className="p-8">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#ED1C2420" }}
              >
                <TrendingUp className="h-8 w-8" style={{ color: "#ED1C24" }} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kullanım ve zamandan tasarruf ettirerek iş hayatında verimliliği arttıran uçtan uca tümleşik teknolojik
                çözümler sunmaktır.
              </p>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sağladığı tüm hizmetlerin müşterilerinde verimlilik ve rekabet avantajı oluşturacak çözümler olmasına özen
              göstererek, müşterilerimize kusursuz bir hizmet sunmayı kendine vizyon edinen MvM UPS Elektronik'in en
              önemli misyonu; zamandan tasarruf ettirerek iş hayatında verimliliği arttıran teknolojik çözümler
              sunmaktır.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Her geçen gün gelişen teknolojiyi, rekabetçi fiyat ve eksiksiz destek hizmeti ile sunmaktadır. Sunduğu
              maliyet avantajının sırrı organizasyon ve iş süreçlerini yalın olarak yeniden düzenleyerek, müşterilerine
              olabildiğince az katmanla ve doğrudan erişmesi ve bu yolla gereksiz tüm maliyetleri ortadan kaldırmasından
              kaynaklanmaktadır.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              MvM UPS Elektronik'in, sunduğu tüm çözümler için; danışmanlık, projelendirme, kontrolörlük, devreye alma,
              süpervizörlük, proje yönetimi, kurulum, bakım-onarım destek ve eğitim hizmetleri sunmaktadır. Dünyadaki en
              yeni teknolojileri izleyip müşterilerinin beklentilerini tespit ederek sahip olduğu bilgi birikimi,
              deneyim ve hizmetleri ile müşterilerine özel çözümler üreten MvM UPS Elektronik müşterilerine değer katan
              iş ortaklığı sunmaktadır.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel prensiplerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#37C3FF20" }}
              >
                <Target className="h-8 w-8" style={{ color: "#37C3FF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Müşteri Odaklılık</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Müşterilerimizin ihtiyaçlarını anlamak ve en iyi çözümü sunmak önceliğimizdir.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#ED1C2420" }}
              >
                <Award className="h-8 w-8" style={{ color: "#ED1C24" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Kalite</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                En yüksek kalite standartlarında ürün ve hizmet sunmayı taahhüt ediyoruz.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#37C3FF20" }}
              >
                <Users className="h-8 w-8" style={{ color: "#37C3FF" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">Güvenilirlik</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sözümüzü tutmak ve güvenilir iş ortağı olmak temel değerlerimizdendir.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "#ED1C2420" }}
              >
                <TrendingUp className="h-8 w-8" style={{ color: "#ED1C24" }} />
              </div>
              <h3 className="text-xl font-bold mb-3">İnovasyon</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teknolojik gelişmeleri takip eder ve yenilikçi çözümler sunarız.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span style={{ color: "#37C3FF" }}>Projelerimizden</span> Görüntüler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-installation-1.jpg"
                  alt="UPS Kurulum Projesi 1"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Endüstriyel UPS Kurulumu</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-installation-2.jpg"
                  alt="UPS Kurulum Projesi 2"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Yüksek Kapasiteli UPS Sistemleri</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-installation-3.jpg"
                  alt="UPS Kurulum Projesi 3"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Veri Merkezi UPS Altyapısı</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-installation-4.jpg"
                  alt="UPS Kurulum Projesi 4"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Modüler UPS Çözümleri</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-technician-laptop.jpg"
                  alt="Teknik Destek"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Uzman Teknik Ekibimiz</p>
                </div>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden group">
                <img
                  src="/images/ups-internal-components.jpg"
                  alt="UPS İç Bileşenleri"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">Kaliteli Komponentler</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#37C3FF" }}>
                25+
              </div>
              <p className="text-muted-foreground">Yıllık Deneyim</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#ED1C24" }}>
                500+
              </div>
              <p className="text-muted-foreground">Tamamlanan Proje</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#37C3FF" }}>
                300+
              </div>
              <p className="text-muted-foreground">Mutlu Müşteri</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: "#ED1C24" }}>
                7/24
              </div>
              <p className="text-muted-foreground">Teknik Destek</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
