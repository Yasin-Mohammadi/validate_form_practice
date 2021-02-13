/*alert*/

jQuery(document).ready(function($) {
	$('#frm input').keyup(function (e) { 
		 var th = $(this);
		 if(validate(th)){
			 if(th.hasClass('invalid'))
			 	th.removeClass('invalid');
			 if(!th.hasClass('valid'))
			 	th.addClass('valid');
		 }else{
			if(th.hasClass('valid'))
			 	th.removeClass('valid');
			 if(!th.hasClass('invalid'))
			 	th.addClass('invalid');
		 }
	});



	function validate(params) {
		if(params.attr('validate')== 'email'){
			return validate_email(params)
		}

		if(params.attr('validate')== 'number'){
			return validate_number(params);
		}																											
		if(params.attr('validate')== 'url'){
			return validate_url(params);
		}
		if(params.attr('validate')== 'name'){
			return validate_name(params);
		}
		if(params.attr('validate')== 'password'){
			return true;
		}
	}
	function validate_email(params) {
		var pattern = /^[\w]+[\.\w-]*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/gm;
		return pattern.test(params.val())
	}
	function validate_number(params) {
		var pattern = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;
		return pattern.test(params.val())
	}
	function validate_url(params) {
		var pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
		return pattern.test(params.val())
	}
	function validate_name(params) {
		var pattern = /^[a-zA-Z ]+$/g;
		return pattern.test(params.val())
	}
});
