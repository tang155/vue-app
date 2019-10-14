<template>
    <view>
        <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
        <canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas"></canvas>
        <canvas style="width: 400px; height: 500px;" canvas-id="secondCanvas" @error="canvasIdErrorCallback"></canvas>
    </view>
</template>

<script>
	export default {
	    onReady: function (e) {
	        var context = uni.createCanvasContext('firstCanvas')
	
	        context.setStrokeStyle("#00ff00")
	        context.setLineWidth(5)
	        context.rect(0, 0, 200, 200)
	        context.stroke()
	        context.setStrokeStyle("#ff0000")
	        context.setLineWidth(2)
	        context.moveTo(160, 100)
	        context.arc(100, 100, 60, 0, 2 * Math.PI, true)
	        context.moveTo(140, 100)
	        context.arc(100, 100, 40, 0, Math.PI, false)
	        context.moveTo(85, 80)
	        context.arc(80, 80, 5, 0, 2 * Math.PI, true)
	        context.moveTo(125, 80)
	        context.arc(120, 80, 5, 0, 2 * Math.PI, true)
	        context.stroke()
	        context.draw()
			
			var context = uni.createCanvasContext('secondCanvas')
			context.setStrokeStyle("#007AFF")
			// context.setStrokeStyle("#00ff00")
			context.setLineWidth(15)
			context.rect(0, 0, 200, 200)
			context.rect(5,5,340,250)
			context.stroke()
			context.setStrokeStyle("#ff0000")
			context.setLineWidth(5)
			context.moveTo(160, 150)
			context.arc(100, 100, 60, 0, (0.5) * Math.PI, true)
			context.moveTo(140, 100)
			context.arc(100, 100, 40, 0, Math.PI, false)
			context.moveTo(85, 80)
			context.arc(80, 80, 5, 0, 2 * Math.PI, true)
			context.moveTo(125, 80)
			context.arc(120, 80, 5, 0, 2 * Math.PI, true)
			context.stroke()
			context.arc
			context.draw()
	    },
	    methods: {
	        canvasIdErrorCallback: function (e) {
	            console.error(e.detail.errMsg)
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
