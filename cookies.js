#!name=获取应用cookie或token合集
#!desc=顺序尽量放到上面，获取到以后取消勾选避免重复大量的MITM
#!author=fmz200
#!homepage=https://github.com/fmz200/wool_scripts
#!icon=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/gif/naisi-01.gif
#!raw-url=https://github.com/fmz200/wool_scripts/raw/main/QuantumultX/rewrite/cookies.snippet
#!tg-group=https://t.me/lanjieguanggao
#!date=2023-11-12 22:03:00
#############################################
# 包含内容：
# chavyleung    https://github.com/chavyleung/scripts/blob/master/QuantumultX_Local_Cookie.conf
# Sunert        https://github.com/Sunert/Profiles/blob/master/QuantumultX/Rewrite/Sunert_Cookie.conf
# NobyDa        https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js_Remote_Cookie.conf
# blackmatrix7  https://github.com/blackmatrix7/ios_rule_script/blob/master/rewrite/QuantumultX/GetCookie/GetCookie.conf
# iepngs        https://github.com/iepngs/Script/blob/master/Cookie.conf
# lowking       https://github.com/lowking/Scripts/blob/master/GetCookie.sgmodule
# ooxx
# id77
# PENG-YM
# barrym-chen
# iisams
# DD-D1
# FoKit         https://raw.githubusercontent.com/FoKit/Scripts/main/rewrite/get_10000_cookie.conf
#############################################

# 去重后的hostname，将对以下域名进行MITM（MAN-IN-THE-MIDDLE：中间人攻击）
hostname = yunbusiness.ccb.com, home.m.jd.com, api.m.jd.com, ms.jr.jd.com, jdread-api.jd.com, me-api.jd.com, wq.jd.com, daojia.jd.com, testflight.apple.com, open.e.189.cn, farm.api.ddxq.mobi, user-api.smzdm.com, luka-graphql.ling.cn, fmapp.chinafamilymart.com.cn, apph5.manmanbuy.com, www.hifini.com, cauth.pupuapi.com, qqpet.jwetech.com, rewards.bing.com, auth.aliyundrive.com, draw.jdfcloud.com, api.momosyb.com, passport.iqiyi.com, account.huami.com, api.dongqiudi.com, act.10010.com, wox2019.woxshare.com, www.52pojie.cn, api.prize.qq.com, eventv3.reader.qq.com, api.tuhu.cn, gameapi.hellobike.com, xiaoshuo.qm989.com, passport.biligame.com, cxdng.cpic.com.cn, teacherapi.zmlearn.com, luckman.suning.com, api.dushu.io, api.xiaoheihe.cn, api.inews.qq.com, zt.wps.cn, m.client.10010.com, m.ctrp.com, activity.m.duiba.com.cn, as.xiaojukeji.com, www.maomicd.com, h5.youzan.com, node.kg.qq.com, manga.bilibili.com, ios.baertt.com, www.mydigit.cn, proxy.vac.qq.com, wx-mini.pagoda.com.cn, m.weibo.cn, *.acfun.cn, *.rrys2019.com, *.bilibili.com, club.yili.com, *.y.qq.com, marketappapi.biyao.com, commontgw6.reader.qq.com, *.ctrp.com, *.csdn.net, www.duokan.com, ngabbs.com, note.youdao.com, h5.bianlifeng.com, kd.youth.cn, activity-1.m.duiba.com.cn, cloud.umetrip.com, hongbao.youzikuaibao.com, air.tb.ele.me, *.xmcimg.com, m.ctrip.com, user.qunar.com, mcs-mimp-web.sf-express.com, tb.ele.me, dominos0724.shjimang.com, h5.ele.me, my.ruanmei.com, promotion.waimai.meituan.com, api.umer.com.cn, www.2xtj7.cn, mall.oclean.com, apk.tw, task.jegotrip.com.cn, i.snssdk.com, user-api-prd-mx.wandafilm.com, *.youth.cn, wq.02gk.com, iphone.myzaker.com, apiwz.midukanshu.com, api.1sapp.com, nebula.kuaishou.com, api.weibo.cn, yuba.douyu.com, *.ximalaya.com, *.zhuishushenqi.com, sf-integral-sign-in.weixinjia.net, common.diditaxi.com.cn, *.m.163.com, e.189.cn, api.kkmh.com, *.rr.tv, gameapi.suning.com, *.you.163.com, app.oscaches.com, exp.angelalign.com, getconfig-globalapi.zymk.cn, mall.meituan.com, game.xiaojukeji.com, api.infzm.com, is.snssdk.com, *.v2ex.com, *.rrys2020.com, pay.sc.weibo.com, app.nio.com, music.163.com, wapside.189.cn, studygolang.com, kandian.wkandian.com, ifac*.iqiyi.com, ug-fission.kuaishou.com, passport.suning.com, tncj.hortorgames.com, credits.bz.mgtv.com, c.tieba.baidu.com, api.sdbao.com, 113.96.156.178, wxavip-up.ezrpro.cn, *.video.qq.com, j1.pupuapi.com, app*.jegotrip.com.cn, tieba.baidu.com, wx.17u.cn, www.baimaa.com, frodo.douban.com, m-bean.kaola.com, 110.43.90.61, newsapi.sina.cn, i.meituan.com, wxprdapplet.gac-nio.com, icbc1.wlphp.com:8444, ios-fenqu11.lxsjgo.com, sapi.beingfine.cn, *.feng.com, www.hnmiaosu.cc, clientaccess.10086.cn, mobile.app.autohome.com.cn, ph0001.hezyq.com, api.everphoto.cn, api-takumi.mihoyo.com, sports.lifesense.com, superapp.kiwa-tech.com, api.weather.com, sign.suning.com, qqpet.jwetech.com, m.elong.com, webapi.qmai.cn, mwegame.qq.com, activity.m.kuaishou.com, mobwsa.ximalaya.com, proapi.115.com, youhui.95516.com, www.xiaodouzhuan.cn, *.smzdm.com, app.ymatou.com, operation-api.jimistore.com, www.flyertea.com, api.cashtoutiao.com, choujiang-server.deering.cn, maicai.api.ddxq.mobi, minigame.zijieapi.com, appsmall.rtmap.com, m.gdoil.cn, weibo.com, ios.zmzapi.com



