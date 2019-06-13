## Generator for backgrounds for slides

With generator you can create background images for use in Google Slides.
The following uses Google Maps to generate a picture of the city's roads, and add
a CNCF overlay.

### Adding a new city

Edit `places.js` and add the coordinates of your city there.

### Generating a picture

1. Get a Google Maps API key here: https://developers.google.com/maps/documentation/embed/get-api-key
1. Run `make API_KEY={your-key-here}`
1. Open `localhost` in a web browser (e.g. Chrome)
1. Write your city (e.g. `helsinki`)
1. Take a screenshot of the page
1. Add to `slide-background/{place}.png`
