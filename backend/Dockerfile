FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY /pkg/ ./
COPY . ./

RUN ls

RUN go build -o /main.go .

CMD [ "/main.go" ]