# >>>>>>>>>>>>>>> ✅ fmz200 ✅ <<<<<<<<<<<<<<
# 滴滴果园获取token
https?:\/\/game\.xiaojukeji\.com\/api\/game\/plant\/enter url script-request-body https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_getToken.js
https?:\/\/game\.xiaojukeji\.com\/api\/game\/plant\/enter url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/ddgy.js

# 京东ck，浏览器登录京东，点击右下角我的页面获取
^https:\/\/home\.m\.jd\.com\/myJd\/(newhome|home)\.action url script-request-header https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/jingdong/jd_cookie.js
;^https:\/\/api\.m\.jd\.com\/client\.action url script-request-header https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/jingdong/jd_cookie.js

# 微博ck
^https:\/\/m?api\.weibo\.c(n|om)\/\d\/users\/show url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/weibo.js

# 抖音 抖抖果园
^https://minigame.zijieapi.com/ttgame/game_orchard_ecom/polling_info url script-request-header https://raw.githubusercontent.com/LinYuanovo/scripts/main/dygy.js

# 快手果园获取cookie
^https://ug-fission.kuaishou.com/rest/n/darwin/orchard/water/watering url script-request-header https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuaishou/ks_getCookie.js

# 拼多多果园token
https://m.pinduoduo.net/proxy/api/api/server/_stm url script-request-header https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/pinduoduo/pdd_getToken.js

# 小米运动
# ^https:\/\/account\.huami\.com\/v2\/client\/login url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/xiaomiSports/xmSports.js


# TestFlight账号cookie
^https:\/\/testflight\.apple\.com\/v3\/accounts/.*\/apps$ url script-request-header https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/testflight/TF_keys.js
^https://testflight.apple.com/join/(.*) url script-request-header https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/testflight/TF_keys.js



