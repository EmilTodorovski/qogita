# Qogita's Front-End Technical Challenge.

Congratulations on reaching the technical challenge stage of the interview process at Qogita.

We are excited to potentially have you join the Engineering team, where you will work alongside brilliant people to build a revolutionary global wholesale B2B platform.

## Background

This challenge is built around the front-end stack we use at Qogita – [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Next.js](https://nextjs.org/), and [Tailwind CSS](https://tailwindcss.com/).

You are expected to use the tools and techniques are you are most comfortable with to produce good quality code that can be understood by engineers of varying experience.

**Please address the functional requirements listed in the task below, and any non-functional requirements you see as appropriate.**

## Task – Shopping Cart

Your task is to expand this project to display products, and allow customers to add them to a shopping cart. You may use third party libraries to assist you. We expect you to prioritise the usability of your user-interface over how pretty it looks.

This task should take 3-4 hours to complete, and you will be given a week to do this. You should commit your code to a repository of your choice, and then share this with us. Please also document any assumptions you make.

### Requirements

#### Home page

- Display products retrieved from the `/products` endpoint. See [API](#api).
- Customers should be able to browse all available products (there are 100 in total).
- Customers should be able to add products to a shopping cart.

#### Cart page

- Display the products the customer has added to their shopping cart.
- Customers should be able to remove products from their shopping cart.
- The shopping cart's value should be prominently displayed.

##### Bonus requirements

- Customers should be able to change the quantity of a particular product in their shopping cart.

## Getting started

The existing code includes a development environment, and an [API](#api) with product data for you to interact with. The relevant API response types can be found in [src/types.ts](src/types.ts). Please do not use `data/products.json` directly.

### Setup

```sh
cd frontend-challenge
npm install
```

### Running locally

#### Development

Start the project in development mode.

```sh
npm run dev
```

#### Production

Build and start the project in production mode.

```sh
npm start
```

## API

The API can be interacted with via `http://localhost:3000/api` and has the following endpoints:

#### `/products`

The `/products` endpoint accepts `GET` requests and will return the first page of 20 products. To retrieve a different page of 20 products, you can pass the `page` query parameter (e.g. `/products?page=2`).

#### `/products/[gtin]`

The `/products/[gtin]` endpoint accepts `GET` requests and will return a product matching the GTIN (e.g. `/products/8005610625720`). If no product is found, the API will respond with a `404` status.

## Devs Notes

Regarding the requirements:

- "The shopping cart's value should be prominently displayed" - wasn't sure exactly what does this mean, whether it should be easily visible on the page, as it is (with large font and bold text), or should be "floating" wherever the user scrolls (e.g. always visible)? If the latter, I can implement that as well :D
- "and any non-functional requirements you see as appropriate" - there are many ideas how to further improve this, from caching the response/page on the frontend, saving the cart in local storage so it isnt lost on refresh, etc - but from the "This task should take 3-4 hours to complete" part, I guess optimizations like that are not needed.
- If there was local storage, maybe the api for individual products would have been needed, to refresh the data - but so far I havent found any use for it.
- Note that I have never used next.js and tailwind.css, so I might not know some patterns that are common, including naming conventions.
- I took "We expect you to prioritise the usability of your user-interface over how pretty it looks." really seriously, and as you can see, the design is an eye-sore. I've also left several components unimplemented, like "loading state", "error message", etc - in which there was nothing to be showcased further. If I shouldnt have done this, I please respond and I'll further polish the app up.
- Similarly, I've written just a showcase for the tests. The full implementation of the tests would have included adding several items in the cart, navigating to the cart page, "playing" with the quantity, removing an item, and checking whether the total sum is correct.
