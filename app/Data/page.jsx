"use client"; // This is a client component
import Link from 'next/link';
import React, { useState } from 'react';

const Home = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };



  return (
    <><div >
      <header id="home" className="flex h-20 md:h-20 lg:h-20 bg-main text-white relative xl:h-32 2xl:h-32 ">
      <link rel="icon" href="/favicon.ico" />
      
        <nav className=" md:flex bg-main items-center w-full z-20 fixed">
        <a href="/" className="max-md:flex justify-center"><img src="logo.svg" alt="Logo" className="max-md:m-auto max-lg:mr-8 h-16 md:h-20 md:ml-2 xl:h-28 xl:w-72 ml-14 mr-28 "/>
        </a>
        <hamburger className= "block absolute right-2 top-1/2 -translate-y-1/2 w-4 h-3 bg-main z-40 mb-2 md:hidden " onClick={toggleMenuVisibility} >
                <span className= {`block h-0.5 w-full bg-white z-40  mb-0.5 ${isMenuVisible ? '-rotate-45 translate-y-2': ''}`}></span>
                <span className={`block h-0.5 w-full bg-white z-40  mb-0.5 ${isMenuVisible ? 'hidden': ''}`}></span>
                <span className={`block h-0.5 w-full bg-white z-40  mb-0.5 ${isMenuVisible ? 'rotate-45 translate-y-1': ''}`}></span> 
            </hamburger>
        
        <menu className={`max-md:fixed max-md:flex max-md:items-center place-content-center max-md:h-screen max-md:bg-main max-md:bg-opacity-70 max-md:w-1/2 max-md:flex-col ${isMenuVisible ? '' : 'max-md:left-full'}`}>
          <a className="max-md:mt-8 max-md:text-2xl md:text-xl lg:text-2xl max-lg:mr-8 xl:text-3xl font-sans mr-10" href="/#home">Home</a>
          <a className="max-md:mt-8 max-md:text-2xl md:text-xl lg:text-2xl max-lg:mr-8 xl:text-3xl font-sans mr-10" href="/#services">Leistungen</a>
          <a className="max-md:mt-8 max-md:text-2xl md:text-xl lg:text-2xl max-lg:mr-8 xl:text-3xl font-sans mr-10" href="/#extras">Extras</a>
          <a className="max-md:mt-8 max-md:text-2xl md:text-xl lg:text-2xl max-lg:mr-8 xl:text-3xl font-sans mr-10" href="/#about">Über uns</a>
          <a className="max-md:mt-8 max-md:text-2xl md:text-xl lg:text-2xl max-lg:mr-8 xl:text-3xl font-sans mr-10" href="/#contact">Kontakt</a>
          </menu>
          
          <div className="max-2xl:hidden 2xl:bg-main text-white w-50 ml-14"><a className="flex text-lg font-sans items-center place-content-between" href="tel:+49 (0) 176 419 77 994">+49 (0) 176 419 77 994</a>
          <a className="flex text-lg font-sans" href="tel:+49 (0) 2602 992 9286">+49 (0) 2602 992 9286</a>
          </div>
          </nav>
      </header>
      <main className="container mx-auto p-4">
      <h1 className="text-5xl flex justify-center mb-20 font-style: italic">Datenschutzerklärung</h1>
      <h2 className="text-4xl mb-4 mt-4 font-style: italic">1. Datenschutz auf einen Blick</h2>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Allgemeine Hinweise</h3>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Datenerfassung auf unserer Website</h3>
      <p className="mb-4 mt-4 font-style: italic"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
      <p className="mb-4 mt-4 font-style: italic"><strong>Wie erfassen wir Ihre Daten?</strong></p>
      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
      <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
      <p className="mb-4 mt-4 font-style: italic"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
      <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
      <p className="mb-4 mt-4 font-style: italic"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
      <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
      <p>Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter "Recht auf Einschränkung der Verarbeitung".</p>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Analyse-Tools und Tools von Drittanbietern</h3>
      <p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden.</p>
      <p>Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen zu diesen Tools und über Ihre Widerspruchsmöglichkeiten finden Sie in der folgenden Datenschutzerklärung.</p>
      <h2 className="text-4xl mb-4 mt-4 font-style: italic">2. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Datenschutz</h3>
      <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
      <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Hinweis zur verantwortlichen Stelle</h3>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>Textilservice Delas<br />
        Inhaberin: Albina Schneider<br />
        Geschwister-Scholl-Straße 10,<br />
        56410 Montabaur, Deutschland</p>
      <p>Telefon: +49 (0) 2602 918 9554<br />
        E-Mail: info@textilservice-delas.de</p>
      <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. ä.) entscheidet.</p>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
      <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
      <h3 className="text-4xl mb-4 mt-4 font-style: italic">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
      <p className="mb-4 mt-4 font-style: italic"><strong>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten Überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></p>
      <p className="mb-4 mt-4"><strong>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></p>
      <h3 className="text-4xl mb-4 mt-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
      <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
      <h3 className="text-4xl mb-4 mt-4">Recht auf Datenübertragbarkeit</h3>
      <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
      <h3 className="text-4xl mb-4 mt-4">Auskunft, Sperrung, Löschung und Berichtigung</h3>
      <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft Über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
      <h3 className="text-4xl mb-4 mt-4">Recht auf Einschränkung der Verarbeitung</h3>
      <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
      <ul className="list-disc">
        <li >Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu Überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen Überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
      </ul>
      <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
      <h2 className="text-4xl mb-4 mt-4">3. Datenerfassung auf unserer Website</h2>
      <h3 className="text-4xl mb-4 mt-4">Cookies</h3>
      <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p>
      <p>Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>
      <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
      <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.</p>
      <h3 className="text-4xl mb-4 mt-4">Server-Log-Dateien</h3>
      <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns Übermittelt. Dies sind:</p>
      <ul className="list-disc">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
      <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website - hierzu müssen die Server-Log-Files erfasst werden.</p>
      <h3 className="text-4xl mb-4 mt-4">Anfrage per E-Mail, Telefon oder Telefax</h3>
      <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
      <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen Übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.</p>
      <p>Die von Ihnen an uns per Kontaktanfragen Übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen - insbesondere gesetzliche Aufbewahrungsfristen - bleiben unberührt.</p>
      <p className="mb-4 mt-4">Quelle: <a className="text-main" href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
      </main>

     
      

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
  <p><Link className="bg-main" href="/" >&copy; 2023 Unsere Wäscherei</Link></p>
  </footer>
  </div></>
  )};


      
      

      
     
 

  export default Home;
      
      

      
     
 


