// Part 1 of 2 - BacBepc Landing
export default function Home() {
  return (
    <div style={{fontFamily: 'Inter, Arial, sans-serif', color: '#0f172a'}}>
      
      {/* Top Bar */}
      <div style={{background: '#fff', padding: '10px 40px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b'}}>
          SELECT COUNTRY 
          <select style={{border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', marginLeft: '4px'}}>
            <option>Select Country</option>
          </select>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b'}}>
          SELECT LANGUAGE 
          <select style={{border: '1px solid #e2e8f0', padding: '4px 8px', borderRadius: '6px', marginLeft: '4px'}}>
            <option>🌍 English</option>
          </select>
        </div>
      </div>

      {/* Header */}
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <div style={{width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px'}}>B</div>
          <div>
            <div style={{fontSize: '24px', fontWeight: '800', color: '#1e40af'}}>BacBepc</div>
            <div style={{fontSize: '11px', color: '#64748b'}}>Teach • Share • Earn</div>
          </div>
        </div>
        <div style={{fontSize: '24px'}}>☰</div>
      </header>

      {/* Hero */}
      <section style={{background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', padding: '60px 40px', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: '1 1 500px'}}>
          <h1 style={{fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '16px'}}>
            TURN YOUR LESSONS <br/>
            <span style={{color: '#1e40af'}}>INTO INCOME.</span> <br/>
            <span style={{color: '#f97316'}}>HELP STUDENTS</span> <br/>
            ACROSS AFRICA.
          </h1>
          <p style={{fontSize: '16px', color: '#475569', marginBottom: '24px', fontWeight: '600'}}>
            UPLOAD ONCE. EARN MONTHLY. KEEP 60%.
          </p>
          <div style={{display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap'}}>
            <button style={{background: '#2563eb', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px'}}>
              👤 I'M A TEACHER
            </button>
            <button style={{background: '#f97316', color: 'white', padding: '14px 24px', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px'}}>
              🎓 I'M A STUDENT
            </button>
          </div>
          <div style={{display: 'flex', gap: '20px', fontSize: '12px', color: '#475569', fontWeight: '600', flexWrap: 'wrap'}}>
            <span>🔒 SECURE PAYMENTS<br/>by Paystack</span>
            <span>💬 CHAT ON WHATSAPP<br/>
              <a href="https://wa.me/2347035092983" target="_blank" rel="noopener noreferrer" style={{color: '#2563eb', textDecoration: 'none'}}>
                +234 703 509 2983
              </a>
            </span>
            <span>💰 YOUR CONTENT,<br/>YOUR EARNINGS</span>
          </div>
        </div>
        <div style={{flex: '1 1 400px', position: 'relative'}}>
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop" 
            alt="Teacher" 
            style={{width: '100%', borderRadius: '20px'}}
          />
          <div style={{position: 'absolute', top: '20px', right: '20px', background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minWidth: '160px'}}>
            <div style={{color: '#64748b', fontSize: '11px', fontWeight: '600', marginBottom: '4px'}}>MONTHLY EARNINGS</div>
            <div style={{fontSize: '22px', fontWeight: '800', color: '#1e40af'}}>N256,800</div>
            <div style={{fontSize: '11px', color: '#16a34a'}}>+80.4% last month</div>
          </div>
          <div style={{position: 'absolute', top: '120px', right: '20px', background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minWidth: '160px'}}>
            <div style={{color: '#64748b', fontSize: '11px', fontWeight: '600', marginBottom: '4px'}}>TOTAL STUDENTS</div>
            <div style={{fontSize: '22px', fontWeight: '800'}}>12,540</div>
          </div>
          <div style={{position: 'absolute', bottom: '40px', right: '20px', background: 'white', padding: '16px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minWidth: '160px'}}>
            <div style={{color: '#64748b', fontSize: '11px', fontWeight: '600', marginBottom: '4px'}}>CONTENT PERFORMANCE</div>
            <div style={{display: 'flex', gap: '16px'}}>
              <div><div style={{fontSize: '18px', fontWeight: '800', color: '#2563eb'}}>80%</div><div style={{fontSize: '10px'}}>Rating</div></div>
              <div><div style={{fontSize: '18px', fontWeight: '800', color: '#f97316'}}>85%</div><div style={{fontSize: '10px'}}>Engagement</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* For Teachers */}
      <section style={{padding: '60px 40px', background: '#fff', textAlign: 'center'}}>
        <h2 style={{fontSize: '32px', fontWeight: '800', marginBottom: '8px'}}>FOR TEACHERS</h2>
        <p style={{color: '#64748b', marginBottom: '40px', fontSize: '14px'}}>CREATE ONCE, EARN FOREVER.</p>
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
          <div style={{width: '280px', textAlign: 'center'}}>
            <div style={{background: '#dbeafe', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '28px'}}>📁</div>
            <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '8px'}}>EARN MONTHLY<br/>REVENUE SHARE</h3>
            <p style={{color: '#64748b', fontSize: '14px'}}>Keep 60% of every sale.<br/>We handle payments and delivery.</p>
          </div>
          <div style={{width: '280px', textAlign: 'center'}}>
            <div style={{background: '#dbeafe', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '28px'}}>🌍</div>
            <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '8px'}}>REACH STUDENTS IN<br/>54 AFRICAN COUNTRIES</h3>
            <p style={{color: '#64748b', fontSize: '14px'}}>Your lessons can help thousands<br/>of learners across the continent.</p>
          </div>
          <div style={{width: '280px', textAlign: 'center'}}>
            <div style={{background: '#dbeafe', width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '28px'}}>📊</div>
            <h3 style={{fontSize: '16px', fontWeight: '700', marginBottom: '8px'}}>SAVE TIME WITH<br/>AUTO-GRADING AND ANALYTICS</h3>
            <p style={{color: '#64748b', fontSize: '14px'}}>Smart tools help you grade faster<br/>and understand student performance.</p>
          </div>
        </div>
      </section>

      {/* For Students */}
      <section style={{padding: '60px 40px', background: '#f8fafc', textAlign: 'center'}}>
        <h2 style={{fontSize: '32px', fontWeight: '800', marginBottom: '8px'}}>FOR STUDENTS</h2>
        <p style={{color: '#64748b', marginBottom: '40px', fontSize: '14px'}}>CHOOSE THE PLAN THAT FITS YOUR GOALS.</p>
        
        <div style={{display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap'}}>
          
          <div style={{background: 'white', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '32px 24px', width: '340px', textAlign: 'left'}}>
            <div style={{background: '#dcfce7', color: '#166534', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '800', marginBottom: '12px'}}>FREE</div>
            <h3 style={{fontSize: '22px', fontWeight: '800', marginBottom: '8px'}}>FREE ACCESS</h3>
            <p style={{color: '#64748b', marginBottom: '20px', fontSize: '14px'}}>Basic past questions from multiple teachers</p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '24px'}}>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>✓ Past question library</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>✓ Multiple subjects</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>✓ Download and study</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>✓ Mobile friendly</li>
            </ul>
            <button style={{width: '100%', background: '#e2e8f0', color: '#1e293b', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '15px'}}>
              GET STARTED FOR FREE
            </button>
          </div>

          <div style={{background: 'white', border: '2px solid #fed7aa', borderRadius: '16px', padding: '32px 24px', width: '340px', textAlign: 'left', boxShadow: '0 8px 24px rgba(249,115,22,0.15)'}}>
            <div style={{background: '#ffedd5', color: '#9a3412', display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '800', marginBottom: '12px'}}>PRO</div>
            <h3 style={{fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#f97316'}}>PRO ACCESS</h3>
            <p style={{color: '#64748b', marginBottom: '20px', fontSize: '14px'}}>Smart learning tools for exam success</p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: '12px'}}>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>● Smart quizzes</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>● Auto-marking</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>● Timed mocks</li>
              <li style={{marginBottom: '10px', color: '#475569', fontSize: '14px'}}>● Performance analytics</li>
              <li style={{marginBottom: '10px', color: '#64748b', fontSize: '13px'}}>Exams: BAC, BEPC, WAEC, NECO,<br/>KCSE, IELTS, DELF, TOEFL</li>
            </ul>
            <button style={{width: '100%', background: '#f97316', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '15px'}}>
              GO PRO
            </button>
          </div>

        </div>
      </section>