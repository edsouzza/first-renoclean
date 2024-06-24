//INICIALIZACAO
$(document).ready(function(){
   //MENU MOBILE
   $(".button-collapse").sideNav();
   //LINK INTERNO
   $(".scrollspy").scrollSpy({
       scrollOffset: 0
   });
  //CAROUSEL-SLIDER
  $(".carousel.carousel-slider").carousel({
    fullWidth:true
  }); 
  //CAROUSEL-FOTOS
  $(".carousel.carousel-fotos").carousel({
    fullWidth:true
  });  
  //MODAL
  $(".modal").modal({
    dismissible: false, //pode ser fechada ao clicar fora da modal
    opacity: .6,        //opacidade do fundo da modal qto > o numero mais escuro
    in_duration:100,    //duracao da transicao de entrada da modal
    out_duration:900,   //duracao da transicao de saida da modal
    startingTop: '60%',
  });
  //ESCONDER MENU MOBILE AO CLICAR
  $(".hide-menu").click(function(){
     $(".button-collapse").sideNav("hide");
  });
  //AUTOPLAY
  function autoplay(){
    $(".carousel").carousel("next");
    setTimeout(autoplay, 7000);
  }
  autoplay();

});

//ADICIONANDO NAVCOLOR
$(window).on("scroll", function(){
  if($(window).scrollTop() > 100) {
      $(".navbar").addClass("nav-color");
  } else {
      $(".navbar").removeClass("nav-color");
  }
});  
