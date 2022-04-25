# Ignite notes experiment

![A chain made of paper](./img/header.jpeg "A chain made of paper")

_A chain made of paper_

---

Application specific blockchain node to manage public notes.

This application was built using the [Ignite CLI](https://ignite.com), an application to create application-specific blockchains using the [Cosmos SDK](https://cosmos.network) and the [Tendermint Core](https://tendermint.com/core/) consensus algorithm, created by [Tendermint](https://tendermint.com)

## I don't understand the implemenetation 😦

Ignite auto-generates a lot of go modules in order to work. Some of the most relevant ones are the following:

- **`proto`**. Business model definition as protobuf messages and queries.
- **`x/{endpoint}`**. Query and transaction handlers based on the business model definitions, which helpers and tests.
  - **`keepers`**. Definition of transaction and query handlers. Act as the operations' entrypoints.
  - **`types`**. Business model types.
  - **`simulation`**. Simulation utils to test a network with more than one node.
  - **`client`**. Definition of a CLI application to execute transaction and queries of the given endpoint.
- **`app`**. Network application definition: logging, keeper configuration, cryptography configuration, etc.
- **`vue`**. Template for a frontend application in Vue.
- **`docs`**. OpenAPI static documentation specification

## How do I execute a node? 🤯

1. [Install Go](https://go.dev/doc/install).
2. [Install Ignite CLI](https://docs.ignite.com/guide/install.html) 💿.
3. Clone this repository 👭🏻.
4. Open terminal 🖥 and change to the directory of the repository ➡️.
5. Execute `ignite chain serve` ⛓😋.
6. After building and initializing, the output will give you the `Blockchain API` endpoint 😳.
7. You can also execute operations using the generated CLI tool (`notesd`) 🥶.
