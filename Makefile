install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	echo DEFdckhiHjrJ | sudo -S sudo npm link

lint:
	npx eslint .