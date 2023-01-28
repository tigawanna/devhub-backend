# syntax=docker/dockerfile:1

FROM golang:1.19-alpine AS build


RUN apk add -v build-base
RUN apk add -v ca-certificates
RUN apk add --no-cache \
 openssh

WORKDIR /pb

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./
COPY pb_migrations/ /pb/pb_migrations

RUN go build -o pocketbase


FROM alpine

WORKDIR /

COPY --from=build /pb /pb



EXPOSE 8080

CMD [ "/pb/pocketbase","serve", "--http=0.0.0.0:8080" ]


