var now = Date.now();
var lastCookieTime = $prefs.valueForKey('last_cookie_time');

if (!lastCookieTime || now - lastCookieTime > 5000 && now - lastCookieTime < 15000) {
    if ($request.headers['Cookie']) {
        var cookie = $request.headers['Cookie'];
        $prefs.setValueForKey(cookie, '10086_cookie');
        $prefs.setValueForKey(now.toString(), 'last_cookie_time');
        $notify("获取 Cookie 成功", "", "Cookie: " + cookie);
    } else {
        $notify("获取 Cookie 失败", "", "请确保你已经登录");
    }
}
$done();
