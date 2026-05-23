export const metadata = {
  title: 'ExamHub Africa',
  description: 'Africa\'s Biggest Educational Marketplace - BAC, BEPC, WAEC, NECO',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{margin: 0, padding: 0, fontFamily: 'Poppins, sans-serif'}}>
        {children}
      </body>
    </html>
  );
}
