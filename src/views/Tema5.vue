<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Consecuencias de no hacer un buen inventario
    
    .cont_5_1.pt-5
      p(data-aos="fade-up") La imagen representa algunas de las consecuencias de la no realización de un adecuado inventario:
      .col-lg-6.m-auto.mt-5
        figure
          img.m-auto(src="@/assets/curso/tema5/2.svg" data-aos="zoom-in-up" alt="Imagen con algunas de las consecuencias de la no realización de un adecuado inventario, las cuales son: Pérdidas económicas Pérdida en ventas Pérdidas de unidades Descuadres de unidades" style="max-width:350px;")



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_5_1, .cont_5_1 *
  position: relative
.cont_5_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema5/1.png)
  background-size: 1500px
  background-repeat: no-repeat
  background-position: top
</style>
