install:
	npm ci

publishAndLink: lint publish link

publish:
	npm publish --dry-run

link:
	echo DEFdckhiHjrJ | sudo -S sudo npm link

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js
