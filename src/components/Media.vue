<template>
  <div>
    <h2>Zmínili se o nás</h2>
    <div class="media">
      <ul>
        <li>
          <button>
            <fa :icon="['fas', 'caret-down']" />
            <h3>Tisk</h3>
          </button>

          <div>
            <span>
              <a
                href="https://www.mesto-orlova.cz/cz/zpravodajstvi/aktuality/37912-stezkou-zapomenuta-orlova-na-vylet-do-historie-hornickeho-mesta.html"
                target="_blank"
                rel="noopener noreferrer"
                >Město Orlová</a
              >
              - Stezkou Zapomenutá Orlová na výlet do historie hornického města
            </span>
            <span>
              <a
                href="https://moravskoslezsky.denik.cz/z-regionu/zapomenuta-orlova-pojdte-se-podivat-na-mista-ktera-padla-za-obet-tezbe-uhli-2021.html"
                target="_blank"
                rel="noopener noreferrer"
                >Moravskoslezský deník</a
              >
              - Zapomenutá Orlová. Pojďte se podívat na místa, která padla za
              oběť těžbě uhlí
            </span>
            <span>
              <a
                href="https://www.mesto-orlova.cz/images_clanek/37917_1.jpg"
                target="_blank"
                rel="noopener noreferrer"
                >Právo</a
              >
              - Stezka studentů gymnázia ukazuje krásy i historii Orlové
            </span>
            <span>
              <a
                href="https://zwrot.cz/2021/04/w-orlowej-powstal-nowy-szlak-edukacyjny/"
                target="_blank"
                rel="noopener noreferrer"
                >Zwrot</a
              >
              - W Orłowej powstał nowy szlak edukacyjny
            </span>
            <span>
              <a
                href="https://glos.live/Wiadomosci/detail/Sladami_dawnej_Orlowej/8"
                target="_blank"
                rel="noopener noreferrer"
                >Glos</a
              >
              - Śladami dawnej Orłowej
            </span>
            <span>
              <a
                href="https://feber.cz/vitam-studentsky-projekt-ktera-pripomene-starou-orlovou-jaka-jiz-neni/"
                target="_blank"
                rel="noopener noreferrer"
                >Ondřej Feber</a
              >
              - Vítám studentský projekt, která připomene starou Orlovou, jaká
              již není
            </span>
            <span>
              <a
                href="https://www.mesto-orlova.cz/soubory_clanek/37946_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >Orlovské noviny</a
              >
              - Vydejte se po stezce Zapomenutá Orlová na výlet do historie
              hornického města
            </span>
          </div>
        </li>

        <li>
          <button>
            <fa :icon="['fas', 'caret-down']" />
            <h3>Televize</h3>
          </button>

          <div>
            <a
              href="https://youtu.be/9msEoSCXc6c"
              target="_blank"
              rel="noopener noreferrer"
              >iTVO</a
            >
          </div>
        </li>

        <li>
          <button>
            <fa :icon="['fas', 'caret-down']" />
            <h3>Rozhlas</h3>
          </button>

          <div>
            <a
              href="https://fb.watch/4XY1CwgTuq"
              target="_blank"
              rel="noopener noreferrer"
              >Český rozhlas Plus</a
            >
            <a
              href="https://youtu.be/9dGISbH39og"
              target="_blank"
              rel="noopener noreferrer"
              >ČRo Ostrava</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.media
  margin-bottom: 5vh
  ul
    padding-left: 1em
    list-style-type: none
  li > div
    margin: 5px auto 5px calc(1em + 8.33px)
    display: grid
    a, span
      margin: 4px 0
  h3
    display: initial
    font-size: 1.17rem
    margin: 7.5px auto
  button
    border: 0
    background-color: transparent
    display: flex
    align-items: center
    padding: 0
  svg
    margin: 0 .5em
</style>
