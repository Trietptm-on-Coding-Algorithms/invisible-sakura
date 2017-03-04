chrome.webRequest.onBeforeRequest.addListener( function (d) {
    var xhr = new XMLHttpRequest();
    var res = "";
    xhr.open(d.method, d.url, false);
    xhr.send(null);
    var json = JSON.parse(xhr.responseText);
    var res = [];
    json.forEach(function(el){
      if (el.hasOwnProperty("team") && el.team.hasOwnProperty("id") && el.team.id != 15) {
        res.push(el);
      }
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
