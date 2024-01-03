// 获取QQ音乐签到cookie的脚本
// 请在QuantumultX中添加以下内容到[rewrite_local]和[mitm]部分
 [rewrite_local]
 ^https:\/\/y\.qq\.com\/music\/common\/upload\/MUSIC_U\/.* url script-request-header https://raw.githubusercontent。com/wuya110/quantumult-x-scripts/main/qq_music_rewrite.js
 [mitm]
 hostname = y.qq.com

const cookieName = 'QQ音乐'
const cookieKey = 'chavy_cookie_qqmusic'
const chavy = init()
const cookieVal = $request.headers['Cookie']

if (cookieVal) {
  if (chavy.setdata(cookieVal, cookieKey)) {
    chavy.msg(`${cookieName}`， '获取Cookie: 成功', '')
    chavy.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
  }
}

function init() {
  const isSurge = typeof $httpClient != 'undefined'
  const isQuanX = typeof $task != 'undefined'
  const isLoon = typeof $loon != 'undefined'
  const isJSBox = typeof $app != 'undefined' && $app.info.bundleID == 'app.cyan.jsbox'
  const isNode = typeof require == 'function' && !isJSBox
  const notify = (title， subtitle, message) => {
    if (isJSBox) $push.schedule({ title: title, body: subtitle ? subtitle + '\n' + message : message })
    else if (isSurge) $notification.post(title, subtitle, message)
    else if (isQuanX) $notify(title, subtitle, message)
    else if (isLoon) $notification.post(title, subtitle, message)
    else if (isNode) console.log(JSON.stringify({ title: title, subtitle: subtitle, message: message }))
  }
  const setdata = (key， val) => {
    if (isSurge) return $persistentStore.write(val, key)
    else if (isQuanX) return $prefs.setValueForKey(val, key)
    else if (isLoon) return $persistentStore.write(val, key)
    else if (isJSBox) return $file.write({ data: $data({ string: val }), path: `shared://${key}` })
    else if (isNode) {
      const fs = require('fs')
      const fpath = `./${key}`
      fs.writeFileSync(fpath, val)
      return true
    }
  }
  const getdata = (key) => {
    if (isSurge) return $persistentStore.read(key)
    else if (isQuanX) return $prefs.valueForKey(key)
    else if (isLoon) return $persistentStore.read(key)
    else if (isJSBox) return $file.read(`shared://${key}`).string
    else if (isNode) {
      const fs = require('fs')
      const fpath = `./${key}`
      if (fs.existsSync(fpath)) return fs.readFileSync(fpath)
      else return null
    }
  }
  const log = (message) => console.log(message)
  const msg = (title, subtitle, message) => notify(title, subtitle, message)
  const done = (value = {}) => (isQuanX ? $done(value) : isLoon ? $done(value) : isSurge ? $done(value) : isNode ? null : $done(value))
  return { isSurge, isQuanX, isLoon, isJSBox, isNode, notify, setdata, getdata, log, msg, done }
}
chavy.done()
