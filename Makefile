
all: build test

build:
	./node_modules/jison/lib/cli.js src/jsonlint.y src/jsonlint.l
	mv jsonlint.js lib/jsonlint.js
	node scripts/bundle.js | ./node_modules/uglify-js/bin/uglifyjs > web/jsonlint.js

test: lib/jsonlint.js test/all-tests.js
	node test/all-tests.js

