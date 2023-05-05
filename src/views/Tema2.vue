<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Productos y características

    .cont_2_1
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          p(data-aos="fade-up") Se considera que el producto es una suma de características y atributos que son palpables (forma, tamaño, color, entre otros) e intangibles (marca, imagen de empresa, servicio, entre otros), las cuales el comprador acepta, en principio, como algo que va a satisfacer sus necesidades.
          p.mt-4(data-aos="fade-up") Uno de los objetivos principales de los inventarios es garantizar que estos productos roten, no se deterioren y generen beneficios a la empresa y sus clientes.
          p.mt-4(data-aos="fade-up") En los establecimientos y servicios farmacéuticos se encuentran productos característicos y funciones diferentes con respecto a su orientación, función, presentación, información técnica, requerimientos para su almacenamiento y otros aspectos importantes.
        .col-lg-6(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/2.svg" data-aos="fade-left")
      .row.mt-5.col-lg-10.m-auto
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/3.svg" data-aos="fade-right")
        .col-lg-6(style="place-self:center;")
          .p-4(data-aos="fade-left" style="background-color:#F6F6F6;border-radius:0px 40px 40px 0px;")
            p  Entre estos están:
            ul.lista-ul.mt-3.mb-0
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Medicamentos alopáticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Fitoterapeuticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Homeopáticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Nutracéuticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Dispositivos médicos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Reactivos diagnósticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Drogas blancas.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Medicamentos de alto costo.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Suplementos dietarios.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos de aseo, limpieza y desinfección.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Cosméticos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos biológicos.
              li 
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos biotecnológicos.

      
      


    


</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema2/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center top
</style>
