# SauceDemo E-commerce QA Assessment

## Overview

This is a personal QA portfolio project assessing the [SauceDemo](https://www.saucedemo.com/) e-commerce demonstration application through manual testing and browser automation.

The project demonstrates practical skills in test design, functional testing, regression testing, cross-browser testing, checkout validation, defect documentation, and introductory test automation using Playwright and TypeScript.

This is an independent practice project using a publicly available demo application, not commercial client work.

## Application Under Test

- **Application:** [SauceDemo](https://www.saucedemo.com/)
- **Application type:** E-commerce demo
- **Test scope:** Login, inventory, shopping cart, and checkout

## Tools and Environment

- Visual Studio Code
- Node.js 24.18.0
- npm 11.16.0
- Playwright Test
- TypeScript
- Chromium, Firefox, and WebKit

## Automated Test Coverage

The suite contains four distinct test scenarios:

| Test scenario | What it verifies |
|---|---|
| Valid login | A standard user can log in and reach the inventory page. |
| Invalid login | Invalid credentials produce an error and prevent login. |
| Shopping cart | A selected backpack can be added to the cart and verified. |
| Checkout | The user can complete checkout and verify the order summary and confirmation. |

The suite runs across three browser projects: Chromium, Firefox, and WebKit. This produces 12 browser-specific test executions when all four scenarios run in each browser.

The tests use Playwright locators and assertions to interact with the application and verify expected outcomes.

## Automated Test Results

The most recently recorded full-suite run completed with **12 passing test executions**.

Command:

```bash
npx playwright test
```

During earlier testing, a checkout navigation failure occurred in WebKit. The test passed when rerun independently and on a subsequent full-suite run. The root cause has not been established, so further stability testing is appropriate.

Test results should be updated whenever a new full-suite run changes the recorded outcome.

## How to Run the Tests

### 1. Install dependencies

```bash
npm ci
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3. Run the test suite

```bash
npx playwright test
```

### 4. View the HTML report

After running the tests, open the report with:

```bash
npx playwright show-report
```

## Manual Testing

Manual testing has covered the following areas:

- Login validation
- Inventory display and product sorting
- Cart addition and removal
- Checkout validation and price calculations
- Keyboard navigation and visible focus indicators
- User interface observations at desktop and mobile-sized viewports

Execution records, requirements traceability, and defect documentation are maintained alongside the automated tests.

## Findings and Limitations

### SD-BUG-001: Keyboard Focus Indicator

The keyboard focus indicator was observed to be difficult to distinguish on the Login button and product sorting control. The finding is documented as SD-BUG-001. Screenshot evidence remains to be added.

The concern matters because keyboard users should be able to identify which interactive element currently has focus.

### Mobile Viewport Observation

A large vertical gap between product descriptions and prices was observed at a mobile-sized viewport. Without an approved design reference or defined spacing requirement, this remains a UI observation rather than a confirmed defect.

### Testing Limitations

- Not every manually tested workflow has an automated regression test.
- The cause of the earlier WebKit checkout navigation failure remains undetermined.
- Security, performance, and comprehensive accessibility testing have not been completed.
- Results apply only to the tested workflows, browsers, and viewports; they do not represent a complete assessment of the application.

## QA Documentation

- [Manual Test Execution Log](Docs/manual-testing/execution-log.md)
- [Requirements Traceability Matrix](Docs/manual-testing/traceability-matrix.md)
- [Keyboard Focus Defect Report — SD-BUG-001](Docs/defects/SD-BUG-001.md)
- [Playwright Automated Test Suite](tests/saucedemo-flows.spec.ts)

## Project Status

The initial automated regression suite is implemented and has recorded a successful full run across three browser projects. Further improvements will focus on evidence management, test stability, manual-test traceability, and expanding automated coverage.