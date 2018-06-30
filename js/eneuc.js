$( function(){

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $('header').css('background-image','url("http://estonoesunacharla.com/img/bg/' + getRandomInt(1,48) + '.jpg")')
})
