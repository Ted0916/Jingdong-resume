var timer = setInterval(task, 1000);
function task() {
  var endtime = new Date("2021/6/30");
  var nowtime = new Date();
  var c = parseInt((endtime - nowtime) / 1000); //当前时间距离目标时间的毫秒数
  console.log(c);
  // 1天 = 24 *60*60
  //1小时 = 60*60
  //1分钟=60x
  if (c > 0) {
    var t = parseInt(c / (24 * 60 * 60)); //天
    var x = parseInt((c % (24 * 60 * 60)) / 3600); // 小时
    var f = parseInt((c % 3600) / 60); //分
    var m = c % 60; //秒
    document.getElementById("xu1").innerHTML = t;
    document.getElementById("xu2").innerHTML = x < 10 ? "0" + x : x;
    document.getElementById("xu3").innerHTML = f < 10 ? "0" + f : f;
    document.getElementById("xu4").innerHTML = m < 10 ? "0" + m : m;
  } else {
    var h1 = document.getElementById("h1");
    h1.innerHTML = "狂欢开始了！！";
    clearInterval(timer);
  }
}
