[task_local]
1 * * * * https://raw.githubusercontent.com/Keywos/rule/main/JS/surgeTroubleshoot.js, tag=ST Panel, update-interval=-1, enabled=true

[rewrite_local]
^https?:\/\/(trouble\.shoot|surge\.tool) url script-request-header https://raw.githubusercontent.com/Keywos/rule/main/JS/surgeTroubleshoot.js

[mitm]
hostname = trouble.shoot, *.trouble.shoot, surge.tool