[MITM]
hostname = node.kg.qq.com
[rewrite_local]
# 获取全民K歌Cookie
https:\/\/node\.kg\.qq\.com\/log\?format=json&outCharset=utf-8&g_tk url script-request-header https://raw.githubusercontent.com/wuya110/quantumult-x-scripts/main/77.js


const cookieName = '全民K歌'
const cookieKey = 'cookie_qmkg'
const url = $request.url;

if (url.indexOf("https://node.kg.qq.com/log?format=json&outCharset=utf-8&g_tk") >= 0) {
  const cookieValue = $request.headers['Cookie'];
  if (cookieValue) {
    $prefs.setValueForKey(cookieValue, cookieKey);
    $notify(cookieName, '获取Cookie成功', '');
  } else {
    $notify(cookieName, '获取Cookie失败', '无法从请求中提取Cookie');
  }
} else {
    $notify(cookieName, '获取Cookie失败', 'URL不匹配');
}

$done({});