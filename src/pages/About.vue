<template>
  <main>
    <h1>O projektu</h1>
    <p>
      Koncept projektu “Zapomenutá Orlová” vznikl na konci roku 2019 a byl
      dokončen na jaře 2021. Jeho cílem je zvětšit povědomí o dnes již
      zapomenutých místech v našem městě, která bývala dříve jeho centrem a
      pokusit se o zvýšení turismu v Orlové 1. Proto jsem vybrali 12 zajímavých
      historických lokací v této oblasti, které bychom chtěli představit širší
      veřejnosti.
    </p>
    <p>
      Jedná se i zcela studentský projekt, který bylo možné uskutečnit za pomoci
      participativního rozpočtu Města Orlové.
    </p>

    <h2>Poděkování</h2>
    <p>
      Chtěli bychom velmi poděkovat Městu Orlová za tuto příležitost a veškerou
      pomoc. Bez něj by tento projekt nebyl možný, jsme rádi za to, že nám jej
      pomohli realizovat. Zvláště pak paní DiS. <b>Petře Ožanové</b> z úřadu
      starosty za její čas a kontrolu nad projektem, která nás provázela celou
      cestu. Také bychom chtěli poděkovat řediteli muzea Těšínska
      <b>PaedDr. Zbyšekovi Ondřekovi</b>, který se účastnil korekce a kontroly
      historických textů. A nesmíme zapomenout na pamětníky a jiné zájemce o
      místní historii. Děkujeme všem za informace a neustálou podporu.
    </p>

    <h2 class="team_h">Náš tým</h2>
    <div class="team flex">
      <span>
        <img v-lazy="require('@/assets/img/about/Ondra.webp')" alt="" />
        <b>Ondřej Chlubna</b>
        <i>vedoucí projektu</i>
        <a href="mailto:ondrej.chlubna01@gmail.com"
          ><fa :icon="['fas', 'envelope']"
        /></a>
      </span>
      <span>
        <img v-lazy="require('@/assets/img/about/Vítek.webp')" alt="" />
        <b>Vítek Jurčák</b>
        <i>textař/historik</i>
        <a href="mailto:jurcak72@gmail.com"
          ><fa :icon="['fas', 'envelope']"
        /></a>
      </span>
      <span>
        <img v-lazy="require('@/assets/img/about/Petr.svg')" alt="" />
        <b>Petr Gajdošík</b>
        <b>(Tarasa24)</b>
        <i>web developer</i>
        <span class="links">
          <a href="mailto:tarasa24@tarasa24.dev"
            ><fa :icon="['fas', 'envelope']"
          /></a>
          <a
            href="https://github.com/Tarasa24"
            target="_blank"
            rel="noopener noreferrer"
            ><fa :icon="['fab', 'github']"
          /></a>
          <a
            href="https://tarasa24.dev"
            target="_blank"
            rel="noopener noreferrer"
            ><fa :icon="['fas', 'globe']"
          /></a>
        </span>
      </span>
      <span>
        <img v-lazy="require('@/assets/img/about/Kilda.webp')" alt="" />
        <b>Kristýna Kiliková</b>
        <b>(norsae.ae)</b>
        <i>grafik/designer</i>
        <a href="mailto:kkilik333@gmail.com"
          ><fa :icon="['fas', 'envelope']"
        /></a>
      </span>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
main
  padding: 2vh 7.5vw
  text-align: left
  @include small-device
    padding: 1vh 20px

.flex
  display: flex
  justify-content: center
  img
    width: 15vw
    max-width: 150px
    min-width: 90px
    margin: 2vw
    border-radius: 50%
  span
    display: grid
    justify-items: center

.team_h
  text-align: center
  font-size: 2rem
  margin-top: 10vh

.team
  flex-flow: wrap
  span
    padding: 10px 20px
    img
      border: 2px solid white
    .links
      display: block
    a
      font-size: 1.5rem
      text-decoration: none
      color: grey
      margin-top: 10px
      @include transition(color)

      svg
        @include transition(transform)
        margin: 0 5px
      &:hover
        color: $primary
        svg
          transform: scale(1.25)
</style>
