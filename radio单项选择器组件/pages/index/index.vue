<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="uni-title">默认样式</view>
            <view>
                <label class="radio"><checkbox value="r1" checked="true" />选中</label>
                <label class="radio"><radio value="r2" />未选中</label>
            </view>
        </view>
        <view class="uni-title uni-common-mt uni-common-pl">推荐展示样式</view>
        <view class="uni-list">
            <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
                    <view>
                        <radio :value="item.value" :checked="index === current" />
                    <!-- </view>
                    <view> -->
					{{item.name}}</view>
                </label>
            </radio-group>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            items: [{
                    value: 'USA',
                    name: '美国'
                },
                {
                    value: 'CHN',
                    name: '中国',
                    checked: 'true'
                },
                {
                    value: 'BRA',
                    name: '巴西'
                },
                {
                    value: 'JPN',
                    name: '日本'
                },
                {
                    value: 'ENG',
                    name: '英国'
                },
                {
                    value: 'FRA',
                    name: '法国'
                },
            ],
            current: 0
        }
    },
    methods: {
        radioChange: function(evt) {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].value === evt.target.value) {
                    this.current = i;
                    break;
                }
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
