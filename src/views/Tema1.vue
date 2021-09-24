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
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img2.png', alt='')

              p(data-aos="fade-down").mt-5 No es fácil determinar una fecha exacta, sin embargo, desde sus inicios, el hombre ha tenido la necesidad de plasmar o representar las cosas que ve en el mundo que lo rodea. Se puede ir 30.000 años atrás y dar un vistazo al arte rupestre, donde se encontraban pinturas sobre roca de actividades de cacería, cultivo y rituales, que curiosamente muestran una sensación de movimiento.
              .hr(data-aos="fade-left")              
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1600 a.c
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img3.png', alt='')

              p(data-aos="fade-down").mt-5 El templo a la diosa egipcia Isis muestra, en cada una de sus 110 columnas una figura pintada de la deidad con un progresivo cambio de posición, el cual era percibido como movimiento para los hombres a caballo y conductores de carrozas. (Williams, 2009).
              .hr(data-aos="fade-left")               
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2000 a.c
            .body
              p(data-aos="fade-down").mt-5 Los antiguos griegos decoraban algunas de sus vasijas con pinturas en distintas posiciones de acción. Al girar la vasija, se creaba una sensación de movimiento.
              .hr(data-aos="fade-left")               
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center Siglo XIX
            .body
              p(data-aos="fade-down").mt-5 Para entonces, el mundo estaba inundado con piezas artísticas que trataban de plasmar la vida en barro, roca o pintura. Muchos artistas habían logrado maravillosos resultados: esculturas dotadas de energía, pinturas que transmitían fuerza interna, cavernas y dibujos que capturaban un momento vivido, pero ninguno podía sugerir que pasó antes o qué pasaba después de ese momento en particular. A través de los siglos, los artistas continuaron en la búsqueda de un medio de expresión que les permitiera capturar esa chispa de vida. (Thomas & Johnston, 1981).
              p(data-aos="fade-down") Fue hasta mediados del siglo XIX que nuevos inventos aparecieron y por fin lo hicieron posible. Aunque la fotografía fue descubierta a principios de 1830, la mayoría de los nuevos dispositivos para crear ilusión de movimiento utilizaban dibujos y no fotografías.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1824
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img4.png', alt='')

              p(data-aos="fade-down").mt-5 Peter Mark Roget descubrió el principio de la ‘persistencia de la visión’. En palabras simples, este principio plantea que los ojos retienen temporalmente lo que acaban de ver durante una décima de segundo antes de desaparecer, las imágenes se superponen en la retina y el cerebro las “enlaza” como una imagen continua. Este principio, que ha sido refutado a lo largo del tiempo, sugiere que percibimos la realidad como una secuencia de imágenes y por ende podemos calcular la velocidad y dirección de un objeto. Cierto o no, este principio dio origen a varios instrumentos ópticos, que al mismo tiempo nos llevarían a lo que conocemos hoy como el cine y la animación. (Williams, 2009).
              p(data-aos="fade-down") El taumatropo: consiste en un disco con dos imágenes diferentes en ambos lados y un trozo de cuerda a cada lado del disco. Al hacer girar rápidamente el disco, las caras se intercambian y produce una ilusión óptica donde se combinan las imágenes.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1824
            .body
              img(data-aos="fade-down").mt-5.img-t.img-a(src='@/assets/ilustraciones/img5.png', alt='')

              p(data-aos="fade-down").mt-5 El fenaquistiscopio: está compuesto por dos discos conectados por un eje. El disco frontal tiene cortes o rendijas a lo largo del borde y el disco posterior tiene una secuencia de dibujos. Al hacer girar los discos y mirar a través de las rendijas, se tiene ilusión de movimiento.   

              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img6.png', alt='')

              p(data-aos="fade-down").mt-5 El zootropo: este instrumento victoriano fue vendido como un juguete y consistía en un tambor circular con rendijas. Largas tiras de papel con dibujos en secuencia eran insertadas dentro del tambor. Al rotar el tambor y ver a través de las perforaciones surgía la sensación de movimiento.  
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1868
            .body
              p(data-aos="fade-down").mt-5 Apareció el ‘flipbook’ y es recordado como el más simple y popular dispositivo. Es un bloc de dibujos encuadernados en un extremo como un libro. Al sostener el borde encuadernado y dar vuelta o ‘flipar’ el otro extremo del libro, se tiene como resultado animación, la ilusión de una acción continua; dibujos en el tiempo. Esto es lo que exactamente hacen los niños en las esquinas de sus cuadernos o libros. Incluso, la técnica de ‘flipar’ los dibujos se usa hoy en día por el animador clásico con el fin de probar el movimiento. (Williams, 2009). 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1872
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img7.png', alt='')

              p(data-aos="fade-down").mt-5 En este año cabe destacar que Leland Stanford, gobernador de California, Estados Unidos, contrató al fotógrafo e investigador inglés Eadward Muybridge para resolver la pregunta ¿Un caballo al galopar es capaz de mantener en algún momento sus 4 extremidades sin tocar el suelo. Tras varios intentos fallidos, Muybridge logra darle la respuesta a Standford, disponiendo múltiples cámaras para capturar el movimiento en fotografías (stopmotion). Muybridge fue pionero en el estudio de la locomoción animal y creó el zoopraxinoscopio para proyectar una serie de imágenes que previamente había transferido a una cinta flexible perforada. (The Atlantic, 2016).
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1872
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img8.png', alt='')

              p(data-aos="fade-down").mt-5 El francés Emile Reynaud fue el primero en crear una corta secuencia de acción dramática sobre una tira transparente de 30 pies de larga, llamada “Crystaloid”. Inventó el praxinoscopio, aparato basado en el zootropo, con mecanismos mejorados que luego desarrollaría aún más hasta convertirlo en lo que se conoció como “Teatro óptico”. El trabajo de Reynaud abriría el camino para avances considerables por venir. (Animacam, 2017).
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1896
            .body
              p(data-aos="fade-down").mt-5 El caricaturista James Stuart Blackton entrevistó al inventor Thomas Edison quien había realizado experimentos con imágenes en movimiento. Blackton hizo dibujos rápidos o ‘sketches’ de Edison, el cual quedó muy impresionado por su rapidez y habilidad. Edison le pediría hacer unos dibujos en serie, para luego tomarles fotografías. Esta fue la primera combinación de dibujos y fotografía. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1906
            .body
              p(data-aos="fade-down").mt-5 Blackton y Edison hicieron pública la primera película animada Humorous Phases of Funny Faces, usando la técnica de stopmotion para crear movimiento. (Williams, 2009).
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://www.youtube.com/watch?v=wGh6maN4l2I" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. Humorous phases of funny faces   
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1908
            .body
              p(data-aos="fade-down").mt-5 El caricaturista parisino Émile Cohl lanza la que es considerada la primera película totalmente animada que se titula “Fantasmagorie”.
              p(data-aos="fade-down") Puede revisar en la tabla de ejemplos de historia y pipeline el ejemplo 2: fantasmagorie.
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://en.wikipedia.org/wiki/File:La_Fantasmagorie_(1908).webm" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. Fantasmagorie 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1910
            .body
              p(data-aos="fade-down").mt-5 Ladislaw Starevwicz, animador ruso crea La Bella Lukanida (Piekna Lukanida) la primera animación con marionetas utilizando la técnica de stopmotion. 
              .hr(data-aos="fade-left")                                                                        
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1911
            .body
              p(data-aos="fade-down").mt-5 Winsor McCay, exitoso dibujante de tiras cómicas, basado en una de sus tiras más conocidas Little Nemo in Slumberland (El pequeño Nemo en el país de los sueños) hace animaciones para películas.
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://en.wikipedia.org/wiki/File:Winsor_McCay,_the_Famous_Cartoonist_of_the_N.Y._Herald_and_His_Moving_Comics_-_Little_Nemo_(1911).webm" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. Little Nemo in Slumberland
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1914
            .body
              p(data-aos="fade-down").mt-5 Nuevamente Winsor crea Gertie el dinosaurio mediante la técnica de los fotogramas clave hace la primera película animada donde el protagonista tiene una personalidad reconocible.
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://commons.wikimedia.org/wiki/File:Gertie_the_Dinosaur.ogv" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. Gertie the Dinosaur
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1916
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img9.png', alt='')

              p(data-aos="fade-down").mt-5 Max Fleischer consigue la patente del rotoscopio y siguiendo la referencia de filmaciones de su hermano crea la película Out of the inkwell. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1918
            .body
              p(data-aos="fade-down").mt-5 Se crea The sinking of the Lusitania, un hito de la animación para el cine de propaganda por parte de Winsor McCay.
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://en.wikipedia.org/wiki/File:Winsor_McCay_(1918)_The_Sinking_of_the_Lusitania.webm" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. The sinking of the Lusitania
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1919
            .body
              p(data-aos="fade-down").mt-5 Paramount Pictures estrena el cortometraje animado Feline Follies. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1920
            .body
              p(data-aos="fade-down").mt-5 The Debut of Thomas Cat se estrena y es famosa por ser la primera obra de dibujos animados en color. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1921
            .body
              p(data-aos="fade-down").mt-5 Walt Disney inicia la creación de películas animadas para la cadena de cines Newman en Kansas City. 
              .hr(data-aos="fade-left")                                                                 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1923
            .body
              p(data-aos="fade-down").mt-5 Disney mezcla dibujos animados y acción real en Alice's Wonderland (Alicia en el país de las maravillas).
              .row.justify-content-center.align-items-center.mt-4(data-aos="flip-down")       
                .col-lg-8              
                  a.mb-3.anexo.bg-a(href="https://commons.wikimedia.org/w/index.php?title=File%3AAlice%27s_Wonderland_(1923).webm" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.text-a #[b.text-a Video]. Alice's Wonderland  
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1926
            .body
              p(data-aos="fade-down").mt-5 Es realizado el largometraje de siluetas animadas Die Abenteuer des Prinzen Achmed (Las aventuras del príncipe Achmed) del animador aleman Lotte Reiniger. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1928
            .body
              p(data-aos="fade-down").mt-5 Aparece la primera película de dibujos animados que usa sonido sincronizado, Steamboat Willie protagonizada por Mickey Mouse, insignia de Disney. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1929
            .body
              p(data-aos="fade-down").mt-5 Ub Iwerks creó el corto animado Skeleton Dance, uno de los 75 cortos animados de Disney que componen las Silly Symphonies. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1930
            .body
              img(data-aos="fade-down").mt-5.img-t.img-a(src='@/assets/ilustraciones/img10.png', alt='')

              p(data-aos="fade-down").mt-5 Aparece por primera vez en Dizzy Dishes la icónica Betty Boop de Fleischer Studios. Mientras tanto en Francia se estrena el primer largometraje de marionetas animadas, Le roman de Renard de Starevwicz.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1932
            .body
              p(data-aos="fade-down").mt-5 Surge el Technicolor en la animación de la mano del cortometraje Flowers and Trees de Disney. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1933
            .body
              p(data-aos="fade-down").mt-5 Mediante el uso de stop #[i motion] Willis O’Brien crea su gorila para King Kong, también se estrena Los Tres Cerditos de Disney, la primera película del estudio que sugiere una personalidad animada. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1934
            .body
              p(data-aos="fade-down").mt-5 Es presentado al público el Pato Donald en la película The Wise Little Hen. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1935
            .body
              p(data-aos="fade-down").mt-5 German Oskar Fischinger realiza la animación abstracta Komposition in Blau. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1937
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img11.png', alt='')

              p(data-aos="fade-down").mt-5 Es estrenada una de las películas más icónicas de Disney, Blancanieves y los siete enanos que es el primer largometraje animado en Technicolor con uso de sonido sincronizado.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1939
            .body
              p(data-aos="fade-down").mt-5 Fleischer Studios crea los Viajes de Gulliver desafiando el monopolio de Disney en el género animado. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1940
            .body
              p(data-aos="fade-down").mt-5 Disney estrena Pinocho y Fantasía que sorprendentemente reciben una pobre acogida por parte del público. En el mismo año William Hanna y Joseph Barbera crean y estrenan el primer animado de Tom y Jerry. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1941
            .body
              p(data-aos="fade-down").mt-5 Wan Laiming y Wan Guchan dirigen en China el largometraje animado Tie Shan Gong Zhu (La princesa del abanico de Hierro) mientras en los estudios de Walt Disney se desarrolla una huelga. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1942
            .body
              p(data-aos="fade-down").mt-5 Se estrena el largometraje “Bamby” de Disney.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1944
            .body
              p(data-aos="fade-down").mt-5 Nace el estudio UPA (United Productions of America) y en Gran Bretaña se funda el estudio Gaumont. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1947
            .body
              p(data-aos="fade-down").mt-5 Tintín debuta en la animación con una versión en marionetas de “El cangrejo de las pinzas de oro”. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1948
            .body
              p(data-aos="fade-down").mt-5 Es creado el largometraje de animación con marionetas Cisaruv Slavik (El Ruiseñor del emperador) del cineasta checo Jiri Trnka. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1949
            .body
              p(data-aos="fade-down").mt-5 El Coyote y el correcaminos de Chuck Jones aparecen por primera vez en el cortometraje Fast and Furry-ous. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1950
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img12.png', alt='')

              p(data-aos="fade-down").mt-5 Es estrenada Cinderella (La cenicienta) de Disney; y es estrenado el primer dibujo animado creado para televisión en Estados Unidos, Crusader Rabbit. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1952
            .body
              p(data-aos="fade-down").mt-5 Es introducida la técnica de la pixilación por parte de Norman McLaren en la película Neighbours. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1953
            .body
              p(data-aos="fade-down").mt-5 Es creado Duck Amuch (El Pato Lucas) en EE. UU. por Chuck Jones, animador de la Warner Bros. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1954
            .body
              p(data-aos="fade-down").mt-5 A partir de Animal Farm la célebre novela de George Orwell, se anima la película del mismo nombre por parte de los animadores John Halas y Joy Batchelor. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1957
            .body
              p(data-aos="fade-down").mt-5 Hace su más famosa aparición Bugs Bunny en el cortometraje de Jones What’s opera, doc? 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1958
            .body
              p(data-aos="fade-down").mt-5 Se estrena el primer largometraje animado japonés titulado Shonen Saturobi Sasuke (La leyenda de la serpiente blanca), mientras La Bella Durmiente resulta ser un desastre comercial para Disney. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1960
            .body
              p(data-aos="fade-down").mt-5 Fred Flinstone y Barney Rubble (Pedro Picapiedra y Pablo Marmol) son presentados en la serie animada The Flinstones por Willisam Hanna y Joseph Barbera. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1961
            .body
              p(data-aos="fade-down").mt-5 Se produce en China Danaotian Gong (La rebelión del Rey Kun Fu Sung). 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1963
            .body
              p(data-aos="fade-down").mt-5 La serie Tetsuwan Atomu (Astro Boy) abre las puertas a muchas otrs series de animación japonesa.

              p(data-aos="fade-down") El francés Serge Danot crea la serie “Le Manège enchanté”.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1964
            .body
              p(data-aos="fade-down").mt-5 Se crea la película experimental Cibernetik 5.3 por John Stehura.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1965
            .body
              p(data-aos="fade-down").mt-5 Se crea la película animada de marionetas Ruka (La Mano) del checo Jiri Trinka como una forma de protesta contra la represión de los regímenes totalitarios. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1966
            .body
              p(data-aos="fade-down").mt-5 Muere Walt Disney a la edad de 65 años sin ver finalizado Disneyworld. En la televisión británica aparece Camberwick Green.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1969
            .body
              p(data-aos="fade-down").mt-5 Se emite en Japón el primer episodio de la serie Sazae-san que sigue emitiéndose en la actualidad convirtiéndose en la serie de animación más longeva.

              p(data-aos="fade-down") En Inglaterra se emite The Clangers de Oliver Postgate y Peter Firmin.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1972
            .body
              p(data-aos="fade-down").mt-5 Se funda Atari. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1974
            .body
              p(data-aos="fade-down").mt-5 Es creada la serie Heidi de la mano de Hayao Miyasaki e Isao Takahata 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1975
            .body
              p(data-aos="fade-down").mt-5 Es fundada ILM (Industrial Light and Magic) por George Lucas.En Albuquerque EE. UU. es Bill Gates y Paul Allen fundan Microsoft. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1976
            .body
              p(data-aos="fade-down").mt-5 Es California EE. UU. es fundada Apple por Steve Jobs, Steve Wozniak y Ronald Wayne. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1977
            .body
              p(data-aos="fade-down").mt-5 Ed Emshwiller usa gráficos informáticos en 3D para el cortometraje Sunstone. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1982
            .body
              p(data-aos="fade-down").mt-5 Tim Burton realiza Vincent utilizando animación #[i stop motion] en Disney.

              p(data-aos="fade-down") En Star Treck III: The Wrath of Khan se realiza la primera secuencia digital por parte de ILM. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1986
            .body
              p(data-aos="fade-down").mt-5 Luxo Jr dirigido por John Lasseter se convierte en una importante referencia para la animación digital.

              p(data-aos="fade-down") Es fundado Pixar.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1988
            .body
              p(data-aos="fade-down").mt-5 El largometraje ¿Quién engañó a Roger Rabbit? Es estrenado haciendo un hibrido entre animación e imagen real.

              p(data-aos="fade-down") En Japón es estrenada Akira de Katsuhiro Otomo.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1989
            .body
              p(data-aos="fade-down").mt-5 Se crea para la película The Abyss el primer personaje generado totalmente en 3D.

              p(data-aos="fade-down") Es lanzado los Simpsons de Matt Groening.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1991
            .body
              p(data-aos="fade-down").mt-5 Es creada por John Kricfalusi la serie Ren y Stimpy, generando una nueva estética. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1993
            .body
              p(data-aos="fade-down").mt-5 Stiven Spielberg hace uso de la animación digital para la realización de Jurassic Park.

              p(data-aos="fade-down") Es estrenada la película de stop #[i motion] The Nightmare Before Christmas, producida por Tim Burton y dirigida por Henry Selick.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1994
            .body
              p(data-aos="fade-down").mt-5 Jeffrey Katzenberg cofunda Dreamworks junto a Steven Spielberg y David Geffen. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1995
            .body
              p(data-aos="fade-down").mt-5 Es estrenado Toy Story dirigido por John Lasseter convirtiéndose en el primer largometraje realizado completamente en animación digital. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1998
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img13.png', alt='')

              p(data-aos="fade-down").mt-5 Es estrenada a Bug’s Life de pixar y Antz de Dreamworks. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 1999
            .body
              p(data-aos="fade-down").mt-5 Se proyecta la primera película animada en formato IMAX, The Old Man and the Sea de Aleksandr Petrov la cual gana el Oscar a mejor cortometraje animado. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2000
            .body
              p(data-aos="fade-down").mt-5 Aardman Animations y Dreamworks se asocian para la producción de la película Chicken Run. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2001
            .body
              p(data-aos="fade-down").mt-5 Se estrena El Viaje de Chihiro de Hayao Miyasaki. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2002
            .body
              p(data-aos="fade-down").mt-5 Es utilizada con éxito la técnica de captura de movimiento para dar vida a Gollum en The Lord of the Rings: The Two Towers.

              p(data-aos="fade-down") Blue Sky Animation Studios estrena Ice Age.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2004
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img14.png', alt='')

              p(data-aos="fade-down").mt-5 Es estrenada The Incredibles de Pixar dirigida por Brad Bird. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2005
            .body
              p(data-aos="fade-down").mt-5 Se estrena Corpse Bride dirigida por Tim Burton y Wallace y Gromit: The Curse of the Were-Rabbit de Steve Box renovando el interés por la animación en #[i stop motion].  
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2006
            .body
              p(data-aos="fade-down").mt-5 Disney completa la adquisición de Pixar. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2007
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img15.png', alt='')

              p(data-aos="fade-down").mt-5 Disney/Pixar estrena Ratatouille dirigida por Brad Bird.

              p(data-aos="fade-down") Steve Jobs director de Apple lanza el iPhone revolucionando la telefonía móvil al desarrollar nuevas características para interfaces de usuario dentro las que se encuentra el uso de la animación.
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2008
            .body
              p(data-aos="fade-down").mt-5 Peter and the Wolf dirigida por Suzie Templeton gana el Oscar a mejor corto animado. 
              .hr(data-aos="fade-left") 
          .entry(data-aos="fade-down")
            .title.beat
              h3.text-center 2016
            .body
              img(data-aos="fade-down").img-t.img-a.mt-5(src='@/assets/ilustraciones/img16.png', alt='')

              p(data-aos="fade-down").mt-5 Historia de un Oso, cortometraje de animación chileno se convierte en la primera producción latinoamericana en ganar un Oscar.  
              .hr(data-aos="fade-left")                           
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
