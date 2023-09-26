<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Kárdex
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Es el principal instrumento de la gestión:
        .p-4.pt-5.pb-5.mt-4(style="background-color:#F6F6F6;border-radius:15px;")
          ul.lista-ul.mb-0
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Se hace uno para cada producto basándote en la lista de precios.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Debe ser actualizado cada vez que hay un movimiento (entrada, salida, baja).
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Sirve para conocer el consumo mensual de la mercancía o productos.
            li.d-flex.mb-0(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Ayuda a crear el pedido de manera racional, con la fácil localización de pérdidas. 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/1.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    p.mt-5(data-aos="fade-up") La siguiente imagen muestra algunos de los elementos que se incluyen en un Kárdex (ver figura 3).
    .titulo-sexto.color-acento-botones.mt-5
      p.mb-0 #[b Figura 3]. Elementos de un Kárdex
    figure.mt-5
      img(src="@/assets/curso/tema7/2.svg" data-aos="zoom-in-up" alt="Imagen que contiene un ejemplo de los elementos de un Kardex, los cuales son: Nombre del medicamento: Ácido acetil salicílico Concentración: 500 mg Presentación: Tabletas Máxima cantidad a pedir (si pides más se vencerá): Stock máximo: 315 Mínima cantidad a tener: Stock mínimo: 35 Fecha: 01-01-21, 02-01-21, 05-01-21, 13-01-21 Documento: b/v 123 diremid Entrada: 200 Salida: -, 25, 50, 35 Saldo: 200, 175, 125, 90, -, 45 Observación" style="max-width:1150px;").m-auto





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
