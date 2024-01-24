

[rewrite_local]
^https?:\/\/(trouble\.shoot|surge\.tool) url script-request-header https://raw.githubusercontent.com/Keywos/rule/main/JS/surgeTroubleshoot.js

[mitm]
hostname = trouble.shoot, *.trouble.shoot, surge.tool