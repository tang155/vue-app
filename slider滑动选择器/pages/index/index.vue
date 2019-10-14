<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <view class="uni-title">设置step</view>
            <view>
                <slider value="5" @change="sliderChange" step="5" min=0 max="35" />
            </view>

            <view class="uni-title">显示当前value</view>
            <view>
                <slider value="50" @change="sliderChange" show-value />
            </view>

            <view class="uni-title">设置最小/最大值</view>
            <view>
                <slider value="100" @change="sliderChange" min="50" max="200" show-value />
            </view>

            <view class="uni-title">不同颜色和大小的滑块</view>
            <view>
                <slider value="50" @change="sliderChange" activeColor="#FFCC33" backgroundColor="#000000" block-color="#8A6DE9" block-size="20" />
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
	        sliderChange(e) {
	            console.log('value 发生变化：' + e.detail.value)
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
