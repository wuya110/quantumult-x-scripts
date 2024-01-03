const $ = new API("QQ Music");
const cookieKey = "cookie_qq_music";

// 获取 Cookie
if ($request && $request.headers.Cookie) {
  $.write($request.headers.Cookie, cookieKey);
  $.msg($.name, "获取 Cookie 成功", "");
}

$.done();
