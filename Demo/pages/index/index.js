// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  	data: {
		textVal: 'hello world!',
		tmpTextVal: '* No input value for the time being * ...',
  	},
  	methods: {
		saveTextVal(e) {
			this.setData({
				tmpTextVal: e.detail.value,
			})
		},

		updateTectVal(e) {
			this.setData({
				textVal: this.data.tmpTextVal,
			})
		}
  	},
})
