import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O meni — Zorica Katić",
};

const images = {
  communication: "/images/about-communication.jpg",
  creativity: "/images/about-creativity.jpg",
  balance: "/images/about-balance.jpg",
  family: "/images/about-family.jpg",
  books: "/images/about-books.jpg",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-page-hero">
        <p className="eyebrow">O MENI</p>
        <h1>O meni<em>.</em></h1>
        <p>Predstaviću se ovde kroz 5 karakteristika - 5K:</p>
      </header>

      <div className="about-page-content">
        <section className="about-chapter">
          <h2>1K - Komunikacija</h2>
          <div className="about-chapter-copy">
            <p>Moje najvažnije životne vrednosti su: ljubav, zdravlje i porodica. Tim redom i o svakoj pojedinačno sam pisala blog post.</p>
            <p>A u preseku poslovnih i privatnih vrednosti na najvažnijem mestu se nalazi: komunikacija.</p>
            <figure className="about-photo about-photo-right"><img src={images.communication} alt="Zorica Katić" /></figure>
            <p>Komunikacija za mene je najbolje opisana citatom Bendžamina Dizraelija: “Čovek nije tvorevina okolnosti, već su okolnosti tvorevina čoveka”. A te okolnosti su odnosi sa drugim ljudima, a srž tih odnosa je komunikacija, a srž komunikacije je u odgovoru koji na nju dobijamo.</p>
            <p>Najlepše od svega je što se komunikacija uči i ja je konstantno usavršavam jer me interesuje. Ceo život sam bila radoznala da saznam šta je to “iza” izgovorenih reči kod različitih ljudi. Zašto se, nakon jednog istog događaja, različiti ljudi različito ponašaju. Zato je meni bilo logično da pohađam razne kurseve iz komunikacije (asertivnost, NLP, coaching,...) i da prenosim i drugima ono što sam naučila.</p>
            <p>Nekako je logično da su i teme mojim klijentima: komunikacija u odnosima (sa sobom, sa drugima privatno ili sa drugima poslovno).</p>
            <p>I (tele)komunikacija me prati čitavog života – ja sam i diplomirani inženjer elektrotehnike, smer telekomunikacija. Imam iskustvo i u radu sa ljudima u državnim firmama.</p>
          </div>
        </section>

        <section className="about-chapter">
          <h2>2K - Kreativnost</h2>
          <div className="about-chapter-copy">
            <p>Kreativnost, originalnost, autentičnost.</p>
            <p>Imam potrebu da je svakodnevno ispunjavam.</p>
            <p>Jedan od načina je kroz pisanje blog postova. A teme su najčešće, pogađate, komunikacija u odnosima.</p>
            <p>Isto tako, i u radu sa klijentima. Svakom klijentu pristupam “od početka” i stvaram jedinstveni set alata i tehnika za rešenje njegove teme. Na taj način, imam osećaj, da najviše doprinosim: ispunjavam svoju vrednost, a klijent dobija personalizovan način rešavanja problema.</p>
            <figure className="about-photo about-photo-left"><img src={images.creativity} alt="Zorica Katić" /></figure>
          </div>
        </section>

        <section className="about-chapter">
          <h2>3K - Kroj</h2>
          <div className="about-chapter-copy">
            <p>Reč kroj sam izabrala zbog slova K, a mogla bi da se upotrebi reč: balans ili primerenost. Zapravo to je moja potreba da kod sebe i kod klijenta osvešćujem različite oblasti ili delove tela i života i da ih dovodim u balans. Na primer, leva i desna strana mozga i aktivnosti koje su tome pridružene (leva za logiku, analizu,.. a desna za kreaciju, spontanost,...). Ili različite oblasti života: mentalna, emotivna, fizička i duhovna.</p>
            <p>Jedan način korišćenja “kroja” je da se ja “skrojim” prema klijentu: moju fleksibilnost i prilagodljivost stvaljam u službu klijenta i njegovu temu obrađujem na njemu željen i primeren način (korišćenje više leve ili desne strane; ili korišćenjem više već razvijenog aspekta života mentalnog ili emotivnog ili fizičkog ili duhovnog).</p>
            <p>Drugi način ispunjenja “kroja” je da klijent “raširi” i “prekroji” svoj dosadašnji način doživljaja odnosa i komunikacije. Ovo poslednje dovodi do najbržih rezultata.</p>
            <figure className="about-photo about-photo-right"><img src={images.balance} alt="Zorica Katić" /></figure>
            <p>Ispunjavajući prethodne vrednosti (komunikacija, kreativnost, primerenost) napravila sam personalizovani program – paket koučing sesija: za 50 dana reši problem u odnosima i transformiši komunikacione veštine na viši nivo. Više o ovome, na linku <Link href="/radi-sa-mnom">Radi sa mnom</Link>.</p>
          </div>
        </section>

        <section className="about-chapter">
          <h2>4K - Katići, K4</h2>
          <div className="about-chapter-copy">
            <figure className="about-photo about-photo-left"><img src={images.family} alt="Zorica Katić sa porodicom" /></figure>
            <p>To je moja porodica. O njoj sam pisala poseban <Link href="/moja-porodica">post.</Link>.</p>
            <p>Oni su mi svakodnevna i podrška i izazov. U svim pogledima, a u vezi ovog sajta i velika tehnička pomoć.</p>
            <p>A ovde ću ispričati o prošlogodišnjem (porodičnom) događaju. Naime, moj suprug je imao zakazanu operaciju. Što zbog korone, što zbog sezonskih bolesti, operacija se prolongirala i srećno završena u 2023.godini. Sama operacija je bila prilično složena a i oporavak je zahtevao dugotrajnu negu i brigu. On je to “izgurao” na svoj način, a sada to spominjem jer je cela situacija imala i na mene uticaja. Naime, baš u vreme dijagnostikovanja ja sam započela pripreme za svoj online program. Nakon razgovora sa sobom u smislu mojih važnosti (vrednostima je posvećen poseban post) i prioriteta, donela sam odluku da pauziram svoj budući privatni biznis i posvetim se porodici i zdravlju. Ovom pričom želim da dam primer komunikacije sa sobom i jedinog merljivog rezulatata – a to je moj lični osećaj mira i zadovoljstva. Verujem da će vas primer ispirisati i koristiti u budućnosti.</p>
          </div>
        </section>

        <section className="about-chapter">
          <h2>5K - Knjige&amp;kolači</h2>
          <div className="about-chapter-copy">
            <p><strong><u>Knjige</u></strong> – ko me lično poznaje, ovo mu nije novost. Od kad znam za sebe okružena sam knjigama. Volim da ih čitam, kupujem i poklanjam.</p>
            <p>Imam jednu anegdoticu u vezi knjiga. Negde u prvom, drugom razredu osnovne škole, kada sam tek “zvanično” naučila da čitam i mogla da se upišem u biblioteku, ja sam otišla sama u veliku gradsku biblioteku. Stala sam ispod pulta i zatražila, sećam se, Seviljsku lepezu, jer sam za nju čula od starije drugarice. Bibliotekari su mi rekli da ta knjiga nije za mene i da uzmem nešto primerenije. Ja sam se postiđeno okrenula prema najbližoj polici sa knjigama i izabrala prvu. Ta polica je bila jedna u nizu sa bajkama i basnama naroda sveta: Indije, Kine, Japana, Koreje, Burme, Vijetnama... I ja sam ih posle redom čitala. Tako da su meni potpuno prirodne i bliske sve istočnjačke mudrolije i filozofije, a kasnije sam pridodala i zapadnjačke.</p>
            <figure className="about-photo about-photo-right"><img src={images.books} alt="Zorica Katić" /></figure>
            <p>U vezi knjiga imam jednu novost koja je u fazi eksperimenta. Naime, u mom radu, jedan od alata koji koristim je Human design mapa. Primetila sam da sam sa autorima knjiga koje volim da čitam i koje mi više “leže”, kompatibilnija u zajedničkoj Human design karti. Pa sam počela da to proučavam sa autorima čije su mi Human design mape poznate i dostupne. I nekoliko knjiga sam tako poklonila. Za sad imam sjajne povratne informacije.</p>
            <p><strong><u>Kolači</u></strong> - ko me lično poznaje, ni ovo mu nije novost. Volim da ih pravim, volim da izmišljam nove i volim da ugošćujem. Najviše zahvalnosti u svom životu sam dobila upravo za kolače. Jedan od komentara je bio i: “Mani se ćorava posla sa tvojim naukama, bolje se bavi poslastičarstvom...”.</p>
            <p>E sad, ko zna šta će biti u budućnosti sa kolačima, a ono što ja želim je da se vi, kao čitaoci ovog sajta, osećate ugošćeno dok čitate kao da sedite među knjigama i jedete ukusne i vizuelno dopadljive kolače.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
