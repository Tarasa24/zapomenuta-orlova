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
      pomohli realizovat. Zvláště pak paní <b>DiS. Petře Ožanové</b> z úřadu
      starosty za její čas a kontrolu nad projektem, která nás provázela celou
      cestu. Také bychom chtěli poděkovat Muzeu Těšínska, za korekturu
      historických textů. Jmenovite jeho řediteli
      <b>PaedDr. Zbyšekovi Ondřekovi</b> a historičce
      <b>Mgr. Lence Novákové, Ph.D.</b> A nesmíme zapomenout na pamětníky a jiné
      zájemce o místní historii. Děkujeme všem za informace a neustálou podporu.
    </p>

    <h2>Feedback</h2>
    <p>
      Chcete nám zanechat zprávu, jak se Vám stezka líbila. Máte návrh na další
      historická místa, která by si zasloužila představení veřejnosti? Nebo máte
      jakýkoliv jiný dotaz. Neváhejte nás kontaktovat na:
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
</style>
