function displayLastUpdateTime() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var resp = eval ("(" + xmlhttp.responseText + ")");
            var last_update_time = new Date(resp[0]['commit']['committer']['date']);
            document.getElementById('last_update_time').innerHTML = last_update_time.toLocaleDateString();
        }
    };
    xmlhttp.open("GET", "https://api.github.com/repos/bozhu/bozhu.github.com/commits", true);
    xmlhttp.send();
}


// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27264995-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


function Caesar_decrypt(cipher) {
    plain = "";
    for (var i = 0; i < cipher.length; i++) {
        plain += String.fromCharCode(cipher.charCodeAt(i) - 3);
    }
    return plain;
}

function displayEmailAddress() {
    var ciphertext = 'er1}kxCxzdwhuorr1fd';
    var plaintext = Caesar_decrypt(ciphertext);
    document.getElementById('email_address').innerHTML = '<a rel="nofollow" href="mailto:' + plaintext + '">' + plaintext + '</a>';
}
