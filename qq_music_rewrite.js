[rewrite_local]
# 获取 QQ 音乐 Cookie
^https:\/\/y.qq.com\/portal\/profile.html?* url script-request-header qq_music_cookie.js

[MITM]
hostname = y.qq.com