# >>>>>>>>>>>>>>> ✅ FoKit ✅ <<<<<<<<<<<<<<
# 获取中国电信 Cookie
^https:\/\/(e\.189\.cn\/store\/user|open\.e\.189\.cn\/api\/logbox\/oauth2\/loginSubmit\.do) url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/get_10000_cookie.js

# 建行生活 签到获取cookie
^https:\/\/yunbusiness\.ccb\.com\/(clp_coupon|clp_service)\/txCtrl\?txcode=(A3341A038|autoLogin) url script-request-body https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/jhsh_checkIn.js

# 获取微博Token,Cookie
^https:\/\/api\.weibo\.cn\/\d\/users\/show url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weibo_sign.js
^https:\/\/api\.weibo\.cn\/2\/logservice\/attach url script-request-header https://raw.githubusercontent.com/FoKit/Scripts/main/scripts/weibo_sign.js


# >>>>>>>>>>>>>>> ✅ blackmatrix7 ✅ <<<<<<<<<<<<<<
# 美团买菜每日自动签到cookie, 打开美团App，选择“美团买菜” - “我的” - “天天领钱”
# ^https?:\/\/mall\.meituan\.com\/api\/c\/mallcoin\/checkIn\/getWeekCheckInProgressBar\? url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/meituan/maicai_checkin.js
# 饿了么每日自动领取任务及吃货豆cookie
# ^https?:\/\/air\.tb\.ele\.me\/app\/conch-page\/svip-foodie-card\/home url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js
# ^https?:\/\/air\.tb\.ele\.me\/app\/conch-page\/svip-home-tasklist-new\/home url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js
# ^https?:\/\/tb\.ele\.me\/wow\/alsc\/mod url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js
# ^https?:\/\/h5\.ele\.me\/restapi\/biz\.svip_scene\/svip\/engine\/queryTrafficSupply url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/eleme/eleme_daily.js
# Fa米家_获取cookie
^https?:\/\/fmapp\.chinafamilymart\.com\.cn\/api\/app\/market\/member\/(signin\/usersign|sign\/current) url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/famijia/famijia_checkin.js
# Luka_获取cookie
^https?:\/\/luka\-graphql\.ling\.cn\/graphql\/mobile\?operation=UserInfoWithPendingRobotQuery url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/luka/luka_signin.js
# 什么值得买_获取cookie：打开什么值得买APP，点击“我的”，进入右上角的签到页面，等待脚本弹出获取Cookie成功的通知即可。
^https?:\/\/user-api\.smzdm\.com\/checkin$ url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_daily.js
# 叮咚买菜_获取cookie
^https?:\/\/maicai\.api\.ddxq\.mobi\/point\/home\?api_version url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/dingdong/dingdong_checkin.js
# 慢慢买_获取cookie
^https?:\/\/apph5\.manmanbuy\.com\/taolijin\/(login.aspx|logserver.aspx) url script-request-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/manmanbuy/manmanbuy_checkin.js
# 贴吧_获取cookie1
https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/tieba/tieba_signin.js
# 贴吧_获取cookie2
^https?:\/\/c\.tieba\.baidu\.com\/c\/s\/channelIconConfig url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/tieba/tieba_signin.js
# 贴吧_获取cookie3
^https?:\/\/tiebac\.baidu\.com\/c\/u\/follow\/getFoldedMessageUserInfo url script-request-header https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/tieba/tieba_signin.js


# >>>>>>>>>>>>>>> ✅ Nobyda ✅ <<<<<<<<<<<<<<
# 爱奇艺 cookie
^https:\/\/passport\.iqiyi\.com\/apis\/user\/ url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/iQIYI-DailyBonus/iQIYI.js

# 吾爱破解 cookie
https:\/\/www\.52pojie\.cn\/home\.php\? url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/52pojie-DailyBonus/52pojie.js

# 百度贴吧 cookie
https?:\/\/(c\.tieba\.baidu\.com|180\.97\.\d+\.\d+)\/c\/s\/login url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/BDTieBa-DailyBonus/TieBa.js

