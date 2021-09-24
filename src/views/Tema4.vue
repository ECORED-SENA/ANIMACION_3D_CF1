<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 4
      h1 Trabajo colaborativo
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6rhrLk-kWng" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mt-5 Una de las necesidades fundamentales a la hora de abordar una producción animada en 3D, es evaluar los requerimientos de la historia a contar, porque la cantidad de trabajo, personas, tiempo y equipos necesarios para elaborar un audiovisual en 3D crece o disminuye proporcionalmente según la complejidad y extensión de la misma. 

    separador
    .titulo-segundo(data-aos="fade-right")
      h2 Plataformas de trabajo colaborativo

    .bloque-texto-g.color-primario.bg-tarjeta.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img37.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las plataformas de trabajo colaborativo permiten organizar de manera intuitiva las etapas y tareas de un proyecto, los responsables, tiempos de entrega, dependencias de tareas, alertas de estados, integración con otros servicios en la nube, entre muchas otras funciones dependiendo de la plataforma.     
    p(data-aos="fade-down").mt-5 Una de las maneras más sencillas de gestionar el trabajo y que está integrada como una característica básica en la mayoría de plataformas más populares, es la categorización de tareas puntuales en tableros, mediante categorías que permitan conocer el estado de cada uno de los pasos.

    p(data-aos="fade-down") Esto es recomendable en proyectos altamente complejos como los audiovisuales, ya que las segmentaciones de los procesos contribuyen a que a medida que se va realizando cada pequeña tarea, se produzca sensación de avance de forma que se vuelve fácilmente identificable cuando alguna parte del proyecto no anda bien.

    .bloque-texto-g.color-primario.bloque-g-text.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img38.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Tomando como ejemplo el esquema de producción audiovisual, se puede empezar a dividir el proceso en etapas, generando un tablero por cada una. Una vez hecho esto lo ideal sería establecer columnas de estado que podrían categorizarse como “#[b Por hacer]”, “#[b En proceso]”, “#[b Terminada]” y “#[b Estancada]” para luego generar al interior de cada categoría el listado completo de pequeñas tareas que ayudarán a conseguir el todo.

    p(data-aos="fade-down").mt-5 Inicialmente, todas las tareas van a estar en categoría de estado denominada “#[b Por hacer]”, pero rápidamente algunas de estas deberán moverse a la categoría “#[b En proceso]”, donde se mantendrán hasta que el responsable de cada una logre terminarla y así la pueda mover a “#[b Terminada]”. Idealmente, con estas tres categorías debería bastar pero en algún punto del proyecto puede darse la situación de que alguna tarea no pueda ser completada debido a infinidad de inconvenientes, como por ejemplo, un archivo que no esté terminado y que sea necesario para culminar la tarea actual, es ahí donde la denominada “#[b Estancada]” toma importancia, pues indica que la tarea ha sido iniciada pero por alguna razón no se ha logrado culminar por lo que se debe priorizar la solución del inconveniente y así poder mover la tarea en conflicto a donde debe estar que es la categoría de “#[b Terminada]”.   

    .row.justify-content-center.align-items-center.bg-row-color-4.p-5(data-aos="fade-down").mt-5       
      .col-lg-10
        img(data-aos="fade-down").img-t.img-a.yoyo1(src='@/assets/ilustraciones/img39.png', alt='')

        p(data-aos="fade-down").mt-5 Así como se pueden establecer tareas en diferentes categorías durante las distintas etapas, las plataformas permiten asignar responsables y fechas, importantes para promover el avance del proyecto, porque un tiempo límite insta al responsable a esforzarse para alcanzar un objetivo.

        p(data-aos="fade-down") Entre las plataformas que ofrecen algunas de sus características básicas de manera gratuita y que pueden ser el punto de entrada para habituarse a la gestión de proyectos de trabajo colaborativo se pueden encontrar 
          a.link-color(href="https://trello.com/" target="_blank") Trello
          | , 
          a.link-color(href="https://asana.com/es" target="_blank") Asana 
          | y 
          a.link-color(href="https://www.clickup.com/" target="_blank") Clickup
          |, entre muchas otras, el hecho de mencionarlas de ninguna manera quiere decir que sean las mejores, pero brindan muy buenas posibilidades de trabajo y son bastante conocidas.                     
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

<style lang="sass" scoped></style>
