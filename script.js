// to display last update time
function displayLastUpdateTime(resp) {
    var last_update_time = resp.data.updated_at;
    document.getElementById('last_update_time').innerHTML = last_update_time.substring(0, 10);
}

(function() {
    var github = document.createElement('script');
    github.type = 'text/javascript';
    github.async = true;
    github.src = 'https://api.github.com/repos/bozhu/bozhu.github.com?callback=displayLastUpdateTime';
    document.getElementsByTagName('body')[0].appendChild(github);
})();


// for Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27264995-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); 
    ga.type = 'text/javascript'; 
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; 
    s.parentNode.insertBefore(ga, s);
})();


// to display email address
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
