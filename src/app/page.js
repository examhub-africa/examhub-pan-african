"use client"
export default function Home(){
  return(
    <main style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>BacBepc 🇧🇯</h1>
      <p>Pan-African Exam Hub - Benin Republic First</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20,marginTop:20}}>
        <div style={{border:"1px solid #ccc",padding:20,borderRadius:12}}>🇧🇯 Benin</div>
        <div style={{border:"1px solid #ccc",padding:20,borderRadius:12}}>🇳🇬 Nigeria</div>
        <div style={{border:"1px solid #ccc",padding:20,borderRadius:12}}>🇬🇭 Ghana</div>
        <div style={{border:"1px solid #ccc",padding:20,borderRadius:12}}>🇸🇳 Senegal</div>
      </div>
    </main>
  )
}