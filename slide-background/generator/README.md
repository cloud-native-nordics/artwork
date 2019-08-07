## Generator for backgrounds for slides

With generator you can create background images for use in Google Slides.
The following uses Google Maps to generate a picture of the city's roads, and add
a CNCF overlay.

Well-known coordinates for the different cities we operate in are kept in `places.js`

### Generating a picture

1. Get a Google Maps API key here: https://developers.google.com/maps/documentation/embed/get-api-key
   1. TL;DR; Enable the [Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com) in the Google Cloud Console.
   2. Go to [Credentials](https://console.cloud.google.com/apis/credentials) -> **Create Credentials** -> **API Key**, and you will get a key to use
2. Put the API key in the file `.gmap_api_key` in this folder
3. Update `places.js`; add the coordinates for the location you want/need
4. Run `make LOCATION={your-place}`, where `{your-place}` is the place you added. Sample value: `helsinki`
5. `screenshot.png` will be generated. Move that to `slide-background/{your-place}.png`
6. Send a PR with the change! We want to collect all backgrounds in the Git repo for wider re-use
