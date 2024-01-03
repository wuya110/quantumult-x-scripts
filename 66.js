var cookieName = '全民K歌'
var cookieKey = 'cookie_key'
var cookieVal = $request.headers['Cookie']

if ($request.headers['Cookie']) {
  var cookie = $prefs.setValueForKey(cookieVal, cookieKey)
  if (cookie) {
    var msg = `${cookieName} Cookie 获取成功 🎉`
    $notify(msg, '', '详见日志')
    console.log(msg)
    console.log(`\n${cookieVal}\n`)
  }
}

$done({})