# 哔哩哔哩漫画 Get cookie
^https:\/\/passport\.biligame\.com\/api\/login\/sso.+?version%22%3A%22(3|4|5) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/Bilibili-DailyBonus/Manga.js

# 快看漫画 cookie
^https:\/\/api\.kkmh\.com\/v\d\/passport\/user url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/KuaiKan-DailyBonus/KKMH.js


# >>>>>>>>>>>>>>> ✅ Sunert ✅ <<<<<<<<<<<<<<
# 京东到家
https:\/\/daojia\.jd\.com\/client\?_jdrandom=\d{13}&functionId=signin url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/jddj.js

# 快手极速版
https:\/\/nebula\.kuaishou\.com\/nebula\/task\/earning\? url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/kuaishou.js

https:\/\/activity\.m\.kuaishou\.com\/rest\/wd\/taskCenter\/\w+\/module\/list url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/kuaishou.js

# 电视家
http:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/sign\/signin url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/dianshijia.js
http:\/\/api\.gaoqingdianshi\.com\/api\/v2\/cash\/withdrawal\? url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/dianshijia.js

# 微信小程序-来客有礼 (By @Macsuny)
https:\/\/draw\.jdfcloud\.com\/\/api\/bean\/square\/silverBean\/task\/get\? url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/lkyl.js

# 中国电信套餐 (By @uchvk & @Macsuny)
^https?:\/\/e\.189\.cn\/store\/user\/package_detail\.do url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/telecomInfinity.js

# 腾讯新闻
https:\/\/api\.inews\.qq\.com\/event\/v1\/user\/event\/report\? url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/txnews.js
https:\/\/api\.prize\.qq\.com\/v1\/newsapp\/chajianrp\/sendprize url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/txnews.js

# 微博签到
https:\/\/api\.weibo\.cn\/\d\/users\/show url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/weibo.js

https:\/\/api\.weibo\.cn\/2\/logservice\/service url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/weibo.js

# 中青看点
https:\/\/kd\.youth\.cn\/WebApi\/NewTaskIos\/getTaskList url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth.js

https:\/\/kandian\.wkandian\.com\/v5\/article\/info\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth.js

https:\/\/kandian\.wkandian\.com\/v5\/\w+\/withdraw\d?\.json url script-request-body  https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth.js

https:\/\/kandian\.wkandian\.com\/v5\/user\/stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth.js

# 中青看点阅读(和签到脚本有冲突，暂时禁用)
https:\/\/kandian\.wkandian\.com\/v5\/article\/info\.json - script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/Youth_Read.js

https:\/\/kandian\.wkandian\.com\/v5\/user\/stay\.json - script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/Youth_Read.js

# 中青看点看看赚
https:\/\/kandian\.wkandian\.com\/v5\/task\/browse_start\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth_gain.js

https:\/\/kandian\.wkandian\.com\/v5\/Nameless\/adlickstart\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/youth_gain.js

# 数码之家
https:\/\/www\.mydigit\.cn\/plugin\.php\?id=k_misign:sign&operation=qiandao url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/mydigit.js

# 聚看点
https:\/\/www\.xiaodouzhuan\.cn\/jkd\/newMobileMenu\/infoMe\.action url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/backup/jukan.js



