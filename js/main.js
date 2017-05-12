 var $contactForm = $('#contact-form'),
    $sendBtn = $contactForm.find('button'),
    $success = $('.success'),
    $error = $('.error'),
    timeout;

 $contactForm .find('input,textarea').on('focus', function(){
    $(this).parents('.input-wrapper').find('.error').removeClass('active');
 });

 $contactForm.on('submit', function(e) {
     e.preventDefault();

     $sendBtn.addClass('is-loading');
     $error.removeClass('active');
     $success.removeClass('active');

     $.ajax({
         type: "POST",
         url: $(this).attr('action'),
         dataType: 'json',
         data: {
             name: 'moritzklack.com',
             email: $('.email-field').val(),
             subject: 'moritzklack.com',
             message: $contactForm.find('textarea').val()
         },
         success: function(data) {
            $sendBtn.removeClass('is-loading');

            $error.removeClass('active');
            $success.removeClass('active');
            clearTimeout(timeout);

            $contactForm.find('input, textarea').val('');
            $success.addClass('active');
            timeout = setTimeout(function(){
            $success.removeClass('active');
            },3000);
         },
         error: function() {
             $sendBtn.removeClass('is-loading');
         }
     });
 });


 $('nav a').on('click', function(evt){
    evt.preventDefault();
    var href = $(this).attr('href');
    $('html,body').animate({ scrollTop : $(href).offset().top }, 600)
 });