import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Linkedin, X, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
          <Image
  src="/images/logo-full.png"
  alt="MvM UPS Elektronik - Flexible Power & Stable Protection"
  width={280}
  height={120}
  className="mb-4"
/>
            <p className="text-sm text-gray-400 leading-relaxed">
              Kesintisiz güç kaynağı çözümlerinde güvenilir iş ortağınız.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61574816139293"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37C3FF] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/murat-kom%C5%9Fu-83874567/?originalSubdomain=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37C3FF] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/MvMUps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37C3FF] transition-colors"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/mvm_ups/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#37C3FF] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">Menü</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#37C3FF] transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-[#37C3FF] transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-gray-400 hover:text-[#37C3FF] transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-gray-400 hover:text-[#37C3FF] transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-[#37C3FF] transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#37C3FF" }} />
                <span>+90 506 560 67 67</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#37C3FF" }} />
                <span>info@mvmups.com.tr</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#37C3FF" }} />
                <span>
                  Aydınlı Mah. Ardıçlı Sokak No: 12/43
                  <br />
                  Tuzla / İstanbul
                </span>
              </li>
            </ul>
          </div>

          {/* MvM UPS Elektronik */}
          <div>
            <h3 className="font-semibold mb-4">MvM UPS Elektronik</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              25 yıllık tecrübemiz ve uzman kadromuz ile kesintisiz enerji çözümlerinde hizmetinizdeyiz.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MvM UPS Elektronik - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
