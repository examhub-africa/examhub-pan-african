'use client'

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={{
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{textAlign: 'center', color: '#fff', maxWidth: '700px', padding: '40px 20px'}}>
        
        <h1 style={{
          fontSize: '3.5rem', 
          fontWeight: '800', 
          marginBottom: '20px', 
          lineHeight: '1.2'
        }}>
          TURN YOUR LESSONS INTO INCOME
        </h1>
        
        <p style={{
          fontSize: '1.3rem', 
          marginBottom: '40px', 
          opacity: '0.9'
        }}>
          Africa's Biggest Educational Marketplace for BAC, BEPC, WAEC, NECO
        </p>
        
        <button
          onClick={() => router.push('/marketplace')}
          style={{
            padding: '14px 28px',
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Browse Marketplace
        </button>

        <p style={{marginTop: '60px', fontSize: '0.9rem', opacity: '0.7'}}>
          Sell notes, past papers, AI prompts, and study guides to students across Africa
        </p>
      </div>
    </main>
  );
}
