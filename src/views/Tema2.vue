<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 2
      h1 Técnicas de animación

    .row.justify-content-start.align-items-center.bg-row-color.p-5.m-top-row(data-aos="flip-down")       
      .col-lg-6
        p.mb-0 Existen varios estilos o técnicas de animación, que van desde el uso de la fotografía y dibujo a mano hasta las imágenes generadas por computador. En este apartado no se pretende profundizar en cada una de las técnicas, pues la información y proceso de producción de cada una es muy extensa; más bien, se busca que logre caracterizar de forma general cada una de las técnicas y pueda ahondar en aquellas de su interés.
    .row.justify-content-end.align-items-center(data-aos="flip-down")         
      .col-lg-6.d-none.d-lg-block 
        img(data-aos="fade-down").img-t.img-a.float-img.yoyo(src='@/assets/ilustraciones/img17.svg', alt='') 

    separador
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 2.1 Animación tradicional o clásica

    .row.justify-content-center.align-items-center.bg-row-color-1.p-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/ilustraciones/img18.png', alt='')

        p(data-aos="fade-down").mt-5 Es una de las formas más antiguas de animar, en donde cada cuadro o fotograma es dibujado y pintado a mano. Es importante saber que 1 segundo de video o animación es igual a 24 cuadros, dibujos o fotogramas. Esta información será ampliada más adelante, pero resulta útil en este momento para llegar a comprender el titánico trabajo que conlleva este estilo de animación.

        p(data-aos="fade-down") Esta técnica es también conocida como #[i cel animation], por el proceso que se requería para transferir los dibujos del papel y lápiz a una lámina transparente o acetato (#[i cel]) para ser pintada y posteriormente fotografiada con los fondos. En internet se pueden encontrar algunos vídeos para entender mejor dicho proceso, como, por ejemplo:  

        .row.justify-content-center.align-items-center.mt-4(data-aos="fade-down")       
          .col-lg-6         
            a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=86zPz3J4MdM" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.text-a #[b.text-a Video]. Ejemplo: Disney y la cámara multiplano   
                
          .col-lg-6         
            a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=_jCQHhKeQuo&feature=youtu.be&t=262" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.text-a #[b.text-a Video]. Ejemplo: La magia de la animación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Alrededor de los 90 la mayoría de los estudios dejaron de usar los acetatos y empezaron a escanear sus dibujos para pintarlos en la computadora. Hoy día, muchos animadores clásicos no usan el papel y lápiz, sino que dibujan directamente en el ordenador usando tabletas digitales o monitores especiales.(Bloop Animation Studios LLC, 2020).  

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-5
        img(data-aos="fade-down").img-t.img-a.yoyo(src='@/assets/ilustraciones/img20.svg', alt='')
      .col-lg-5
        p(data-aos="fade-down") Dentro del estilo clásico de la animación, se encuentra también la #[i rotoscopia], que es una técnica donde el animador usa como referencia un video real, donde se redibuja o ‘#[i rotoscopea]’ el movimiento realista de una persona o animal y se estiliza el dibujo final. El uso de esta técnica brinda mayor realismo y naturalidad a los movimientos de los personajes.

        p(data-aos="fade-down") Un ejemplo de esta técnica se puede ver en el video musical Take on me del artista A-ha.  
        .row.justify-content-center.align-items-center.mt-4(data-aos="fade-down")       
          .col-lg-8         
            a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=djV11Xbc914" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.text-a #[b.text-a Video]. Ejemplo: text-a A-ha - Take On Me

    separador
    #t_2_2.titulo-segundo(data-aos="fade-right")
      h2 2.2 #[i Stop motion]  

    .row.justify-content-center.align-items-center.bg-row-color-2.p-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/ilustraciones/img21.png', alt='')

        p(data-aos="fade-down").mt-5 Esta categoría, que en español traduce, movimiento detenido, describe la animación creada a partir de la manipulación de objetos físicos que son movidos ligeramente y fotografiando fotograma a fotograma con el fin de dar la ilusión de movimiento.  
        .row.justify-content-center.align-items-center.mt-4(data-aos="fade-down")       
          .col-lg-8
            a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=X0QemvmpzfQ&t=4s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.text-a #[b.text-a Video]. Ejemplo: The evolution of #[i.text-a stop motion]
    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-10                
        p(data-aos="fade-down") Existen varias subcategorías de este estilo de animación, determinado principalmente por el medio o material usado para crear los diferentes personajes y elementos de la producción (Laybourne, 1998): 

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="1" titulo="<i>Puppet animation</i>")
        .col-lg-11
          p Hoy en día, uno de los mayores estudios que usa esta técnica para realizar largometrajes es #[i Laika (Coraline, Boxtrolls, Kubo)]. La subcategoría que predomina en sus películas se conoce como Animación de marionetas o #[i puppet animation]. Las marionetas tienen un esqueleto que les permite articularse e interactuar dentro de una escenografía cuidadosamente diseñada para desarrollar la historia.
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img22.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6         
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=f1e_OdUzBeY&t=17s" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a Behind the Scenes of Kubo and the Two Strings - stop motion Production]   
                  
            .col-lg-6         
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=FlUxuAG2Ac8" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a ParaNorman Featurette: Making Norman]   

      .row(numero="2" titulo="<i>Claymation</i>")
        .col-lg-11
          p El #[i Claymation] se caracteriza por usar figuras en materiales maleables como la arcilla o la plastilina. 
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img23.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?time_continue=23&v=dNJdJIwCF_Y" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a Fresh Guacamole by PES | Oscar Nominated Short]   
                
      .row(numero="3" titulo="<i>Cut out</i>")
        .col-lg-11
          p Es una técnica donde se usan elementos en 2 dimensiones, como el papel o una tela. En ocasiones, los personajes pueden ser más complejos y poseen articulaciones. La animación de siluetas o #[i silhoutte animation], es una de las técnicas más antiguas de animación en #[i cut out].
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img26.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=hqVPYPyTNPs" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a Stop-Motion] Animation Compilation  

      .row(numero="4" titulo="<i>Sand animation/ Oil paint animation</i>")
        .col-lg-11
          p El #[i Sand animation] y el #[i Oil Paint animation] utilizan arena y pinturas u óleos respectivamente, sobre una superficie de vidrio o mesa de luz.
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img24.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=fWNIXKtm8M8" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: animación con arena
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=JHFlnwXKhsM" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: animación con pintura de aceite  

      .row(numero="5" titulo="<i>Pixilation o Pixilación</i>")
        .col-lg-11
          p Finalmente, la Pixilación o #[i Pixilation] es una forma de #[i stop motion] donde se usan personas y ambientes reales con el fin de crear videos irreales.
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img25.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=l7Z1VBQkdIM&list=PLhQXbDC1t-A4wIiGcOemaNQJNfUrnTiJT" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a Pixilation]  

    separador
    #t_2_3.titulo-segundo(data-aos="fade-right")
      h2 2.3 Animación por computadora o CGI

    .row.justify-content-center.align-items-center.bg-row-color-3.p-5(data-aos="fade-down")       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/ilustraciones/img27.png', alt='')

        p(data-aos="fade-down").mt-5 El CGI o Imágenes Generadas por Computadora (por sus siglas en inglés) son animaciones producidas digitalmente y comprenden la animación digital 2D, los #[i motion graphics], hasta la animación 3D.

    LineaTiempoD.color-primario.mt-5(data-aos="fade-down")
      .row(numero="a" titulo="Animación digital o 2D")
        .col-lg-11
          p En la animación 2D asistida digitalmente no se requiere dibujar todos los fotogramas como en la animación tradicional, sino que el animador debe fijar aquellos puntos importantes o #[i Key Poses] y el ordenador realizará la transición o intercalado entre esas poses. La mayoría de las series animadas para TV suelen hacer uso de esta técnica, construyendo marionetas 2D que les permiten articular al personaje sin necesidad de hacer nuevos dibujos. 
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img28.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6         
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?t=113&v=X0P9ni0hTI4&feature=youtu.be" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: Tangled la serie de Disney es un ejemplo de animación 2D digital.   

      .row(numero="b" titulo="<i>Motion graphics</i>")
        .col-lg-11
          p Los #[i motion graphics] suelen ser animaciones en 2D o 3D que se centran en animación tipográfica o de logos. Podríamos decir que es diseño gráfico en movimiento. (Bitable, 2020).
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img29.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=Tek8QmKRODw&t=30s" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Los créditos iniciales de Psycho de Hitchcock.
            .col-lg-6     
              a.mb-3.anexo.bg-a(href="https://vimeo.com/214728820" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: La Effe Rebrand. 

      .row(numero="c" titulo="<i>Animación 3D</i>")
        .col-lg-11
          p Por último, la Animación 3D es una de las técnicas más usadas hoy día para la realización de largometrajes, cortometrajes, efectos visuales y videojuegos. Esta técnica, como todas las anteriores, abarca toda una serie de procesos complejos, que para este caso en concreto conlleva al esculpido o modelado digital, la texturización o pintura, el #[i rigging] o construcción de esqueletos, la animación de personajes, la iluminación y el #[i render]. Al igual que la animación digital 2D, el animador usa una marioneta para posarlo en el tiempo, y mediante #[i splines] o curvas de animación, se establecen las transiciones entre las poses. (MORR, 2020).
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img30.png', alt='')
          .row.justify-content-center.align-items-center.mt-4       
            .col-lg-6         
              a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=jAaTB8kfcjg" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p.text-a #[b.text-a Video]. Ejemplo: #[i.text-a Rose The Shortfilm] es un proyecto de talento colombiano en 3D 

          p.mt-5 Dentro de la animación 3D también se encuentra la Captura de Movimiento o #[i Motion Capture] y las simulaciones. Esta es muy usada dentro de la industria de efectos visuales y los videojuegos AAA, ya que brinda mayor realismo; sin embargo, requiere de un sistema avanzado de sensores y cámaras de detección, así como también #[i software] especializado para recopilar los datos y permitir la limpieza de los fotogramas. Por otra parte, las simulaciones o animación basada en físicas permiten visualizar comportamientos de objetos o partículas a partir de atributos físicos, como por ejemplo la gravedad, la maleabilidad de un material y la fuerza del viento. Dichos procesos suelen ser usados para el desarrollo de efectos especiales y pruebas en sector industrial.
          img.img-t.img-a.yoyo1.mt-5(src='@/assets/ilustraciones/img31.png', alt='')                        
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

<style lang="sass" scoped></style>
