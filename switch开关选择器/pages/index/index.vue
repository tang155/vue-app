<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title">默认样式</view>
            <view>
                <switch checked @change="switch1Change" />
                <switch @change="switch2Change" />
            </view>
			<view class="uni-title">其他尺寸颜色</view>
			<view>
			    <switch style="transform: scale(0.7);" checked @change="switch1Change" color="#DD524D" size="12"/>
			    <switch @change="switch2Change" color="#4CD964"/>
			</view>
            <view class="uni-title">推荐展示样式</view>
        </view>
        <view class="uni-list">
            <view class="uni-list-cell uni-list-cell-pd">
                <view class="uni-list-cell-db">开启中</view>
                <switch checked />
            </view>
            <view class="uni-list-cell uni-list-cell-pd">
                <view class="uni-list-cell-db">关闭</view>
                <switch />
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			switch1Change: function (e) {
				console.log('switch1 发生 change 事件，携带值为', e.target.value)
			},
			switch2Change: function (e) {
				console.log('switch2 发生 change 事件，携带值为', e.target.value)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
