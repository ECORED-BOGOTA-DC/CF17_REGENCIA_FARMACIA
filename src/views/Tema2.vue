<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
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
            img.m-auto(src="@/assets/curso/tema2/2.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
      .row.mt-5.col-lg-10.m-auto
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          figure.d-none.d-lg-block
            img.m-auto(src="@/assets/curso/tema2/3.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
        .col-lg-6(style="place-self:center;")
          .p-4(data-aos="fade-left" style="background-color:#F6F6F6;border-radius:0px 40px 40px 0px;")
            p  Entre estos están:
            ul.lista-ul.mt-3.mb-0
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Medicamentos alopáticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Fitoterapéuticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Homeopáticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Nutracéuticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Dispositivos médicos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Reactivos diagnósticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Drogas blancas.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Medicamentos de alto costo.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Suplementos dietarios.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos de aseo, limpieza y desinfección.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Cosméticos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos biológicos.
              li.d-flex
                i.fas.fa-atom(style="color:#FF9D00;")
                | Productos biotecnológicos.

    .cajon.color-secundario.p-4.mt-5(style="background-color:#E4DDFA;")
      p.mb-0(data-aos="fade-up") Todos ellos se consideran como productos tangibles que deben cumplir con las expectativas de los usuarios finales.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Ficha técnica de los productos farmacéuticos
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1.pt-5.pb-5(data-aos="fade-right" style="background-color:#CDEDFC;width:150%;right:-20%;border-radius:40px 40px 0px 40px;position:relative;z-index:2;box-shadow:0px 0px 20px rgba(0,0,0,.2);")
          p Uno de los documentos más importantes que debe tener un servicio o establecimiento farmacéutico es la ficha técnica de productos farmacéuticos, ya que a través de esta se brinda información técnica importante para el manejo de estos dentro de las actividades del inventario.
          p.mt-4.mb-0 Esta ficha, que también recibe el nombre de #[strong “Resumen de las Características del Producto”] en el ámbito farmacéutico, es un documento oficial, aprobado por las autoridades sanitarias competentes, que contiene la información más relevante que se genera durante la investigación y evaluación de un producto farmacéutico. 
      .col-lg-8(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema2/4.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    
    h3.mt-5(data-aos="fade-up") Características de la ficha técnica
    p.mt-4(data-aos="fade-up") La ficha técnica de un producto farmacéutico presenta una información técnica muy relevante que sirve como guía de los profesionales de la salud para el manejo de estos.

    .row.mt-5
      .col-lg-1
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema2/5.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
      .col-lg-6(style="place-self:center;")
        p(data-aos="fade-up") La información que estas contienen varía según el producto farmacéutico, ya sea:
        ul.lista-ul.mt-3.mb-0
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Medicamento (homeopático, fitoterapéuticos, nutracéutico).
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Dispositivo médico.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Cosmético.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Biológico, etc.
    
    p.mt-5(data-aos="fasde-up") A continuación, se presenta un ejemplo de las características de la estructura de una ficha técnica de un producto farmacéutico, donde se evidencia lo completo que es el documento, debido a que aplica tanto para establecimientos farmacéuticos comerciales como las farmacias/droguerías, droguerías y depósitos, como para los servicios farmacéuticos, porque la información abarca temas comerciales, de almacenamiento, conservación y clínicos.

    .col-lg-8.m-auto.mt-5
      figure
        img.m-auto(src="@/assets/curso/tema2/6.svg" data-aos="zoom-in-up" alt="Imagen con una ficha técnica de un producto farmacéutico, la cual contiene la siguiente información: 1. NOMBRE DEL MEDICAMENTO. 2. COMPOSICIÓN CUALITATIVA Y CUANTITATIVA. 3. FORMA FARMACÉUTICA. 4. DATOS CLÍNICOS (indicaciones, posología, contraindicaciones, advertencias, interacciones, fertilidad, embarazo y lactancia, efectos sobre la capacidad para conducir y utilizar máquinas, reacciones adversas, sobredosis). 5. PROPIEDADES FARMACOLÓGICAS 5.1 Propiedades farmacodinámicas 5.2 Propiedades farmacocinéticas 5.3 Datos preclínicos sobre seguridad 6. DATOS FARMACÉUTICOS 6.1 Lista de excipientes 6.2 Incompatibilidades 6.3 Periodo de validez 6.4 Precauciones especiales de conservación 6.5 Naturaleza y contenido del envase 6.6 Precauciones especiales de eliminación. 7. TITULAR DE LA AUTORIZACIÓN DE COMERCIALIZACIÓN 8. NÚMERO(S) DE AUTORIZACIÓN DE COMERCIALIZACIÓN 9. FECHA DE LA PRIMERA AUTORIZACIÓN/ RENOVACIÓN DE LA AUTORIZACIÓN 10. FECHA DE LA REVISIÓN DEL TEXTO" style="max-width:350px;")
    
    .row.mt-5.p-3(style="background-color:#E6F7FE;")
      .col-lg-11.row.m-auto
        .col-lg-4.col-md-5.mb-4.mb-md-0(style="place-self:center;")
          figure
            img.m-auto(src="@/assets/curso/tema2/7.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
        .col-lg-8.col-md-7(style="place-self:center;")
          p(data-aos="fade-up") Para entender mejor la información requerida para que la ficha técnica de un medicamento esté completa, se invita al aprendiz a consultar en “ejemplo ficha técnica” donde se podrá observar de manera completa un ejemplo de la ficha técnica del medicamento Verapamilo.
          a.anexo.mt-4.bg-white(:href="obtenerLink('downloads/Anexo2_CF017_ejemplo_ficha_tecnica.pdf')" target="_blank")
            .anexo__icono
              img.m-auto(src="@/assets/template/icono-pdf.svg" style="max-width:350px;")
            .anexo__texto
              p.mb-0.fw-bold Anexo. Ejemplo ficha técnica.

    p.mt-5(data-aos="fade-up") A continuación, se presenta un ejemplo de la estructura de una ficha técnica de los dispositivos médicos, donde se pueden observar sus características:

    .col-lg-8.m-auto.mt-5
      figure
        img.m-auto(src="@/assets/curso/tema2/8.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;")
    
    .row.mt-5.p-3(style="background-color:#E6F7FE;")
      .col-lg-11.row.m-auto
        .col-lg-4.col-md-5.mb-4.mb-md-0(style="place-self:center;")
          figure
            img.m-auto(src="@/assets/curso/tema2/7.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
        .col-lg-8.col-md-7(style="place-self:center;")
          p(data-aos="fade-up") A continuación, se presenta un ejemplo de la estructura de una ficha técnica de los dispositivos médicos, donde se pueden observar sus características:
          a.anexo.mt-4.bg-white(:href="obtenerLink('downloads/Anexo3_CF017_ejemplo_ficha_tecnica_producto_terminado.pdf')" target="_blank")
            .anexo__icono
              img.m-auto(src="@/assets/template/icono-pdf.svg" style="max-width:350px;")
            .anexo__texto
              p.mb-0.fw-bold Anexo. Ficha técnica producto terminado.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2. Aplicaciones de la ficha técnica
    
    p(data-aos="fade-up") Se debe recordar que la ficha técnica es un documento de gran utilidad para todos los profesionales que hacen parte del sector farmacéutico y en general del sector salud. También es una herramienta para la autoridad sanitaria, debido a que abarca información legal y técnica de los productos farmacéuticos.
    p.mt-4(data-aos="fade-up") Tiene, entre otras, las siguientes aplicaciones:
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:end;")
        figure.figure_img1(style="position:relative;" alt="Imagen decorativa")
          img.m-auto(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-up" style="max-width:350px;")
      .col-lg-9.row
        .col-lg-4.mb-4
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 1
            p.mt-3.mb-0 Promoción del producto farmacéutico enfocado al profesional sanitario.
        .col-lg-4.mb-4
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 2
            p.mt-3.mb-0 Elaboración de guías farmacológicas.
        .col-lg-4.mb-4
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 3
            p.mt-3.mb-0 Fuente de información y consulta sobre la eficacia, seguridad del producto farmacéutico, #[strong gestión inventarios].
        .col-lg-4
        .col-lg-4.mb-4
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 4
            p.mt-3.mb-0 Actualización periódica sobre la seguridad de los productos farmacéuticos ante las autoridades sanitarias.
        .col-lg-4.mb-4
          .tarjeta-numerada.color-acento-contenido.p-5.h-100
            .tarjeta-numerada__numero
              .h2 5
            p.mt-3.mb-0 Apoyo en caso de litigios legales por mala praxis de los profesionales sanitarios.
            

      


    


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
.figure_img1:after
  content: ''
  position: absolute
  width: 130%
  bottom: 0
  height: 5px
  background-color: #455A64
</style>