# >>>>>>>>>>>>>>> ✅ lowking ✅ <<<<<<<<<<<<<<
# 阿里云盘签到cookie
^https:\/\/auth.aliyundrive.com\/v2\/account\/token url script-response-body https://raw.githubusercontent.com/lowking/Scripts/master/ali/aliYunPanCheckIn.js
# qqVipCheckIn
https:\/\/proxy.vac.qq.com\/cgi-bin\/srfentry.fcgi? url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/QQVip/qqVipCheckIn.js
# QQ萌宠-cookie
https:\/\/qqpet.jwetech.com\/api\/authorizations url script-response-body https://raw.githubusercontent.com/lowking/Scripts/master/QQPet/lkQQPet.js
# weibo
https:\/\/weibo\.com\/p\/aj\/general\/button\?ajwvr=6&api=http:\/\/i\.huati\.weibo\.com\/aj\/super\/checkin url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/weibo/weiboSTCookie.js
# 哔哩哔哩大会员特权领取cookie
https:\/\/api.bilibili.com\/x\/vip\/privilege\/receive url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/bilibili/privilegeReceive.js
# 哔哩哔哩番剧监控cookie
https?:\/\/app.bilibili.com\/x\/v2\/space\/bangumi url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/bilibili/bangumiMonitor.js
# QQ萌宠获取cookie
https:\/\/qqpet.jwetech.com\/api\/authorizations url script-response-body https://raw.githubusercontent.com/lowking/Scripts/master/QQPet/lkQQPet.js
# 斗鱼鱼吧获取cookie
^https://yuba.douyu.com/wbapi/web/group/myFollow? url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/douyu/yubaSign.js
# 朴朴签到cookie
https:\/\/cauth.pupuapi.com\/clientauth\/user\/verify_login url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/pupu/pupuCheckIn.js
# bing获取积分cookie
^https:\/\/rewards\.bing\.com url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/bing/bingPoint.js
# hifini签到cookie
https:\/\/www.hifini.com\/my.htm url script-request-header https://raw.githubusercontent.com/lowking/Scripts/master/hifini/hifiniSign.js


# >>>>>>>>>>>>>>> ✅ ooxx ✅ <<<<<<<<<<<<<<
#jegotrip
https?:\/\/app.*\.jegotrip\.com\.cn\/.*getUser\? url script-response-body https://ooxx.be/js/jegotrip.js
https?:\/\/task\.jegotrip\.com\.cn\:8080\/app\/tasks\?userid url script-response-body https://ooxx.be/js/jegotrip.js
#umer
https?:\/\/api\.umer\.com\.cn\/.*getCurrentUmerSign url script-request-header https://ooxx.be/js/umer.js
#chouchoui
#angelalign
^https:\/\/exp.angelalign.com\/api\/v1\/mini_program\/get_plan_list url script-request-header https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/angelalign/angelalign.cookie.js
#nga
^https:\/\/ngabbs.com\/nuke.php\?? url script-request-body https://raw.githubusercontent.com/chouchoui/QuanX/master/Scripts/nga/nga.cookie.js



# >>>>>>>>>>>>>>> ✅ id77 ✅ <<<<<<<<<<<<<<
#网易游戏会员
;^https:\/\/huiyuan\.163\.com\/jf\-mall\-api\/api\/sign_up\/(lucky|normal) url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/163GameVip.cookie.js
#Geekhub
;^https:\/\/geekhub\.com\/checkins\/start url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/geekhub.cookie.js
#太好购
^https:\/\/cxdng\.cpic\.com\.cn\/taieshop\/api\/CustomerFansInfo\/GetFansInfo url script-request-header https://raw.githubusercontent.com/id77/QuantumultX/master/task/thg.cookie.js
#伊利
https:\/\/club\.yili\.com\/MALLIFChe\/MCSWSIAPI\.asmx\/Call url script-request-body https://raw.githubusercontent.com/id77/QuantumultX/master/task/yiLi.cookie.js



# >>>>>>>>>>>>>>> ✅ PENG-YM ✅ <<<<<<<<<<<<<<
#彩云 去掉了weather-data.apple.com
https:\/\/api.weather\.com url script-request-header https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/caiyun.js



