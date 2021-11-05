export default {
  global: {
    componenteFormativo: 'Historia y pipeline',
    descripcionCurso:
      'Es posible que cuando se era más joven se dibujaron figuras animadas o quizás se creó un pequeño libro animado a través de pequeñas escenas realizadas en cada página de un cuaderno que, cuando se hojeaban, daban la ilusión de movimiento.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia de la animación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de animación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Animación tradicional o clásica',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<i>Stop motion</i>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Animación por computadora o CGI',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Esquema de producción audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Etapa 1: desarrollo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Etapa 2: preproducción',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Etapa 3: producción',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Etapa 4: posproducción',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Etapa 5: distribución',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trabajo colaborativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Principio <i>KISS</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Animacam. (2016). Los inicios de la animación: Émile Reynaud. ',
      link: 'http://animacam.tv/los-inicios-de-la-animacion-emile-reynaud/',
    },
    {
      referencia: 'Bitable. (2020). What is motion graphics? ',
      link: 'https://biteable.com/blog/what-is-motion-graphics/',
    },
    {
      referencia:
        'Bloop Animation Studios LLC. (2020). The 5 Types of Animation. ',
      link: 'https://www.bloopanimation.com/types-of-animation/',
    },
    {
      referencia:
        'Interaction Design Foundation. (2019). KISS (Keep it Simple, Stupid) - A Design Principle. ',
      link:
        'https://www.interaction-design.org/literature/article/kiss-keep-it-simple-stupid-a-design-principle',
    },
    {
      referencia:
        'LAYBOURNE. (1998). The Animation Book: a complete guide to animated filmmaking - from flip-books to sound cartoons to 3-D animation. Three Rivers Press.',
    },
    {
      referencia: 'Selby, A. (2013). La Animación. Editorial Blume.',
    },
    {
      referencia:
        'The Atlantic. (2016). The Man Who Captured Time por J. Weston Phippen. ',
      link:
        'https://www.theatlantic.com/entertainment/archive/2016/07/eadweard-muybridge/483381/',
    },
    {
      referencia:
        'Thomas, F. & Johnston, O. (1981) The Illusion of Life Disney Animation. Disney Editions.',
    },
    {
      referencia: 'Webflow. (s.f). The History of Animation. ',
      link: 'https://history-of-animation.webflow.io/',
    },
    {
      referencia:
        'Williams, R. (2009) The Animator’s Survival Kit. Faber and Faber, Inc.',
    },
  ],
  glosario: [
    {
      termino: 'Animación ',
      terminoHtml: 'Animación <em>stop motion</em>',
      significado:
        'En su forma más simple, la animación <i>stop motion</i> consiste en manipular físicamente un modelo, tomar una imagen y luego mover el modelo ligeramente, un cuadro a la vez para crear la ilusión de movimiento.',
    },
    {
      termino: 'Composición',
      significado:
        'El proceso de combinar dos o más imágenes para formar una nueva. En video, la composición es el proceso de combinar dos o más secuencias para formar una nueva.',
    },
    {
      termino: 'Key pose',
      terminoHtml: '<em>Key pose</em>',
      significado:
        'Pose clave, también conocida como <i>Golden Pose</i>. Hace referencia a un tipo especial de poses al momento de animar, que se identifica como una fundamental dentro de la secuencia de poses, sin la cual, el sentido de un plano cinematográfico cambiaría notablemente. ',
    },
    {
      termino: 'Props',
      terminoHtml: '<em>Props</em>',
      significado:
        'Son objetos que componen la decoración de una escena como mobiliario, jarrones, plantas decorativas, lámparas, etc. Principalmente se trata de objetos móviles.',
    },
    {
      termino: 'Render',
      terminoHtml: '<em>Render</em>',
      significado:
        'Proceso computacional donde se obtiene como resultado una secuencia de imágenes, para posteriormente componerlas y editarlas en formato de video en un programa especializado.',
    },
    {
      termino: 'Rotoscopio',
      significado:
        'El rotoscopio es un dispositivo inventado por Max Fleischer, el cual permite a un animador basar los movimientos animados de un personaje a partir de una película de un actor de acción real que realiza los mismos movimientos. La película original se utiliza como referencia para el trabajo del animador.',
    },
    {
      termino: 'Sketch',
      terminoHtml: '<em>Sketch</em>',
      significado:
        'Dibujo rápido o boceto, que no se preocupa por los detalles.',
    },
  ],
  complementario: [
    {
      texto: 'Selby, A, (2013), La Animación.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000070646',
    },
    {
      texto: 'Webflow, (s.f.), The History of Animation.',
      tipo: 'Web',
      link: 'https://history-of-animation.webflow.io/',
    },
    {
      texto: 'Hatch, H. (2019), El principio KISS. Ser simple no es estúpido.',
      tipo: 'Blog',
      link:
        'https://soy.marketing/el-principio-kiss-ser-simple-no-es-estupido/',
    },
    {
      texto:
        'Gobierno de Colombia, MinTIC. Manizales Vive Digital. (2016). Guía de buenas prácticas de calidad internacional para la industria de Animación Digital.',
      tipo: 'Pdf',
      descarga:
        '/downloads/Guia_buenas_practicas_calidad_internacional_industria_Animacion_Digital.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Alexander García',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Eulices Orduz Amézquita',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
