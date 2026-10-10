import Link from "next/link";

const teamMembers = [
  {
    name: "Mert Kara",
    role: "Kurucu · Saç tasarım uzmanı",
    image: "photo-1647140655214-e4a2d914971f",
    imageAlt: "Berber müşterisinin saçını makasla keserken",
    experience: "12 yıllık deneyim",
    description:
      "KARA'nın kurucusu Mert, klasik berberlik geleneğini modern kesim teknikleriyle bir araya getiriyor. Her misafirini önce dinliyor; yüz şekline, günlük rutinine ve kendi tarzına uygun bir kesim planlıyor. Favorisi, makasla şekillendirdiği doğal ve zahmetsiz görünümler.",
  },
  {
    name: "Can Demir",
    role: "Sakal tasarım uzmanı",
    image: "photo-1605497788044-5a32c7078486",
    imageAlt: "Berber salonunda müşterisinin saçını şekillendirirken",
    experience: "8 yıllık deneyim",
    description:
      "Can'ın uzmanlık alanı sakal tasarımı ve ustura tıraşı. Sıcak havlu ritüelinden son dokunuşa kadar her adımda rahatlığı ve temiz çizgileri ön planda tutuyor. Sakalının yüzüne nasıl oturacağı konusunda kararsızsan, birlikte en doğru formu bulmanıza yardım ediyor.",
  },
  {
    name: "Emre Yıldız",
    role: "Saç tasarım uzmanı",
    image: "photo-1599351431202-1e0f0137899a",
    imageAlt: "Berber müşterisine saç ve sakal bakımı yaparken",
    experience: "6 yıllık deneyim",
    description:
      "Emre, fade ve modern kısa kesimlerdeki titizliğiyle tanınıyor. Koltuğa oturmadan önce ne istediğini konuşuyor, kesim boyunca detaylara dikkat ediyor ve evde kolayca şekillendirebileceğin bir sonuç hedefliyor. İlk kez gelen misafirlerine de her zaman vakit ayırıyor.",
  },
];

const gallery = [
  {
    image: "photo-1503951914875-452162b0f3f1",
    alt: "Berber koltuğunda saç kesimi",
    title: "Ustalık koltukta başlar",
    detail: "Her kesim, sana özel küçük bir sohbetle başlar.",
    className: "shop-photo-tall",
  },
  {
    image: "photo-1521590832167-7bcbfaa6381f",
    alt: "Berber salonunun sıcak ve modern iç mekânı",
    title: "Kendine ayırdığın zaman",
    detail: "İyi müzik, taze kahve ve sakin bir mola.",
    className: "",
  },
  {
    image: "photo-1621605815971-fbc98d665033",
    alt: "Berberin müşterisinin saçını özenle kesmesi",
    title: "Detaylarda saklı",
    detail: "Eski usul zanaat, bugünün dokunuşuyla.",
    className: "",
  },
  {
    image: "photo-1622287162716-f311baa1a2b8",
    alt: "Berberin saç kesimi için kullandığı profesyonel araçlar",
    title: "Her şey yerli yerinde",
    detail: "Özenle seçilmiş aletler ve tertemiz bir çalışma alanı.",
    className: "shop-photo-wide",
  },
];

function imageUrl(photo: string, width: number) {
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;
}

function ShowcaseHeader() {
  return (
    <header className="showcase-header">
      <Link className="showcase-brand" href="/" aria-label="KARA Barber ana sayfa">
        <span className="showcase-brand-mark">K</span>
        <span>
          KARA <span>BARBER</span>
        </span>
      </Link>
      <nav className="showcase-nav" aria-label="Sayfa menüsü">
        <Link href="/">Ana sayfa</Link>
        <Link href="/fiyatlar">Fiyatlarımız</Link>
        <Link href="/dukkan">Dükkanımız</Link>
        <Link href="/ekibimiz">Ekibimiz</Link>
        <Link className="showcase-book" href="/kara-demo.html#randevu">
          Randevu al <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <details className="showcase-mobile-menu">
        <summary aria-label="Sayfa menüsünü aç">Menü <span aria-hidden="true">☰</span></summary>
        <nav aria-label="Mobil sayfa menüsü">
          <Link href="/">Ana sayfa</Link>
          <Link href="/fiyatlar">Fiyatlarımız</Link>
          <Link href="/dukkan">Dükkanımız</Link>
          <Link href="/ekibimiz">Ekibimiz</Link>
          <Link href="/kara-demo.html#randevu">Randevu al ↗</Link>
        </nav>
      </details>
    </header>
  );
}

