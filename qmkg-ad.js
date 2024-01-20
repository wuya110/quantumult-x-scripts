# 全民K歌去广告
# 移除开屏广告、歌房页面弹窗广告、消息页广告和我的页面广告。
# 作者: 可莉🅥
# 主页: https://gitlab.com/lodepuly/vpn_tool/-/tree/master/Tool/Loon/Plugin
# 图标: https://gitlab.com/lodepuly/iconlibrary/-/raw/main/App_icon/120px/QQKSong.png
# 日期: 2024-01-20 12:53:01

[rewrite_remote]
^https:\/\/wallpaper-\d+\.file\.myqcloud\.com\/dsl\/ url 302 /reject-dict
^https?:\/\/wallpaper-\d+\.file\.myqcloud\.com\/hikari\/ url 302 /reject-dict
^https:\/\/amsweb-cdn-\S+-\d+\.file\.myqcloud\.com\/video\/ad_profile\/ url 302 /reject-dict
^https:\/\/adsmind\.gdtimg\.com\/ads_svp_video.*\.(jpeg|jpg|png|webp) url reject-img
^https:\/\/adsmind\.gdtimg\.com\/ads_svp_video.*mp4 url reject-video

[mitm]
hostname = wallpaper-1258344696.file.myqcloud.com, amsweb-cdn-gz-1258344696.file.myqcloud.com, adsmind.gdtimg.com