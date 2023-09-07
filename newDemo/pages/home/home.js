// pages/home/home.js
Page({
	data: {
	  activeNames: []
	},

	onChange(event) {
	  this.setData({
		activeNames: event.detail
	  })
	},

	toScenery() {
		wx.navigateTo({
		  url: '/pages/scenery/scenery',
		})
	},
	toAcquaintance() {
		wx.navigateTo({
			url: '/pages/acquaintance/acquaintance',
		})
	},
	toHerFriend() {
		wx.navigateTo({
			url: '/pages/herFriend/herFriend',
		})
	},
	toFristMeet() {
		wx.navigateTo({
			url: '/pages/fristMeet/fristMeet',
		})
	},
	toSecondMeet() {
		wx.navigateTo({
			url: '/pages/secondMeet/secondMeet',
		})
	},
	toFlower() {
		wx.navigateTo({
			url: '/pages/flower/flower',
		})
	},
	toBeforeWinter() {
		wx.navigateTo({
			url: '/pages/boforeWinter/boforeWinter',
		})
	},
	toWinter() {
		wx.navigateTo({
			url: '/pages/winter/winter',
		})
	},
	toAfterWinter() {
		wx.navigateTo({
		  url: '/pages/afterWinter/afterWinter',
		})
	},
	toBotanical() {
		wx.navigateTo({
			url: '/pages/botanicalGarden/botanicalGarden',
		})
	},
	toElephantTrunk() {
		wx.navigateTo({
			url: '/pages/elephantTrunk/elephantTrunk',
		})
	},
	toBridesmaid() {
		wx.navigateTo({
			url: '/pages/bridesmaid/bridesmaid',
		})
	},
	toDoctor() {
		wx.navigateTo({
			url: '/pages/doctor/doctor',
		})
	},
	toChgDate() {
		wx.navigateTo({
			url: '/pages/chgMedDate/chgMedDate',
		})
	},
	toPowerCut() {
		wx.navigateTo({
			url: '/pages/powerCut/powerCut',
		})
	},
	toBeforeHoliday() {
		wx.navigateTo({
			url: '/pages/beforeHoliday/beforeHoliday',
		})
	}

  });
  