function ShowcaseFooter() {
  return (
    <footer className="showcase-footer">
      <Link className="showcase-footer-brand" href="/">
        KARA BARBER STUDIO
      </Link>
      <div>
        <Link href="/fiyatlar">Fiyatlarımız</Link>
        <Link href="/dukkan">Dükkanımız</Link>
        <Link href="/ekibimiz">Ekibimiz</Link>
        <Link href="/kara-demo.html#randevu">Randevu</Link>
      </div>
      <span>Caferağa, Kadıköy · İstanbul</span>
    </footer>
  );
}

export function TeamPage() {
  return (
    <main className="showcase-page">
      <ShowcaseHeader />
      <section className="showcase-intro">
        <div className="showcase-eyebrow">İşini severek yapanlar</div>
        <h1>İyi kesimin arkasında,<br /><em>iyi ustalar var.</em></h1>
        <p>
          Tanışmadan kesime başlamayız. Ekibimiz seni dinler, tarzını anlar ve
          koltuktan tam içine sinen bir görünümle kalkman için özenle çalışır.
        </p>
      </section>
      <section className="team-list" aria-label="Berber ekibimiz">
        {teamMembers.map((member, index) => (
          <article className="team-profile" key={member.name}>
            <div
              className="team-profile-photo"
              role="img"
              aria-label={member.imageAlt}
              style={{ backgroundImage: `url("${imageUrl(member.image, 500)}")` }}
            >
              <span>0{index + 1}</span>
            </div>
            <div className="team-profile-copy">
              <div className="showcase-eyebrow">{member.role}</div>
              <h2>{member.name}</h2>
              <div className="team-experience">{member.experience}</div>
              <p>{member.description}</p>
              <Link className="showcase-text-link" href="/kara-demo.html#randevu">
                {member.name.split(" ")[0]} ile randevu al <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="showcase-cta">
        <div>
          <div className="showcase-eyebrow">Koltuk hazır, kahve taze</div>
          <h2>Bir sonraki kesiminde görüşelim.</h2>
        </div>
        <Link className="showcase-book" href="/kara-demo.html#randevu">Randevu oluştur ↗</Link>
      </section>
      <ShowcaseFooter />
    </main>
  );
}

export function ShopPage() {
  return (
    <main className="showcase-page">
      <ShowcaseHeader />
      <section className="showcase-intro shop-intro">
        <div className="showcase-eyebrow">2016'dan beri, Kadıköy'de</div>
        <h1>Kapıdan gir,<br /><em>kendine vakit ayır.</em></h1>
        <p>
          KARA, güzel bir kesimden fazlası: kahveni yudumladığın, iyi müzik
          dinlediğin ve kendin gibi olabildiğin mahalle berberin.
        </p>
      </section>
      <section className="shop-gallery" aria-label="Berber dükkanımızdan fotoğraflar">
        {gallery.map((photo, index) => (
          <figure className={`shop-photo ${photo.className}`} key={photo.title}>
            <div
              className="shop-photo-image"
              role="img"
              aria-label={photo.alt}
              style={{ backgroundImage: `url("${imageUrl(photo.image, 1200)}")` }}
            />
            <figcaption>
              <span>0{index + 1}</span>
              <div>
                <strong>{photo.title}</strong>
                <p>{photo.detail}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="shop-details">
        <div>
          <div className="showcase-eyebrow">Yolun düşerse bekleriz</div>
          <h2>Moda'da, köşedeki<br />berberin.</h2>
          <p>Kapımız açık, kahvemiz hazır. Gelmeden önce koltuğunu ayırmak istersen randevunu online oluşturabilirsin.</p>
          <a
            className="showcase-text-link"
            href="https://www.google.com/maps/dir/?api=1&destination=Cafera%C4%9Fa+Moda+Cd.+No+24+Kad%C4%B1k%C3%B6y+%C4%B0stanbul"
            target="_blank"
            rel="noreferrer"
          >
            Yol tarifi al <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="shop-info-grid">
          <div><strong>Adres</strong><p>Caferağa, Moda Cd. No: 24<br />Kadıköy / İstanbul</p></div>
          <div><strong>Çalışma saatleri</strong><p>Pazartesi–Cumartesi<br />10.00–21.00 · Pazar kapalı</p></div>
          <div><strong>Telefon</strong><p>0216 555 12 34</p></div>
        </div>
      </section>
      <ShowcaseFooter />
    </main>
  );
}

const pricingOptions = [
  {
    number: "01",
    category: "İMZA KESİM",
    name: "Saç kesimi",
    duration: "40 dakika",
    price: "₺600",
    description:
      "Sana yakışan modeli birlikte belirleyelim. Makas veya makineyle, saç yapına ve yüz hatlarına göre özenle şekillendirelim.",
    includes: ["Kısa stil danışmanlığı", "Saç yıkama", "Kesim ve son şekillendirme"],
  },
  {
    number: "02",
    category: "USTURA RİTÜELİ",
    name: "Sakal tasarımı",
    duration: "25 dakika",
    price: "₺400",
    description:
      "Sakalına yüz hatlarınla uyumlu bir form verelim; temiz kontür ve rahatlatıcı sıcak havlu bakımıyla tamamlayalım.",
    includes: ["Sakal formu ve kontür", "Sıcak havlu", "Ustura ile son dokunuş"],
  },
  {
    number: "03",
    category: "KARA FAVORİSİ",
    name: "Saç & sakal",
    duration: "60 dakika",
    price: "₺850",
    description:
      "Baştan sona yenilenme isteyenlere. Saç kesimini ve sakal ritüelini tek seansta bir araya getiren en sevilen bakımımız.",
    includes: ["Saç yıkama ve kesim", "Sıcak havlu sakal bakımı", "Birlikte son stil kontrolü"],
    featured: true,
  },
  {
    number: "04",
    category: "YENİLEYİCİ BAKIM",
    name: "Cilt bakımı",
    duration: "30 dakika",
    price: "₺500",
    description:
      "Günün temposuna kısa bir ara ver. Cildine uygun ürünlerle daha temiz ve dinlenmiş bir his için rahatlatıcı yüz bakımı.",
    includes: ["Cilt temizliği", "Yatıştırıcı bakım", "Nemlendirici son dokunuş"],
  },
  {
    number: "05",
    category: "RENK VE TON",
    name: "Saç boyama",
    duration: "90 dakika",
    price: "₺1.200",
    description:
      "İstediğin tonu ve görünümü önce birlikte konuşalım. Profesyonel uygulama ve saçına uygun son bakımla yeni stilini tamamlayalım.",
    includes: ["Renk danışmanlığı", "Profesyonel renk uygulaması", "Yıkama ve şekillendirme"],
  },
  {
    number: "06",
    category: "MİNİK MİSAFİR",
    name: "Çocuk kesimi",
    duration: "30 dakika",
    price: "₺450",
    description:
      "Küçük misafirlerimiz için acele etmeden, rahat ve keyifli bir kesim. İstediği modeli beraber seçiyoruz.",
    includes: ["Model seçimi", "Çocuğa uygun kesim", "Son şekillendirme"],
  },
];

export function PricingPage() {
  return (
    <main className="showcase-page pricing-page">
      <ShowcaseHeader />
      <section className="showcase-intro pricing-intro">
        <div className="showcase-eyebrow">İyi bakım, açık fiyat</div>
        <h1>İyi hissetmenin<br /><em>fiyatı belli.</em></h1>
        <p>
          Koltuğa oturmadan önce ne alacağını ve ne kadar süreceğini bil. Her
          hizmete küçük bir stil danışmanlığı, ustalarımızın özeni ve iyi bir
          kahve dâhil.
        </p>
        <Link className="showcase-book" href="/kara-demo.html#randevu">
          Kendine bir saat ayır <span aria-hidden="true">↗</span>
        </Link>
      </section>
      <section className="pricing-list" aria-label="Berber hizmetleri ve fiyatları">
        {pricingOptions.map((service) => (
          <article
            className={`pricing-card${service.featured ? " pricing-card-featured" : ""}`}
            key={service.number}
          >
            <div className="pricing-card-number">{service.number}</div>
            <div className="pricing-card-description">
              <div className="showcase-eyebrow">{service.category}</div>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <ul>
                {service.includes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="pricing-card-side">
              {service.featured && <span className="pricing-popular">EN ÇOK TERCİH EDİLEN</span>}
              <strong>{service.price}</strong>
              <span>{service.duration}</span>
              <Link href={`/kara-demo.html#randevu`} aria-label={`${service.name} için randevu al`}>
                Randevu al <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
      <aside className="pricing-note">
        <span aria-hidden="true">✳</span>
        <p>
          Belirtilen süreler yaklaşık hizmet süreleridir. Saç boyama öncesinde
          renk ve saç uzunluğuna göre kısa bir danışmanlık yapıyoruz. Bu sayfa
          örnek işletme demosudur; fiyatlar demo amaçlıdır.
        </p>
      </aside>
      <section className="showcase-cta">
        <div>
          <div className="showcase-eyebrow">Koltuk hazır, kahve taze</div>
          <h2>Sıradaki güzel kesim senin olsun.</h2>
        </div>
        <Link className="showcase-book" href="/kara-demo.html#randevu">
          Randevunu oluştur ↗
        </Link>
      </section>
      <ShowcaseFooter />
    </main>
  );
}
