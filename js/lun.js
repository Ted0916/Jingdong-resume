xuhuazhi();
luner();
function xuhuazhi() {
  //我们首先找到需要操作元素的下标
  var mo = document.getElementById("lun").getElementsByTagName("li");
  var xia = document.getElementById("xia").getElementsByTagName("li");
  //先定义一个变量为0
  var i = 0;
  //这里是一个定时器 为2秒
  var timer = setInterval(tast, 2000);
  // console.log(mo);
  // console.log(xia);
  // console.log(mo2);
  //定义一个函数
  function tast() {
    if (i < mo.length - 1) {
      mo[i].className = "cuo";
      i++;
      mo[i].className = "";
    } else {
      mo[i].className = "cuo";
      i = 0;
      mo[i].className = "";
    }
  }
  //鼠标移入事件 onmouseover
  timer.onmouseover = function () {
    //停止计时器
    clearInterval(timer);
  };
  //鼠标移出事件 onmouseout
  timer.onmouseout = function () {
    //启动定时器
    timer = setInterval(tast, 1000);
  };
  //首先我们给下面得li得标签绑定一个事件
  for (var x = 0; x < xia.length; x++) {
    //绑定事件 鼠标移入的事件
    xia[x].onmouseover = function () {
      for (var c = 0; c < xia.length; c++) {
        //当你点击哪一个图时 就指向哪一个图
        if (this == xia[c]) {
          mo[i].className = "cuo";
          i = c; //i的值 显示等于c的点击鼠标移入事件
          mo[i].className = "";
        }
      }
    };
  }
  
}

function luner() {
  var mo2 = document.getElementById("lun2").getElementsByTagName("li");
  var i = 0;
  var timer2 = setInterval(tast2, 3000);
  // console.log(mo);
  // console.log(xia);
  console.log(mo2);
  //定义一个函数
  function tast2() {
    if (i < mo2.length - 1) {
      mo2[i].className = "cuo";
      i++;
      mo2[i].className = "";
    } else {
      mo2[i].className = "cuo";
      i = 0;
      mo2[i].className = "";
    }
  }
  //鼠标移入事件 onmouseover
  timer2.onmouseover = function () {
    //停止计时器
    clearInterval(timer2);
  };
  //鼠标移出事件 onmouseout
  timer2.onmouseout = function () {
    //启动定时器
    timer2 = setInterval(tast, 1000);
  };
}

var lx = document.getElementById("lx");
lx.onclick = function () {
  alert("电话：19862566418");
};