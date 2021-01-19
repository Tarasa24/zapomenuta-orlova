<template>
  <main>
    <h1>Instalace</h1>
    <div class="points">
      <div class="point">
        <img
          :src="require('@/assets/img/installation/install_1.webp')"
          alt="Installation step 1"
        />
        <i
          >Při prvním otevření vás prohlížeč sám vyzve, abyste si aplikaci
          přidali na plochu.</i
        >
      </div>
      <div class="point">
        <img
          :src="require('@/assets/img/installation/install_2.webp')"
          alt="Installation step 1"
        />
        <i>Stejného efektu lze dosáhnout otevřením postranního menu...</i>
      </div>
      <div class="point">
        <img
          :src="require('@/assets/img/installation/install_3.webp')"
          alt="Installation step 1"
        />
        <i>... a stisknutím tlačítka "Přidat na plochu".</i>
      </div>
      <div class="point">
        <img
          :src="require('@/assets/img/installation/install_4.webp')"
          alt="Installation step 1"
        />
        <i>Svou volbu pak potvrdíte stisknutím tlačítka "Přidat".</i>
      </div>
    </div>
    <router-link to="/#aplikace">
      <button><b>Zpět</b></button>
    </router-link>
  </main>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
main
  padding-top: 63px
  margin: auto

.points
  display: flex
  flex-wrap: wrap
  justify-content: center
  .point
    display: grid
    margin: 10px
    width: 400px
    justify-items: center
    img
      max-height: 80vh
    i
      margin-top: 10px
      width: 80%
      @include small-device
        width: 100%
        padding-bottom: 20px
        margin-bottom: 10px
        border-bottom: 2px solid $grey
button
  text-align: center
  margin: 5vh auto
  border: 1px solid $grey
  border-radius: 10px
  background-color: $primary
  cursor: pointer
  width: 20vw
  min-width: 350px
  min-height: 50px
  @include small-device-portrait
    width: 95%
  @include transition(background-color)
  &:hover
    background-color: $accent
  b
    font-size: 1rem
</style>
