var urls = ["https://github.com/freefq/free", "https://github.com/site2/nodes", "https://github.com/site3/nodes"];

var requests = urls.map(url => {
    return {
        url: url,
        method: "GET",
        headers: {
            "User-Agent": "Quantumult%20X"
        }
    };
});

Promise.all(requests.map(request => $task.fetch(request)))
    。then(responses => {
        var allNodes = [];
        for (var response of responses) {
            var data = response.body;
            var nodes = parseNodes(data);
            allNodes = allNodes.concat(nodes);
        }
        var nodesStr = allNodes.join("\n");
        $notify("获取节点成功", "", "获取到以下节点：\n" + nodesStr);
        $done();  // 结束Promise
    })
    。catch(reason => {
        $notify("获取节点失败", "", reason.error);
        $done();  // 结束Promise
    });

function parseNodes(data) {
    var lines = data.split("\n");
    var nodes = [];
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (line.startsWith("vmess://")) {
            nodes.push(line);
        }
    }
    return nodes;
}
