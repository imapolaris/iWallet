// pages/test/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		api: 1
	},

	onReady(options) {
		wx.onNetworkStatusChange(function(res){
			console.log(res);
		})

		wx.onUserCaptureScreen(function(res){
			wx.showToast({
				title: '用户截屏了',
			})
		})
	},

	onLoad(options) {
		wx.onWindowResize(function(res) {
			console.log(res);
		})
	},

	iBeaconAction() {
		wx.startBeaconDiscovery({
			uuids: [],
		})
	},

	onShow(options) {
		// wx.pageScrollTo({
		// 	selector: '#tab',
		// })
	},

	ad() {
		wx.createRewardedVideoAd({
			adUnitId: 'ad123'
		})
	},

	setting() {
		wx.openSetting({
			success(res) {
				console.log(res.authSetting)
			}
		})
	},

	authorize() {
		wx.getSetting({
			success(res) {
				if (!res.authSetting['scope.record']) {
					wx.authorize({
						scope: 'scope.record',
						success() {
							wx.startRecord({
								
							})
						}
					})
				} else {
					console.log('已授权')
				}
			}
		})
	},

	address() {
		wx.chooseAddress({
			
		})
	},

	pay() {
		wx.requestPayment({
			timeStamp: '1490840662',
			nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
			package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
			signType: 'MD5',
			paySign: '123',
		})
	},

	analyze() {
		console.log('分析');
		wx.reportAnalytics("memory_used", {
			memory: 50
		})
	},

	report() {
		console.log('告警')
		wx.reportMonitor('0', 6);
	},

	wxInterface() {
		// wx.login({
		// 	success: function(res) {
		// 		console.log('login', res);
		// 	}
		// })

		wx.checkSession({
			success: function(res) {
				console.log('login status', res)
			}
		})

		console.log(wx.getAccountInfoSync());

		wx.getUserInfo({
			success: function(res) {
				console.log('user info', res)
			}
		})
	},

	vibrate() {
		wx.vibrateShort({
			
		})
	},

	callY() {
		wx.makePhoneCall({
			phoneNumber: '114',
		})
	},

	screenBright(e) {
		wx.setScreenBrightness({
			value: e.detail.value,
		})
	},

	screen() {
		wx.setScreenBrightness({
			value: 0.5,
		})
	},

	network() {
		wx.getNetworkType({
			success: function(res) {
				console.log('网络类型', res)
			},
		})
	},

	clipboard() {
		wx.setClipboardData({
			data: 'hi, alex!',
		})
		wx.getClipboardData({
			success: function(data) {
				console.log(data);
			}
		})
	},

	getBattery() {
		let battery = wx.getBatteryInfoSync();
		console.log(battery);
	},

	addContact() {
		wx.addPhoneContact({
			firstName: 'alex',
		})
	},

	doShare() {
		wx.showShareMenu({
			withShareTicket: true
		})
	},

	previewImage() {
		wx.previewImage({
			urls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567148182034&di=fec7062590d933a156d6c744e51a593a&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0730%2F4E366BB5D1B98A7B4553AF15C21B60022D0450E5_size99_w600_h598.jpeg', 'images/logo/logo.png', '../../images/temp/temp.png'],
		})
	},

	chooseImage() {
		wx.chooseMessageFile({
			count: 10,
			type: 'image',
			success(res) {
				console.log(res);
			}
		})
	},

	getCenter() {
		const mapCtx = wx.createMapContext('map', this)
		
		mapCtx.getCenterLocation({
			success: function(res) {
				console.log(res);
			}
		});

		mapCtx.getRegion({
			success: function (res) {
				console.log(res);
			}
		});

		mapCtx.getSkew({
			success: function (res) {
				console.log(res);
			}
		});
	},

	canIUse() {
		wx.showToast({
			title: wx.canIUse('console.group').toString(),
		});
	},
	base64ToArrayBuffer() {
		const base64 = 'CxYh';
		const arrayBuffer = wx.base64ToArrayBuffer(base64);
		console.log(arrayBuffer);
	},
	getSysInfo() {
		const res = wx.getSystemInfoSync();
		console.log(res.model);
		console.log(res.windowWidth);
		console.log(res.windowHeight);

		console.log(res.language);
		console.log(res.version);

		console.log(res.platform);
	},
	getUpdateMgr() {
		const updateMgr = wx.getUpdateManager();
		updateMgr.onCheckForUpdate(function(res) {
			console.log(res.hasUpdate);
		})

		updateMgr.onUpdateReady(function() {
			wx.showModal({
				title: '更新提示',
				content: '新版本已经准备好，是否重启应用？',
				success: function(res) {
					if (res.confirm) {
						updateMgr.applyUpdate();
					}
				}
			})
		})

		updateMgr.onUpdateFailed(function() {
			console.log('更新失败...')
		})
	},
	getLaunchOption() {
		console.log(wx.getLaunchOptionsSync())
	},
	getAnError() {
		throw 'hi, alex!';
	},
	realtimeLog() {
		console.group('alex')
		console.info('上传日志');
		console.groupEnd()
		// const mgr = wx.getRealtimeLogManager();
		// mgr.info({str: 'hello world'}, 'info log', 100, [1,2,3]);
		// mgr.error({ str: 'hello world' }, 'error log', 100, [1, 2, 3]);
		// mgr.warn({ str: 'hello world' }, 'warn log', 100, [1, 2, 3]);
		// mgr.setFilterMsg('hello');
	},
	switchTab() {
		wx.switchTab({
			url: '/pages/vote/vote',
		})
	},
	reLaunch() {
		wx.reLaunch({
			url: 'subpage/subpage?id=1',
		})
	},
	redirectTo() {
		wx.redirectTo({
			url: 'subpage/subpage?id=2',
		})
	},
	navigate() {
		wx.navigateTo({
			url: 'subpage/subpage?id=3',
		})
	},
	showToast() {
		wx.showModal({
			title: 'Welcome',
			content: 'Hi, alex!',
			success: function(res) {
				wx.showToast({
					title: res.confirm.toString(),
				})
			}
		})
	},
	showLoading() {
		wx.showLoading({
			title: 'loading ...',
			mask: true
		})

		setTimeout(function() {
			wx.hideLoading()
		}, 3000);
	},
	showActionSheet() {
		wx.showActionSheet({
			itemList: ['拍照', '从相册中选择'],
			success: function(res) {
				wx.showToast({
					title: res.tapIndex + '',
				})
			},
			fail: function(res) {
				console.log(res);
			}
		})
	},
	showTabBar() {
		wx.showTabBar({
			aniamtion: true,
			success: function (res) { },
			fail: function (res) { },
			complete: function (res) { },
		})
	},
	downloadFont() {
		wx.loadFontFace({
			family: 'Bitstream Vera Serif Bold',
			source: 'url("https://sungd.github.io/Pacifico.ttf")',
			success: console.log
		})
	},
	getMenuButtonPos() {
		console.log(wx.getMenuButtonBoundingClientRect());
	}
})