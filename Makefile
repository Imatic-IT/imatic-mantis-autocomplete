.DEFAULT_GOAL := all

files/styles.css: css/styles.css
	mkdir -p $(dir $@)
	./node_modules/.bin/css-combine $^ > $@

files/autocomplete.js:
	yarn build

.PHONY: clean
clean:
	rm -rf files/autocomplete.js
	rm -rf files/styles.css

all: files/autocomplete.js files/styles.css
