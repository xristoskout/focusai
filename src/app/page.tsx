import Image from 'next/image';
import InteractiveHero from '@/components/InteractiveHero';

export default function Home() {
  return (
    <main style={{ background: '#020202' }}>
      {/* Navbar */}
      <nav>
        <div className="container nav-content">
          <div className="logo">FOCUS <span style={{ color: '#00d0ff' }}>AI</span></div>
          <div>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', background: '#00d0ff' }}>
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '-4rem', position: 'relative', zIndex: 10, opacity: 0, animation: 'fadeInUp 1s forwards' }}>
            <h1>
              Digital Excellence <br /> with <span style={{ color: '#00d0ff' }}>Focus AI</span>
            </h1>
            <p style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: '1.25rem',
              color: '#a0a0a0',
              textShadow: '0 0 20px rgba(0,0,0,0.8)' 
            }}>
              Unleash the power of intelligence. We build the future of digital presence through advanced AI integration and premium design.
            </p>
          </div>

          <div style={{ opacity: 0, animation: 'fadeInUp 1s 0.3s forwards' }}>
            <InteractiveHero />
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: '#00d0ff' }}>Our Expertise</h2>
          <p>Intelligence-driven solutions for your business growth.</p>
        </div>
        
        <div className="grid">
          <div className="glass-card" style={{ borderColor: 'rgba(0, 208, 255, 0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px #00d0ff)' }}>🌐</div>
            <h3>Website Creation</h3>
            <p>Modern, extremely fast, and highly aesthetic web applications designed to convert your visitors into customers.</p>
          </div>
          
          <div className="glass-card" style={{ borderColor: 'rgba(0, 208, 255, 0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px #00d0ff)' }}>📈</div>
            <h3>Digital Marketing</h3>
            <p>Data-driven advertising campaigns, precise targeting, and brand building to maximize your ROI.</p>
          </div>
          
          <div className="glass-card" style={{ borderColor: 'rgba(0, 208, 255, 0.1)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px #00d0ff)' }}>🤖</div>
            <h3>AI Assistance</h3>
            <p>Integration of Artificial Intelligence technologies to automate and optimize your business processes.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid rgba(0, 208, 255, 0.2)' }}>
            <h2>Let's build the future together</h2>
            <p style={{ marginBottom: '2.5rem' }}>Ready to transform your digital presence with Focus AI? Reach out to us today and let's create something extraordinary.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a 
                href="mailto:focus@gogreecenow.com" 
                className="btn btn-primary" 
                style={{ 
                  fontSize: '1.1rem', 
                  background: '#00d0ff',
                  wordBreak: 'break-all',
                  textAlign: 'center',
                  maxWidth: '100%'
                }}
              >
                ✉️ focus@gogreecenow.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2026 Focus AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
