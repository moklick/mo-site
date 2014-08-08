 var $contactForm = $('#contact-form'),
    $sendBtn = $contactForm.find('button'),
    $success = $('.success'),
    $error = $('.error');

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
         data: {
             name: 'moritzklack.com',
             email: $('.email-field').val(),
             subject: 'moritzklack.com',
             message: $contactForm.find('textarea').val()
         },
         success: function(data) {
             $sendBtn.removeClass('is-loading');
             var data = JSON.parse(data);

            $error.removeClass('active');
            $success.removeClass('active');

             if (data.invalid) {
                 if (data.invalid.email) {
                     $('.email-error').text(data.invalid.email).addClass('active');
                 }
                 if (data.invalid.message) {
                     $('.message-error').text(data.invalid.message).addClass('active');
                 }
             } else {
                 $contactForm.find('input, textarea').val('');
                 $success.addClass('active');
                 setTimeout(function(){
                    $success.removeClass('active');
                 },3000);
             }

         },
         error: function() {
             $sendBtn.removeClass('is-loading');
         }
     });
 });