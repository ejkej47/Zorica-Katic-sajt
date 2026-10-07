# Zorica Katić — sajt

## Pregled projekta

Sajt je frontend napravljen u Next.js 15 i React 19. Blog objave se čitaju sa postojećeg WordPress sajta; ostale važne stranice su ručno napravljene u Next.js-u kako bi vizuelno pratile landing stranicu. Sadržaj postojećih stranica treba čuvati, uz izmene teksta samo kada ih Zorica izričito zatraži.

Za lokalni rad pokreni `npm run dev`, pa otvori <http://localhost:3000>. Komanda `npm run build` pravi produkcijski build.

## Struktura stranica

- `/` — landing stranica, hero, ponude, o Zorici i poslednje blog objave.
- `/o-meni` — ručno uređena stranica o Zorici.
- `/radi-sa-mnom` — katalog šest ponuda.
- `/personalizovani-program`, `/tumacenje-human-design-mape`, `/ponuda-dve-kafe` i `/besplatni-video-trening-o-komunikaciji-u-odnosima` — posebne, ručno napravljene stranice ponuda.
- `/komunikacija-po-dizajnu` i `/baza-kom` — stranice ponuda koje su trenutno u pripremi.
- `/blog` i `/blog/[slug]` — lista i prikaz blog tekstova.
- `src/app/[slug]/page.tsx` — prikaz preostalih stranica iz WordPress exporta, ako nisu zamenjene posebnom Next.js stranicom.

Ponude na landingu i stranici „Radi sa mnom“ dele komponentu `src/components/OfferCard.tsx`. Kada se menja njihov izgled, promeni zajedničku komponentu/CSS da obe lokacije ostanu usklađene. Slike tri ponude dolaze iz `public/images/`; ostale kartice koriste grafički placeholder dok nemaju odgovarajuću sliku.

## Dizajn i dogovorene smernice

- Glavne boje: roze `#de006f` za naglaske, bordo `#ad1c42` za akcije i detalje, krem `#f4eadb` kao osnovna pozadina. Braon je sporedna i koristi se štedljivo.
- Tipografija i stil treba da ostanu bliski postojećem landing dizajnu: miran, prozračan raspored, jasna hijerarhija naslova, opisa i CTA dugmadi.
- Naglašavanje akcentnom bojom ne treba automatski stavljati na poslednju reč svakog naslova; raspored naglaska treba povremeno menjati.
- Navigacija je sticky. Programske kartice na obe lokacije treba da dele isti vizuelni stil.
- Blog kartice su u celini klikabilne. Naslovne fotografije prikazuju ceo kadar, čuvaju izvorni odnos stranica i koriste lazy loading.
- Ne dodavati ukrasne elemente ili tekst samo da bi se popunio prostor. Na postojećim stranicama ne menjati sadržaj bez potrebe.

## Blog i WordPress

WordPress ostaje mesto na kom klijent uređuje i objavljuje blog tekstove: prijava je na `/wp-admin`. Frontend poziva WordPress REST API (`WORDPRESS_URL`, trenutno `https://zoricakatic.com`) i osvežava keš objava na 60 sekundi. Ako API nije dostupan, sajt koristi izvoz u `src/data/wordpress.json`. Blogu zato za sada nije potrebna nova baza; objave se čuvaju u WordPress-u.

- `src/lib/content.ts` sadrži WordPress integraciju, fallback podatke i lokalizaciju slika.
- `src/data/blog-cover-map.json` povezuje 20 objava sa naslovnim fotografijama preuzetim sa originalnih WordPress kartica i sadrži njihove dimenzije.
- `src/data/blog-media-map.json` mapira slike u sadržaju starih objava na lokalne fajlove.
- `public/images/blog-covers/` sadrži naslovne fotografije; `public/images/blog/` sadrži slike unutar tekstova.
- `public/images/two-coffees-card.jpg` je verzija slike za dve kafe bez belih margina oko centralne fotografije.

WordPress je izvor za nove objave, a lokalne slike i JSON export omogućavaju prikaz postojećeg sadržaja kada API nije dostupan. Za drugi WordPress sajt kopirati `.env.example` u `.env.local` i podesiti `WORDPRESS_URL`. Ne upisivati lozinke ili tajne u README.

## Objavljivanje i budući kursevi

U ovom projektu nisu implementirani kursevi, prijava korisnika, naplata ni kontrola pristupa lekcijama. Ako se to bude dodavalo, treba prvo dogovoriti tok kupovine i pristup sadržaju; biće potreban sistem za naloge/ovlašćenja i procesor plaćanja. Može se proceniti da li WordPress ostaje CMS ili se koristi posebna platforma. Ne pretpostavljati da je GitHub/Vercel povezivanje završeno bez provere naloga i deploy podešavanja.

## Rad sa Zoricom

Kada Zorica traži mišljenje ili kaže da prvo želi da se dogovorite, izneti predlog i sačekati njeno odobrenje pre izmene. Kada jasno zatraži konkretnu izmenu, uraditi je bez nepotrebnog zaustavljanja. U dizajnerskim doradama čuvati postojeći tekst i identitet sajta, osim kada izričito zatraži promenu sadržaja.