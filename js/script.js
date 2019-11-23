var percentCount = 0;

function plusPercent(percent) {
	let a = percent;
	let b = percentCount;
	percentCount = b + a;
	return ((b + a) + "%");
};

function onePercentClick() {
	console.log("It's 1 OK");
	$("#progressbar-status").width(plusPercent(1));
};

function threePercentClick() {
	console.log("It's 3 OK");
	$("#progressbar-status").width(plusPercent(3));
};

function sevenPercentClick() {
	console.log("It's 7 OK");
	$("#progressbar-status").width(plusPercent(7));
};


function init() {
	$("#button-percent-one").click(onePercentClick);
	$("#button-percent-three").click(threePercentClick);
	$("#button-percent-seven").click(sevenPercentClick);
	console.log("script ready");
};

$(document).ready(init);