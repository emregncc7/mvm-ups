# 📧 Formspree Form Entegrasyonu Kurulum Rehberi

## 🚀 Adım 1: Formspree Hesabı Oluşturma

1. **Formspree.io**'ya gidin: https://formspree.io
2. **Sign Up** butonuna tıklayın
3. E-posta adresinizi girin ve hesap oluşturun
4. E-posta doğrulamasını yapın

## 📝 Adım 2: Form Oluşturma

1. Dashboard'da **"New Form"** butonuna tıklayın
2. Form adını girin: **"MvM UPS İletişim Formu"**
3. **Create Form** butonuna tıklayın
4. Form endpoint URL'inizi kopyalayın (örnek: `https://formspree.io/f/xpznvqko`)

## ⚙️ Adım 3: Kodu Güncelleme

`app/iletisim/page.tsx` dosyasında **33. satırda** bulunan:

```typescript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID"
```

Bu kısmı kendi endpoint'inizle değiştirin:

```typescript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpznvqko" // Kendi ID'nizi buraya yazın
```

## 🎯 Adım 4: Test Etme

1. Projenizi çalıştırın: `npm run dev`
2. İletişim sayfasına gidin: `http://localhost:3000/iletisim`
3. Formu doldurup test edin
4. İlk gönderimde Formspree e-posta doğrulaması isteyecek
5. E-postanızı kontrol edin ve doğrulama linkine tıklayın

## ✅ Özellikler

### ✨ **Otomatik Özellikler:**
- **Spam Koruması**: reCAPTCHA entegre
- **E-posta Bildirimleri**: Her form gönderiminde e-posta alırsınız
- **Form Verileri**: Dashboard'da tüm gönderimler görüntülenebilir
- **Dosya Yükleme**: İsteğe bağlı dosya ekleme desteği

### 📊 **Ücretsiz Plan Limitleri:**
- **50 form gönderimi/ay**
- **Spam filtreleme**
- **E-posta bildirimleri**
- **Temel analytics**

## 🔧 Gelişmiş Ayarlar (Opsiyonel)

### E-posta Şablonu Özelleştirme:
Formspree dashboard'da **Settings > Email** bölümünden:
- E-posta konusunu özelleştirin
- Otomatik yanıt mesajı ekleyin
- CC/BCC adresleri ekleyin

### Webhook Entegrasyonu:
**Settings > Integrations** bölümünden:
- Slack bildirimleri
- Google Sheets entegrasyonu
- Zapier bağlantısı

## 🚨 Önemli Notlar

1. **İlk Test**: İlk form gönderiminde mutlaka e-posta doğrulaması yapın
2. **Spam Koruması**: Formspree otomatik spam filtrelemesi yapar
3. **Rate Limiting**: Çok hızlı gönderimler engellenebilir
4. **HTTPS Gerekli**: Production'da HTTPS kullanın

## 🆘 Sorun Giderme

### Form Gönderilmiyor:
- Endpoint URL'ini kontrol edin
- Network sekmesinde hata mesajlarını kontrol edin
- Formspree dashboard'da form durumunu kontrol edin

### E-posta Gelmiyor:
- Spam klasörünü kontrol edin
- Formspree dashboard'da gönderim loglarını kontrol edin
- E-posta doğrulamasının yapıldığından emin olun

## 📞 Destek

Sorun yaşarsanız:
- Formspree Docs: https://help.formspree.io
- Support: support@formspree.io

---

**🎉 Tebrikler! Artık müşterileriniz size kolayca ulaşabilir.**
