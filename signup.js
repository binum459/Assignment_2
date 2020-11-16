function validation() {
    var email = document.getElementById("email").value;
    var emailid = document.getElementById("emailid").value;
    var mob = document.getElementById("mob").value;
    
	var password = document.getElementById("exampleInputPassword1").value;

    var regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    var regmob = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    
    if (regemail.test(email)) {
        document.getElementById('emailerr').innerHTML = "";

    } else {
        document.getElementById('emailerr').innerHTML = "** email is invalid";
        return false;
	}
	
	if (regemail.test(emailid)) {
        document.getElementById('emailiderr').innerHTML = "";

    } else {
        document.getElementById('emailiderr').innerHTML = "** email is invalid";
        return false;
    }


    if (email.match(emailid)) {
        document.getElementById('emailiderr').innerHTML = "";

    } else {
        document.getElementById('emailiderr').innerHTML = "** email is not a match";
        return false;
    }


    if (regmob.test(mob)) {
        document.getElementById('moberr').innerHTML = "";

    } else {
        document.getElementById('moberr').innerHTML = "** Mobile Number is invalid";
        return false;
    }


 
    if (regemail.test(password)) {
        document.getElementById('exampleInputPassword1err').innerHTML = "";

    } else {
        document.getElementById('exampleInputPassword1err').innerHTML = "** password is invalid";
        return false;
    }

}



$(function() {
	$.fn.bootstrapPasswordMeter = function(options) {
	  var settings = $.extend({
		minPasswordLength: 6,
		level0ClassName: 'progress-bar-danger',
		level0Description: 'Weak',
		level1ClassName: 'progress-bar-danger',
		level1Description: 'Not great',
		level2ClassName: 'progress-bar-warning',
		level2Description: 'Better',
		level3ClassName: 'progress-bar-success',
		level3Description: 'Strong',
		level4ClassName: 'progress-bar-success',
		level4Description: 'Very strong',
		parentContainerClass: '.form-group'
	  }, options || {});
  
	  $(this).on("keyup", function() {
		var progressBar = $(this).closest(settings.parentContainerClass).find('.progress-bar');
		var progressBarWidth = 0;
		var progressBarDescription = '';
		if ($(this).val().length >= settings.minPasswordLength) {
		  var zxcvbnObj = zxcvbn($(this).val());
		  progressBar.removeClass(settings.level0ClassName)
			.removeClass(settings.level1ClassName)
			.removeClass(settings.level2ClassName)
			.removeClass(settings.level3ClassName)
			.removeClass(settings.level4ClassName);
		  switch (zxcvbnObj.score) {
			case 0:
			  progressBarWidth = 25;
			  progressBar.addClass(settings.level0ClassName);
			  progressBarDescription = settings.level0Description;
			  break;
			case 1:
			  progressBarWidth = 25;
			  progressBar.addClass(settings.level1ClassName);
			  progressBarDescription = settings.level1Description;
			  break;
			case 2:
			  progressBarWidth = 50;
			  progressBar.addClass(settings.level2ClassName);
			  progressBarDescription = settings.level2Description;
			  break;
			case 3:
			  progressBarWidth = 75;
			  progressBar.addClass(settings.level3ClassName);
			  progressBarDescription = settings.level3Description;
			  break;
			case 4:
			  progressBarWidth = 100;
			  progressBar.addClass(settings.level4ClassName);
			  progressBarDescription = settings.level4Description;
			  break;
		  }
		} else {
		  progressBarWidth = 0;
		  progressBarDescription = '';
		}
		progressBar.css('width', progressBarWidth + '%');
		progressBar.text(progressBarDescription);
	  });
	};
	$('#exampleInputPassword1').bootstrapPasswordMeter({minPasswordLength:3});
  });