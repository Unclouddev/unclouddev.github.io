function urlParams(key){
    let params = null;    
    let url = window.location.href.split("?")[0]+"?", parameters="", p;
	if(window.location.href.split("?").length< 2) {return}
    if ((p = (window.location.href.split("?")[1])).match(key)){
        for(let k of p.split("&"))
        {
            if(k.split("=")[0] != key)
			{
                parameters+= "&"+k
			}
            else
			{
                params = k.split("=")
			}
        }
        window.history.replaceState({}, "Title", url+parameters.substring(1))
        
        return params[1]    
    }

	return null
}

function verifyDarkTheme(){
	let urlValue = urlParams("darktheme");
	let darktheme = localStorage.getItem("darktheme");
	if(urlValue != null){
		console.log("Url vlaue")
		if(urlValue == "toggle"){
			darktheme = (darktheme!=null && darktheme != "true")
		} else {
			darktheme = urlValue
		}
		
		localStorage.setItem("darktheme", darktheme)
		darktheme = darktheme.toString();
	}
	
	if(darktheme === null){
		return
	} else if(darktheme == "false"){
		document.getElementsByTagName("body")[0].classList.remove("darktheme")
	}
		

}


// Preloader js
$(window).on('load', function () {
	$('.preloader').addClass('d-none');
	verifyDarkTheme()
	
	if(document.getElementById("name") != null){
		check = _ =>document.getElementById("form").disabled = document.getElementById("name").value == "" || document.getElementById("mail").value == "" || document.getElementById("subject").value  == ""  || document.getElementById("message").value == ""
		
		document.getElementById("name").addEventListener("input", _=>{
			check()
		}) 
		document.getElementById("mail").addEventListener("input", _=>{
			check()
		})

		document.getElementById("subject").addEventListener("input", _=>{
			check()
		})

		document.getElementById("message").addEventListener("input", _=>{
			check()
		})
	}

	window.addEventListener("scroll", e => {
		if(window.scrollY > 0){
			document.getElementsByClassName("navigation")[0].classList.add("fixed")
		} else {
			document.getElementsByClassName("navigation")[0].classList.remove("fixed")
		}
	})
	document.getElementById("darkthemeToggle")
		.addEventListener("click", function(){
		
			let darktheme = localStorage.getItem("darktheme");
			darktheme = (darktheme!=null && darktheme != "true")
			localStorage.setItem("darktheme", darktheme)

			if(darktheme){
				document.getElementsByTagName("body")[0].classList.add("darktheme")
			}else{
				document.getElementsByTagName("body")[0].classList.remove("darktheme")
			}

	})

	document.getElementById("select-language")
		.addEventListener("click", function(){
			document.getElementById("select-language").classList.toggle("open")
		})
});

(function($) {
	'use strict';

	//slider
	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});

})(jQuery);