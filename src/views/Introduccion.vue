<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/intro1.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
      .col-lg-6(style="place-self:center;")
        p(data-aos="fade-up") En la actualidad todas las empresas, grandes y pequeñas, requieren abastecer sus activos, bienes y servicios para el normal desarrollo de sus actividades; por lo anterior, el sector farmacéutico no es la excepción. Tanto los servicios farmacéuticos de una institución prestadora de servicios de salud como una droguería, depósito de medicamentos y dispositivos médicos o una farmacia/droguería, deben gestionar todo el proceso de selección y adquisición con altos estándares de calidad, para que el almacenamiento se realice con una correcta manipulación y conservación de los productos y así garantizar la posterior distribución y/o dispensación de estos.
        p.mt-4(data-aos="fade-up") En el ciclo de gestión de cualquier servicio farmacéutico o farmacias de todo tipo y tamaño, se puede afirmar que generalmente las farmacias/droguerías, que mejores resultados económicos consiguen, realizan un inventario general de todos los productos farmacéuticos y cosméticos, cada uno o dos años. 
    
    p.mt-4(data-aos="fade-up") #[strong Hacer el inventario en una farmacia] consiste en la verificación manual de las cantidades físicas y reales en stock de cada producto, las cuales deben coincidir con las cantidades de cada producto registradas en el sistema o programa informático de gestión.
    p.mt-4(data-aos="fade-up") La responsabilidad es de cada agente involucrado en la recepción, almacenamiento, transporte y logística de productos farmacéuticos y dispositivos médicos, para asegurar las condiciones establecidas por los laboratorios fabricantes. Con base en lo anterior, el inventario es una herramienta importante para administrar el almacenamiento de medicamentos y dispositivos médicos. Los contenidos de los productos que la farmacia tiene en el local se detallan de forma ordenada y precisa. 



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
