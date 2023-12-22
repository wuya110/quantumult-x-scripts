var counter = 0;
var cookieInterval = setInterval(function() {
    if ($request.headers['Cookie']) {
        var cookie = $request.headers['Cookie'];
        $prefs.setValueForKey(cookie, 'pduoduo_cookie');
        $notify("获取 Cookie 成功", "", "Cookie: " + cookie);
    } else {
        $notify("获取 Cookie 失败", "", "请确保你已经登录");
    }
    counter += 5;
    if (counter >= 15) {
        clearInterval(cookieInterval);
    }
}, 5000);
