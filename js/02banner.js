
				$(".move").width(750 * $("img").length)
				$(".move").css({
					left: -750
				})
				n = 1
				//右箭头

				$(".right").click(function() {
					document.title = n
					if (n < $("img").length - 1) {
						n = n + 1;
					} else {
						n = 2
						$(".move").css({
							left: -750
						})
					}
					$(".move").animate({
						left: -750 * n
					})
					if (n == $("img").length - 1) {
						$("li").removeClass("on").eq(0).addClass("on");
					} else {
						$("li").removeClass("on").eq(n - 1).addClass("on");
					}
				});
				//左箭头
				$(".left").click(function() {
					document.title = n
					if (n > 0) {
						n = n - 1;
					} else {
						n = $("img").length - 3
						$(".move").css({
							left: -750 * 6
						})
					}
					$(".move").animate({
						left: -750 * n
					})
					if (n == 0) {
						$("li").removeClass("on").eq(4).addClass("on");
					} else {
						$("li").removeClass("on").eq(n - 1).addClass("on");
					}
				});
				//圆点点击
				$("li").click(function() {
					n = $(this).index();
					$(".move").animate({
						left: -750 * (n + 1)
					})
					$("li").removeClass("on").eq(n).addClass("on");

				});
				//自动
				function x() {
					document.title = n
					if (n < $("img").length - 1) {
						n = n + 1;
					} else {
						n = 2
						$(".move").css({
							left: -750
						})
					}
					$(".move").animate({
						left: -750 * n
					})
					if (n == $("img").length - 1) {
						$("li").removeClass("on").eq(0).addClass("on");
					} else {
						$("li").removeClass("on").eq(n - 1).addClass("on");
					}
				}
				//定时
				t = setInterval(x, 2000)
				$(".banner").mouseenter(
					function() {
						clearInterval(t)
					})
				$(".banner").mouseleave(
					function() {
						t = setInterval(x, 2000)
					})
