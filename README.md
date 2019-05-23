# pact-example

This is an example contract testing project using PACT

## Usage

Setup

```bash
$ npm i
``` 

Run consumer side tests and create pacts

```bash
$ npm run test-consumer
``` 

Start Pact Broker

```bash
$ npm run pact-broker
```

Delete pact (if exist)

```bash
$ npm run delete-pact
```

Publish pacts

```bash
$ npm run publish-pacts
```

Verify pacts against the provider 

```bash
$ npm run test-provider
```

Run all circle of tests

```bash
$ npm run test
```