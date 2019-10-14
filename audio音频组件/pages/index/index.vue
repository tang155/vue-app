<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap" style="text-align: center;">
                <audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls="true"  :loop="false"></audio>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            current: {
	                poster: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg',
	                name: '致爱丽丝',
	                author: '暂无',
	                src: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3',
	            },
	            audioAction: {
	                method: 'pause'
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
