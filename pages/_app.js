import Navbar from "../components/module/Navbar/Navbar";
import Footer from "../components/module/Footer/Footer";
import "../styles/globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ThemeProvider } from "next-themes";

config.autoAddCss = false;


export default function App({ Component, pageProps }) {
    
  return (
    
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >
    
      <div dir="rtl" className="font-DanaRegular min-h-screen flex flex-col">
      
        <Navbar />
        
        <main className="flex-grow bg-white dark:bg-gray-900">
        
          <Component {...pageProps} />
          
        </main>
        
        <Footer />
        
      </div>
      
    </ThemeProvider>
    
  );
  
}

