

Page({
	data: {
		targetDate: '2022-10-05 00:00:00',
		days: '',
	},
	
	countTime() {
		let target = new Date(this.data.targetDate).getTime();
		let now = new Date().getTime();	
		let leftTime = now - target;
		this.setData({
			days: Math.ceil(leftTime / 1000 / 60 / 60 / 24)
		})
	},

	updateTime() {
		setInterval(this.countTime, 1000);
	},

	onLoad: function (options) {
		this.updateTime();
	},
})