export PATH := $(HOME)/.npm-global/bin:$(HOME)/.nvm/versions/node/$(shell node -v)/bin:/usr/local/bin:$(PATH)

# HELP DOCS
# make copy
# make rebuild
# make restart-caddy
# make restart-server


help:
	@echo "make copy"
	@echo "make rebuild"
	@echo "make restart-caddy"
	@echo "make restart-server"

# copy to server
copy: # copy to server
	./scripts/copy.sh
	# copy env file to server
	scp .env.production root@178.156.153.83:/app/.env


rebuild: # rebuild docker image
	./scripts/rebuild.sh

build_es: # build eliza-server
	cd packages/core/ && pnpm install && pnpm run build
	cd packages/client-twitter/ && pnpm install && pnpm run build
	cd packages/client-direct/ && pnpm install && pnpm run build


add-git-config: # add git config
	git config --global user.email "resurgohldr@gmail.com"
	git config --global user.name "resurgox"


add-remote: # add remote
	git remote set-url base git@github.com:resurgox/elizaredux.git

test-ssh: # test ssh
	ssh -T git@github.com

push: # push to remote
	git push -u eliza main-eliza

restart-caddy: # restart caddy
	ssh root@178.156.153.83 "sudo systemctl restart caddy"

copy-to-server: # copy to server
	./scripts/copy.sh

restart-caddy: # restart caddy
	ssh root@178.156.153.83 "cd /app && caddy reload"

restart-server: # restart server
	ssh root@178.156.153.83 "cd /app && make rebuild"
