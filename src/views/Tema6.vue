<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Procedimiento para hacer inventario

    p(data-aos="fade-up") La siguiente imagen representa un proceso genérico para la realización del inventario:

    .col-lg-8.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema6/1.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") Los pasos para realizar inventario en la farmacia son:

    .cont_6_1.mt-5
      .col-lg-10.m-auto
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg-6.mb-4.mb-lg-0
              div(data-aos="fade-right")
                h3 Farmacia cerrada
                p Cuando se realiza el inventario periódico, es decir, 1 o 2 veces al año, es pertinente realizarlo con la farmacia cerrada, para evitar que haya movimiento del stock, de lo contrario escoger un momento en el que haya poca aglomeración de clientes.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema6/3.png' data-aos="fade-left")
          .row
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/4.png' data-aos="fade-right")
            .col-lg-6
              div(data-aos="fade-left")
                h3.text-start Registros
                p.text-start Es imprescindible que el #[em stock] se haga siempre con una libreta en mano en el que se anote el producto que se ha ido contabilizando. Después se podrá corroborar con el #[em software] de gestión y verificar si hay algún error.
          .row
            .col-lg-6.mb-4.mb-lg-0
              div(data-aos="fade-right")
                h3 Observar los errores
                p Establecer un margen de error, al momento de hacer el muestreo, de esta forma se identifican las oportunidades de mejora y se toman decisiones concretas para la compra o adquisición de insumos o productos.
            .col-lg-6
              figure
                img(src='@/assets/curso/tema6/5.png' data-aos="fade-left")




</template>

<script>
export default {
  name: 'Tema6',
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
.cont_6_1, .cont_6_1 *
  position: relative
.cont_6_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema6/2.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
