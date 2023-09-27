<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Trazabilidad
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema3/1.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
      .col-lg-8(style="place-self:center;")
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto(data-aos="fade-right")
            i.fas.fa-quote-left
            h3.mb-0 Un sistema de gestión de la trazabilidad para la industria farmacéutica es lo que permite identificar y rastrear todos los productos farmacéuticos desde el fabricante hasta el proveedor de salud, minimizando así amenazas a la seguridad del paciente e ineficiencias a lo largo de la cadena de suministro.
            i.fas.fa-quote-right
        p.mt-3(data-aos="fade-right") La rastreabilidad o trazabilidad, es la capacidad de rastrear el historial, la aplicación o la ubicación de una entidad (actividad, proceso, producto, organización, individuo) a través de la información almacenada en un registro.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-right") “Le corresponde al INVIMA garantizar la identificación de los medicamentos en cualquier parte de la cadena de distribución, desde la producción hasta el consumidor final, mediante una tecnología de señalización, con el objetivo de evitar la falsificación, adulteración, vencimiento y contrabando.
    p.mt-5(data-aos="fade-left") Colombia viene trabajando en un piloto basado en la aplicación de estándares internacionales que garanticen la seguridad y calidad de los medicamentos y dispositivos médicos en todos los procesos del ciclo de gestión de cualquier servicio farmacéutico, distribuidor mayorista y sus respectivas droguerías.
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0
        .p-4(style="background-color:#F6F6F6;")
          ul.lista-ul
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Caracterizar los flujos de producto e información en el sector salud.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Identificar las oportunidades de mejora en los procesos de trazabilidad y visibilidad de la cadena de abastecimiento.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Diseñar y validar un modelo de trazabilidad y visibilidad que permita integrar la información de cada uno de los nodos, incluyendo las actividades de inspección, vigilancia y control.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Desarrollar el prototipo que pueda ser probado en una operación real.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Documentar los impactos, aprendizajes y recomendaciones que permitan mejorar el prototipo realizado.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Establecer los requerimientos técnico-funcionales mínimos de la plataforma tecnológica a utilizar para el despliegue del sistema de trazabilidad.
            li(data-aos="fade-up")
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Establecer hoja de ruta para la implementación a nivel nacional.
          p.mt-4(data-aos="fade-up") (GS1, 2017). Ley 1122 de 2007, en su numeral 34, literal d. 
      .col-lg-4
        figure
          img.m-auto(src="@/assets/curso/tema3/2.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    Separador
    .titulo-segundo
      h2#t_3_1 3.1 #[em Stock]
    .cont_3_1.pt-5.pb-5
      .col-lg-10.row.m-auto
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img.m-auto(src="@/assets/curso/tema3/3.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:550px;")
        .col-lg-4(style="place-self:center;")
          .p-4.cont_responsive2(data-aos="fade-left" style="background-color:#F6F6F6;width:150%;left:-70%;right: 0;border-radius:40px 40px 40px 0px;position:relative;z-index:2;box-shadow:0px 0px 30px rgba(0,0,0,.2);")
            p.mb-0 En una farmacia o droguería, el inventario se realiza para conocer el surtido y la circulación de los productos. De acuerdo con lo anterior se tendrá una idea precisa y concreta de los productos disponibles y permite decidir cuándo realizar un pedido con el proveedor. Este cálculo se denomina pedido anticipado porque el momento exacto para solicitar el medicamento depende de la tasa de consumo y el tiempo de rotación.
    p.mt-5(data-aos="fade-right") A continuación, se describen los tipos de #[em stock] según su función en el proceso de inventario (ver tabla 1):
    .titulo-sexto.color-acento-botones.mt-5(data-aos="fade-right")
      p.mb-0 #[b Tabla 1]. Tipos de #[em stock]
    .tabla-a.color-acento-contenido.mt-5(data-aos="fade-down")
      table
        caption.fw-normal(style="backgorund-color:#E8E8E8;") Nota. Tomada de McGraw Hill España. La gestión de #[em stock]. (s.f.).
        thead
          tr(style="background-color:#7FDDE9;")
            th.p-4.text-center(style="border:0;") Función
            th.p-4.text-center(style="border:0;") Descripción
            th.p-4.text-center(style="border:0;") Ejemplo
        tbody
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de ciclo
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias para cubrir la demanda mientras llega el próximo pedido.
            td.p-4(style="border:0;") Si una tienda vende 10 cartones de leche al día y el lechero pasa cada tres días, necesitará 30 cartones hasta la llegada del siguiente pedido.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] estacional
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias disponibles para aumentos esperados de la demanda.
            td.p-4(style="border:0;") Las fábricas de turrón necesitan más existencias cuando se aproxima la campaña de navidad.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de tránsito
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias pendientes de ser entregadas (o terminadas de fabricar) y en el trayecto de destino.
            td.p-4(style="border:0;") Una empresa tiene tres cajas de conservas paletizadas para entregarlas al cliente.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] óptimo
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Nivel adecuado de existencias almacenadas para atender la posible demanda, pero sin generar un exceso inútil.
            td.p-4(style="border:0;") En las fiestas de carnaval, una tienda de disfraces debe contar con un aumento de mercancía en el almacén para satisfacer la demanda, pero sin exceso para no generar #[em stock] muerto después de la temporada.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de seguridad
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias previstas para hacer frente a un incremento puntual de la demanda o a un retraso en la entrega del pedido.
            td.p-4(style="border:0;") Una librería está pendiente de recibir el pedido de cuadernos en septiembre y el proveedor se retrasa. Si tiene cuadernos extras, podrá compensar el retraso y atender la demanda en ese lapso.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de presentación
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias expuestas al público en el comercio.
            td.p-4(style="border:0;") La ropa expuesta en un escaparate.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de especulación
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Se compran existencias ante un futuro incremento de los precios o ante la dificultad de su suministro.
            td.p-4(style="border:0;") Una empresa compra aceite en cantidad después de saber que el próximo año habrá poca cosecha de aceituna.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de anticipación
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] que se acumula ante un incremento previsto de las ventas.
            td.p-4(style="border:0;") Se lanza una campaña de publicidad que dará lugar a un aumento de las ventas del 1%.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] de recuperación
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias usadas que se pueden volver a utilizar en su totalidad o al menos en parte.
            td.p-4(style="border:0;") Envases de vidrio de una industria embotelladora.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] muerto
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Existencias que no pueden ser reutilizadas ni vendidas por un cambio en la demanda o en las necesidades del cliente.
            td.p-4(style="border:0;") Una tienda posee artículos obsoletos de hace dos temporadas y no hay demanda real para adquirir el producto.
          tr(style="background-color:#FAFAFA;")
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") #[em Stock] máximo
            td.p-4(style="border:0;border-right:1px #E1E1E1 solid;") Cantidad máxima de existencias que es posible almacenar.
            td.p-4(style="border:0;") Un almacén donde solo hay espacio para 20 cajas en las estanterías y 10 más apiladas en el suelo. No se podrá pedir más mercancía hasta que se libere ese espacio.
    p.mt-5(data-aos="fade-right") La siguiente imagen presenta gráficamente algunos de estos #[em stocks] (ver figura 2).
    .col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        p.mb-0 #[b Figura 2]. Gráfico tipos de #[em stock]
      figure.mt-5(data-aos="fade-left")
        img.m-auto(src="@/assets/curso/tema3/5.svg" data-aos="zoom-in-up" alt="Imagen con algunos stock, los cuales son: Stock máximo Stock muerto Stock de tránsito Stock de ciclo Stock de seguridad Stock muerto Stock de presentación" style="max-width:1150px;")
        figcaption.fw-normal.mt-3(style="backgorund-color:#E8E8E8;") Nota.Adaptada de McGraw Hill España. La gestión de #[em stock]. (s.f.).
      .row.mt-5(data-aos="fade-down")
        .col-lg.p-0
          figure
            img.m-auto(src="@/assets/curso/tema3/6.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
        .col-lg.p-0
          .p-5.h-100.d-flex.align-items-center(style="background-color:#D3EFFC;")
            p.mb-0 El #[em stock] o existencias, es el conjunto de productos almacenados por una empresa. Estas existencias se refieren no solo a los medicamentos y dispositivos médicos, sino también a las materias primas de las centrales de mezclas y a los productos terminados dispuestos para ser entregados a clientes.
        .col-lg.p-0
          figure
            img.m-auto(src="@/assets/curso/tema3/7.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    p.mt-5(data-aos="fade-right") La gestión de #[em stocks] está muy ligada con la evaluación contable de las existencias como activos en la contabilidad de las empresas, en este caso de los depósitos de medicamentos, farmacias o droguerías. Como resultado de las variables contables de un negocio, han surgido distintas estrategias de gestión de #[em stocks], que no tienen relación con la contabilidad. Estas pueden ser:
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:end;")(data-aos="fade-right")
        figure.figure_img1(style="position:relative;" alt="Imagen decorativa")
          img.m-auto(src="@/assets/curso/tema3/8.svg" style="max-width:250px;")
      .col-lg-8.row(data-aos="fade-left")
        .row.justify-content-center
          .col-md-8.col-lg-6.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 1
              h4 FEFO
              p.mt-3.mb-0 First Expiry First Out: de uso fundamentalmente en la industria alimentaria, en la industria farmacéutica el producto más cercano a su caducidad es el primero en salir.
          .col-md-8.col-lg-6.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 2
              h4 FIFO
              p.mt-3.mb-0 First In First Out: el primer producto que entró en el almacén será el primero en salir
          .col-md-8.col-lg-6.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 3
              h4 LIFO
              p.mt-3.mb-0 Last In First Out: el último producto en el almacén será el primero en salir.
          .col-md-8.col-lg-6.mb-4
            .tarjeta-numerada.color-acento-contenido.p-5.h-100
              .tarjeta-numerada__numero
                .h2 4
              h4 HIFO
              p.mt-3.mb-0 Highest In First Out: el producto del que se tengan mayores existencias es el primero en salir.
    Separador
    .titulo-segundo
      h2#t_3_2 3.2 Funciones del #[em stock] en un servicio farmacéutico – farmacia droguería
    p(data-aos="fade-up") A continuación, se describen las funciones del #[em stock] en servicios farmacéuticos.
    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario--borde.pt-4.ps-4(titulo="Reguladora")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Ante el desconocimiento de la evolución del mercado en el sector, la empresa podrá hacer frente a incrementos en las ventas ¿Cuánto hay que comprar? ¿Cada cuánto hay que comprar? Por lo anterior pueden suceder dos cosas: compro más de lo que se vende o no compro lo suficiente y cuando llega el cliente no hay lo que necesita.
          .col-lg-5
            figure.d-flex.justify-content-end
              img(src="@/assets/curso/tema3/9.svg" alt="Imagen decorativa" style="max-width:350px;")
      .tarjeta.color-secundario--borde.pt-4.ps-4(titulo="Comercial")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Facilita el movimiento del producto, permitiendo cumplir con los plazos y condiciones pactadas con los clientes. Por ejemplo, de acuerdo a las condiciones de almacenamiento recomendadas por el laboratorio productor, se puede programar la entrega del medicamento al paciente.
          .col-lg-5
            figure.d-flex.justify-content-end
              img(src="@/assets/curso/tema3/10.svg" alt="Imagen decorativa" style="max-width:350px;")
      .tarjeta.color-secundario--borde.pt-4.ps-4(titulo="Económica")
        .row
          .col-lg-7.mb-4.mb-lg-0
            p.mb-0 Al comprar grandes volúmenes de mercancía o lotes completos de productos específicos, es posible negociar mejores precios y condiciones de pago, es decir, economías de escala.
          .col-lg-5
            figure.d-flex.justify-content-end
              img(src="@/assets/curso/tema3/11.svg" alt="Imagen decorativa" style="max-width:350px;")
    p.mt-5(data-aos="fade-up") En empresas como las Instituciones Prestadoras de Servicios de Salud (IPS), el manejo de los niveles de medicamentos e insumos como dispositivos médicos, y elementos de protección personal para la prestación del servicio de salud al paciente, en unidades quirúrgicas o en la unidad de cuidados intensivos, resulta difícil debido a factores como:
    .row.mt-5.col-lg-10.m-auto
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema3/12.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:550px;")
      .col-lg-6(style="place-self:center;")
        .p-4.h-100(style="background-color:#F6F6F6;")
          ul.lista-ul.mb-0
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#FF9D00;")
              | La alta variabilidad de la demanda de servicios.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#FF9D00;")
              | La dinámica de los convenios con proveedores externos.
            li.d-flex(data-aos="fade-up")
              i.fas.fa-atom(style="color:#FF9D00;")
              | La atención de lo inesperado e impredecible.
            li.d-flex.mb-0(data-aos="fade-up")
              i.fas.fa-atom(style="color:#FF9D00;")
              | Otros factores como los derivados de la alta complejidad y el estrés situacional del servicio.
      .cajon.color-secundario.p-4.mt-5(style="background-color:#E4DDFA;")
        p.mb-0.fw-bold(data-aos="fade-up") ¿Sabía que una característica común a todos los productos farmacéuticos es la necesidad de mantenerlos en constante movimiento?
        p.mt-4.mb-0(data-aos="fade-up") Esto se debe a que el proceso de fabricación requiere que la materia prima se extraiga del entorno natural y luego se convierta en un proceso de fabricación para convertirlo en un producto terminado comercializable. Si no se cumplen, la cadena de suministro pierde su significado, convirtiendo la pérdida de ingresos debido a la falta de inventario de ciertos productos en tiendas físicas o virtuales, una de las fallas más comunes para las empresas y, lamentablemente, los clientes están mal acostumbrados.
    p.mt-5(data-aos="fade-up") Con el fin de complementar la información tratada, se invita a ver el vídeo “Manejo de #[em stock] en la farmacia” del material complementario.
    .row.mt-5.p-3(style="background-color:#E6F7FE;")
      .col-lg-11.row.m-auto
        .col-lg-4.col-md-5.mb-4.mb-md-0(style="place-self:center;")
          figure
            img.m-auto(src="@/assets/curso/tema3/13.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;")
        .col-lg-8.col-md-7(style="place-self:center;")
          p(data-aos="fade-up") En la presentación “Gestión de inventarios” se podrá encontrar información y material adicional en relación con las temáticas tratadas.
          a.anexo.mt-4.bg-white(:href="obtenerLink('downloads/OKEst_Anexo1_CF017_Gestion_inventarios.pptx')" target="_blank")
            .anexo__icono
              img.m-auto(src="@/assets/template/icono-ppt.svg" style="max-width:350px;")
            .anexo__texto
              p.mb-0.fw-bold Anexo. Gestión inventarios.
    Separador
    .titulo-segundo
      h2#t_3_3 3.3 Demanda/oferta
    .row
      .col-md.p-0
        .h-100.p-5.text-center(style="background-color:#E6F7FE;border-radius:20px 0px 0px 20px;")
          figure.col-4.m-auto
            img.m-auto(src="@/assets/curso/tema3/14.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;")
          h3.mt-5(data-aos="fade-up") Demanda:
          p.mt-4(data-aos="fade-up") Se refiere a la cantidad de bienes o servicios que se solicitan o se desean en un determinado mercado de una economía a un precio específico.
      .col-md.p-0
        .h-100.p-5.text-center(style="background-color:#99E4EE;border-radius:0px; 20px 20px 0px;")
          figure.col-4.m-auto
            img.m-auto(src="@/assets/curso/tema3/15.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;")
          h3.mt-5(data-aos="fade-up") Oferta:
          p.mt-4(data-aos="fade-up") Hace referencia a la cantidad de bienes, productos o servicios que se ofrecen en un mercado bajo unas determinadas condiciones.
    .row.m-auto.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema3/16.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:550px;")
      .col-lg-4(style="place-self:center;")
        .p-4.pt-5.pb-5.cont_responsive2(data-aos="fade-left" style="background-color:#CDEDFC;width:150%;left:-70%;right: 0;border-radius:40px 40px 40px 0px;position:relative;z-index:2;box-shadow:0px 0px 30px rgba(0,0,0,.2);")
          p.mb-0 En este sentido, la demanda de los productos farmacéuticos se podría considerar como una demanda que se deriva de la demanda por servicios médicos, ya que esta se constituye como el punto de partida para la prescripción médica (mercado ético), distribución y consumo final.
          p.mt-4.mb-0 Todos estos factores afectan los inventarios en cuanto a la rotación de los productos farmacéuticos, ya que, a mayor demanda de estos, dicha rotación es también mayor y se podrán ofrecer con mayor regularidad estos productos.
    Separador
    .titulo-segundo
      h2#t_3_4 3.4 Precio, costo y utilidad de los productos farmacéuticos
    .row
      .col-lg-1
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") De manera general se define como costo al precio pagado por un bien o servicio, este es asumido por el comprador. El precio es un término utilizado para la cantidad que inicialmente se pide, ofrece o paga por un bien o servicio.
        p.mt-4(data-aos="fade-up") Si se resta al precio de venta, los costos, gastos y ese resultado es una diferencia positiva, a esto se le considera utilidad.
      .col-lg-4(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema3/17.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")
    .col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-secundario.p-4.p-md-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure.text-center
              img.m-auto(src="@/assets/curso/tema3/18.svg" data-aos="fade-right" style="max-width:150px;display:inline;" alt="Imagen decorativa")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0(data-aos="fade-up") #[strong Ejemplo:] el precio del medicamento Verapamilo 120 mg caja por 30 tabletas es de $7000 y los gastos generados son $2000, dicha diferencia será de $5000. A esto se le considerará la utilidad de cada caja vendida de este medicamento.
    Separador
    .titulo-segundo
      h2#t_3_5 3.5 Política de inventarios
    .cont_3_2.row.pt-5
      .col-lg-7.col-md-7.mb-4.mb-md-0(style="place-self:center;")
        p(data-aos="fade-up") Los productos farmacéuticos son los activos más importantes de los proveedores de atención médica o servicios de salud, las farmacias, los depósitos mayoristas y minoristas; las farmacias o droguerías, deben administrarse de la manera más eficiente y efectiva posible, es por ello que en la gestión de inventarios debe hacerse un control estricto en el #[em stock], en los deterioros y en las fechas de vencimientos. 
        p.mt-4(data-aos="fade-up") La administración de cada servicio farmacéutico define la política de inventario que se aplicará en determinada empresa o negocio del sector farmacéutico; básicamente se busca el punto de equilibrio para hacer rentable todo el proceso. Generalmente se determina de acuerdo con el costo de los productos farmacéuticos frente a la demanda o utilización de estos. Entre los indicadores más utilizados para generar la Política de inventarios se encuentran:
        ul.lista-ul.mb-0.mt-4
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Costo directo de reabastecer el inventario.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Costo de mantener unidades en inventario.
          li.d-flex(data-aos="fade-up")
            i.fas.fa-atom(style="color:#FF9D00;")
            | Costo de tener un faltante de unidades.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") El objetivo de la Política de inventarios es minimizar el costo total de inventario por unidad de tiempo (1 año).
      .col-lg-5.col-md-5(style="place-self:center;")
        figure
          img.m-auto(src="@/assets/curso/tema3/19.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;")

</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema3/4.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.bloque-texto-a.color-secundario
  background-color: #E8E8E8
.bloque-texto-a.color-secundario:before
  background-color: #9FCAF2
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background: url(../assets/curso/tema3/20.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: top
</style>
