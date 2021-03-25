<template>
  <main>
    <h1>O projektu</h1>
    <p>
      Koncept projektu “Zapomenutá Orlová” vznikl na konci roku 2019 a byl
      dokončen na jaře 2021. Cílem projektu je zvětšit povědomí o dnes již
      zapomenutých místech v našem městě, která bývala dříve jeho centrem a
      pokusit se o zvýšení turismu v Orlové 1. Proto jsme vybrali 12 unikátních
      historických lokací v této oblasti, které bychom chtěli představit široké
      veřejnosti.
    </p>
    <p>
      Jedná se o zcela studentský projekt, který bylo možno uskutečnit za pomoci
      participativního rozpočtu Města Orlové.
    </p>

    <h2>Poděkování</h2>

    <p>
      Chtěli bychom velmi poděkovat Městu Orlová za tuto příležitost a veškerou
      pomoc. Bez něj by tento projekt nebyl možný, jsme rádi za to, že nám jej
      pomohli realizovat. Zvláště pak paní <b>DiS. Petře Ožanové</b> z úřadu
      starosty za její čas a kontrolu nad projektem, která nás provázela celou
      cestu. Také bychom chtěli poděkovat Muzeu Těšínska za korekturu
      historických textů. Jmenovite jeho řediteli
      <b>PaedDr. Zbyškovi Ondřekovi</b> a historičce
      <b>Mgr. Lence Novákové, Ph.D.</b> Dále také panu
      <b>Ing. Luboši Plucarovi</b> za cenné rady a pomoc s opravou historických
      nesrovnalostí. Za pomoc s korekturou a opravou gramatických chyb děkujeme
      <b>Mgr. Pavlíně Tobolové</b>. A nesmíme zapomenout na pamětníky, historiky
      amatéry a jiné zájemce o tento projekt. Děkujeme všem za informace a
      neustálou podporu. Všem z vás jsme hluboce zavázáni.
    </p>

    <h2>Feedback</h2>
    <p>
      Chcete nám zanechat zprávu? Jak se Vám stezka líbila? Máte návrh na další
      historická místa, která by si zasloužila představení veřejnosti, nebo máte
      jakýkoliv jiný dotaz? Neváhejte nás kontaktovat na:
      <br />
    </p>

    <span class="links">
      <a href="mailto:zapomenuta.orlova@gmail.com">
        <fa :icon="['fas', 'envelope']" />
        <span>zapomenuta.orlova@gmail.com</span>
      </a>
      <br />
      <a
        href="http://www.facebook.com/zapomenuta.orlova/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <fa :icon="['fab', 'facebook-f']" />
        <span>facebook.com/zapomenuta.orlova</span>
      </a>
    </span>

    <h2 class="team_h">Náš tým</h2>
    <div class="team flex">
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Ondra.webp')" alt="" />
        <div>
          <b>Ondřej Chlubna</b>
          <i>vedoucí projektu</i>
        </div>
        <span class="links">
          <a href="mailto:ondrej.chlubna01@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> ondrej.chlubna01@gmail.com </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Vítek.webp')" alt="" />
        <div>
          <b>Vítek Jurčák</b>
          <i>textař/historik</i>
        </div>
        <span class="links">
          <a href="mailto:jurcak72@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> jurcak72@gmail.com </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Petr.svg')" alt="" />
        <div>
          <b>Petr Gajdošík</b>
          <b>(Tarasa24)</b>
          <i>web developer</i>
        </div>
        <span class="links">
          <a href="mailto:tarasa24@tarasa24.dev">
            <fa :icon="['fas', 'envelope']" />
            <span> tarasa24@tarasa24.dev </span>
          </a>
          <a
            href="https://github.com/Tarasa24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fa :icon="['fab', 'github']" />
            <span> github.com/Tarasa24 </span>
          </a>
          <a
            href="https://tarasa24.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <fa :icon="['fas', 'globe']" />
            <span> tarasa24.dev </span>
          </a>
        </span>
      </span>
      <span class="member">
        <img v-lazy="require('@/assets/img/about/Kilda.webp')" alt="" />
        <div>
          <b>Kristýna Kiliková</b>
          <b>(norsae.ae)</b>
          <i>grafik</i>
        </div>
        <span class="links">
          <a href="mailto:kkilik333@gmail.com">
            <fa :icon="['fas', 'envelope']" />
            <span> kkilik333@gmail.com </span>
          </a>
        </span>
      </span>
    </div>

    <h2>Historické prameny</h2>
    <div class="sources">
      <h3>Obecné knižní zdroje:</h3>
      <ul>
        <li>Dějiny Orlové – MěÚ Orlová, 1993</li>
        <li>
          Dějiny města Orlové v datech – k 90. výročí povýšení Orlové na město
          1922-2012 – Město Orlová, 2013
        </li>
      </ul>

      <h3>Obecné internetové zdroje:</h3>
      <ul>
        <li>
          <a
            href="http://www.fonorama.cz/odkazy/Toulky%20Orlovou.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >Toulky rodáků Orlovou</a
          >
        </li>
        <li>
          <a
            href="https://www.mesto-orlova.cz/images_clanek/16286_1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            >Psali o nás: Karvinský a Havířovský deník - na webu města Orlové</a
          >
        </li>
        <li>
          <a
            href="https://www.mesto-orlova.cz/cz/mesto/historie-v-datech/"
            target="_blank"
            rel="noopener noreferrer"
            >Historie v datech – Město Orlová</a
          >
        </li>
      </ul>

      <h3>Konkrétní internetové zdroje:</h3>
      <ol>
        <li>
          <h4>Vlakové nádraží</h4>
          <a
            href="https://kolejcieszyn.pl/303c.php?s=orlova"
            target="_blank"
            rel="noopener noreferrer"
            >Koleje Slaska Cieszynskiego – Orlová</a
          ><br />
          <a
            href="https://www.zsr.sk/o-nas/historia-zeleznic/prve-zeleznice/prve-zeleznicne-podniky/kosicko-bohuminska-zeleznica/"
            target="_blank"
            rel="noopener noreferrer"
            >Košicko-bohumínska železnica – ŽSR</a
          ><br />
          <a
            href="https://cs.wikipedia.org/wiki/Orlov%C3%A1_(n%C3%A1dra%C5%BE%C3%AD)"
            target="_blank"
            rel="noopener noreferrer"
            >Orlová (nádraží) – Wikipedie</a
          ><br />
          <a
            href="https://www.atlaskolejowy.net/"
            target="_blank"
            rel="noopener noreferrer"
            >Atlas Kolejowy Polski, Czech i Słowacji</a
          ><br />
        </li>
        <li>
          <h4>Kostel Narození Panny Marie</h4>
          <a
            href="https://www.mesto-orlova.cz/cz/mesto/pamatky/13301-farni-kostel-narozeni-panny-marie.html"
            target="_blank"
            rel="noopener noreferrer"
            >Farní kostel Narození Panny Marie – Město Orlová</a
          ><br />
          <a
            href="https://www.mesto-orlova.cz/cz/mesto/historie-a-soucasnost/"
            target="_blank"
            rel="noopener noreferrer"
            >Historie a současnost – Město Orlová</a
          ><br />
          <a
            href="https://cs.wikipedia.org/wiki/Kostel_Narozen%C3%AD_Panny_Marie_(Orlov%C3%A1)"
            target="_blank"
            rel="noopener noreferrer"
            >Kostel Narození Panny Marie (Orlová) – Wikipedie</a
          ><br />
        </li>
        <li>
          <h4>Zámecký park a bývalý zámek</h4>
          <a
            href="https://www.mesto-orlova.cz/cz/radnice/zivotni-prostredi/ochrana-krajiny-prirody/14136-zamecky-park.html"
            target="_blank"
            rel="noopener noreferrer"
            >Zámecký park – Město Orlová</a
          ><br />
          <a
            href="https://www.archives.cz/web/resources/soka_karvina/Orlovsky_zamek.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >ORLOVSKÝ ZÁMEK</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:1b6485a0-7812-11dd-9d85-0013d398622b?page=uuid:eebfb7c0-780e-11dd-a57b-0013d398622b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Těšínsko 1966 | Moravskoslezská vědecká knihovna v Ostravě |
            Digitální knihovna Kramerius – Nemocnice v Orlové (od str. 3)</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:142f5c60-6bbe-11de-9614-0013d398622b?page=uuid:6dbdfef0-6b99-11de-bc44-0013d398622b&fulltext=z%C3%A1mek%20v%20Orlov%C3%A9"
            target="_blank"
            rel="noopener noreferrer"
            >Noviny Těšínské 21.12.1901 | Moravskoslezská vědecká knihovna v
            Ostravě | Digitální knihovna Kramerius – Nemocnice v Orlové (str. 4,
            3. Odstavec)</a
          ><br />
          <a
            href="http://nspka.cz/cs/zdravotnik/z-nasi-historie.html"
            target="_blank"
            rel="noopener noreferrer"
            >Nemocnice s poliklinikou Karviná-Ráj | Z naší historie</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:c901b130-7824-11dd-8568-0013d398622b?page=uuid:7c882020-7822-11dd-b254-0013d398622b"
            target="_blank"
            rel="noopener noreferrer"
            >Těšínsko 1968 | Moravskoslezská vědecká knihovna v Ostravě |
            Digitální knihovna Kramerius</a
          ><br />
        </li>
        <li>
          <h4>Dělnický dům</h4>
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:5cd861f0-2705-11e1-81a2-0013d398622b?page=uuid:c5b3e770-2a44-11e1-9b28-0013d398622b&fulltext=orlov%C3%A9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Žalujeme! – Josef Pergl (pozn.: průběh dělnické stávky na Ostravsku
            v dubnu 1925 – o Orlové je zmínka na str. 20-27 a 31-32); Digitální
            knihovna Moravskoslezské vědecké knihovny v Ostravě</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:9a4711b0-78dc-11dd-925c-0013d398622b?page=uuid:9b1907b0-78dc-11dd-8d6e-0013d398622b"
            target="_blank"
            rel="noopener noreferrer"
            >Dělnický dům v Orlové dosloužil (str. 7 – 9): Těšínsko –
            Vlastivědný časopis; Digitální knihovna Moravskoslezské vědecké
            knihovny v Ostravě</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:f9bfbbc0-1cb7-11e0-a3b9-0013d398622b?page=uuid:7c1d5b50-1cb2-11e0-ae87-0013d398622b&fulltext=d%C4%9Blnick%C3%BD%20d%C5%AFm%20orlov%C3%A1"
            target="_blank"
            rel="noopener noreferrer"
            >Obrana Slezska – Dělnický dům v Orlové (pozvánka na VŠ přednášku na
            1. straně); Digitální knihovna Moravskoslezské vědecké knihovny v
            Ostravě</a
          ><br />
          <a
            href="http://www.digitalniknihovna.cz/svkos/view/uuid:28f6a2d0-1c92-11e0-864e-0013d398622b?page=uuid:a0c78670-1a63-11e0-8e9c-0013d398622b"
            target="_blank"
            rel="noopener noreferrer"
            >Obrana Slezska – 50 tisíc Poláků ukradli Čechové (str. 1+ pokr. Na
            str. 2 s článkem Sčítání lidu v Orlové); Digitální knihovna
            Moravskoslezské vědecké knihovny v Ostravě</a
          ><br />
        </li>
        <li>
          <h4>Polské gymnázium Juliusze Słowackiego</h4>
          <a
            href="https://www.gympol.cz/Szkola_Historia_Gimnazjum/0"
            target="_blank"
            rel="noopener noreferrer"
            >Polskie Gimnazjum im. Juliusza Słowackiego, Český Těšín,
            příspěvková organizace - HISTORIA GIMNAZJUM</a
          ><br />
          <a
            href="https://cs.zwrot.cz/2019/10/polske-gymnazium-slavi-jubileum/"
            target="_blank"
            rel="noopener noreferrer"
            >Polské gymnázium slaví jubileum – Zwrot</a
          ><br />
          <a
            href="https://karvinsky.denik.cz/zpravy_region/20090606_gymnazium_orlova_polske_oslavy.html"
            target="_blank"
            rel="noopener noreferrer"
            >Karvinský deník 6. 6. 2009 - V Orlové si připomněli 100 let
            polského gymnázia</a
          ><br />
          <a
            href="https://audiovis.nac.gov.pl/obraz/202946/"
            target="_blank"
            rel="noopener noreferrer"
            >Narodowe Archiwum Cyfrowe</a
          ><br />
        </li>
        <li>
          <h4>Židovský templ</h4>
          <a
            href="https://publik.tuwien.ac.at/files/publik_255253.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >Virtuelle Rekonstruktion der Synagoge in Orlová (Orlau)</a
          ><br />
          <a
            href="https://cs.wikipedia.org/wiki/Synagoga_v_Orlov%C3%A9"
            target="_blank"
            rel="noopener noreferrer"
            >Synagoga v Orlové – Wikipedie</a
          ><br />
        </li>
        <li>
          <h4>Evangelický kostel</h4>
          <a
            href="http://orlovasceav.cz"
            target="_blank"
            rel="noopener noreferrer"
            >SCEAV Orlová</a
          ><br />
        </li>
        <li>
          <h4>České gymnázium</h4>
          <a
            href="https://detektorweb.info/index.4me?s=show&lang=1&i=35013&mm=1&xb=6&vd=1&PHPSSIDWx=e4ae1d27bf1028aa303565be964c7838"
            target="_blank"
            rel="noopener noreferrer"
            >Naše město za okupace - Detektorweb.cz - Detektory kovů</a
          ><br />
          <a
            href="https://www.goa-orlova.cz/"
            target="_blank"
            rel="noopener noreferrer"
            >GOA Orlová</a
          ><br />
        </li>
        <li>
          <h4>Věčný oheň</h4>
          <a
            href="https://www.mesto-bohumin.cz/cz/zpravodajstvi/novinove-clanky/12680-metan-horel-skoro-dvacet-let-jako-vecny-ohen.html"
            target="_blank"
            rel="noopener noreferrer"
            >Metan hořel skoro dvacet let jako "věčný oheň" - Novinové články -
            Zpravodajství - Město Bohumín</a
          ><br />
          <span
            >Moravskoslezský deník 30. 8. 1927 | Orlová doplatila na centrálně
            usměrňovanou výstavbu</span
          ><br />
          <a
            href="https://szypa.estranky.cz/"
            target="_blank"
            rel="noopener noreferrer"
            >Orlová historická - szypa.estranky.cz</a
          ><br />
        </li>
        <li>
          <h4>Husův dům</h4>
          <span
            >Český bratr 11.1927 | Moravská zemská knihovna | Digitální knihovna
            Kramerius</span
          ><br />
          <span
            >Český bratr 07.-08.1928 | Moravská zemská knihovna | Digitální
            knihovna Kramerius</span
          ><br />
          <span
            >Český bratr 02.1929 | Moravská zemská knihovna | Digitální knihovna
            Kramerius</span
          ><br />
          <span
            >Český bratr 02.1930 | Moravská zemská knihovna | Digitální knihovna
            Kramerius</span
          ><br />
          <span
            >Český bratr 02.02.1939 | Moravská zemská knihovna | Digitální
            knihovna Kramerius</span
          ><br />
          <span
            >Český bratr 09.1949 | Moravská zemská knihovna | Digitální knihovna
            Kramerius</span
          ><br />
          <span
            >Český bratr 12.1954 | Moravská zemská knihovna | Digitální knihovna
            Kramerius</span
          ><br />
        </li>
        <li>
          <h4>Pomník padlým za Těšínsko</h4>
          <span
            >Lidové noviny 1.10.1928 | Moravská zemská knihovna | Digitální
            knihovna Kramerius</span
          ><br />
          <span
            >Jiří Bílek – Kyselá těšínská jablíčka: Československo-polské
            konflikty o Těšínsko 1919, 1938, 1945 (2018)</span
          ><br />
          <a
            href="https://www.lepsi-orlova.cz/cz/aktuality/12-obnova-pamatniku-padlym-za-tesinsko-na-hrbitove-v-orlove.html"
            target="_blank"
            rel="noopener noreferrer"
            >OBNOVA PAMÁTNÍKU PADLÝM ZA TĚŠÍNSKO NA HŘBITOVĚ V ORLOVÉ - lepší
            orlová</a
          ><br />
          <a
            href="https://zpravy.tiscali.cz/tragedie-pri-niz-cechoslovaci-a-polaci-navzajem-prolevali-krev-320835"
            target="_blank"
            rel="noopener noreferrer"
            >Tragédie, při níž Čechoslováci a Poláci navzájem prolévali krev -
            tiscali.cz</a
          ><br />
        </li>
        <li>
          <h4>Důl Žofie</h4>
          <a
            href="http://podzemi.solvayovylomy.cz/histhor/lokality/okr/00.html"
            target="_blank"
            rel="noopener noreferrer"
            >DĚJINY DOLOVÁNÍ UHLÍ V OKD</a
          ><br />
          <a
            href="https://www.zdarbuh.cz/reviry/okd/historie-dolu-zofie-v-orlove/"
            target="_blank"
            rel="noopener noreferrer"
            >Dobývání uhlí na Dole Žofie v Orlové - zdař bůh .cz</a
          ><br />
          <a
            href="http://podzemi.solvayovylomy.cz/histhor/lokality/okr/63.htm"
            target="_blank"
            rel="noopener noreferrer"
            >Důl Žofie - Historie hornictví - nejen Hornictví .info</a
          ><br />
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
main
  max-width: 1300px
  margin: auto
  padding: 2vh 7.5vw
  padding-top: 63px
  text-align: left
  @include small-device
    padding-left: 20px
    padding-right: 20px
  p
    margin-left: 1em

.flex
  display: flex
  justify-content: center
  img
    width: 15vw
    max-width: 150px
    min-width: 90px
    margin: 2vw
    border-radius: 50%

.team_h
  text-align: center
  font-size: 2rem
  margin-top: 10vh

.team
  flex-flow: wrap
  margin-bottom: 10vh
  div
    display: grid
    font-size: 0.9rem
    text-align: center
  a
    margin-top: 10px
  span
    img
      border: 2px solid white

.member
  display: grid
  justify-items: center
  align-items: center
  grid-template-rows: auto 60px 120px
  margin: 10px
  width: 250px
  border: 1px solid $grey
  border-radius: 15px

.links
  margin-top: 10px
  display: block
  a
    font-size: 1.5rem
    text-decoration: none
    color: black
    margin-left: .7em
    &:first-of-type
      margin-top: 0
    display: flex
    align-items: center
    @include transition(color)
    svg
      @include transition(transform)
      margin: 0 5px
    span
      font-size: .9rem
      margin-left: 5px
    &:hover
      color: $primary
      svg
        transform: scale(1.25)

.sources
  h3
    margin-left: 1em
  ol, ul
    margin-left: .5em
</style>
