# KARA Barber Studio

Next.js App Router ile Vercel'e dağıtılabilen berber sitesi demosu.

Hızlı ve tasarım kaybı olmayan geçiş için mevcut tek dosyalı demo
[`public/kara-demo.html`](./public/kara-demo.html) içinde korunmuştur. Next.js
ana sayfası ve yönetim rotası bu demoyu tam ekran açar; mevcut tasarım, randevu
akışı ve tarayıcı depolaması aynı şekilde çalışır. Dükkan fotoğrafları `/dukkan`,
ekip tanıtımları `/ekibimiz`, kapsamlı hizmet ve fiyat listesi ise `/fiyatlar`
adresinde ayrı Next.js sayfalarıdır.

## Geliştirme

```bash
npm install
npm run dev
```

Ana sayfa [http://localhost:3000](http://localhost:3000), yönetim paneli demosu ise
[http://localhost:3000/yonetim](http://localhost:3000/yonetim) adresindedir.
Diğer sayfalar [http://localhost:3000/dukkan](http://localhost:3000/dukkan) ve
[http://localhost:3000/ekibimiz](http://localhost:3000/ekibimiz) ile
[http://localhost:3000/fiyatlar](http://localhost:3000/fiyatlar) adreslerindedir.
Demo dosyası doğrudan [http://localhost:3000/kara-demo.html](http://localhost:3000/kara-demo.html)
adresinden de açılabilir.

## Dağıtım

Projeyi GitHub'a gönderip Vercel'de **New Project** ile içe aktar. Vercel, Next.js
uygulamasını otomatik algılar; özel build veya output ayarı gerekmez.

Randevu kayıtları gerçek bir backend'e gönderilmez; demo sayfası bunları yalnızca
ziyaretçinin tarayıcısındaki `localStorage` içinde tutar. Paylaşılan, kalıcı
randevular için daha sonra veritabanı ve bir API eklenmelidir.
