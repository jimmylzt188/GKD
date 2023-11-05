{
	"id": 3,
	"name": "我的订阅",
	"version": 1,
	"author": "gkd",
	"apps": [{
		"id": "com.amazing.cloudisk.tv",
		"name": "小白云盘TV",
		"groups": [{
			"name": "开屏广告",
			"key": 1,
			"rules": [{
				"preKeys": [],
				"matches": ["TextView[text*=\"返回键跳过 确定暂停\"]"],
				"excludeMatches": []
			}],
			"snapshotUrls": ["https://i.gkd.li/snapshot/1699030124665"]
		}]
	}]
}
{"id":"com.tencent.mm","name":"微信","groups":[{"name":"自动查看原视频","key":9,"desc":"自动点击底部左侧[查看原视频（*MB）]按钮","enable":false,"activityIds":["com.tencent.mm.ui.chatting.gallery.ImageGalleryUI"],"rules":[{"preKeys":[],"matches":["Button[text^=\"查看原视频\"][clickable=true]"],"excludeMatches":[]}],"snapshotUrls":["https://gkd-kit.gitee.io/import/12706944"]}]}
