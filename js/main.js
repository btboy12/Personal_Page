<!-- jQuery -->
window.twttr = (function(d, s, id) {
	    var js, fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
	    if (d.getElementById(id)) return t;
	    js = d.createElement(s);
	    js.id = id;
	    js.src = "https://platform.twitter.com/widgets.js";
	    fjs.parentNode.insertBefore(js, fjs);
	    t._e = [];
	    t.ready = function(f) {
	        t._e.push(f);
	    };
	    return t;
	}(document, "script", "twitter-wjs"));


	//百度地图API功能
function loadJScript() {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://api.map.baidu.com/api?v=2.0&ak=GZ1Yo4kb5pTm1oIRygiDOuba7Wuz63SG&callback=init";
		document.body.appendChild(script);
	}
	function init() {
		var map = new BMap.Map("allmap");            // 创建Map实例
		var point = new BMap.Point(104.106953, 30.6815); // 创建点坐标
		map.centerAndZoom(point,15);
		var marker = new BMap.Marker(point);  // 创建标注
		map.addOverlay(marker);               // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

		map.enableScrollWheelZoom();                 //启用滚轮放大缩小
		 var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  });
  map.addControl(navigationControl);
  // 添加定位控件
  var geolocationControl = new BMap.GeolocationControl();
  geolocationControl.addEventListener("locationSuccess", function(e){
    // 定位成功事件
    var address = '';
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    alert("当前定位地址为：" + address);
  });
  geolocationControl.addEventListener("locationError",function(e){
    // 定位失败事件
    alert(e.message);
  });
  map.addControl(geolocationControl);
	}
	window.onload = loadJScript;  //异步加载地图



