export default function Home() {
  const exams = [
    { exam: 'BEPC 2024', subject: 'Mathématiques', country: 'Cameroun', price: '200 CFA' },
    { exam: 'BAC 2024', subject: 'Philosophie', country: "Côte d'Ivoire", price: '200 CFA' },
    { exam: 'BEPC 2023', subject: 'Français', country: 'Sénégal', price: '200 CFA' },
  ];

  return (
    <main>
      <h1>ExamHub Africa</h1>
      <p>Past questions for West & Central Africa</p>

      <div style={{ marginTop: '2rem' }}>
        {exams.map((item, index) => (
          <div 
            key={index}
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '1rem', 
              marginBottom: '1rem' 
            }}
          >
            <h3>{item.exam} - {item.subject}</h3>
            <p>Country: {item.country}</p>
            <p>Price: {item.price}</p>
            <button>Download</button>
          </div>
        ))}
      </div>
    </main>
  );
}