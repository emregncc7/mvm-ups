import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function ReferencesPage() {
 

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800">
          <img
            src="/successful-business-partnerships-handshake.jpg"
            alt="References"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Referanslarımız</h1>
          <p className="text-xl text-gray-300">Güvenilir iş ortağınız</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span style={{ color: "#37C3FF" }}>Türkiye'nin</span> önde gelen kurumları bize güveniyor
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Farklı sektörlerden yüzlerce kuruma kesintisiz güç çözümleri sağlıyoruz. İşte başarıyla tamamladığımız
            projelerden bazıları.
          </p>
        </div>
      </section>

      {/* Project Photos Showcase Section */}
      {/*
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Tamamlanan Projelerden Görüntüler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-installation-1.jpg"
                alt="Büyük Ölçekli UPS Projesi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Endüstriyel Tesis UPS Kurulumu</h3>
                  <p className="text-white/90 text-sm">İki katlı modüler UPS sistemi - 800 kVA</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-installation-3.jpg"
                alt="Veri Merkezi UPS Projesi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Veri Merkezi Altyapısı</h3>
                  <p className="text-white/90 text-sm">Yüksek kapasiteli UPS sistemleri - 600 kVA</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-installation-2.jpg"
                alt="Hastane UPS Sistemi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Hastane UPS Sistemi</h3>
                  <p className="text-white/90 text-sm">Kritik sağlık altyapısı - 400 kVA</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-installation-4.jpg"
                alt="Finans Merkezi UPS"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Finans Merkezi UPS</h3>
                  <p className="text-white/90 text-sm">Bankacılık altyapısı - 500 kVA</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-internal-components.jpg"
                alt="UPS İç Bileşenleri"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">UPS İç Bileşenleri</h3>
                  <p className="text-white/90 text-sm">Yüksek kalite komponentler</p>
                </div>
              </div>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden">
              <img
                src="/images/ups-corridor-installation.jpg"
                alt="Koridor UPS Kurulumu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">Koridor UPS Kurulumu</h3>
                  <p className="text-white/90 text-sm">Endüstriyel koridor sistemi - 300 kVA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* References Grid */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hizmet Verdiğimiz Sektörler</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Geniş sektör deneyimimiz ile her alana özel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Telekomünikasyon",
              "Sağlık",
              "Finans",
              "Eğitim",
              "Üretim",
              "Perakende",
              "Havacılık",
              "Otomotiv",
              "Enerji",
              "Kamu",
            ].map((sector, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <p className="font-semibold">{sector}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="p-12">
            <div className="text-center">
              <svg
                className="w-12 h-12 mx-auto mb-6"
                style={{ color: "#37C3FF" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed italic">
              "MvM UPS olarak 25 yılı aşkın süredir tek bir hedefimiz var: 
               Türkiye'nin kritik altyapılarını güvence altına almak. Her 
               projede mükemmellik standartlarımızdan ödün vermeden, 
                müşterilerimizin iş sürekliliğini garanti ediyoruz."
              </p>
              <p className="font-bold">Murat Komşu</p>
              <p className="text-sm text-muted-foreground">Kurucu, MvM UPS Elektronik</p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
