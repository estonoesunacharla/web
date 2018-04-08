$( function(){
  
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  $('header').css('background','url("http://estonoesunacharla.com/img/bg/' + getRandomArbitrary(1,3) + '.jpg")')
})
