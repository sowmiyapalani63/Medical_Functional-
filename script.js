document.addEventListener('DOMContentLoaded', (event) => {
    const subscribeButton = document.getElementById('subscribeButton');

    subscribeButton.addEventListener('click', handleSubscription);

    function handleSubscription() {
        const emailField = document.getElementsByClassName("email")[0];
        const email = emailField.value.trim();

        if (email === "") {
            errorMsg.style.display = 'block';
            errorMsg.classList.remove('fade-out');
            setTimeout(() => {
                errorMsg.style.display = 'none';
                errorMsg.classList.remove('fade-out');
            }, 2000);
        }
        else {
            errorMsg.style.display = 'none';
            alert("Thank you for subscribing!!!");
        }
    }
});
$(document).ready(function () {

    $('.show-subscription').on('click', function () {
        $('#showSubscriptionModel').modal('show');
        setTimeout(function () {
            $(".modal-backdrop").addClass("blur");
        }, 10);
    });


    $('#close-btn').on('click', function () {
        $('#showSubscriptionModel').modal('hide');
        $(".modal-backdrop").removeClass("blur");
    });
    $('#close-x-btn').click(function () {
        $("#showSubscriptionModel").modal('hide');
        $(".modal-backdrop").removeClass("blur");
    });
});

$(document).ready(function () {

    $('.loginFormPopupbtn').on('click', function () {
      $('#loginFormpopup').modal('show');

    });


    $('.close-btn').on('click', function () {
      $('#loginFormpopup').modal('hide');

    });
    $('.close-x-btn').click(function () {
      $("#loginFormpopup").modal('hide');

    });
  });
  $(document).ready(function () {
    $('#navbar-toggler').click(function () {
      $('#sidebar').addClass('show');
      $('#backdrop').addClass('show');
    });
  
    $('#close-sidebar, #backdrop').click(function () {
      $('#sidebar').removeClass('show');
      $('#backdrop').removeClass('show');
    });
  });
  function validation(event) {
    event.preventDefault();
    var isValid = true;
    var username = $('#Username').val();
    var password = $('#password').val();
    const regex = /\d/;
    const containsNumber = regex.test(username);


    if (username === "") {
      $('.invalid-feedback').html("Please enter your username!").show();
      isValid = false;
    } else if (username.length < 6) {
      $('.invalid-feedback').html("Username must have at least 6 characters").show();
      isValid = false;
    } else if (containsNumber) {
      $('.invalid-feedback').html("Username must not have numbers").show();
      isValid = false;
    } else {
      $('.invalid-feedback').hide();
    }


    if (password === "") {
      $('.invalid-password').html("Please enter your password!").show();
      isValid = false;
    } else if (password.length < 8) {
      $('.invalid-password').html("Password must have at least 8 characters").show();
      isValid = false;
    } else {
      $('.invalid-password').hide();
    }

    if (isValid) {
      $('#loginFormpopup').modal('hide');
    }

    return isValid;
  }

