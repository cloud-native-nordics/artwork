API_KEY?=$(shell cat .gmap_api_key)
# Available options can be found in background/places.js
LOCATION?=

all:
ifeq ($(API_KEY),)
	$(error API_KEY is needed)
endif
ifeq ($(LOCATION),)
	$(error LOCATION is needed)
endif
	sed -e "s/API_KEY/${API_KEY}/" -e "s/LOCATION/${LOCATION}/" index.html.tmpl > index.html
	docker rm -f tmp_bg_webserver
	docker run -d \
		--name tmp_bg_webserver \
		-v $(shell pwd):/usr/share/nginx/html \
		-p 80:80 \
		nginx:alpine
	wget -qO Dockerfile https://raw.githubusercontent.com/GoogleChrome/puppeteer/master/.ci/node12/Dockerfile.linux
	docker build -t puppeteer .
	docker run -it --rm \
		-v $(shell pwd):/generator \
		-w /generator \
		-u $(shell id -u):$(shell id -g) \
		--net container:tmp_bg_webserver \
		puppeteer \
		/bin/sh -c "\
		npm install && \
		./capture.js"
	docker rm -f tmp_bg_webserver
	rm index.html
