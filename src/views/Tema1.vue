<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Historia de la animación

    .titulo-segundo(data-aos="fade-right")
      h2 La animación a través del tiempo      
    .row.justify-content-center.align-items-center.mt-5(data-aos="flip-down")       
      .col-lg-12.bg-img   
        .timeline
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 30.000 a.c
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img2.png', alt='')

              p.mt-4 No es fácil determinar una fecha exacta, sin embargo, desde sus inicios, el hombre ha tenido la necesidad de plasmar o representar las cosas que ve en el mundo que lo rodea. Se puede ir 30.000 años atrás y dar un vistazo al arte rupestre, donde se encontraban pinturas sobre roca de actividades de cacería, cultivo y rituales, que curiosamente muestran una sensación de movimiento.
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1600 a.c
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img3.png', alt='')

              p.mt-4 El templo a la diosa egipcia Isis muestra, en cada una de sus 110 columnas una figura pintada de la deidad con un progresivo cambio de posición, el cual era percibido como movimiento para los hombres a caballo y conductores de carrozas. (Williams, 2009).
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2000 a.c
            .body
              p.mt-4 Los antiguos griegos decoraban algunas de sus vasijas con pinturas en distintas posiciones de acción. Al girar la vasija, se creaba una sensación de movimiento.
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center Siglo XIX
            .body
              p Para entonces, el mundo estaba inundado con piezas artísticas que trataban de plasmar la vida en barro, roca o pintura. Muchos artistas habían logrado maravillosos resultados: esculturas dotadas de energía, pinturas que transmitían fuerza interna, cavernas y dibujos que capturaban un momento vivido, pero ninguno podía sugerir que pasó antes o qué pasaba después de ese momento en particular. A través de los siglos, los artistas continuaron en la búsqueda de un medio de expresión que les permitiera capturar esa chispa de vida. (Thomas & Johnston, 1981).
              p Fue hasta mediados del siglo XIX que nuevos inventos aparecieron y por fin lo hicieron posible. Aunque la fotografía fue descubierta a principios de 1830, la mayoría de los nuevos dispositivos para crear ilusión de movimiento utilizaban dibujos y no fotografías.

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1824
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img4.png', alt='')

              p.mt-4 Peter Mark Roget descubrió el principio de la ‘persistencia de la visión’. En palabras simples, este principio plantea que los ojos retienen temporalmente lo que acaban de ver durante una décima de segundo antes de desaparecer, las imágenes se superponen en la retina y el cerebro las “enlaza” como una imagen continua. Este principio, que ha sido refutado a lo largo del tiempo, sugiere que percibimos la realidad como una secuencia de imágenes y por ende podemos calcular la velocidad y dirección de un objeto. Cierto o no, este principio dio origen a varios instrumentos ópticos, que al mismo tiempo nos llevarían a lo que conocemos hoy como el cine y la animación. (Williams, 2009).
              p El taumatropo: consiste en un disco con dos imágenes diferentes en ambos lados y un trozo de cuerda a cada lado del disco. Al hacer girar rápidamente el disco, las caras se intercambian y produce una ilusión óptica donde se combinan las imágenes.

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1824
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img5.png', alt='')

              p.mt-4 El fenaquistiscopio: está compuesto por dos discos conectados por un eje. El disco frontal tiene cortes o rendijas a lo largo del borde y el disco posterior tiene una secuencia de dibujos. Al hacer girar los discos y mirar a través de las rendijas, se tiene ilusión de movimiento.   

              img.img-t.img-a.mt-4(src='@/assets/ilustraciones/img6.png', alt='')

              p.mt-4 El zootropo: este instrumento victoriano fue vendido como un juguete y consistía en un tambor circular con rendijas. Largas tiras de papel con dibujos en secuencia eran insertadas dentro del tambor. Al rotar el tambor y ver a través de las perforaciones surgía la sensación de movimiento.  

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1868
            .body
              p Apareció el ‘flipbook’ y es recordado como el más simple y popular dispositivo. Es un bloc de dibujos encuadernados en un extremo como un libro. Al sostener el borde encuadernado y dar vuelta o ‘flipar’ el otro extremo del libro, se tiene como resultado animación, la ilusión de una acción continua; dibujos en el tiempo. Esto es lo que exactamente hacen los niños en las esquinas de sus cuadernos o libros. Incluso, la técnica de ‘flipar’ los dibujos se usa hoy en día por el animador clásico con el fin de probar el movimiento. (Williams, 2009). 

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1872
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img7.png', alt='')

              p.mt-4 En este año cabe destacar que Leland Stanford, gobernador de California, Estados Unidos, contrató al fotógrafo e investigador inglés Eadward Muybridge para resolver la pregunta ¿Un caballo al galopar es capaz de mantener en algún momento sus 4 extremidades sin tocar el suelo. Tras varios intentos fallidos, Muybridge logra darle la respuesta a Standford, disponiendo múltiples cámaras para capturar el movimiento en fotografías (stopmotion). Muybridge fue pionero en el estudio de la locomoción animal y creó el zoopraxinoscopio para proyectar una serie de imágenes que previamente había transferido a una cinta flexible perforada. (The Atlantic, 2016).

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1872
            .body
              img.img-t.img-a(src='@/assets/ilustraciones/img8.png', alt='')

              p.mt-4 El francés Emile Reynaud fue el primero en crear una corta secuencia de acción dramática sobre una tira transparente de 30 pies de larga, llamada “Crystaloid”. Inventó el praxinoscopio, aparato basado en el zootropo, con mecanismos mejorados que luego desarrollaría aún más hasta convertirlo en lo que se conoció como “Teatro óptico”. El trabajo de Reynaud abriría el camino para avances considerables por venir. (Animacam, 2017).

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1896
            .body
              p El caricaturista James Stuart Blackton entrevistó al inventor Thomas Edison quien había realizado experimentos con imágenes en movimiento. Blackton hizo dibujos rápidos o ‘sketches’ de Edison, el cual quedó muy impresionado por su rapidez y habilidad. Edison le pediría hacer unos dibujos en serie, para luego tomarles fotografías. Esta fue la primera combinación de dibujos y fotografía. 

          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1906
            .body
              p Blackton y Edison hicieron pública la primera película animada Humorous Phases of Funny Faces, usando la técnica de stopmotion para crear movimiento. (Williams, 2009).
              a.anexo.mt-4.mb-lg-0(href="https://www.youtube.com/watch?v=wGh6maN4l2I" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Video]. Humorous phases of funny faces                                      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
        icono: require('@/assets/componentes/ej-05.svg'),
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
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

<style lang="sass" scoped></style>
