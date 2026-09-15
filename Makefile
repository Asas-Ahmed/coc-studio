dev:
	wails dev

build:
	wails build

frontend:
	cd frontend && npm install

test:
	go test ./...

fmt:
	gofmt -w backend main.go