# >>>>>>>>>>>>>>> ✅ barrym-chen ✅ <<<<<<<<<<<<<<
#ctrip
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/14946\/json\/userBaseInfo url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip/ctrip_cookie.js
#wxctrip
https://socketio\.ctrip\.com/api url reject
^https:\/\/m\.ctrip\.com\/restapi\/soa2\/16575\/signin url script-request-body https://raw.githubusercontent.com/barrym-chen/Script/master/ctrip_wx/ct_cookie.js
#elong
^https:\/\/m\.elong\.com\/my\/rafflemileagejson\/getRaffleMileageTodayCount url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/elong/elong_draw_cookis.js
#fcz
^https:\/\/activity\.m\.duiba\.com\.cn\/signactivity\/getSignInfo? url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/fcz/fcz_cookie.js
#ICBC
^https:\/\/icbc1\.wlphp\.com:8444\/js\/api\/index\/signIn url script-request-body https://raw.githubusercontent.com/barrym-chen/Script/master/icbc/icbc_cookie.js
#jdczf
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/bt\/h5\/m\/queryUserSignFlow url script-request-header https://raw.githubusercontent.com/barrym-chen/Script/master/jdczf/jdczf_cookie.js
#tongc
^https:\/\/wx\.17u\.cn\/wcsign\/sign\/GetSignInfo url script-request-body https://raw.githubusercontent.com/barrym-chen/Script/master/tongc/tongc_cookie.js



# >>>>>>>>>>>>>>> ✅ iisams ✅ <<<<<<<<<<<<<<
#梨涡
https:\/\/api\.m\.jd\.com\/api\/v1\/sign\/doSign url script-request-body https://raw.githubusercontent.com/iisams/Scripts/master/liwo/7dayscookie.js



