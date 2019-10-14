<template>
    <view>
        <view class="uni-padding-wrap uni-common-mt">
            <button type="primary">页面主操作 Normal</button>
            <button type="primary" loading="true">页面主操作 Loading</button>
            <button type="primary" disabled="true">页面主操作 Disabled</button>
            <button type="default">页面次要操作 Normal</button>
            <button type="default" disabled="true">页面次要操作 Disabled</button>
            <button type="warn">警告类操作 Normal</button>
            <button type="warn" disabled="true">警告类操作 Disabled</button>
            <view class="button-sp-area">
                <button type="primary" plain="true">按钮</button>
                <button type="primary" disabled="true" plain="true">不可点击的按钮</button>
                <button type="default" plain="true">按钮</button>
                <button type="default" disabled="true" plain="true">按钮</button>
                <button class="mini-btn" type="primary" size="mini">按钮</button>
                <button class="mini-btn" type="default" size="mini">按23钮</button>
                <button class="logo" type="warn" size="mini">按钮333</button>
            </view>
        </view>
    </view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

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
		margin-top: 100rpx;
		margin-left: 200rpx;
		margin-right: auto;
		margin-bottom: 30rpx;
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
