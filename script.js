function runGglSch() { // Run a standart google search.

	var search = document.getElementById("SchInput").value
	var query= search.replace (" ", "+")
	var URL= "https://www.google.fr/search?q="+query
	document.location.href=URL;

}

function searchOn(domain)  {
        var search = document.getElementById("SchInput").value
        var query= search.replace (" ", "+")
        var URL= "https://www.google.fr/search?q="+query+"&as_sitesearch="+domain
	document.location.href=URL;
}


function runSvgSearch() { // Run google search engine en w3 website.
	var search = document.getElementById("SchInput").value
	var query= search.replace (" ", "+")
	var URL= "https://www.google.fr/search?as_st=y&tbm=isch&hl=fr&as_q="+query+"&as_epq=&as_oq=&as_eq=&cr=&as_sitesearch=&safe=images&tbs=ift:svg"
	document.location.href=URL;

}

function mapoule() { // debug function 
	alert ("Salut ma poule ! ")

}

// Clipboard instanciation
(function(){
    new Clipboard('#copy-button');
})();