# >>>>>>>>>>>>>>> ✅ DD-D1 ✅ <<<<<<<<<<<<<<
#QQ阅读
^https:\/\/(commontgw6|eventv3)\.reader\.qq\.com\/* url script-request-header https://raw.githubusercontent.com/DD-D1/2020scripts/master/QQReadSign.js
#京东读书
^https:\/\/jdread-api\.jd\.com\/* url script-request-header https://raw.githubusercontent.com/XidNDD/2020scripts/master/jddsSign.js
#民盈国贸城
^https:\/\/appsmall\.rtmap\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/mygmcSign.js
#汽车之家极速版
^https:\/\/mobile\.app\.autohome\.com\.cn\/fasthome\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjSign.js
^http:\/\/mobile\.app\.autohome\.com\.cn\/fasthome\/coin\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/qczjSign.js
#水滴筹
^https:\/\/api\.sdbao\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/sdcbxscSign.js
#水晶DJ
^http:\/\/app\.oscaches\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/sjdjSign.js
#天天挖矿
^https:\/\/operation-api\.jimistore\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/ttwbxcxSign.js
#微商星球
^https:\/\/api\.momosyb\.com\/(v6|v1)\/(fans|user)\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/wsxqSign.js
#柚子快报
^http?:\/\/hongbao\.youzikuaibao\.com\/youzi\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/yzkbSign.js
#追书畅读版
^https:\/\/.+zhuishushenqi\.com\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/zscdbSign.js
#知音漫客
^https:\/\/getconfig-globalapi\.zymk\.cn\/app_api\/* url script-request-body https://raw.githubusercontent.com/XidNDD/2020scripts/master/zymkSign.js



# >>>>>>>>>>>>>>> ✅ chavyleung ✅ <<<<<<<<<<<<<<

# 电信营业厅
^https:\/\/wapside.189.cn:9001\/api\/home\/sign url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/10000/10000.cookie.js

# AcFun
^https:\/\/api\-new\.app\.acfun\.cn\/rest\/app\/user\/personalInfo url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/acfun/acfun.cookie.js

# APK.TW
^https://apk.tw\/member.php(.*?)action=login url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/apktw/apktw.cookie.js

# bilibili
^https:\/\/(www|live)\.bilibili\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/bilibili/bilibili.cookie.js

# CSDN
^https:\/\/passport.csdn.net\/v2\/api\/app\/login\/checkAndRefreshToken url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/csdn/csdn.cookie.js
^https:\/\/gw.csdn.net\/mini-app\/v2\/lucky_draw\/login\/sign_in\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/csdn/csdn.cookie.js

# 懂球帝
^https:\/\/api\.dongqiudi\.com\/v2\/user\/is_login url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/dongqiudi/dongqiudi.cookie.js

# 威锋网
# ^https:\/\/(www\.)?feng\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/feng/feng.cookie.js

# 飞客茶馆
^https:\/\/www\.flyertea\.com\/source\/plugin\/mobile\/mobile\.php\?module=getData&.* url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/flyertea/flyertea.cookie.js

# 网易云音乐
^https:\/\/music.163.com\/weapi\/user\/level url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/neteasemusic/quanx/neteasemusic.cookie.js

# 网易新闻
^https:\/\/(.*?)c\.m\.163\.com\/uc\/api\/sign\/v3\/commit url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/neteasenews/neteasenews.cookie.js

# 去哪儿
^https:\/\/user.qunar.com\/webapi\/member\/signIndexV2.htm url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/qunar/qunar.cookie.js
# 人人视频
^https:\/\/api\.rr\.tv\/user\/profile url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/rrtv/rrtv.cookie.js
# 顺丰速运
^https:\/\/sf-integral-sign-in.weixinjia.net\/app\/index url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
^https:\/\/mcs-mimp-web.sf-express.com\/mcs-mimp\/share\/(.*?)Redirect url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js
# 什么值得买
^https:\/\/www\.smzdm\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/smzdm/quanx/smzdm.cookie.js
# 百度签到
^https?:\/\/tieba\.baidu\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.cookie.js
# V2EX
^https:\/\/www\.v2ex\.com\/mission\/daily url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/v2ex/quanx/v2ex.cookie.js
# 腾讯视频
^https:\/\/access.video.qq.com\/user\/auth_refresh url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.cookie.js
# 喜马拉雅
^https?:\/\/.*\/mobile\-user\/(v1\/)?homePage\/.* url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/ximalaya/ximalaya.cookie.js
# 网易严选
# ^https:\/\/m\.you\.163\.com\/xhr\/points\/index\.json url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/yanxuan/yanxuan.cookie.js
# 字幕组
^https?:\/\/(www\.)?rrys2020\.com\/?.? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.cookie.js
^http:\/\/ios.zmzapi.com\/index.php.*a=(mobile_)?login url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/zimuzu/zimuzu.cookie.js
# 加油广东
^https:\/\/m.gdoil.cn\/webapi\/usersign\/addusersign url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/gdoil/gdoil.cookie.js
# 芒果TV
^https:\/\/credits.bz.mgtv.com\/user\/creditsTake url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/mgtv/mgtv.cookie.js
# 米游社
^https:\/\/api-takumi.mihoyo.com\/apihub\/api\/getGameList url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/mihoyo/mihoyo.cookie.js
# 中国联通
^https:\/\/act.10010.com\/SigninApp\/signin\/querySigninActivity.htm url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
^https:\/\/act.10010.com\/SigninApp(.*?)\/signin\/daySign url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
^https:\/\/m.client.10010.com\/dailylottery\/static\/(textdl\/userLogin|active\/findActivityInfo) url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10010/10010.cookie.js
# 中国移动
;^http:\/\/wx.10086.cn\/website\/taskCenter\/index\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js
;^http:\/\/wx.10086.cn\/website\/taskCenter\/sign\? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/10086/10086.cookie.js
# 猫咪音乐网
https:\/\/www.maomicd.com\/plugin.php\?id=k_misign:sign&operation=qiandao url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/maomicd/maomicd.cookie.js
# 美团外卖
^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/entry url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js
^https:\/\/promotion.waimai.meituan.com\/playcenter\/signIn\/doaction url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/wmmeituan/wmmeituan.cookie.js
# 美团
^https:\/\/i.meituan.com\/evolve\/signin\/signpost\/ url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/meituan/meituan.cookie.js
# 时光相册
^https:\/\/api.everphoto.cn\/users\/self\/checkin\/v2 url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/everphoto/everphoto.cookie.js
# 百词斩
;^https://group\.baicizhan\.com/group/rewards? url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/bcz/bcz.cookie.js
# 叮咚买菜
# ^https:\/\/maicai.api.ddxq.mobi\/point\/home url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/mcdd/mcdd.cookie.js
# 分期乐
;^https://pm\.m\.fenqile\.com/route0014/star/sign/sign.json url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/fenqile/fenqile.cookie.js
;^https:\/\/pm\.m\.fenqile\.com/route0014\/app\/tab\/privilege\/convertTaskReward.json url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/fenqile/fenqile.cookie.js
#樊登读书
^https://api\.dushu\.io/CheckIn url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/fandeng/fandeng.cookie.js
#全民K歌
^https://node\.kg\.qq\.com/webapp/proxy? url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/qmkg/qmkg.cookie.js
#蔚来
^https:\/\/app\.nio\.com\/api\/1\/app\/daily_checkin url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/nio/nio.cookie.js
#合创
^https:\/\/wxprdapplet\.gac-nio\.com\/community\/userSignIn\/simpleAuth\/front\/v3\.1\.3\.5\/signV2$ url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/hycan/hycan.cookie.js
#京东到家
^https:\/\/daojia.jd.com/client(.*?)functionId=signin(.*?)userSigninNew url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/jddj/jddj.cookie.js
#网易考拉
^https:\/\/m-bean\.kaola\.com/m/point/sign\.html url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/wykl/wykl.cookie.js
# WPS
^https:\/\/zt.wps.cn\/2018\/docer_check_in\/api\/act_list url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/wps/wps.cookie.js
#智行火车
^https:\/\/m\.ctrip\.com/restapi/soa2/14593/json/attendanceDay? url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/zxhc/zxhc.cookie.js
# 苏宁易购
^https:\/\/passport.suning.com\/ids\/login$ url script-request-body https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
^https:\/\/luckman.suning.com\/luck-web\/sign\/api\/clock_sign.do url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
^https:\/\/sign.suning.com\/sign-web\/m\/promotion\/sign\/doSign.do url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
^https:\/\/gameapi.suning.com\/sngame-web\/(api\/signin\/private\/customerSignOperation.do|gateway\/api\/queryPrize.do) url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/suning/suning.cookie.js
# 豆瓣时间
;^https:\/\/fro\.douban\.com\/api\/v2\/niffler\/check_in\/status url script-request-header https://raw.githubusercontent.com/chavyleung/scripts/master/dbsj/dbsj.cookie.js



# >>>>>>>>>>>>>>> ✅ iepngs ✅ <<<<<<<<<<<<<<
# > 叮咚买菜
# 叮咚农场
https:\/\/maicai\.api\.ddxq\.mobi\/user\/checkLogin url script-request-header https://raw.githubusercontent.com/iepngs/Script/master/dingdong/index.js
# 叮咚果园获取Cookie
https:\/\/farm\.api\.ddxq\.mobi\/api\/v2\/props\/feed url script-request-header https://raw.githubusercontent.com/iepngs/Script/master/dingdong/ddgy.js
#步数上传
^https:\/\/sports\.lifesense\.com\/sport_service\/sport\/sport\/uploadMobileStepV2 url script-request-body https://raw.githubusercontent.com/iepngs/Script/master/lxhealth/manual.js
#go语言中文网签到
https:\/\/studygolang\.com\/account\/edit url script-request-header https://raw.githubusercontent.com/iepngs/Script/master/studygolang/index.js
#ctrip
https:\/\/m\.ctrip\.com\/restapi\/soa2\/14946\/json\/userBaseInfo url script-request-body https://raw.githubusercontent.com/iepngs/Script/master/ctrip/index.js
#jrtt
^https:\/\/is\.snssdk\.com\/score_task\/v1\/task\/(sign_in|get_read_bonus) url script-request-body https://raw.githubusercontent.com/iepngs/Script/master/jrtt/index.js
^https:\/\/i\.snssdk\.com\/ttgame\/game_farm\/home_info url script-request-body https://raw.githubusercontent.com/iepngs/Script/master/jrtt/index.js
#lxsj
^https:\/\/ios-fenqu11\.lxsjgo\.com\/dog\/bug\?ts url script-request-body https://raw.githubusercontent.com/iepngs/Script/master/lxsj/index.js
^https:\/\/ios-fenqu11\.lxsjgo\.com\/dog\/bug\?ts url script-response-body https://raw.githubusercontent.com/iepngs/Script/master/lxsj/index.js
