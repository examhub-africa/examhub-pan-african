export default function Home() {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', color: '#0f172a'}}>
      
      {/* Header/Nav */}
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px', borderBottom: '1px solid #e2e8f0'}}>
        <div style={{fontSize: '24px', fontWeight: 'bold', color: '#2563eb'}}>ExamHub</div>
        <nav style={{display: 'flex', gap: '24px'}}>
          <a href="#" style={{textDecoration: 'none', color: '#475569'}}>Home</a>
          <a href="#" style={{textDecoration: 'none', color: '#475569'}}>Past Questions</a>
          <a href="#" style={{textDecoration: 'none', color: '#475569'}}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{display: 'flex', padding: '80px 40px', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', alignItems: 'center', gap: '40px'}}>
        <div style={{flex: 1}}>
          <h1 style={{fontSize: '48px', lineHeight: '1.2', marginBottom: '20px'}}>
            Access Past Questions <br/>
            <span style={{color: '#2563eb'}}>From Across Africa</span>
          </h1>
          <p style={{fontSize: '18px', color: '#475569', marginBottom: '30px'}}>
            Download WAEC, NECO, KCSE, GCE past papers. Study smarter with ExamHub Pan-African. 
            Free for all students.
          </p>
          <div style={{display: 'flex', gap: '16px'}}>
            <button style={{background: '#2563eb', color: 'white', padding: '14px 28px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600'}}>
              I'm a Student
            </button>
            <button style={{background: 'white', color: '#2563eb', padding: '14px 28px', border: '2px solid #2563eb', borderRadius: '8px', fontSize: '16px', fontWeight: '600'}}>
              I'm a Teacher
            </button>
          </div>
        </div>
        <div style={{flex: 1}}>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" 
            alt="Students studying" 
            style={{width: '100%', borderRadius: '16px'}}
          />
        </div>
      </section>

      {/* For Students */}
      <section style={{padding: '80px 40px', textAlign: 'center'}}>
        <h2 style={{fontSize: '36px', marginBottom: '12px'}}>For Students</h2>
        <p style={{color: '#64748b', marginBottom: '50px'}}>Choose the plan that fits your goals</p>
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
          
          <div style={{border: '1px solid #e2e8f0', borderRadius: '12px', padding: '30px', width: '300px', textAlign: 'left'}}>
            <div style={{background: '#dcfce7', color: '#166534', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600'}}>FREE</div>
            <h3 style={{fontSize: '24px', margin: '16px 0'}}>Free Access</h3>
            <p style={{color: '#64748b', marginBottom: '20px'}}>Basic past questions from multiple exams</p>
            <ul style={{listStyle: 'none', padding: 0, color: '#475569'}}>
              <li>✓ Past question library</li>
              <li>✓ All major subjects</li>
              <li>✓ Download and study</li>
              <li>✓ Mobile friendly</li>
            </ul>
            <button style={{width: '100%', marginTop: '20px', background: '#f1f5f9', color: '#0f172a', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: '600'}}>
              Get Started for Free
            </button>
          </div>

          <div style={{border: '2px solid #2563eb', borderRadius: '12px', padding: '30px', width: '300px', textAlign: 'left', boxShadow: '0 10px 25px rgba(37,99,235,0.2)'}}>
            <div style={{background: '#dbeafe', color: '#1e40af', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600'}}>PRO</div>
            <h3 style={{fontSize: '24px', margin: '16px 0'}}>Pro Access</h3>
            <p style={{color: '#64748b', marginBottom: '20px'}}>Smart learning tools for exam success</p>
            <ul style={{listStyle: 'none', padding: 0, color: '#475569'}}>
              <li>✓ Smart quizzes</li>
              <li>✓ Auto-marking</li>
              <li>✓ Timed mocks</li>
              <li>✓ Performance analytics</li>
            </ul>
            <button style={{width: '100%', marginTop: '20px', background: '#2563eb', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: '600'}}>
              Go Pro
            </button>
          </div>

        </div>
      </section>

      {/* Exams We Support */}
      <section style={{padding: '60px 40px', background: '#f8fafc', textAlign: 'center'}}>
        <h2 style={{fontSize: '32px', marginBottom: '30px'}}>Exams We Support</h2>
        <div style={{display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', fontSize: '20px', fontWeight: '700', color: '#475569'}}>
          <span>WAEC</span>
          <span>NECO</span>
          <span>KCSE</span>
          <span>IELTS</span>
          <span>GCE</span>
          <span>BECE</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#0f172a', color: 'white', padding: '40px', textAlign: 'center'}}>
        <div style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '12px'}}>ExamHub Pan-African</div>
        <p style={{color: '#94a3b8'}}>Past questions powered platform for Africa</p>
        <p style={{color: '#64748b', fontSize: '14px', marginTop: '20px'}}>© 2026 ExamHub. All rights reserved.</p>
      </footer>

    </div>
  )
}