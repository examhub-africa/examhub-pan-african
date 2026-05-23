export default function Home() {
  return (
    <main style={{fontFamily: 'Poppins, system-ui, sans-serif', margin: 0, background: '#f5f8ff', color: '#111827'}}>
      
      {/* HERO */}
      <section style={{background: 'linear-gradient(135deg,#0039b5,#0057ff)', color: 'white', padding: '80px 20px', textAlign: 'center'}}>
        <div style={{maxWidth: '900px', margin: 'auto'}}>
          <h1 style={{fontSize: '42px', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px'}}>
            Africa's Biggest Educational Marketplace
          </h1>
          <p style={{fontSize: '18px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 30px'}}>
            Buy and sell BAC, BEPC, WAEC, NECO textbooks, past questions, lessons and study materials from verified teachers across Africa.
          </p>
          <div>
            <button 
              onClick={() => window.location.href='/marketplace'} 
              style={{padding: '16px 32px', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, background: 'white', color: '#0057ff', cursor: 'pointer', margin: '8px'}}
            >
              Browse Marketplace
            </button>
            <button 
              onClick={() => window.location.href='/teacher-upload'} 
              style={{padding: '16px 32px', border: '2px solid white', borderRadius: '14px', fontSize: '16px', fontWeight: 700, background: 'transparent', color: 'white', cursor: 'pointer', margin: '8px'}}
            >
              I'm a Teacher - Start Earning
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES FOR TEACHERS */}
      <section style={{padding: '80px 20px', background: 'white'}}>
        <div style={{maxWidth: '1100px', margin: 'auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '32px', fontWeight: 800, color: '#0033a0', marginBottom: '12px'}}>Built for African Teachers</h2>
          <p style={{color: '#6b7280', fontSize: '16px', marginBottom: '50px'}}>Create once. Earn forever. Reach 54 countries.</p>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            <div style={{background: '#f8fafc', padding: '30px', borderRadius: '20px', textAlign: 'left'}}>
              <div style={{fontSize: '36px', marginBottom: '15px'}}>💰</div>
              <h3 style={{fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#111827'}}>60% Revenue Share</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: 1.6}}>Keep most of every sale. We handle payments, taxes, and delivery to students.</p>
            </div>
            <div style={{background: '#f8fafc', padding: '30px', borderRadius: '20px', textAlign: 'left'}}>
              <div style={{fontSize: '36px', marginBottom: '15px'}}>🌍</div>
              <h3 style={{fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#111827'}}>Pan-African Reach</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: 1.6}}>Your BAC, BEPC, WAEC, NECO content helps students from Nigeria to Cameroon and beyond.</p>
            </div>
            <div style={{background: '#f8fafc', padding: '30px', borderRadius: '20px', textAlign: 'left'}}>
              <div style={{fontSize: '36px', marginBottom: '15px'}}>📊</div>
              <h3 style={{fontSize: '18px', fontWeight: 700, marginBottom: '10px', color: '#111827'}}>Auto-Grading + Analytics</h3>
              <p style={{fontSize: '14px', color: '#4b5563', lineHeight: 1.6}}>Track test results, see what students struggle with, save hours every week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: '60px 20px', background: '#0039b5', color: 'white', textAlign: 'center'}}>
        <h2 style={{fontSize: '28px', fontWeight: 800, marginBottom: '16px'}}>Ready to Turn Knowledge into Income?</h2>
        <button 
          onClick={() => window.location.href='/marketplace'} 
          style={{padding: '16px 32px', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, background: '#ff9800', color: 'white', cursor: 'pointer'}}
        >
          Explore Study Materials Now
        </button>
      </section>

    </main>
  );
}
