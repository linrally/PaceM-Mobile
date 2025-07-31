.PHONY: base
base:
	docker build -t pacem:latest -f Dockerfile .

.PHONY: backend
backend:
	docker-compose up backend

.PHONY: db
db:
	docker-compose up -d db 

.PHONY: test
test:
	pytest

