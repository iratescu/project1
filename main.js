$('.namefield1').on('keyup', ()=>{
  $('.greeting').html($('.namefield1').val())
})

$('.countryselect').on('change',()=>{

  if ($('.countryselect').val()==('Romania')){
    $('.greeting').html('Salut'+ ' ' +($('.greeting').html()));
  }
  else if ($('.countryselect').val()==('France')){
     $('.greeting').html('Bonjour'+ ' ' +($('.greeting').html()));
  }
  else {
    $('.greeting').html('Hoi'+ ' ' +($('.greeting').html()));
  }
})
