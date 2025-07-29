.PHONY: base
base:
	docker build -t pacem:latest -f Dockerfile .

.PHONY: backend
backend:
	docker-compose up backend

.PHONY: test
test:
	pytest

