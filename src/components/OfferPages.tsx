import Link from "next/link";
import type { ReactNode } from "react";
import { OfferCard } from "@/components/OfferCard";

const offers = [
  {
    href: "/personalizovani-program",
    image: "/images/personalized-program.jpg",
    category: "PROGRAM 1:1",
    title: "Personalizovani program",
    description: "Paket koučing sesija i edukacije za rešavanje situacije u komunikaciji sa sobom ili drugima.",
    action: "Pogledaj program",
  },
  {
    href: "/tumacenje-human-design-mape",
    image: "/images/human-design-certificate.jpg",
    category: "HUMAN DESIGN",
    title: "Tumačenje Human Design mape",
    description: "Individualno tumačenje mape i razgovor o tvojim obrascima i energetskom potencijalu.",
    action: "Pogledaj tumačenje",
  },
  {
    href: "/ponuda-dve-kafe",
    image: "/images/two-coffees-card.jpg",
    category: "DVA RAZGOVORA",
    title: "Ponuda dve kafe",
    description: "Dva susreta za jednu konkretnu situaciju koju želiš da sagledaš i pokreneš.",
    action: "Pogledaj kako funkcioniše",
  },
  {
    href: "/besplatni-video-trening-o-komunikaciji-u-odnosima",
    category: "BESPLATNO · VIDEO",
    title: "Besplatni trening",
    description: "Snimljeni trening o elementima komunikacije i promenama koje možeš da napraviš.",
    action: "Pogledaj trening",
  },
  {
    href: "/komunikacija-po-dizajnu",
    category: "U PRIPREMI",
    title: "Komunikacija po dizajnu",
    description: "Nova ponuda je u pripremi. Možeš da pošalješ pitanje ili da pogledaš druge načine rada.",
    action: "Saznaj više",
  },
  {
    href: "/baza-kom",
    category: "U PRIPREMI",
    title: "BAZA.KOM",
    description: "Prostor sa sadržajem o komunikaciji je u pripremi.",
    action: "Saznaj više",
  },
];

function EmailCta({ subject, children }: { subject: string; children: ReactNode }) {
  return (
    <a className="button button-dark" href={`mailto:info@zoricakatic.com?subject=${encodeURIComponent(subject)}`}>
      {children}
    </a>
  );
}

function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  action,
  subject,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  action: string;
  subject: string;
}) {
  return (
    <header className={`service-hero${image ? " service-hero-with-image" : ""}`}>
      <div className="service-hero-copy">
        <Link className="service-back-link" href="/radi-sa-mnom">← Svi načini rada</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="service-hero-lede">{description}</p>
        <EmailCta subject={subject}>{action}</EmailCta>
      </div>
      {image && <img className="service-hero-image" src={image} alt={imageAlt ?? ""} />}
    </header>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="service-section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
    </div>
  );
}

function ServiceBottomCta({ title, text, action, subject }: { title: string; text: string; action: string; subject: string }) {
  return (
    <section className="service-bottom-cta">
      <p className="eyebrow">SLEDEĆI KORAK</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <EmailCta subject={subject}>{action}</EmailCta>
    </section>
  );
}

