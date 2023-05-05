export default {
  global: {
    componenteFormativo: 'Gestión de inventarios de un servicio farmacéutico.',
    descripcionCurso:
      'El Tecnólogo de Regencia de Farmacia debe planear las compras, con base en la oportuna estimación de necesidades reales de productos farmacéuticos, medicamentos, cosméticos y dispositivos médicos, de acuerdo con la demanda del sector.  Durante el proceso de almacenamiento de estos productos, la realización del inventario permite evidenciar lo que puede ofertar y la forma de lograr fidelidad del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de un inventario',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de inventarios, descripción y periodicidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características de los inventarios',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos y características',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ficha técnica de los productos farmacéuticos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Aplicaciones de la ficha técnica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Trazabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Stock',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Funciones del stock en un servicio farmacéutico – farmacia droguería',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Demanda/oferta',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Precio, costo y utilidad de los productos farmacéuticos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Política de inventarios',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Control de rotación de los productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Semaforización de los medicamentos, productos farmacéuticos y dispositivos médicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Control de existencias o movimientos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control de los deterioros',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Consecuencias de no hacer un buen inventario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Procedimiento para hacer inventario',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Kardex',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Inventarios',
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. 14 de mayo 2007.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo4_CF017_resolución_1403_2007.pdf',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección-Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 6 mayo de 2016.',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo6_CF017_decreto_780_de_2016_Sector_Salud_y_Protección_Social.pdf',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Resolución 2955 2007. [Ministerio de la Protección Social]. Por la cual se modifican algunos numerales del Manual de Condiciones Esenciales y Procedimientos del Servicio Farmacéutico, adoptado mediante Resolución 1403 de 2007 y se dictan otras disposiciones. 27 de agosto 2007.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo5_CF017_resolución_2955_de_2007.pdf',
    },
    {
      tema: 'Stock',
      referencia: 'Kairos, C. (2020). Manejo de stock en la farmacia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pOnRvwRfB-8',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'Un almacén es el espacio en el que se alojan las mercancías. Además, en este centro se suelen realizar funciones complejas, tales como recepción, preparación de pedidos, etiquetado y expedición.',
    },
    {
      termino: 'Auditoría de inventarios',
      significado:
        'Una auditoría de inventarios es un conjunto de procedimientos para comprobar el correcto registro, flujo y valuación de inventarios, así como la correcta aplicación de las técnicas de administración definidas.',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'La cadena de suministro es el conjunto de procesos, instalaciones, actores y medios involucrados, directa e indirectamente, en la búsqueda de satisfacer las necesidades del cliente.',
    },
    {
      termino: 'Canales de distribución',
      significado:
        'Los canales de distribución son los caminos que sigue un producto desde que es producido hasta que llega al usuario final, así como las organizaciones involucradas en dicho proceso.',
    },
    {
      termino: 'Centro de distribución',
      significado:
        'Un centro de distribución es una infraestructura logística donde se almacenan mercancías y se embarcan las órdenes de salida para su distribución a comercios mayoristas o minoristas.',
    },
    {
      termino: 'Gestión de almacenes',
      significado:
        'La gestión de almacenes es el proceso logístico que se encarga de la recepción, almacenamiento, movimientos o transferencias y mantenimiento de las mercancías en un almacén.',
    },
    {
      termino: 'Gestión de inventarios',
      significado:
        'La gestión de inventarios consiste en las actividades de administración de existencias de una empresa, así como de determinación de políticas, estrategias y técnicas para el control de inventario.',
    },
    {
      termino: 'Inventario de seguridad o de reserva',
      significado:
        'El inventario de seguridad o de reserva es una protección ante la variabilidad de la demanda y del tiempo de reabastecimiento.',
    },
    {
      termino: 'nventario en tránsito',
      significado:
        'El inventario en tránsito es aquel que se encuentra entre los puntos de producción o almacenamiento cuando el transporte no es instantáneo.',
    },
    {
      termino: 'Inventario final',
      significado:
        'El inventario final son las existencias de mercancía, así como su correspondiente valor, al final del periodo contable. Sirve para determinar ganancias o pérdidas.',
    },
    {
      termino: 'Lote',
      significado:
        'El lote es una cantidad de artículos de inventario que se reciben o producen en una fecha específica, con un costo determinado. Proporciona una base para calcular costos.',
    },
    {
      termino: 'Materia prima',
      significado:
        'La materia prima es todo bien antes de ser transformado en un proceso de producción, para convertirse en un producto apto para su venta, es decir, en un bien de consumo.',
    },
    {
      termino: 'Mercancía',
      significado:
        'La mercancía es un bien económico o escaso que se puede vender o comprar. Es un producto del trabajo que se elabora para su venta, no para el consumo propio.',
    },
    {
      termino: 'Nivel de inventario o de stock',
      significado:
        'El nivel de inventario o stock es el control de la cantidad óptima de mercancías, para evitar la venta perdida o costo de oportunidad, así como el exceso de productos.',
    },
    {
      termino: 'Pérdida de mercancía',
      significado:
        'La pérdida de mercancía es un riesgo que se produce al transportar los productos, especialmente en las exportaciones. Se genera por las distancias, las condiciones de transportación y la manipulación de los productos.',
    },
    {
      termino: 'Punto de reorden',
      significado:
        'El punto de reorden es el nivel de existencias señalado para reabastecer un artículo. Se calcula tomando en cuenta el tiempo de entrega, el pronóstico de la demanda y el nivel de servicio.',
    },
    {
      termino: 'Reaprovisionamiento continuo',
      significado:
        'El reaprovisionamiento continuo es un sistema de vigilancia permanente de los inventarios, para evitar que las existencias se agoten y no se pueda atender la demanda de los clientes.',
    },
    {
      termino: 'Recepción de mercancías',
      significado:
        'La recepción de mercancías es el proceso en el cual los productos adquiridos a un proveedor llegan al almacén para ser clasificados, controlados y, posteriormente, ubicados en este.',
    },
    {
      termino: 'Rotación de inventario',
      significado:
        'La rotación de inventario es el número de veces que el stock es renovado en cierto periodo, es decir, cuántas veces el inventario se convierte en dinero o cuentas por cobrar.',
    },
    {
      termino: 'Sistema de inventario',
      significado:
        'El sistema de inventario es un método de control de almacén, que permite asegurar el aprovisionamiento de mercancías y reducir los costos por pedido y por material faltante.',
    },
    {
      termino: 'Software de gestión de inventarios',
      significado:
        'El software de gestión de inventarios es un programa informático que le proporciona al negocio una visión general del inventario, herramientas de planificación y datos sobre la ubicación del stock.',
    },
    {
      termino: 'Valoración de inventario',
      significado:
        'La valoración de inventario es la medición de las unidades de almacén en términos monetarios. Las técnicas más utilizadas son la identificación específica y primeros en entrar, primeros en salir (PEPS).',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal Laza, C. (2020). Gestión de inventarios: UF0476. Editorial Tutor Formación.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/126745',
    },
    {
      referencia:
        'Tecnipesa. (2022). Automatice la gestión de su almacén y controle la trazabilidad de los medicamentos.',
      link:
        'https://www.tecnipesa.com/soluciones/trazabilidad-producto/trazabilidad-farmaceutica',
    },
    {
      referencia: 'Bind ERP. (2021). Glosario de Inventarios.',
      link: 'https://www.bind.com.mx/Glosario/Categoria/1-inventarios',
    },
    {
      referencia:
        'Cruz Fernández, A. (2017). Gestión de inventarios. UF0476. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59186?page=10',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras disposiciones. 14 de mayo 2007.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
