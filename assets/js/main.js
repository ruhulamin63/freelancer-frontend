
// Baksh Payment 
$(document).ready(function () {
  $("#baksh_submit").click(function (e) { 
    e.preventDefault();
      $(".input_trasition_id").show();
  });
  $("#baksh_submit").click(function (e) { 
    e.preventDefault();
      $(".baksh-taka").hide();
  });
  $("#Naad-sumbmit").click(function (e) { 
    e.preventDefault();
      $(".input_trasition_id_nagad").show();
  });
  $("#Naad-sumbmit").click(function (e) { 
    e.preventDefault();
      $(".noagad").hide();
  });
  $(".input_trasition_id_nagad").hide();
  $("#input-preventDefult").click(function (e) { 
    e.preventDefault();
  });
});









$('.carousel-one').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

$('.carousel-two').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

    

function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
  }
  $('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
      $('.image-upload-wrap').removeClass('image-dropping');
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()