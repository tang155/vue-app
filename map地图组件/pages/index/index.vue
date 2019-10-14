<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map style="width: 100%; height: 400px;" :latitude="latitude" :longitude="longitude" :markers="covers">
                </map>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            title: 'map',
	            latitude: 24.517,
	            longitude:118.027,
	            covers: [{
	                latitude: 39.909,
	                longitude: 116.39742,
	                iconPath: '../../../static/location.png'
	            }, {
	                latitude: 39.90,
	                longitude: 116.39,
	                iconPath: '../../../static/location.png'
	            }]
	        }
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
