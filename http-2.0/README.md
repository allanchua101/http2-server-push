# HTTP 2.0 Server Push

HTTP/2 Server Push allows an HTTP/2-compliant server to send resources to a HTTP/2-compliant client before the client requests them. It is, for the most part, a performance technique that can be helpful in loading resources pre-emptively.

## Pre-requisites.

In order for you to run the HTTP 1.1 vs HTTP 2.0 tests, you have to install the following on your machine:

1. Google Chrome - Will be used for analyzing web page performances using the Waterfall Diagram.
2. NodeJS 10+ - Running both servers require NodeJS to be installed on your machine.
3. NPM - This is shipped with NodeJS and will enable you to download the package depedencies of both sites.

## Running the HTTP 2.0 Site

1. Clone / download this repository on your machine
2. Navigate to the HTTP2 .0 folder where you have cloned / downloaded this repository
3. Run the command below on your terminal

```sh
npm install
npm run server
```

4. Navigate to https://localhost:4433

## Read About HTTP 2.0

This repository is used in the article that explains HTTP 2.0 concept. If your interested to learn more about HTTP 2.0, please continue reading on this [article](https://pogsdotnet.blogspot.com/2018/06/http-2-server-push.html).
