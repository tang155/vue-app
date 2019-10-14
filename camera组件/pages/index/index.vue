<template>
    <view>
        <camera device-position="back" flash="off" @error="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照1</button>
        <view>预览</view>
        <image mode="widthFix" :src="src"></image>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            src:""
	        }
	    },
	    methods: {
	         takePhoto() {
	            const ctx = uni.createCameraContext();
	            // 从相册选择6张图
	            uni.chooseImage({
	                count: 6,
	                sizeType: ['original', 'compressed'],
	                sourceType: ['album'],
	                success: function(res) {
	                    // 预览图片
	                    uni.previewImage({
	                        urls: res.tempFilePaths,
	                        longPressActions: {
	                            itemList: ['发送给朋友', '保存图片', '收藏'],
	                            success: function(data) {
	                                console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
	                            },
	                            fail: function(err) {
	                                console.log(err.errMsg);
	                            }
	                        }
	                    });
	                }
	                });
	        },
	        error(e) {
	            console.log(e.detail);
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
