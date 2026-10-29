
# E-commerce Web Application QA Assessment

## Overview

A personal QA portfolio project assessing the SauceDemo e-commerce demo application through manual testing and browser automation.

The project demonstrates test design, functional testing, regression testing, cross-browser execution, checkout validation, defect documentation and introductory Playwright automation.

This is a practice project using a publicly available demo application, not commercial client work.

## Application Under Test

- Application: https://www.saucedemo.com/
- Type: E-commerce demonstration application
- Primary focus: Login, inventory, shopping cart and checkout

## Tools and Environment

- Visual Studio Code
- Node.js 24.18.0
- npm 11.16.0
- Playwright Test
- TypeScript
- Browsers: Chromium, Firefox and WebKit

## Automated Test Coverage

The current suite contains four test cases:

1. Valid login reaches the inventory page.
2. Invalid credentials are rejected with an error message.
3. The selected backpack appears in the cart with the expected price.
4. Checkout verifies the product, subtotal, tax, total and order confirmation.

The tests use a reusable login helper and Playwright assertions to verify expected outcomes.

## Latest Recorded Automated Test Run

Command:

`npx playwright test`

Result: 12 passed.

The four test cases were executed across three browser projects: Chromium, Firefox and WebKit.

One earlier full-suite run reported a checkout navigation failure in WebKit. The test passed when rerun independently and on the subsequent full-suite run. The cause has not yet been established, so further stability testing is appropriate.

## How to Run the Tests

Install the project dependencies:

`npm ci`

Install the required Playwright browsers:

`npx playwright install`

Run the full test suite:

`npx playwright test`

Run the HTML report:

`npx playwright show-report`

## Manual Testing

Manual testing has covered:

- Login validation
- Inventory display and product sorting
- Cart addition and removal
- Checkout validation and price calculations
- Keyboard navigation and visible focus
- UI observations at desktop and mobile-sized viewports

Manual execution records and defect documentation will be maintained alongside the automated suite.

## Findings and Limitations

A reproducible keyboard-focus concern was observed on the Login button and product sorting control. The finding is documented as SD-BUG-001; screenshot evidence is still to be added if not yet captured.

A large vertical gap between product descriptions and prices was also observed at a mobile-sized viewport. Without an approved design reference, this remains an observation rather than a confirmed defect.

The assessment is limited to the tested workflows, browsers and viewports. It is not a comprehensive security, performance or accessibility audit.

## Project Status

The initial automated regression suite is working. Further work will focus on evidence management, test stability, manual-test traceability and portfolio documentation.


## QA Documentation

The supporting documents for this assessment are available below.

- [Manual Test Execution Log](docs/manual-testing/execution-log.md)
- [Requirements Traceability Matrix](docs/manual-testing/traceability-matrix.md)
- [Keyboard Focus Defect Report — SD-BUG-001](docs/defects/SD-BUG-001.md)
- [Automated Test Suite](tests/saucedemo-flows.spec.ts)

## Latest Automated Test Results

The latest complete test run reported 12 passed executions across Chromium, Firefox and WebKit.

The suite contains four distinct test cases covering:
- Valid login
- Rejected login with invalid credentials
- Adding and verifying a product in the cart
- Completing checkout and verifying the order summary

An earlier full-suite run experienced a WebKit checkout navigation failure. The failure was not reproduced in the isolated rerun or the subsequent full run. Its cause remains undetermined.

## Current Limitations

- Not every manually tested workflow has an automated regression test.
- The keyboard-focus concern has been reproduced manually; screenshot evidence is still pending if not captured.
- The project is a practice assessment of a demo application, not commercial client work.
- Security, performance and comprehensive accessibility testing have not been completed.
