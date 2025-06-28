
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>The AI Indian Company</title>
        <meta name="description" content="AI-powered solutions and deep learning services" />
      </Head>
      <main className="bg-neutral-50 text-gray-900 font-sans">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
