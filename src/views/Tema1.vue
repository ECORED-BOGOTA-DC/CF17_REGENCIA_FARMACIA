<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inventarios

    .row
      .col-lg-4.mb-5.mb-lg-0.cont_1_1(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") El inventario es una relación organizada de bienes y existencias (en este caso productos farmacéuticos), de una entidad o empresa (servicio o establecimiento farmacéutico), a una fecha determinada. Contablemente es una cuenta de activos en circulación que representan el valor de las mercancías existentes en un almacén.
        p.mt-4(data-aos="fade-up") Los inventarios son un punto crítico en las empresas del sector farmacéutico, convirtiéndose en uno de los indicadores de servicio y respuesta eficiente al paciente. Los niveles de demanda de medicamentos y dispositivos médicos constituyen los datos de entrada para la planeación y control de todas las áreas funcionales de las instituciones prestadoras de servicios de salud, incluyendo logística, marketing, producción y finanzas. La adquisición y almacenamiento de productos farmacéuticos es una tarea compleja que requiere de mucho tiempo, el inventario es continuo, ya que la entrada y salida de productos es constante. 
    
    br
    h4.mt-5(data-aos="fade-up") Es muy importante recordar que de acuerdo con la resolución 1403 del 2007:

    .row.mt-4
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto(data-aos="fade-right")
            i.fas.fa-quote-left
            h3.mb-0 Criterios de almacenamiento. Los dispositivos médicos y los medicamentos se almacenarán de acuerdo con la clasificación farmacológica (medicamentos) en orden alfabético o cualquier otro método de clasificación, siempre y cuando se garantice el orden, se minimicen los eventos de confusión, pérdida y vencimiento durante su almacenamiento. El sistema de segregación de los dispositivos médicos y medicamentos debe garantizar que el lote más próximo a vencerse sea lo primero en dispensarse.
            i.fas.fa-quote-right
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/3.svg" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") El desarrollo y control del inventario de una farmacia o servicio farmacéutico, está directamente relacionada con el volumen de su actividad diaria, con el nivel de complejidad en el cual se ejecuta; por lo tanto, el inventario de una empresa del sector farmacéutico depende del tamaño, volumen, estructura y características y principalmente a los procesos de selección y adquisición de medicamentos, dispositivos médicos y productos farmacéuticos, que constituyen las existencias reales de la empresa. 

    .row.cont_1_2.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.png" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-5(style="place-self:center;")
        .p-4.cont_responsive2(data-aos="fade-left" style="background-color:#F6F6F6;width:150%;left:-70%;right: 0;border-radius:0px 40px 40px 0px;position:relative;z-index:2;")
          p Las farmacias o droguerías cuentan con un gran #[em stock] de productos farmacéuticos, como son:
          ul.lista-ul.mt-3.mb-0
            li 
              i.fas.fa-atom(style="color:#FF9D00;")
              | Medicamentos.
            li 
              i.fas.fa-atom(style="color:#FF9D00;")
              | Dispositivos médicos.
            li 
              i.fas.fa-atom(style="color:#FF9D00;")
              | Productos de cosmetología.
            li 
              i.fas.fa-atom(style="color:#FF9D00;")
              | Medicamentos homeopáticos.
            li 
              i.fas.fa-atom(style="color:#FF9D00;")
              | Productos fitoterapeuticos. 
            li.mb-0
              i.fas.fa-atom(style="color:#FF9D00;")
              | Entre otros.

    p.mt-5(data-aos="fade-up") Todos ellos se deben comprar y mantener para no quedarse sin existencias y poder distribuir, dispensar o venderlos a pacientes y clientes.
    p.mt-4(data-aos="fade-up") La figura 1 representa el proceso de realizar una toma física de inventario:

    .col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones.mt-5
        h5.d-block Figura 1
        span #[em Toma inventario físico]
      figure.mt-5
        img(src="@/assets/curso/tema1/6.png" data-aos="zoom-in-up" alt="Imagen con una persona haciendo un inventario en una bodega")
    
    p.mt-5(data-aos="fade-up") Las existencias de productos en las farmacias tienen ciertas características:

    .col-lg-10.m-auto.mt-5
      .tarjeta-avatar-b(data-aos="fade-up")
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema1/7.svg' style="max-width:150px;")
        .tarjeta.tarjeta--azul.d-flex.align-items-center(style="background-color:#F1EEFC;border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:7px #7E5EE3 solid;")
          .p-1
            p.mb-0 Productos similares en su nombre o empaque.
      .tarjeta-avatar-b.mt-4(data-aos="fade-up")
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema1/8.svg' style="max-width:150px;")
        .tarjeta.tarjeta--azul.d-flex.align-items-center(style="background-color:#F1EEFC;border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:7px #7E5EE3 solid;")
          .p-1
            p.mb-0 Fechas de vencimiento.
      .tarjeta-avatar-b.mt-4(data-aos="fade-up")
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema1/9.svg' style="max-width:150px;")
        .tarjeta.tarjeta--azul.d-flex.align-items-center(style="background-color:#F1EEFC;border-top-right-radius:0px;border-bottom-right-radius:0px;border-right:7px #7E5EE3 solid;")
          .p-1
            p.mb-0 Algunos medicamentos tienen una vida útil corta, mientras que otros requieren de condiciones especiales de almacenamiento para asegurar la cadena de frío, por lo que deben tratarse con precisión durante el almacenamiento, como si se tratara de alimentos frescos.
    
    p.mt-5(data-aos="fade-up") El inventario depende del tipo de demanda que tenga el producto farmacéutico, la cual puede ser de dos tipos: 

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
      .col-lg-9.row
        .col-lg-6.mb-4.mb-lg-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 1
            h4 Determinística
            p.mt-3.mb-0 La demanda del producto para un período de tiempo futuro es conocida con exactitud (esto solo se puede dar en el caso de empresas que trabajan bajo pedido).
        .col-lg-6.mb-4.mb-lg-0
          .tarjeta-numerada.color-acento-contenido.p-5
            .tarjeta-numerada__numero
              .h2 2
            h4 Probabilística
            p.mt-3.mb-0 La demanda del producto para un período de tiempo futuro no se conoce con certeza, pero se le puede asignar una distribución de probabilidad a su ocurrencia.
    
    p.mt-5.fw-bold(data-aos="fade-up") Conceptos generales de inventario
    p.mt-3(data-aos="fade-up") Es importante reconocer la terminología relacionada con los inventarios. En el glosario encontrará los conceptos generales pertenecientes a esta actividad, la cual se lleva a cabo en los servicios y establecimientos farmacéuticos.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Componentes de un inventario

    p(data-aos="fade-up") Para garantizar el correcto desarrollo de un inventario, es necesario contar con una serie de componentes y materiales para su ejecución, entre ellos se encuentran:

    .col-lg-6.mt-5.m-auto
      figure
        img(src="@/assets/curso/tema1/11.svg" data-aos="zoom-in-up" alt="Imagen que indica los componentes de un inventario, los cuales son: 1. Personal capacitado 2. Papelería: lápiz, papel, etc. 3. Productos farmacéuticos 4. Software de gestión")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Tipos de inventarios, descripción y periodicidad
    
    p(data-aos="fade-up") Esta gestión se realiza mediante la ejecución de diferentes tipos de inventario, dependiendo de la cantidad de mercancías manipuladas, de la siguiente manera:

    .tarjeta.tarjeta--azul.p-5.mt-5(style="background-color:#DEE4F0;")
      SlyderA(tipo="b")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            h4 Inventario general: 
            ul.fa-ul.mt-3
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Indica si se han tenido ganancias durante un período no inferior a 6 meses o 1 año.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Es requerido por ley y es necesario incluirlo en el balance general de la empresa.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se comparan las cantidades y se genera la diferencia entre la información disponible en el sistema y la existencia física.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se evalúan e identifican las diferencias más importantes y significativas para finalmente, realizar el ajuste relativo de #[em stocks], tomando en cuenta las políticas institucionales que definen la gestión de excedentes y desabastecimientos.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Si la diferencia encontrada entre los dos conteos anteriores, se debe ejecutar nuevamente dos conteos físicos en el 100% del producto y un tercer conteo en paralelo con el del #[em software].
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/12.png" alt="Imagen decorativa")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            h4 Inventario periódico: 
            ul.fa-ul.mt-3
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Contempla la totalidad de la cadena de abastecimientos de los productos farmacéuticos, en vez de centrarse en un lugar o sitio particular.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se realiza el seguimiento continuo de la tendencia de un producto, entradas y salidas, ya sea por su alto costo u otra característica importante.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se basa en las tecnologías de la información como lectura por scanner o tecnología de Radiofrecuencia (RFID).
            .bloque-texto-b.color-secundario.p-4.mt-3.bloque-texto1
              .bloque-texto-b__texto(data-aos="fade-right")
                i.fas.fa-quote-left
                h4.mb-0 RFID o identificación por radiofrecuencia (del inglés Radio Frequency Identification) es un sistema de almacenamiento y recuperación de datos remotos que usa dispositivos denominados etiquetas, tarjetas o transpondedores RFID. El propósito fundamental de la tecnología RFID es transmitir la identidad de un objeto (similar a un número de serie único) mediante ondas de radio. Las tecnologías RFID se agrupan dentro de las denominadas Auto ID (#[em Automatic Identification], o identificación automática).
                i.fas.fa-quote-right
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/13.png" alt="Imagen decorativa")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            h4 Inventario permanente:
            ul.fa-ul.mt-3
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se realiza a intervalos regulares de acuerdo con la política comercial del establecimiento o empresa.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | No todos los productos se cuentan en cada inventario, pero se especifica por un período mínimo establecido, durante el cual se debe ejecutar el 100% del inventario.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Debe realizarse diariamente, incluye la verificación física de un grupo de fármacos específicos por laboratorio comercial o propiedades farmacológicas y la comparación con el inventario registrado en el sistema.
              li.mb-3
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Se puede aplicar a aquellos grupos de medicamentos o insumos de alta rotación, alto costo y de control especial, lo que va a permitir un control rápido de las inconsistencias y a favorecer las acciones correctivas.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/14.png" alt="Imagen decorativa")
        .row.col-xl-11.m-auto
          .col-lg-6.mb-4.mb-lg-0
            h4 Tecnología:
            p.mt-3 Actualmente, la tecnología más utilizada en las empresas y negocios del sector farmacéutico, para la identificación de los productos farmacéuticos, es de #[strong códigos de barras], los cuales presentan algunas desventajas, como la imposibilidad de ser reprogramados; lo que representa un mayor costo y un reproceso; razón por la cual las etiquetas RFID, dispositivos pequeños, similares a una etiqueta adhesiva, que pueden  adherirse a el empaque o caja de un producto, lo que contienen dispositivos especiales que permite recibir y responder por radiofrecuencia desde un emisor-receptor RFID.
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/15.png" alt="Imagen decorativa")

    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3 Características de los inventarios

    p(data-aos="fade-up") Las tres características que identifican a los inventarios, son:

    ImagenInfografica.color-acento-botones.mt-5.infografia1
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/16.svg' data-aos="zoom-in-up" alt="Imagen decorativa")
      .tarjeta.color-acento-botones.p-3(x="35%" y="45%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
        p(style="color:#12263F;") #[strong(style="color:#12263F;") Registran información:] se realizan las inspecciones de las entradas y salidas de los productos farmacéuticos del servicio o establecimiento farmacéutico, luego dicha información resultante se debe registrar.
      .tarjeta.color-acento-botones.p-3(x="35%" y="55%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
        p(style="color:#12263F;") #[strong(style="color:#12263F;") Incluyen descripciones detalladas:] se realiza una descripción muy detallada, clara y precisa a cada uno de los productos farmacéuticos (nombre genérico, comercial, presentación, forma farmacéutica, etc.), materias primas y bienes en general.
      .tarjeta.color-acento-botones.p-3(x="35%" y="65%" numero="3" style="background-color:#E0D9F6;border-radius:0px;")
        p(style="color:#12263F;") #[strong(style="color:#12263F;") Se valoran empleando unidades monetarias:] su valor económico es determinado en sólo una unidad de medida estándar. 
        p.mt-3.mb-0(style="color:#12263F;") Ejemplo: pesos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 8%
  height: 100%
  background: url(../assets/curso/tema1/1.png)
  background-size: contain
  background-repeat: no-repeat
  background-position: left
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema1/4.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
