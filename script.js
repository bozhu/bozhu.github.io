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
