<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-start.align-items-center.bg-row-color.p-5.m-top-row-1(data-aos="flip-down")       
      .col-lg-6
        p Es posible que cuando se era más joven se dibujaron figuras animadas o quizás se creó un pequeño libro animado a través de pequeñas escenas realizadas en cada página de un cuaderno que, cuando se hojeaban, daban la ilusión de movimiento. 
        p.mb-0 Por tal motivo en esta primera parte se retomará la historia de la animación, técnicas y un importante esquema de producción audiovisual que involucra la importancia del trabajo colaborativo y el principio de <i>KISS</i>, a partir de un desarrollo sencillo para llegar a juntar un mensaje central en la animación.
    .row.justify-content-end.align-items-center(data-aos="flip-down")         
      .col-lg-6
        img(data-aos="fade-down").img-t.img-a.float-img-1.yoyo1(src='@/assets/curso/banner-princiapal.svg', alt='') 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
