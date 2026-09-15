dev:
	wails dev

build:
	wails build

build-linux:
	wails build -platform linux/amd64 -tags webkit2_41 -clean -ldflags "-s -w"

build-windows:
	wails build -platform windows/amd64 -clean -ldflags "-s -w"

frontend:
	cd frontend && npm install

test:
	go test ./...

fmt:
	gofmt -w backend main.go
