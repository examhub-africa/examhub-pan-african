import Link from 'next/link'

export default function Home() {
  return (
    <main style={{fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b'}}>
      
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{fontSize: '24px', fontWeight: '800', color: '#2563eb'}}>ExamHub Africa</div>
        <div style={{fontSize: '24px'}}>☰</div>
      </header>

      <section style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center'}}>
        
        <div>
          <h1 style={{fontSize: '48px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px'}}>
            Every student, teacher<br/>can excel with us.
          </h1>
          <p style={{fontSize: '18px', color: '#64748b', marginBottom: '30px'}}>
            Welcome to ExamHub Africa, where academic excellence meets community. We offer tools and resources to empower teachers, students, and educational institutions across the continent.
          </p>

          <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
            <Link href="/teacher-signup" 
              style={{background: '#2563eb', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px'}}>
              I'M A TEACHER
            </Link>
            
            <Link href="/student-signup" 
              style={{background: '#f97316', color: 'white', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '16px'}}>
              I'M A STUDENT
            </Link>
          </div>
        </div>

        <div>
          <Link href="/teacher-signup">
            <img 
              src="/students.png" 
              alt="Teacher" 
              width={600}
              height={750}
              style={{width: '100%', height: 'auto', borderRadius: '12px', cursor: 'pointer'}} 
            />
          </Link>
        </div>
      </section>

      <section style={{maxWidth: '1200px', margin: '0 auto', padding: '60px 20px'}}>
        <h2 style={{fontSize: '36px', fontWeight: '800', textAlign: 'center', marginBottom: '40px'}}>
          Free and <span style={{color: '#f97316'}}>Pro</span> Exam Prep Solutions
        </h2>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
          
          <div style={{border: '1px solid #e5e7eb', padding: '32px', borderRadius: '12px'}}>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>FREE ACCESS</h3>
            <p style={{color: '#64748b', marginBottom: '20px'}}>
              Free academic support for students and teachers, providing access to tools, learning resources, and collaboration features.
            </p>
            <Link href="/student-signup?plan=free" 
              style={{background: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontWeight: '600'}}>
              GET STARTED FOR FREE
            </Link>
          </div>
          
          <div style={{border: '2px solid #f97316', padding: '32px', borderRadius: '12px', background: '#fff7ed'}}>
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '12px'}}>PRO ACCESS</h3>
            <p style={{color: '#64748b', marginBottom: '20px'}}>
              Unlimited, flexible and secure online exam prep solution for students, schools, training centers and professional institutions.
            </p>
            <Link href="/checkout?plan=pro" 
              style={{background: '#f97316', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', display: 'inline-block', fontWeight: '600'}}>
              GO PRO
            </Link>
          </div>
        </div>
      </section>

      <footer style={{background: '#1e293b', color: 'white', padding: '60px 20px', marginTop: '80px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px'}}>
          
          <div>
            <h4 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>ExamHub Africa</h4>
            <p style={{color: '#94a3b8'}}>Every student, teacher can excel with us.</p>
          </div>

          <div>
            <h4 style={{fontWeight: '700', marginBottom: '16px'}}>QUICK LINKS</h4>
            <Link href="/for-teachers" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none', marginBottom: '8px'}}>For Teachers</Link>
            <Link href="/for-students" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none', marginBottom: '8px'}}>For Students</Link>
            <Link href="/how-it-works" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none', marginBottom: '8px'}}>How it Works</Link>
            <Link href="/pricing" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none'}}>Pricing</Link>
          </div>

          <div>
            <h4 style={{fontWeight: '700', marginBottom: '16px'}}>CONTACT</h4>
            <a href="mailto:info@examhub-africa.com" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none', marginBottom: '8px'}}>info@examhub-africa.com</a>
            <a href="tel:+233XXXXXXXXX" style={{color: '#cbd5e1', display: 'block', textDecoration: 'none', marginBottom: '8px'}}>+233 XXX</a>
            <p style={{color: '#94a3b8'}}>Accra, Ghana</p>
          </div>

        </div>
      </footer>

    </main>
  )
}
