var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    wp = ua.match(/Windows Phone ([\d.]+)/),
    tablet = ua.match(/Tablet/),
    touch = ua.match(/Touch/),
    mobile = ua.match(/Mobile/),
    phone = ua.match(/Phone/);
var is_mobile = ipad || ipod || iphone || android || wp || tablet || touch || mobile || phone;
function show_ad() {
    if (true) {
        var big_ad = document.body.clientWidth > 468;
        var gadsDiv = document.getElementById("gads");
        gadsDiv.style.width = "100%";
        // gadsDiv.width = document.body.clientWidth;
        // gadsDiv.left = 0;
        // gadsDiv.bottom = 0;
        if (is_mobile && !big_ad) {
            window.google_ad_client = "ca-pub-1667278402120283";
            window.google_ad_slot = "4046453012";
            window.google_ad_width = 320;// * (document.body.clientWidth * 1.0 / 320.0);
            window.google_ad_height = 50;// * (document.body.clientWidth * 1.0 / 320.0);
            gadsDiv.style.height = "50px";
        } else {
            window.google_ad_client = "ca-pub-1667278402120283";
            window.google_ad_slot = "8057850217";
            window.google_ad_width = 728;// * (document.body.clientWidth * 1.0 / 320.0);
            window.google_ad_height = 90;// * (document.body.clientWidth * 1.0 / 320.0);
            gadsDiv.style.height = 90 + "px";
        }
        document.write("<script src='http://pagead2.googlesyndication.com/pagead/show_ads.js'><\/script><br/>");
    }
}