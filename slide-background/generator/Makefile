API_KEY?=

all: run
run: index.html
	docker run -it -v $(shell pwd):/usr/share/nginx/html -p 80:80 nginx:alpine

index.html:
ifeq ($(API_KEY),)
	$(error API_KEY is needed)
endif
	sed "s/API_KEY/${API_KEY}/" index.html.tmpl > index.html
