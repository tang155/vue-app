<template>
    <view>
        <view class="page-body">
            <view class="btn-area">
                <navigator url="index" hover-class="navigator-hover">
                    <button type="default">跳转到新页面</button>
                </navigator>
                <navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
                    <button type="default">在当前页打开</button>
                </navigator>
                <navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
                    <button type="default">跳转tab页面</button>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
	// navigate.vue页面接受参数
	export default {
	    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
	        console.log(option.id); //打印出上个页面传递的参数。
	        console.log(option.name); //打印出上个页面传递的参数。
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
