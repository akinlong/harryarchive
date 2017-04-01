angular.module('timelineApp.directives', []).directive('cardCover',
		[ '$http', function($http) {
			return {
				restrict : 'A',
				link : function(scope, ele, attr) {
					var img = attr.cardCover;
					if (img.indexOf(".mp4") > -1 || img.indexOf(".mov") > -1) {
						img = img.substring(0, img.indexOf("?"))
						var video = document.createElement("VIDEO");
						video.setAttribute("src", img);
						video.setAttribute("controls", "controls");
						video.setAttribute("width", "100%");
						video.setAttribute("height", "100%");
						ele[0].appendChild(video);
					} else {
						$http.head(img).then(function success() {
							var imgElement = document.createElement("img");
							imgElement.setAttribute("src", img);
							imgElement.style.width = "100%";
							imgElement.style.height = "100%";
							ele[0].appendChild(imgElement);
							// ele.css('background-image', 'url(' + img + ')');
						}, function error() {
							ele.css({
								'height' : 'auto',
								'text-align' : 'center',
								'background-color' : '#cccccc',
								'padding' : '20px 0'
							});
							ele.html('图片加载出错 :(');
						});
					}

				}
			}
		} ]);
function isMobile() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	return bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid
			|| bIsCE || bIsWM;
}