<template>
    <view>
        <view class="uni-title uni-common-pl">输入区域高度自适应，不会出现滚动条,测试git</view>
        <view class="uni-textarea">
            <textarea @blur="bindTextAreaBlur" auto-height />
            </view>
            <view class="uni-title uni-common-pl">占位符字体是红色的textarea，测试git2</view>
            <view class="uni-textarea">
                <textarea placeholder-style="color:#F76260" placeholder="占位符字体是红色的 GIT上传测试3"/>
            </view>
        </view>
</template>

<script>
	export default {
	    data() {
	        return {}
	    },
	    methods: {
	        bindTextAreaBlur: function (e) {
	            console.log(e.detail.value)
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
