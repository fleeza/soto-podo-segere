import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Menu, X, MapPin, Clock, Phone, ArrowUpRight, Soup, Instagram } from 'lucide-react'
import './style.css'

const menuItems = [
  { name: 'Soto Ayam', desc: 'Soto hangat dengan ayam suwir dan taburan bawang goreng.', price: 'Isi harga', emoji: '🍲', tag: 'Favorit' },
  { name: 'Soto Daging', desc: 'Pilihan soto daging yang nikmat untuk menemani makan.', price: 'Isi harga', emoji: '🥣', tag: 'Pilihan' },
  { name: 'Nasi Putih', desc: 'Pelengkap sederhana untuk santapan yang lebih mantap.', price: 'Isi harga', emoji: '🍚', tag: 'Pelengkap' },
  { name: 'Minuman Segar', desc: 'Teman makan untuk menyegarkan hari Anda.', price: 'Isi harga', emoji: '🧋', tag: 'Segar' },
]

const WA_NUMBER = '6285155762633' // Isi dengan nomor WA, contoh: 6281234567890
const MAPS_URL = 'https://maps.app.goo.gl/rDDcuU1yWAxsM13DA?g_st=aw' // Isi dengan tautan Google Maps usaha
const MAPS_EMBED = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12050.833678779749!2d110.81283286880355!3d-7.559119640633496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a168d330b8ad5%3A0x5d97c18b16f9972f!2sJl.%20Walter%20Monginsidi%20No.31%2C%20Kepatihan%20Kulon%2C%20Kec.%20Jebres%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057129!5e1!3m2!1sen!2sid!4v1792413715891!5m2!1sen!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' // Opsional: isi URL embed Google Maps untuk peta di halaman
const ADDRESS = 'Jl. Walter Monginsidi No.31, Kepatihan Kulon, Kec. Jebres, Kota Surakarta, Jawa Tengah 57129'
const HOURS = 'BUKA : Senin-Jumat 08:00-16:00'

