

Page({
	data: {
		targetDate: '2022-10-05 00:00:00',
		days: '',

		value: 1,
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

	onChange(event) {
		this.setData({
		  value: event.detail,
		});
		//uni.setStorageSync('rate', value)
		//log(uni.getStorageSync('rate'));
		wx.setStorage('rate', value);
		log(wx.getStorage('rate'));
	},

	onLoad: function (options) {
		this.updateTime();
		//this.data.value = uni.getStorageSync('rate');
		//log(this.data.value);
	},
})