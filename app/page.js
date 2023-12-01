import Image from 'next/image';

const ServiceCard = ({ title, description, price, image }) => (
  <div className="bg-main p-4 relative rounded-md shadow-md transition-transform transform hover:scale-105 relative flex flex-col justify-center items-center">
    <div className="flex-shrink-0"></div>
    <h3 className="text-xl font-bold text-center mb-2 text-white">{title}</h3>
    <Image src={image} alt={title} width={200} height={150} className="mb-4 items-center h-64 rounded-md" />
    <p className="text-white mb-4">{description}</p>
    <p className="text-white font-bold text-center mb-4">{price}</p>
  </div>
);

const Home = () => {
  const services = [
    {
      id: 1,
      title: 'WASCHEN & MANGELN',
      description: '',
      price: '$10.00',
      image: '/washer.png',
    },
    {
      id: 2,
      title: 'BÜGELSERVICE',
      description: '',
      price: '$5.00',
      image: '/washer.png',
    },
    {
      id: 3,
      title: 'NÄHARBEITEN',
      description: '',
      price: '$15.00',
      image: '/washer.png',
    },
  ];

  return (
    <div>
      <header className="bg-main text-white flex items-center p-4">
        <img src="logo.svg" alt="Logo" className="logo mr-20" />
        <nav className="mt-4">
          <a className="text-3xl font-sans mr-20" href="#home">Home</a>
          <a className="text-3xl font-sans mr-20" href="#services">Leistungen</a>
          <a className="text-3xl font-sans mr-20" href="#extras">Extras</a>
          <a className="text-3xl font-sans mr-20" href="#about">Über uns</a>
          <a className="text-3xl font-sans mr-20" href="#contact">Kontakt</a>
        </nav>
      </header>

      <main className="container mx-auto p-4">
        
        <section id="services" className="mb-8">
          <h2 className="text-2xl font-bold font-sans mb-4">Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </section>

        <section id="extras" className="mb-8 flex items-center">
          <div className="w-1/2 pr-4">
            <Image src="/images/left-image.jpg" alt="Left Image" width={600} height={400} className="rounded-md" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold font-sans mb-4">Abhol - und Zustellservice</h2>
            <p className="font-sans">Wir holen Ihre Textilien ab und bringen Sie nach der Reinigung wieder zurück. Im Umkreis von 5 km um Montabaur erfolgt das Abholen und Zustellen kostenlos. 
              Die Lieferung im Umkreis 5 km bis 15 km erfolgt bei einer Bestellung ab 30 Euro ebenfalls kostenlos. 
              In allen anderen Fällen werden für den Lieferservice 3 Euro berechnet.</p>
          </div>
        </section>
        <section id="more-extras" className="mb-8 flex items-center">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold font-sans mb-4">Reinigungsdienste</h2>
            <p className="font-sans">Sie legen Wert auf eine kristallreine Sauberkeit und Ordnung? Dann sind Sie bei uns genau richtig! 
              Mit unserem Team können Sie sicher sein, dass Ihre Gebäude immer in einem ordentlichen und sauberen Zustand von Ihnen genutzt werden können. 
              Gründliches Arbeiten, faire Preise und Pünktlichkeit sind unsere Devise.
• Unterhaltsreinigung • Grundreinigung • Treppenhausreinigung • Fensterreinigung • Büroreinigung • Praxisreinigung • Geschäftsreinigung • Grünpflege u.v.m.</p>
          </div>
          <div className="w-1/2 pl-4">
            <Image src="/images/right-image.jpg" alt="Right Image" width={600} height={400} className="rounded-md" />
          </div>
        </section>
        <section id="home" className="object-left mb-8">
          <h2 className="text-2xl font-bold mb-4">Willkommen</h2>
        </section>
      </main>

      <footer className="bg-main text-white text-center relative">
      <iframe className="w-full h-128 border-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.430307464861!2d37.644801951231706!3d55.76839799816144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2ad%3A0x4c2ca101e2c8c617!2sMyasnitskiy%20Proyezd%2C%204%2F3%2C%20Moskva%2C%20Russia%2C%20107078!5e0!3m2!1sen!2spl!4v1668378538157!5m2!1sen!2spl" allowfullscreen></iframe>

      <div className="container mx-auto">
      <div className="footer__info absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-72 bg-main p-16">
    <address className="footer__addr text-white mb-8 text-center text-lg font-semibold font-sans">Elgendorfer Str 51 
  56410 Montabaur, Deutschland</address>
    <a href="tel:4917641977994" className="footer__phone text-white text-lg font-bold block mb-8 text-center hover:text-white"> +49 (0) 176 419 77 994</a>

    <div className="footer__social flex justify-center items-center">
      <a href="#" className="footer__social-item">
        <img src="icons/facebook.svg" alt="facebook" />
      </a>
      <a href="#" className="footer__social-item">
        <img src="icons/instagram.svg" alt="instagram" />
      </a>
      <a href="#" className="footer__social-item">
        <img src="icons/pinterest.svg" alt="pinterest" />
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