function App() {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('Semua')
  const filters = ['Semua', 'Favorit', 'Pilihan', 'Pelengkap', 'Segar']
  const visibleItems = filter === 'Semua' ? menuItems : menuItems.filter(item => item.tag === filter)
  const waLink = WA_NUMBER ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Soto Podo Seger’e, saya ingin bertanya tentang menu.')}` : '#kontak'

  const closeMenu = () => setOpen(false)

  return (
    <div>
      <div className="top-strip">SOTO HANGAT • RASA YANG BIKIN RINDU • SOTO PODO SEGER’E</div>
      <header className="site-header">
        <a className="brand" href="#beranda" onClick={closeMenu} aria-label="Soto Podo Seger’e beranda">
          <span className="brand-icon"><Soup size={26} /></span>
          <span><strong>Soto Podo</strong><small>Seger’e</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Buka navigasi">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav nav-open' : 'nav'}>
          <a href="#beranda" onClick={closeMenu}>Beranda</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#cerita" onClick={closeMenu}>Tentang</a>
          <a href="#lokasi" onClick={closeMenu}>Lokasi</a>
          <a className="nav-cta" href={waLink} onClick={closeMenu}>Hubungi kami <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="beranda">
          <div className="hero-pattern" aria-hidden="true">✳</div>
          <div className="hero-copy reveal">
            <span className="eyebrow"><span className="eyebrow-dot" /> HANGAT • SEGAR • NIKMAT</span>
            <h1>Semangkuk hangat,<br /><em>sejuta</em> kenikmatan.</h1>
            <p>Yuk, nikmati sajian Soto Podo Seger’e. Teman yang pas untuk menghangatkan suasana dan melengkapi waktu makanmu.</p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#menu">Jelajahi menu <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#lokasi"><MapPin size={17} /> Temukan lokasi</a>
            </div>
            <div className="hero-note"><span className="note-stars">★★★★★</span><span>Rasa rumahan, suasana bersahabat</span></div>
          </div>
          <div className="hero-visual reveal reveal-delay">
            <div className="hero-circle"></div>
            <div className="food-bowl" role="img" aria-label="Ilustrasi mangkuk soto">🍲</div>
            <div className="floating-card card-one"><span>🥄</span><div><b>Dibuat dengan hati</b><small>Untuk setiap sajian</small></div></div>
            <div className="floating-card card-two"><span>🌿</span><div><b>Segar dan nikmat</b><small>Teman waktu makan</small></div></div>
            <span className="hero-spark spark-one">✦</span><span className="hero-spark spark-two">✳</span>
          </div>
          <div className="hero-bottom"><span>01 / CITA RASA</span><span>GULIR UNTUK MENJELAJAHI ↓</span></div>
        </section>

        <section className="marquee" aria-label="Slogan">
          <div>SOTO HANGAT <span>✳</span> RASA NUSANTARA <span>✳</span> MOMEN BERSAMA <span>✳</span> SOTO HANGAT <span>✳</span> RASA NUSANTARA <span>✳</span></div>
        </section>

        <section className="menu-section section" id="menu">
          <div className="section-heading reveal">
            <span className="eyebrow eyebrow-red">DARI DAPUR KAMI</span>
            <h2>Kenalan dengan<br /><em>menu favoritmu.</em></h2>
            <p>Pilih sajian yang cocok untuk menemani harimu. Periksa menu dan harga terbaru langsung dari tempat kami.</p>
          </div>
          <div className="filters" aria-label="Filter menu">
            {filters.map(item => <button key={item} className={filter === item ? 'filter active' : 'filter'} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <div className="menu-grid">
            {visibleItems.map((item, i) => (
              <article className="menu-card reveal" style={{ '--delay': `${i * 80}ms` }} key={item.name}>
                <div className={`menu-art art-${i % 4}`}>
                  <span className="menu-tag">{item.tag}</span><span className="menu-emoji" role="img" aria-label={item.name}>{item.emoji}</span>
                  <span className="art-deco">✳</span>
                </div>
                <div className="menu-info"><div className="menu-title-row"><h3>{item.name}</h3><span className="price">{item.price}</span></div><p>{item.desc}</p><a href={waLink} className="menu-order">Tanya menu <ArrowUpRight size={15} /></a></div>
              </article>
            ))}
          </div>
          <p className="price-note">* Lengkapi harga dan sesuaikan daftar menu dengan menu yang benar-benar tersedia.</p>
        </section>

        <section className="story-section" id="cerita">
          <div className="story-art reveal"><div className="story-sun"></div><div className="story-emoji">🍲</div><span className="story-stamp">DARI HATI<br />UNTUK ANDA</span></div>
          <div className="story-copy reveal reveal-delay">
            <span className="eyebrow eyebrow-yellow">CERITA SOTO PODO SEGER’E</span>
            <h2>Sederhana dalam sajian,<br /><em>istimewa di kebersamaan.</em></h2>
            <p>Soto bukan sekadar makanan. Ada kehangatan, obrolan, dan momen kecil yang membuat waktu makan terasa istimewa.</p>
            <p>Datang dan kenali sajian Soto Podo Seger’e. Kami menantikan kunjunganmu!</p>
            <a className="button button-light" href="#lokasi">Lihat lokasi <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="visit-section section" id="lokasi">
          <div className="section-heading reveal">
            <span className="eyebrow eyebrow-red">KAMI MENUNGGU KUNJUNGANMU</span>
            <h2>Yuk, mampir<br /><em>ke tempat kami.</em></h2>
            <p>Simpan alamat dan jam operasional di bawah ini setelah informasinya dilengkapi.</p>
          </div>
          <div className="visit-grid">
            <div className="visit-details reveal">
              <div className="detail-item"><span className="detail-icon"><MapPin /></span><div><h3>Alamat</h3><p>{ADDRESS}</p>{MAPS_URL && <a href={MAPS_URL} target="_blank" rel="noreferrer">Buka petunjuk arah <ArrowUpRight size={14} /></a>}</div></div>
              <div className="detail-item"><span className="detail-icon"><Clock /></span><div><h3>Jam operasional</h3><p>{HOURS}</p></div></div>
              <div className="detail-item"><span className="detail-icon"><Phone /></span><div><h3>Hubungi kami</h3><p>{WA_NUMBER || 'Tambahkan nomor WhatsApp usaha'}</p><a href={waLink}>Kirim pesan <ArrowUpRight size={14} /></a></div></div>
            </div>
            <div className="map-frame reveal reveal-delay">
              {MAPS_EMBED ? <iframe title="Peta lokasi Soto Podo Seger’e" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> : <div className="map-placeholder"><MapPin size={38} /><h3>Lokasi Soto Podo Seger’e</h3><p>Tambahkan tautan peta Google Maps di kode agar pengunjung dapat menemukan lokasi.</p>{MAPS_URL && <a className="button button-red" href={MAPS_URL} target="_blank" rel="noreferrer">Buka Google Maps</a>}</div>}
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="cta-spark">✳</div><span className="eyebrow eyebrow-yellow">ADA DI DEKATMU?</span>
          <h2>Semangkuk soto,<br /><em>mood jadi lebih baik.</em></h2>
          <p>Catat alamatnya, ajak orang tersayang, dan nikmati waktu makan bersama.</p>
          <a className="button button-yellow" href={waLink}>Hubungi Soto Podo Seger’e <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand brand-footer" href="#beranda"><span className="brand-icon"><Soup size={23} /></span><span><strong>Soto Podo</strong><small>Seger’e</small></span></a>
        <p>Hangat, segar, dan penuh cerita.</p>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Soto Podo Seger’e</span><a href="#beranda">Kembali ke atas ↑</a></div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
