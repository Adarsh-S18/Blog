export const metadata = {
    title: 'Sanuj Blogs',
    description: 'The best blog app!',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  