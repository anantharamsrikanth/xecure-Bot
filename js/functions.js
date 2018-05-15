jQuery(function($) {
    'use strict',
    $(".keyfeatures").click(function() {
        var kid = $(this).attr('id');
        $(".fcontent").hide();
        $("#" + kid + "-content").show();
        $(".keyfeatures").removeClass("img-border");
        $(this).addClass("img-border");
    });
    jQuery(window).scroll(function() {

        if (jQuery(window).scrollTop() >= 25) {
            jQuery(".logo > img").attr("src", "../images/xecurebot-logo.svg");
        } else {
            jQuery(".logo > img").attr("src", "../images/xecurebot-logo.svg");
        }

    });
    $("#publication-slider").owlCarousel({
        autoPlay: true,
        pagination: false,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        navigation: true,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4]

    });

    var contactform = $("#contactform");
    contactform.submit(function(e) {
        e.preventDefault();
        var error = 0;
        $(".error").hide();
        $(".error").html("");

        var f_name = $.trim($("#name").val());
        var f_email = $.trim($("#email").val());
        var f_countrycode = $.trim($("#ccode").val());
        var f_mobile = $.trim($("#mobile").val());
        var f_city = $.trim($("#city").val());
        var f_country = $.trim($("#country").val());
        var f_company = $.trim($("#company").val());
        var f_designation = $.trim($("#designation").val());
        var regex_email = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var regex_mobile = /^\d{10}$/;
        var regex_ccode = /^[0-9 ()+]+$/;
        var regex_name = /^[a-zA-Z\s]+$/;
        if (!regex_name.test(f_name) || regex_name == "") {
            error = 1;
            $("#name-error").show();
            $("#name-error").html("Enter the name");
        }
        if (!regex_email.test(f_email) || f_email == "") {
            error = 1;
            $("#email-error").show();
            $("#email-error").html("Enter the valid email address");
        }
        if (!regex_mobile.test(f_mobile) || f_mobile == "") {
            error = 1;
            $("#mobile-error").show();
            $("#mobile-error").html("Enter the valid mobile number");
        }
        if (!regex_ccode.test(f_countrycode) || f_countrycode == "") {
            error = 1;
            $("#mobile-error").show();
            $("#mobile-error").html("Enter the country code");
        }

        if (f_city == "") {
            error = 1;
            $("#city-error").show();
            $("#city-error").html("Enter the city name");
        }
        if (f_country == "") {
            error = 1;
            $("#country-error").show();
            $("#country-error").html("Enter the country name");
        }

        if (f_company == "") {
            error = 1;
            $("#company-error").show();
            $("#company-error").html("Enter the company name");
        }
        if (f_designation == "") {
            error = 1;
            $("#designation-error").show();
            $("#designation-error").html("Enter the designation");
        }
        if (error == 0) {
            var data = contactform.serialize();
            $("#contact-sucess").show();
            $("#contact-sucess").html("Thank you for your intereset!. We will get back to you shortly.");
            $(".form-control").val("");
            $.ajax({
                method: "POST",
                url: 'contactform.php',
                data: data,
                success: function(data) {},
                error: function() {},
            });
        } else {
            return false;
        }
    });

    var formtosheduledemo = $("#formtosheduledemo");
    formtosheduledemo.submit(function(e) {
        e.preventDefault();
        var Name = $("#name").val();
        var Email = $("#email").val();
        var mobilenum = $("#mobile").val();
        var namereg = /^[a-zA-Z\s]+$/;
        var mobilereg = /^\d{10}$/;
        var emailreg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var error = 0;
        $(".error").hide();
        if (!namereg.test(Name) || Name == "") {
            $("#name-error").show();
            $("#name").focus();
            error = 1;
        }
        if (!emailreg.test(Email) || Email == "") {
            $("#email-error").show();
            $("#email").focus();
            error = 1;
        }
        if (!mobilereg.test(mobilenum) || mobilenum == "") {
            $("#mobile-error").show();
            $("#mobile").focus();
            error = 1;
        }
        if (error == 1) {
            return false;
        } else {
            var data = formtosheduledemo.serialize();
            $("#sheduledemo-sucess").show();
            $("#sheduledemo-sucess").html("Thank you for your intereset!. We will get back to you shortly.");
            $(".contact_form input").val("");
            $.ajax({
                method: "POST",
                url: 'sheduledemo.php',
                data: data,
                success: function(data) {},
                error: function() {},
            });
        }
    });

    var subscribeform = $('#subscribe-form');
    subscribeform.submit(function(e) {
        e.preventDefault();
        var email = $("#subscribe-email").val();
        var emailreg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var error = 0;
        $(".error").hide();
        if (!emailreg.test(email) || email == "") {
            $("#subscribe-email-error").show();
            $("#subscribe-email-error").html("Enter valid email address");
            $("#email").focus();
            error = 1;
        }
        if (error == 1) {
            return false;
        } else {
            var data = subscribeform.serialize();
            $("#subscribe-sucess").show();
            $("#subscribe-sucess").html("Thank you for your intereset!. We will get back to you shortly.");
            $("#subscribe-email").val("");
            $.ajax({
                method: "POST",
                url: "subscribe.php",
                data: data,
                success: function(data) {},
                error: function(data) {},
            });
        }
    });
});