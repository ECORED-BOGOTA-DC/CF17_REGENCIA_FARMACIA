<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Kardex
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Es el principal instrumento de la gestión:
        .p-4.pt-5.pb-5.mt-4(style="background-color:#F6F6F6;border-radius:15px;")
          ul.lista-ul.mb-0
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Se hace uno para cada producto basándote en la lista de precios.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Debe ser actualizado cada vez que hay un movimiento (entrada, salida, baja).
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Sirve para conocer el consumo mensual de la mercancía o productos.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Ayuda a crear el pedido de manera racional, con la fácil localización de pérdidas. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/1.svg" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") La siguiente imagen muestra algunos de los elementos que se incluyen en un Kardex (ver figura 3).

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Figura 3
      span #[em Elementos de un Kardex]
    figure.mt-5
      img(src="@/assets/curso/tema7/2.svg" data-aos="zoom-in-up")





</template>

<script>
export default {
  name: 'Tema7',
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

<style lang="sass"></style>
