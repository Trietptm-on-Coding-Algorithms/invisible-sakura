chrome.webRequest.onBeforeRequest.addListener( function (d) {
    var xhr = new XMLHttpRequest();
    xhr.open(d.method, d.url, false);
    xhr.send(null);
    var rank_sakura;
    var json = JSON.parse(xhr.responseText).filter(function(el) {
      if (el.team && el.team.name == "さくら") {
        rank_sakura = el.rank;
      }
      return el.team && el.team.name != "さくら";
    });
    var res = [];
    var r = 1;
    json.forEach(function (el) {
      if (el.rank > rank_sakura) {
        el.rank--;
      }
      res.push(el);
    });
    return {
      redirectUrl: "data:application/json; charset=utf-8,"+JSON.stringify(res)
    };
  },{
    urls: ["http://contest.ictsc/api/scoreboard"]
  }, [
  "blocking"
  ]
);
