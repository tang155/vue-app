<template>
    <view>
        <view class="uni-common-mt">
            <view class="uni-form-item uni-column">
                <view class="title">可自动聚焦的input</view>
                <input class="uni-input" focus placeholder="自动获得焦点" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">键盘右下角按钮显示为搜索</view>
                <input class="uni-input" confirm-type="search" placeholder="键盘右下角按钮显示为搜索" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">控制最大输入长度的input</view>
                <input class="uni-input" maxlength="10" placeholder="最大输入长度为10" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">实时获取输入值：{{inputValue}}</view>
                <input class="uni-input" @input="onKeyInput" placeholder="输入同步到view中" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">控制输入的input</view>
                <input class="uni-input" @input="replaceInput" v-model="changeValue" placeholder="连续的两个1会变成2" />
            </view>
            <!-- #ifndef MP-BAIDU -->
            <view class="uni-form-item uni-column">
                <view class="title">控制键盘的input</view>
                <input class="uni-input" ref="input1" @input="hideKeyboard" placeholder="输入123自动收起键盘" />
            </view>
            <!-- #endif -->
            <view class="uni-form-item uni-column">
                <view class="title">数字输入的input</view>
                <input class="uni-input" type="number" placeholder="这是一个数字输入框" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">密码输入的input</view>
                <input class="uni-input" password type="text" placeholder="这是一个密码输入框" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">带小数点的input</view>
                <input class="uni-input" type="digit" placeholder="带小数点的数字键盘" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">身份证输入的input</view>
                <input class="uni-input" type="idcard" placeholder="身份证输入键盘" />
            </view>
            <view class="uni-form-item uni-column">
                <view class="title">控制占位符颜色的input</view>
                <input class="uni-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
            </view>
        </view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            title: 'input',
	            focus: false,
	            inputValue: '',
	            changeValue: ''
	        }
	    },
	    methods: {
	        onKeyInput: function(event) {
	            this.inputValue = event.target.value
	        },
	        replaceInput: function(event) {
	            var value = event.target.value;
	            if (value === '11') {
	                this.changeValue = '2';
	            }
	        },
	        hideKeyboard: function(event) {
	            if (event.target.value === '123') {
	                uni.hideKeyboard();
	            }
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
