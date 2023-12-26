"use client"; // This is a client component
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';



const ServiceCard = ({ title, description, price, image }) => (
  <div className="bg-main p-4 relative rounded-md shadow-md transition-transform transform hover:scale-105 relative flex flex-col justify-center items-center">
    <div className="flex-shrink-0"></div>
    <h3 className="text-xl font-bold text-center mb-2 text-white">{title}</h3>
    <Image src={image} alt={title} width={200} height={150} className=" w-auto mt-4 mb-4 items-center h-64 rounded-md" />
    <p className="text-white mb-4">{description}</p>
    <p className="text-white font-bold text-center mb-4">{price}</p>
  </div>
);

const Home = () => {
  const [hoveredContainer, setHoveredContainer] = React.useState(null);

  const handleMouseEnter = (containerId) => {
    setHoveredContainer(containerId);
  };

  const handleMouseLeave = () => {
    setHoveredContainer(null);
  };
  
  const services = [
    {
      id: 1,
      title: 'WASCHEN & MANGELN',
      description: '',
      price: 'AB 3,50 €/KG',
      image: '/washer.png',
    },
    {
      id: 2,
      title: 'BÜGELSERVICE',
      description: '',
      price: 'AB 2.50 €/ST.',
      image: '/iron.png',
    },
    {
      id: 3,
      title: 'NÄHARBEITEN',
      description: '',
      price: 'AUF ANFRAGE',
      image: '/sewing.png',
    },
  ];
  

  return (
    <div>
      <header className="bg-main text-white flex items-center p-4">
        <img src="logo.svg" alt="Logo" className="logo mr-40" />
        <nav className="mt-4">
          <a className="text-3xl font-sans mr-20" href="#home">Home</a>
          <a className="text-3xl font-sans mr-20" href="#services">Leistungen</a>
          <a className="text-3xl font-sans mr-20" href="#extras">Extras</a>
          <a className="text-3xl font-sans mr-20" href="#about">Über uns</a>
          <a className="text-3xl font-sans mr-20" href="#contact">Kontakt</a>
        </nav>
      </header>
<div className="bg-[url('/')]">
      <main className="container mx-auto p-4 ">
        
        <section id="services" className="mb-8">
          <h2 className=" text-center text-main text-2xl font-bold font-sans mb-4">Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        <section id="additional-section" className="mb-8">
    <h2 className="text-center text-main text-2xl font-bold font-sans mb-4">Unsere Extraleistungen</h2>
  </section>

        <section id="extras" className="mb-8 flex items-center">
          <div className="w-1/2 pr-4">
            <Image src="/scooter.png" alt="Left Image" width={600} height={400} className="rounded-md" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl text-main font-bold font-sans mb-4">Abhol - und Zustellservice</h2>
            <p className="font-sans">Wir holen Ihre Textilien ab und bringen Sie nach der Reinigung wieder zurück. Im Umkreis von 5 km um Montabaur erfolgt das Abholen und Zustellen kostenlos. 
              Die Lieferung im Umkreis 5 km bis 15 km erfolgt bei einer Bestellung ab 30 Euro ebenfalls kostenlos. 
              In allen anderen Fällen werden für den Lieferservice 3 Euro berechnet.</p>
          </div>
        </section>
        <section id="more-extras" className="mb-8 flex items-center">
          <div className="w-1/2">
            <h2 className="text-2xl text-main font-bold font-sans mb-4">Reinigungsdienste</h2>
            <p className="font-sans">Sie legen Wert auf eine kristallreine Sauberkeit und Ordnung? Dann sind Sie bei uns genau richtig! 
              Mit unserem Team können Sie sicher sein, dass Ihre Gebäude immer in einem ordentlichen und sauberen Zustand von Ihnen genutzt werden können. 
              Gründliches Arbeiten, faire Preise und Pünktlichkeit sind unsere Devise.
• Unterhaltsreinigung • Grundreinigung • Treppenhausreinigung • Fensterreinigung • Büroreinigung • Praxisreinigung • Geschäftsreinigung • Grünpflege u.v.m.</p>
          </div>
          <div className="w-1/2 pl-4">
            <Image src="/cleaning.png" alt="Right Image" width={600} height={400} className="rounded-md" />
          </div>
        </section>

        <section id="about" className="mb-8 pb-8">
        <h2 className="text-center text-main text-2xl font-bold font-sans mb-4">Warum GREENTEX</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Plus 1: */}
          <div
            className={`flex items-center justify-center transition-opacity ${
              hoveredContainer === 1 ? 'opacity-0' : 'opacity-100'
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-main p-4 rounded-md">
              <h3 className="text-lg text-white font-bold mb-2">Umweltfreundlich</h3>
              <p className="text-white">Unsere Reinigungsprozesse sind umweltfreundlich und nachhaltig.</p>
            </div>
          </div>
          {/* Plus 2: */}
          <div
            className={`flex items-center justify-center transition-opacity ${
              hoveredContainer === 2 ? 'opacity-0' : 'opacity-100'
            }`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-main p-4 rounded-md">
              <h3 className="text-lg text-white font-bold mb-2">Schneller Service</h3>
              <p className="text-white">Wir bieten schnelle und zuverlässige Reinigungs- und Zustelldienste.</p>
            </div>
          </div>
          {/* Plus 3: */}
          <div
            className={`flex items-center transition-opacity ${
              hoveredContainer === 3 ? 'opacity-0' : 'opacity-100'
            }`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-main p-4 rounded-md">
              <h3 className="text-lg text-white font-bold mb-2">Qualitätsarbeit</h3>
              <p className="text-white">Wir legen Wert auf gründliche Reinigung und exzellenten Service.</p>
            </div>
          </div>
        </div>
      </section>

      </main>
      </div>

      <footer className="bg-main text-white text-center relative">
      <iframe className="w-full h-128 border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.265459209818!2d7.813678661634544!3d50.43615590177949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc2aa04c9fc16b%3A0x7fa21c92c2f2d6a0!2sElgendorfer%20Str.%2051%2C%2056410%20Montabaur%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1703508717342!5m2!1spl!2sp" allowFullScreen></iframe>

      <div className="container mx-auto">
      <div className="footer__info absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-72 bg-main p-8">
    <address className="footer__addr text-white mb-4 text-center text-lg font-semibold font-sans">Elgendorfer Str 51 
  56410 Montabaur, Deutschland</address>
    <a href="tel:4917641977994" className=" text-white text-lg font-bold block mb-4 text-center hover:text-white"> info@textilservice-delas.de</a>
    <Link href="/Data" className="text-white text-lg font-bold block mb-4 text-center hover:text-white"> Datenschutzerklärung</Link>

    <div className="flex justify-center items-center">
      <a href="https://wa.me/4917641977994" className="box-border w-16 h-16 mr-5 ml-6">
        <img src="/WhatsApp.png" alt="whatsapp" />
      </a>
      <a href="+49 (0) 176 419 77 994" className="box-border w-16 h-16 mr-5">
        <img src="/MobilePhone.png" alt="MobilePhone" />
      </a>
      <a href="+49 (0) 2602 992 9286" className="box-border w-16 h-16 mr-5">
        <img src="/Phone.png" alt="Phone" />
      </a>
    </div>
  </div>
  </div>

        <p className="bg-main" >&copy; 2023 Unsere Wäscherei</p>
      </footer>
    </div>
  );
};


export default Home;


