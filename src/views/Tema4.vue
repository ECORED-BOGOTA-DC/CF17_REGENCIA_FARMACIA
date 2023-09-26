<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Control de rotación de los productos farmacéuticos
    .row.cont_4_1
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema4/2.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:650px;")
      .col-lg-4(style="place-self:center;")
        .p-4.cont_responsive2.pt-5.pb-5(data-aos="fade-left" style="background-color:#CDEDFC;width:100%;left:-40%;right: 0;border-radius:40px 40px 0px 40px;position:relative;z-index:0;box-shadow:0px 0px 30px rgba(0,0,0,.2);")
          p.mb-0 Cometer errores durante la revisión del inventario en la rotación de los productos farmacéuticos, puede generar devoluciones de los clientes, tiempo perdido, stock caducado y pérdida de imagen del producto; esto sin mencionar el riesgo que representa para la salud del paciente el consumo o utilización de un producto vencido o en mal estado.
    .col-lg-8.m-auto.mt-5
      ImagenInfografica.color-acento-botones.infografia2
        template(v-slot:imagen)
          figure
            img.m-auto(src='@/assets/curso/tema4/3.svg' data-aos="fade-left" alt="Imagen que contiene un ejemplo de FEFO y FIFO, en la cual se indica lo siguiente: FEFO: con este método los productos con fechas de caducidad o vencimiento más cercanas tendrían que ser los primeros en salir del almacén. Método para registrar especialmente artículos perecederos el primero que expira, vence o caduca, será el primero que sale, conservando en el almacén una rotación de inventario. FIFO: método para registrar el valor de un inventario. Su uso es apropiado cuando se cuenta con varios lotes de un mismo artículo o producto. Este método supone que el primer artículo ingresado en el almacén será el primero en salir por efectos de inventario." style="max-width:850px;")
        .tarjeta.color-acento-botones.p-4(x="30%" y="1%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
          .h5.mb-2(style="color: #12263F") FEFO
          p.mb-0(style="color: #12263F") Con este método los productos con fechas de caducidad o vencimiento más cercanas tendrían que ser los primeros en salir del almacén. Método para registrar especialmente artículos perecederos el primero que expira, vence o caduca, será el primero que sale, conservando en el almacén una rotación de inventario.
        .tarjeta.color-acento-botones.p-4(x="70%" y="1%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
          .h5.mb-2(style="color: #12263F") FIFO
          p.mb-0(style="color: #12263F") Método para registrar el valor de un inventario. Su uso es apropiado cuando se cuenta con varios lotes de un mismo artículo o producto. Este método supone que el primer artículo ingresado en el almacén será el primero en salir por efectos de inventario.
    Separador
    .titulo-segundo
      h2#t_4_1 4.1 Semaforización de los medicamentos, productos farmacéuticos y dispositivos médicos
    p(data-aos="fade-left") Es el proceso de identificación de los productos farmacéuticos próximos a vencer, de manera simple y rápida. En este, se logra identificar el rango de fecha de vencimiento para ser comercializado.
    .col-lg-6.m-auto.mt-5
      figure
        img.m-auto(src="@/assets/curso/tema4/4.svg" data-aos="fade-right" alt="Imagen que contiene la representación de la semaforización de los medicamentos, la cual tiene el siguiente significado por sus colores: Verde: Vencimiento >6 meses Amarillo: Vencimiento >3 meses y <6 meses Rojo: Vencimiento <3 meses" style="max-width:750px;")
    Separador
    .titulo-segundo
      h2#t_4_2 4.2 Control de existencias o movimientos
    p(data-aos="fade-left") Se pretende comparar el inventario real con el inventario que muestra el #[em software] de información, en función del movimiento de los productos que entran y salen de la empresa.
    .row.mt-5.cont_4_2.m-auto.pt-5
      .col-lg.mb-4.mb-lg-0
        figure
          img.m-auto(src="@/assets/curso/tema4/6.svg" data-aos="fade-right" alt="Imagen que representa la comparación entre Sistema (software) y Unidades físicas" style="max-width:350px;")
      .col-lg
        figure
          img.m-auto(src="@/assets/curso/tema4/7.svg" data-aos="fade-left" alt="Imagen que representa la comparación entre Sistema (software) y Unidades físicas" style="max-width:650px;")
    Separador
    .titulo-segundo
      h2#t_4_3 4.3 Control de los deterioros
    .mt-5.cont_4_2.m-auto
      .col-lg-11.m-auto.row.pt-4.pb-4
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img.m-auto(src="@/assets/curso/tema4/8.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:650px;")
        .col-lg-4(style="place-self:center;")
          .p-4.cont_responsive2.pt-5.pb-5(data-aos="fade-left" style="background-color:#fff;width:130%;left:-40%;right: 0;border-radius:40px 40px 40px 0px;position:relative;z-index:2;box-shadow:0px 0px 30px rgba(0,0,0,.2);")
            p.mb-0 Se habla de deterioros cuando se refiere a daños, averías o a posibles pérdidas de medicamentos o dispositivos médicos, por obsolescencia programada, vencimientos o regulares condiciones de conservación y transporte. El control de las características fisicoquímicas y la estabilidad del producto farmacéutico se deben controlar durante los procesos de recepción y almacenamiento, por lo anterior si se reciben productos no conformes, es prioritario hacer las devoluciones respectivas en las Actas de Devoluciones.
    .row.mt-5
      .col-lg-4.mb-5.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema4/9.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-left") Igualmente, si durante el proceso de inventario se detectan productos farmacéuticos deteriorados o vencidos, que no fueron identificados con anterioridad se debe informar para hacer el ajuste respectivo, dando de baja aquellos que no pueden ser distribuidos o dispensados, lo cual significa una perdida en los activos de la empresa.
        p.mt-4(data-aos="fade-left") El inventario es un elemento fundamental entre los procesos de oferta y demanda, porque se ve afectado por diferentes factores, como son las diferencias de precio lo cual modifica la oferta. Entre otros tenemos: factores internos creados por políticas que la empresa puede implementar; mientras que los factores externos son creados por situaciones sobre las que la empresa no tiene control. Se puede hablar de factores controlables, como la cantidad a pedir, la fecha y costo del pedido; mientras que los factores no controlables como la demanda, el plazo de entrega, la caducidad o vencimiento, espacio para el almacenamiento y los costos de gestión; en determinado momento pueden hacer que una farmacia o droguería no alcance su punto de equilibrio y fácilmente llegue a perder dinero poniendo en riesgo su punto de equilibrio.
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0
        p(data-aos="fade-left") El inventario en una central de mezclas o en un servicio de unidosis, es clasificado por el sistema de producción en función del valor agregado:
        ul.lista-ul.mt-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Seguridad para el paciente.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Menor número de eventos adversos. 
        p.mt-4(data-aos="fade-up") La clasificación es la siguiente:
        ul.lista-ul.mt-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Materias primas.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Trabajos en proceso.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Productos terminados.
        p.mt-4(data-aos="fade-up") Las materias primas se refieren a los materiales necesarios para fabricar un producto e incluyen todos los requeridos para el ensamblaje que necesitan un procesamiento adicional. 
      .col-lg-4(style="place-self:end;")
        figure
          img.m-auto(src="@/assets/curso/tema4/10.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")

</template>

<script>
export default {
  name: 'Tema4',
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
.cont_4_1, .cont_4_1 *
  position: relative
.cont_4_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema4/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.infografia2.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
.cont_4_2, .cont_4_2 *
  position: relative
.cont_4_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema4/5.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