export function WorkWithMePage() {
  return (
    <main className="service-page work-with-me-page">
      <header className="work-page-hero">
        <div className="work-page-hero-copy">
          <p className="eyebrow">RAD SA MNOM · KOMUNIKACIJA I ODNOSI</p>
          <h1><em>Pronađimo</em> način rada koji ti odgovara.</h1>
          <p>Od razgovora o konkretnoj situaciji do individualnog programa — pogledaj ponude i izaberi gde želiš da počneš.</p>
          <a className="button button-dark" href="#ponude">Izaberi način rada</a>
        </div>
        <figure className="work-page-hero-visual">
          <img src="/images/work-with-me-hero.jpg" alt="Zorica Katić u online razgovoru" />
        </figure>
      </header>

      <section className="service-catalog section-wrap" id="ponude">
        <div className="service-catalog-heading">
          <p className="eyebrow">IZABERI ŠTA TI ODGOVARA</p>
          <h2>Od jednog razgovora<br />do dubljeg rada.</h2>
        </div>
        <div className="service-catalog-grid">
          {offers.map((offer, index) => (
            <OfferCard key={offer.href} {...offer} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

const concernGroups = [
  {
    title: "U odnosu sa sobom",
    items: [
      "Puno radim, puno sam postigao ali i dalje osećam neki nemir, nezadovoljstvo, bes, ogorčenost ili razočaranost.",
      "Ponekad se zapitam kuda dalje, imam osećaj trenutne zaglavljenosti.",
    ],
  },
  {
    title: "U privatnim odnosima",
    items: [
      "Imaš osećaj nerazumevanja sa bliskim ljudima. Kao da taj odnos sa najbližom osobom slabi (\"gubim je\").",
      "Izgovaram stvari koje ne želim u razgovorima. Brzo planem.",
      "Nemam podršku od najbližih.",
    ],
  },
  {
    title: "U poslovnom okruženju",
    items: [
      "Svakodnevni odlazak na posao je pravo mučenje (\"blago mrtvima\").",
      "Osećam se kao na automatskom pilotu, nema radosti ni svežine.",
      "Moj glas se ne čuje, nemam uticaja na poslovno okruženje.",
    ],
  },
];

const desiredChanges = [
  "Da svakodnevno imaš osećaj zadovoljstva, mira, uspeha, iznenađenja. Da možeš da se dovedeš u stanje Flowa (toka).",
  "Da imaš jasnu viziju svog životnog pravca i kreiraš život po svojoj meri, a da na dnevnom nivou planiraš i realizuješ ciljeve.",
  "Da vladaš emotivnim stanjem pre nego što izgovoriš nešto zbog čega se kaješ ili upadneš u konflikt.",
  "Da imaš snažan i podržavajući odnos sa bliskim ljudima kroz obostrano razumevanje i prihvatanje različitosti.",
  "Da sa lakoćom i radošću ideš na posao ili imaš posao koji ćeš obožavati.",
  "Da utičeš na rezultat komunikacije i svoje poslovno okruženje.",
];

const programResults = [
  "Kreiranje ličnog kompasa i etičke karte (svrha i vrednosti).",
  "Alati za dovođenje sebe u željeno stanje.",
  "Razumevanje elemenata komunikacije i prepoznavanje onih na koje možeš da utičeš.",
  "Razumevanje pozicija i potreba svojih sagovornika.",
  "Uticaj na rezultat komunikacije bez obzira na sagovornika.",
  "Emotivno regulisanje komunikacije.",
];

export function PersonalizedProgramPage() {
  return (
    <main className="service-page">
      <ServiceHero
        eyebrow="PROGRAM 1:1 · OKVIRNO DVA MESECA"
        title="Personalizovani program"
        description="Paket koučing sesija sa edukacijom. Reši konfliktnu situaciju sa sobom ili drugima i razvij komunikacione veštine."
        image="/images/personalized-program.jpg"
        imageAlt="Materijal sa stranice personalizovanog programa"
        action="Raspitaj se za program"
        subject="Upit za personalizovani program"
      />

      <section className="service-section section-wrap">
        <SectionHeading eyebrow="DA LI SE PREPOZNAJEŠ?" title="Kada razgovori postanu teški." />
        <div className="service-card-grid service-card-grid-3">
          {concernGroups.map((group) => (
            <article className="service-info-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section service-section-tinted">
        <div className="section-wrap">
          <SectionHeading eyebrow="ŠTA ŽELIŠ DA SE PROMENI?" title="Više jasnoće u odnosu sa sobom i drugima." />
          <ul className="service-check-list">{desiredChanges.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-section section-wrap">
        <SectionHeading eyebrow="KAKO RADIMO" title="Plan koji se prilagođava tvojoj temi." />
        <div className="service-steps">
          <article><span>01</span><h3>Definišemo situaciju</h3><p>Na prvoj koučing sesiji definišemo problem i akcioni plan za rešavanje situacije sa sobom ili drugima, u privatnom ili poslovnom okruženju.</p></article>
          <article><span>02</span><h3>Biramo ritam i alate</h3><p>Akcioni plan je personalizovan: dogovaramo dinamiku susreta, teme za edukaciju i vežbe za samostalan i zajednički rad.</p></article>
          <article><span>03</span><h3>Učimo i primenjujemo</h3><p>Okvirno su to 5–10 susreta tokom oko dva meseca, preko Zoom-a. Dodatni materijali i vežbe stižu video snimkom, PDF-om ili mejlom.</p></article>
        </div>
        <p className="service-method-note">U radu se koriste NLP alati, Human Design, asertivnost, autogeni trening po Šulcu, druge edukacije i lično iskustvo.</p>
      </section>

      <section className="service-section service-section-tinted">
        <div className="section-wrap">
          <SectionHeading eyebrow="ŠTA MOŽEŠ DA PONESEŠ SA SOBOM" title="Znanje koje možeš da primeniš u razgovorima." />
          <ul className="service-check-list">{programResults.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className="service-section section-wrap">
        <SectionHeading eyebrow="ISKUSTVA KLIJENTKINJA" title="Promena počinje od onoga što osvestimo." />
        <div className="testimonial-grid">
          <blockquote><p>„Povećalo se moje samopouzdanje, ili još bolje — probudilo se. Ojačalo je uverenje da sam ja odgovorna za svoje stanje, za svoju sreću. Ojačalo je uverenje da imam pravo na sve što želim. Svaki način rada sa tobom je bio značajan. Od konkretnih vežbi do sugestija za knjige i uopšte upoznavanje sa principima NLP-a.”</p><cite>Jelena</cite></blockquote>
          <blockquote><p>„Razlog mog rada sa Zoricom bio je problem u komunikaciji sa ukućanima. Jednostavno, po mnogim pitanjima nismo mogli da razgovaramo, a da se to ne pretvori u svađu. Nakon rada sa Zoricom došlo je do velikog poboljšanja i sada se ne nerviram kao nekada. Ukratko, osvestila sam šta ja radim prilikom neuspešne komunikacije i koliko i čime doprinosim tome. Pre svega, prestala sam da generalizujem stvari, izbacila sam ,,uvek’’ ,,nikad’’ itd, a možda je još veći uticaj bio da više ne kritikujem osobu, nego njeno ponašanje. Takođe ne pretpostavljam šta druga osoba misli, nego pitam za mišljenje, i pokušavam da sagledam tako problem iz njene pozicije.”</p><cite>Jasmina Dangubić</cite></blockquote>
        </div>
      </section>

      <section className="service-fit section-wrap">
        <div><h2>Program može da ti odgovara ako…</h2><ul><li>Prihvataš svoj deo odgovornosti za problem.</li><li>Spremna si da radiš i učiš samostalno, i između sesija.</li><li>Otvorena si da čuješ i probaš nešto novo.</li></ul></div>
        <div><h2>Možda nije pravi trenutak ako…</h2><ul><li>Ne želiš da radiš samostalno između sesija.</li><li>Ne želiš da preuzmeš svoj deo odgovornosti za problem.</li></ul></div>
      </section>

      <ServiceBottomCta title="Da li je ovo pravi oblik podrške za tebe?" text="Pošalji upit i napiši ukratko šta želiš da promeniš. Dogovorićemo prvi razgovor i naredni korak." action="Pošalji upit za program" subject="Upit za personalizovani program" />
    </main>
  );
}

export function HumanDesignPage() {
  return (
    <main className="service-page">
      <ServiceHero
        eyebrow="INDIVIDUALNO TUMAČENJE"
        title="Tumačenje Human Design mape"
        description="Upoznaj osnovne delove svoje mape i razgovaraj o tome kako ih možeš povezati sa svakodnevnim životom i odnosima."
        image="/images/human-design-certificate.jpg"
        imageAlt="Sertifikat za Human Design"
        action="Raspitaj se za tumačenje"
        subject="Upit za tumačenje Human Design mape"
      />
      <section className="service-section section-wrap">
        <SectionHeading eyebrow="ŠTA DOBIJAŠ" title="Mapa kao polazna tačka za bolje razumevanje sebe." />
        <div className="service-intro-grid">
          <div><p>Human Design mapa prikazuje energetski potencijal u trenutku rođenja. Tumačenje može da ti pomogne da bolje razumeš svoje obrasce, način donošenja odluka i odnos sa okruženjem.</p><p>Zorica je sertifikovani tumač Human Design mapa. Možeš da izabereš samostalno tumačenje mape ili da ga uključiš u koučing rad na komunikaciji.</p></div>
          <ul className="service-check-list"><li>Tip i autoritet</li><li>Profilne linije</li><li>Centri, kanali i kapije</li><li>Varijable, pravac i svrha</li></ul>
        </div>
      </section>
      <section className="service-section service-section-tinted">
        <div className="section-wrap service-price-layout">
          <div><p className="eyebrow">CENA ANALIZE</p><h2>120 €</h2><p>Cena obuhvata analizu osnovnih pojmova, kao i naprednih pojmova mape. Biznis analiza postoji kao dodatna opcija, na upit.</p></div>
          <div className="service-reading-list"><h3>Želiš prvo da pročitaš više?</h3><Link href="/osnove-human-design-sistema-prvi-deo">Osnove Human Design sistema — prvi deo</Link><Link href="/osnove-human-design-sistema-drugi-deo">Osnove Human Design sistema — drugi deo</Link></div>
        </div>
      </section>
      <ServiceBottomCta title="Zanima te šta tvoja mapa može da ti pokaže?" text="Pošalji upit za tumačenje ili pitaj za dodatnu biznis analizu." action="Pošalji upit za tumačenje" subject="Upit za tumačenje Human Design mape" />
    </main>
  );
}

export function TwoCoffeesPage() {
  return (
    <main className="service-page">
      <ServiceHero
        eyebrow="DVA RAZGOVORA · KONKRETNA TEMA"
        title="Ponuda dve kafe"
        description="Za jednu konkretnu situaciju u komunikaciji sa sobom ili drugima, u privatnom ili poslovnom okruženju."
        image="/images/two-coffees-card.jpg"
        imageAlt="Ponuda dve kafe"
        action="Zakaži razgovor"
        subject="Upit za ponudu dve kafe"
      />
      <section className="service-section section-wrap">
        <SectionHeading eyebrow="KAKO IZGLEDA" title="Dva susreta, dva različita fokusa." />
        <div className="service-steps service-steps-2">
          <article><span>PRVI RAZGOVOR</span><h3>Ti iznosiš situaciju</h3><p>Pričaš o tome šta se dešava, šta ti je važno i šta bi volela da promeniš.</p></article>
          <article><span>DRUGI RAZGOVOR</span><h3>Dobijaš konkretne sugestije</h3><p>Zajedno sagledavamo moguće korake i načine na koje možeš drugačije da pristupiš situaciji.</p></article>
        </div>
      </section>
      <section className="service-section service-section-tinted">
        <div className="section-wrap service-price-layout">
          <div><p className="eyebrow">CENA ZA DVA RAZGOVORA</p><h2>50 €</h2><p>Ne moraš prethodno da si sarađivala sa Zoricom.</p></div>
          <div><p className="eyebrow">MESTO ODRŽAVANJA</p><h3>Online ili uživo</h3><p>Online preko Zoom-a ili uživo u Beogradu i okolini.</p></div>
        </div>
      </section>
      <ServiceBottomCta title="Imaš konkretnu temu o kojoj želiš da razgovaraš?" text="Javi se i napiši nekoliko rečenica o situaciji. Dogovorićemo termin i način razgovora." action="Pošalji upit za dve kafe" subject="Upit za ponudu dve kafe" />
    </main>
  );
}

export function FreeTrainingPage() {
  return (
    <main className="service-page">
      <ServiceHero
        eyebrow="BESPLATNO · SNIMLJEN VIDEO"
        title="Besplatni trening o komunikaciji"
        description="Pogledaj snimljeni trening kada ti odgovara i upoznaj elemente koji oblikuju tok jednog razgovora."
        action="Zatraži link za trening"
        subject="Prijava za besplatni trening o komunikaciji"
      />
      <section className="service-section section-wrap">
        <SectionHeading eyebrow="ŠTA ĆEŠ DA NAUČIŠ" title="Razumećeš šta se dešava u razgovoru." />
        <ul className="service-check-list"><li>Šta sve čini jednu komunikaciju.</li><li>Kako elementi komunikacije utiču jedni na druge.</li><li>Šta možeš da promeniš da bi ostvarila željeni rezultat, bez obzira na sagovornika.</li></ul>
      </section>
      <section className="service-section service-section-tinted">
        <div className="section-wrap">
          <SectionHeading eyebrow="SADRŽAJ TRENINGA" title="Četiri kratka bloka za samostalan rad." />
          <div className="service-steps">
            <article><span>01</span><h3>Uvod</h3><p>Postavljanje osnove za razumevanje komunikacije.</p></article>
            <article><span>02</span><h3>Komunikacioni model</h3><p>Prvi blok o elementima komunikacionog modela.</p></article>
            <article><span>03</span><h3>Uverenja i stanja</h3><p>Uverenja, vrednosti, metaprogrami i stanja.</p></article>
            <article><span>04</span><h3>Cilj i rapport</h3><p>Cilj u komunikaciji i uspostavljanje rapporta.</p></article>
          </div>
          <p className="service-method-note">Trening je snimljen video materijal, a vežbe možeš da radiš tempom koji ti odgovara. Nakon prijave dobijaš link mejlom.</p>
        </div>
      </section>
      <ServiceBottomCta title="Pogledaj trening kada ti odgovara." text="Pošalji mejl sa zahtevom za besplatan video trening. Link stiže u tvoje sanduče." action="Zatraži besplatni trening" subject="Prijava za besplatni trening o komunikaciji" />
    </main>
  );
}

export function ComingSoonPage({ title, description }: { title: string; description: string }) {
  return (
    <main className="service-page coming-soon-page">
      <ServiceHero
        eyebrow="U PRIPREMI"
        title={title}
        description={description}
        action="Pošalji pitanje"
        subject={`Pitanje o ponudi: ${title}`}
      />
      <section className="service-section section-wrap coming-soon-note">
        <SectionHeading eyebrow="USKORO" title="Stranica i detalji ponude su u pripremi." />
        <p>U međuvremenu možeš da pogledaš ostale načine rada ili da pošalješ pitanje mejlom.</p>
        <Link className="text-link" href="/radi-sa-mnom">Pogledaj sve načine rada</Link>
      </section>
    </main>
  );
}
