<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 5
      h1 Principio KISS
    p(data-aos="fade-down").mt-5 Este principio se deriva del diseño y la ingeniería de software (principio de usabilidad), no obstante, es fundamental conocerlo y aplicarlo dentro del sector audiovisual. #[b KISS] es la abreviación de #[b #[i Keep It Simple Stupid]] (siglas en inglés), en español: ¡Mantenlo simple estúpido! y sugiere el desarrollo empleando partes sencillas, comprensibles y evitando complicaciones innecesarias.


    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5(data-aos="fade-left")
      .bloque-texto-g__img.m-left(
        :style="{'background-image': `url(${require('@/assets/ilustraciones/img40.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Esta frase se le atribuye al ingeniero aeronáutico estadounidense Kelly Johnson, el cual tenía como principio, el diseño de piezas que pudieran ser reparadas por personal con un entrenamiento básico de mecánica y herramientas simples. Adicional, pensaba que, si sus productos no eran simples y de fácil entendimiento, ellos vendrían a ser obsoletos y sin valor. (Interaction Design Foundation, 2019). <br><br>Por otro lado, también se encuentra ligado al principio metodológico y filosófico expuesto por Guillermo de Ockham, según el cual "en igualdad de condiciones, la explicación más sencilla suele ser la más probable" (Navaja de Ockham) o en otras palabras, la mejor solución no es la más elaborada o compleja, sino la más simple. 

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")       
      .col-lg-4
        img(data-aos="fade-down").img-t.img-a.yoyo1.my-3(src='@/assets/ilustraciones/img41.svg', alt='')        
      .col-lg-8
        p(data-aos="fade-down") Esto no quiere decir que soluciones complejas sean desestimadas, sino más bien que se debe trabajar para lograr ser lo más simple y claro posible, tal como lo dijo Albert Einstein “Si no lo puedes explicar a un niño de seis años, tú no lo has entendido aún”.

        p(data-aos="fade-down") En ningún momento este principio invita a improvisar o trabajar menos, al contrario, simplificar ideas llega a convertirse en un proceso sumamente laborioso, donde se busca eliminar el exceso de información, ya sea textual o visual, con el fin de que el consumidor o espectador en este caso, asimile mejor el mensaje central.

        p(data-aos="fade-down") Consejos como dividir el problema en partes más pequeñas, usar nombres claros y evitar piezas complejas innecesariamente, pueden llegar a sonar obvios dentro de un proyecto audiovisual, pero en la práctica no lo son, pues en muchas ocasiones, dentro de la complejidad y extensión de la producción de un proyecto animado, se puede llegar a perder de vista el objetivo.      

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down")       
      .col-lg-3.p-0.m-0.bg-card-row-color
        img.p-0.mx-0(src='@/assets/ilustraciones/img42.svg', alt='')       
      .col-lg-6.bg-card-row-color
        p(data-aos="fade-down").pt-5.mt-4 Un ejemplo perfecto de un cortometraje o shortfilm que aplica este principio es el dinosaurio del ciego de Gaëtan Borde el cual se puede encontrar en internet o desde la tabla de ejemplos de historia y pipeline en la sección de principio KISS: 
        .row.justify-content-center.align-items-center.mt-5.pb-5(data-aos="fade-down")       
          .col-lg-8         
            a.mb-3.anexo.bg-a-1(href="https://www.youtube.com/watch?v=WFyfHszTnNA" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link-1.svg")
              .anexo__texto
                p.text-a #[b.text-a Video]. The blind's dinosaur          
      .col-lg-3.p-0.m-0.bg-card-row-color
        img.p-0.mx-0(src='@/assets/ilustraciones/img43.svg', alt='') 

    p(data-aos="fade-down").mt-5 En él, se puede observar como los escenarios, objetos o assets, personajes y escenas han sido simplificadas al máximo, con el fin de potenciar el mensaje final y lograr comicidad. Como diría el arquitecto Ludwig Mies van der Rohe: "menos es más".                
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
