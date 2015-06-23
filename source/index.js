!function() {

	var canvas,
		image,
		texture

	// Try to create a WebGL canvas (will fail if WebGL isn't supported)
	try {
		canvas = fx.canvas()
	}
	catch (e) {
		alert(e)
		return
	}

	image = document.getElementById('sourceImage')

	image
		.addEventListener('load', function() {

			// Convert the image to a texture
			texture = canvas.texture(image)

			// Apply the ink filter
			canvas
				.draw(texture)
				.ink(0.25)
				.update()

			// Replace the image with the canvas
			image.parentNode.insertBefore(canvas, image)
			image.parentNode.removeChild(image)
		})
}()
