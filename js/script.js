function display_last_update_time(resp) {
    var last_update_time = resp.data.updated_at;
    document.getElementById('last_update_time').innerHTML = last_update_time.substring(0, 10);
}


(function() {
    var github = document.createElement('script');
    github.type = 'text/javascript';
    github.async = true;
    github.src = 'https://api.github.com/repos/bozhu/bozhu.github.com?callback=display_last_update_time';
    document.getElementsByTagName('body')[0].appendChild(github);
}());


function Caesar_decrypt(cipher) {
    var i, plain = "";
    for (i = 0; i < cipher.length; i++) {
        plain += String.fromCharCode(cipher.charCodeAt(i) - 3);
    }
    return plain;
}


function display_email_address() {
    var ciphertext = 'er1}kxCxzdwhuorr1fd';
    var plaintext = Caesar_decrypt(ciphertext);
    document.getElementById('email_address').innerHTML = '<a target="_blank" href="mailto:' + plaintext + '">' + plaintext + '</a>';
}

