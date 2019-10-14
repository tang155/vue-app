<template>
    <view>
        <view class="uni-common-mt">
            <view class="uni-form-item uni-column">
                <view class="title">表单组件在label内</view>
                <checkbox-group class="uni-list" @change="checkboxChange">
                    <label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
                        <view>
                            <checkbox :value="item.name" :checked="item.checked"></checkbox>
                         <!-- </view>
                        <view> -->
						{{item.value}}</view>
                    </label>
                </checkbox-group>
            </view>

            <view class="uni-form-item uni-column">
                <view class="title">label用for标识表单组件</view>
                <radio-group class="uni-list" @change="radioChange">
                    <label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
                        <view>
                            <radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
                       <!-- </view>
                        <view> -->
                            <label class="label-2-text" :for="item.name">
                                <text>{{item.value}}</text>
                            </label>
                        </view>
                    </label>
                </radio-group>
            </view>

            <view class="uni-form-item uni-column">
                <view class="title">label内有多个时选中第一个</view>
                <checkbox-group class="uni-list" @change="radioChange">
                    <label class="label-3">
						<view class="uni-list-cell uni-list-cell-pd">
						    <checkbox >选项0</checkbox>
						</view>
                        <view class="uni-list-cell uni-list-cell-pd">
                            <checkbox >选项一df</checkbox>
                        </view>
                        <view class="uni-list-cell uni-list-cell-pd">
                            <checkbox >选项二</checkbox>
                        </view>
                        <view style="margin-top:20rpx;">点击该label下的文字默认选中第一个checkbox</view>
                    </label>
                </checkbox-group>
            </view>

        </view>
    </view>
</template>

<script>
	export default {
	    data() {
	        return {
	            checkboxItems: [{
	                    name: 'USA',
	                    value: '美国'
	                },
	                {
	                    name: 'CHN',
	                    value: '中国',
	                    checked: 'true'
	                },
					{
					    name: 'EGN',
					    value: '更应该飞',
					    checked: 'true'
					}
	            ],
	            radioItems: [{
	                    name: 'USA',
	                    value: '美国'
	                },
	                {
	                    name: 'CHN',
	                    value: '中国',
	                    checked: 'true'
	                }
	            ],
	            hidden: false
	        }
	    },
	    methods: {
	        checkboxChange: function(e) {
	            console.log(e)
	            var checked = e.target.value
	            var changed = {}
	            for (var i = 0; i < this.checkboxItems.length; i++) {
	                // if (checked.indexOf(this.checkboxItems[i].name) !== -1) {						
	                //     changed['checkboxItems[' + i + '].checked'] = true
	                // } else {
	                    changed['checkboxItems[' + i + '].checked'] = false
	                // }
	            }
	        },
	        radioChange: function(e) {
	            var checked = e.target.value
	            var changed = {}
	            for (var i = 0; i < this.radioItems.length; i++) {
	                // if (checked.indexOf(this.radioItems[i].name) !== -1) {
	                    changed['radioItems[' + i + '].checked'] = true
	                // } else {
	                //     changed['radioItems[' + i + '].checked'] = false
	                // }
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
