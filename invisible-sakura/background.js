chrome.webRequest.onBeforeRequest.addListener( function (d) {
    var xhr = new XMLHttpRequest();
    xhr.open(d.method, d.url, false);
    xhr.send(null);
    var json = JSON.parse(xhr.responseText);
    var res = json.filter(function(el) {
      return el.team && el.team.name != "さくら";
    });
    return {
      redirectUrl: "data:application/json,"+JSON.stringify(res)
    };
  },{
    urls: ["http://contest.ictsc/api/scoreboard"]
  }, [
  "blocking"
  ]
);
