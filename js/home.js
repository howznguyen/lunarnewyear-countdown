var next_newyear = moment.tz("Asia/Saigon").startOf("day");
var ld_nw = "";
while (true) {
	console.log(next_newyear.format());
	ld_nw = getLunarDate(next_newyear.date(), next_newyear.month() + 1, next_newyear.year());
	if (ld_nw.day == 1 && ld_nw.month == 1) {
		break;
	}
	
	next_newyear.add(1, 'days');
};

var canvas = document.getElementById("canvastext"), ctx = canvas.getContext("2d"), W = window.innerWidth, H = window.innerHeight, text = ld_nw.year, text2 = "Ch\u00fac M\u1eebng N\u0103m M\u1edbi", skipCount = 4, gravity = .2, touched = !1, mouse = {}, minDist = 100, bounceFactor = .6; canvas.height = H; canvas.width = W; function trackPos(a) { mouse.x = a.pageX; mouse.y = a.pageY }
var Particle1 = function () { this.r = 6 * Math.random(); this.y = this.x = -100; this.vy = -5 + parseInt(10 * Math.random()); this.vx = -5 + parseInt(10 * Math.random()); this.isFree = !1; this.a = Math.random(); this.draw = function () { ctx.beginPath(); ctx.fillStyle = "rgba(255, 223, 0, " + this.a + ")"; ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, !1); ctx.fill(); ctx.closePath() }; this.setPos = function (a, d) { this.x = a; this.y = d } }, particles1 = [];
(function () { ctx.fillStyle = "black"; ctx.font = "100px Arial, sans-serif"; ctx.textAlign = "center"; ctx.fillText(text, W / 2, H / 3); ctx.fillStyle = "#29a1f1"; ctx.font = "70px Arial, sans-serif"; ctx.fillText(text2, W / 2, H / 3 + 100) })(); (function () { })(); (function () { for (var a = ctx.getImageData(0, 0, W, W), d = a.data, b = 0; b < a.height; b += skipCount)for (var c = 0; c < a.width; c += skipCount)255 == d[c * a.width * 4 + 4 * b - 1] && (particles1.push(new Particle1), particles1[particles1.length - 1].setPos(b, c)) })(); function clear() { ctx.clearRect(0, 0, W, H) }
function update1() {
	clear(); for (i = 0; i < particles1.length; i++) {
		var a = particles1[i]; a.r += .15; a.a -= .015; 0 > a.a && (a.r = 6 * Math.random(), a.a = Math.random()); mouse.x > a.x - a.r && mouse.x < a.x + a.r && mouse.y > a.y - a.r && mouse.y < a.y + a.r && (touched = !0); 1 == touched && (Math.sqrt((a.x - mouse.x) * (a.x - mouse.x) + (a.y - mouse.y) * (a.y - mouse.y)) <= minDist && (a.isFree = !0), 1 == a.isFree && (a.y += a.vy, a.x += a.vx, a.vy += gravity, a.y + a.r > H && (a.vy *= -bounceFactor, a.y = H - a.r, a.vx = 0 < a.vx ? a.vx - .1 : a.vx + .1), a.x + a.r > W && (a.vx *= -bounceFactor, a.x = W - a.r), 0 > a.x - a.r &&
			(a.vx *= -bounceFactor, a.x = a.r))); ctx.globalCompositeOperation = "lighter"; a.draw()
	}
} (function animloop() { requestAnimFrame(animloop); update1() })();

$(document).ready(function () {

	var vnCurrentTime = moment.tz("Asia/Saigon");

	$('#count-down-wrapper .soon').attr('data-now', vnCurrentTime.format());
	$('#count-down-wrapper .soon').attr('data-due', next_newyear.format());
	var soon = document.querySelectorAll('#count-down-wrapper .soon');
	Soon.create(soon[0]);

	var dd = vnCurrentTime.date();
	var mm = vnCurrentTime.month() + 1;
	var yy = vnCurrentTime.year();
	var ld = getLunarDate(dd, mm, yy);

	$(".SLToday").html("H??m nay: " + vnCurrentTime.format("DD-MM-YYYY") + " <i class='fa fa-calendar'></i> " + ((ld.day < 10) ? '0' + ld.day : ld.day) + "-" + ((ld.month < 10) ? '0' + ld.month : ld.month) + "-" + ld.year + ", " + getYearCanChi(ld.year));

	var mascotCD = ["images/lan.png"];
	var textCD = [
		"Team ITRUM K??nh ch??c b???n c??ng gia ????nh tr??n ?????y s???c kh???e, th??nh c??ng v?? h???nh ph??c.",
		"N??m m???i T???t ?????n. R?????c h??n v??o nh??. Qu?? c??p bao la. M???i nh?? no ?????. V??ng b???c ?????y h??. Gia ch??? ph??t t??i. Gi?? tr??? g??i trai. Sum v???y h???nh ph??c. C???u t??i ch??c ph??c. L???c ?????n quanh n??m. An khang th???nh v?????ng!",
		"N??m m???i: Ng??n l???n nh?? ??, V???n l???n nh?? m??, Tri???u s??? b???t ng???, T??? l???n h???nh ph??c.",
		"Ch??c b???n: 12 th??ng ph?? qu??, 365 ng??y ph??t t??i, 8760 gi??? sung t??c, 525600 ph??t th??nh c??ng 31536000 gi??y v???n s??? nh?? ??.",
		"Sang n??m m???i ch??c m???i ng?????i c?? m???t b???u tr???i s???c kho???, m???t bi???n c??? t??nh th????ng, m???t ?????i d????ng t??nh c???m, m???t ??i???p kh??c t??nh y??u, m???t ng?????i y??u chung th???y, m???t t??nh b???n m??nh m??ng, m???t gia ????nh th???nh v?????ng."
	];
	var mascotX = $(window).width() / 2 - $(".soon-group").outerWidth() / 2 - 180 - 10;
	var idcd = Math.floor(Math.random() * mascotCD.length);
	let idtextCD = Math.floor(Math.random() * textCD.length);

	var mascot = '<div id="mcd" style="display:block; width:200px; height:200px;position: absolute;z-index:30; top:25px; left: ' + mascotX + 'px"><div class="mkCD" style="background: transparent url(' + mascotCD[idcd] + ') center center no-repeat;background-size:100% 100%;"></div><div class="textCD"><div class="texts1">Ch??c M???ng N??m M???i 2022</div><div class="texts1">' + textCD[idtextCD] + '</div></div></div>';

	$("#count-down-wrapper").append(mascot);

	$(window).resize(function () {
		mascotX = $(window).width() / 2 - $(".soon-group").outerWidth() / 2 - 180 - 10;
		$("#mcd").css("left", mascotX + "px");
	});

	$('.texts1').textillate({
		autoStart: false,
		in: { effect: 'flipInY' },
		out: { effect: 'fadeOut' }
	});

	$("#mcd").on('mouseenter', function () {
		$(this).animate({ width: "+=50", height: "+=50", top: "-=65" });
		$(".mkCD").animate({ width: "+=50", height: "+=50" });
		$(".textCD").animate({ width: "+=457", height: "+=210", left: "+=200" });
		$('.texts1').show();
		$('.texts1').textillate('start');
		$('.texts1').textillate('in');
	})
		.on('mouseleave', function () {
			$('.texts1').hide();
			$('.texts1').textillate('out');
			$(this).animate({ width: "-=50", height: "-=50", top: 25 });
			$(".mkCD").animate({ width: "-=50", height: "-=50" });
			$(".textCD").animate({ width: "-=457", height: "-=210", left: 0 });
		})
});