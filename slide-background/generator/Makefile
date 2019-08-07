API_KEY?=

all: run
run: index.html
	docker run -it -v $(shell pwd):/usr/share/nginx/html -p 80:80 nginx:alpine

index.html:
ifeq ($(API_KEY),)
	$(error API_KEY is needed)
endif
	sed -e "s/API_KEY/${API_KEY}/" -e "s/LOCATION/${LOCATION}/" background/index.html.tmpl > background/index.html
	./capture.js
