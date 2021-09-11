window.addEventListener('load', function () {
    let name = $('#name');
    let promocode = name.val();
    let adress = $('#adress');
    let telephone = $('#telephone');
    let err = $('.err_input');
    let err_name = $('#err_name');
    let err_adress = $('#err_adress');
    let err_telephone = $('#err_telephone');
    let hide = $('.hide');
    let loader = $('#loader');
    $('#submit').click(function () {
        $('.err_input').hide();

        if (!name.val()) {
            err_name.show();

        }
        if (!adress.val()) {
            err_adress.show();

        }
        if (!telephone.val()) {
            err_telephone.show();

        }
        if (!name.val() || !adress.val() || !telephone.val()) {
            return;
        }
        if (!name.val() && !adress.val() && !telephone.val()) {
            $('.form').css("border", "2px solid red");
        }


        let form = $('.forms');
        loader.css('display' , 'flex');
        $.ajax({
            method: "POST",
            url:'https://itlogia.ru/test/checkout',
            data: { name:name.val() }

        })

            .done(function( msg ) {
                loader.hide();
                if (msg.success === 1 ){
                    form.remove()
                    hide.show()
                }
                else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });

    })

})
