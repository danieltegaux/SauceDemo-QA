
# SauceDemo QA — Requirements Traceability Matrix

## Purpose

This matrix links the project's test objectives to manual test cases, automated tests, and execution evidence. It helps identify coverage gaps and makes regression testing easier to maintain.

**Important:** These are portfolio test objectives based on the observed demo application and the testing scope. They are not claimed to be an official SauceDemo requirements specification.

## Traceability Matrix

| Requirement ID | Test Objective | Manual Test Cases | Automated Test Coverage | Current Status |
|---|---|---|---|---|
| SD-REQ-01 | Valid credentials allow a user to reach the inventory page. | SD-TC-LOGIN-01 | AT-LOGIN-01 | Manual and automated tests passed |
| SD-REQ-02 | Invalid credentials are rejected and an error is displayed. | SD-TC-LOGIN-02 | AT-LOGIN-03 | Manual and automated tests passed |
| SD-REQ-03 | Empty login fields are handled with validation feedback. | SD-TC-LOGIN-03 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-04 | A locked-out demo user cannot log in. | SD-TC-LOGIN-04 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-05 | Inventory displays product information and usable controls. | SD-TC-INV-01 | Partially covered by cart and checkout tests | Manual test passed; dedicated inventory assertions needed |
| SD-REQ-06 | Products can be sorted by name in ascending order. | SD-TC-INV-02 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-07 | Products can be sorted by price from low to high. | SD-TC-INV-03 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-08 | A selected product can be added to the cart and verified. | SD-TC-CART-01, SD-TC-CART-02 | AT-CART-01 | Manual and automated tests passed |
| SD-REQ-09 | A product can be removed from the cart. | SD-TC-CART-03 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-10 | Checkout validates required customer information. | SD-TC-CHK-01 | Not yet automated | Manual test passed; automation gap |
| SD-REQ-11 | Checkout summary shows the expected product prices, tax and total. | SD-TC-CHK-02 | AT-CHECKOUT-01 | Manual and automated tests passed |
| SD-REQ-12 | Keyboard users can identify the currently focused interactive control. | SD-TC-UX-01 | Not yet automated | Manual test failed; linked defect SD-BUG-001 |
| SD-REQ-13 | The interface remains usable at the tested mobile-sized viewport. | SD-TC-UI-01 | Not yet automated | Manual test passed at 390 × 844; broader responsive coverage needed |

## Automated Test ID Mapping

The following IDs are portfolio references for the automated test cases in `tests/saucedemo-flows.spec.ts`.

| Automated Test ID | Playwright Test Name |
|---|---|
| AT-LOGIN-01 | standard user can log in and reach inventory |
| AT-CART-01 | standard user can add backpack to cart |
| AT-LOGIN-03 | invalid credentials show an error and prevent login |
| AT-CHECKOUT-01 | standard user can complete checkout with backpack |

## Execution Evidence

- Manual execution results: `docs/manual-testing/execution-log.md`
- Keyboard-focus defect: `docs/defects/SD-BUG-001.md`
- Automation source: `tests/saucedemo-flows.spec.ts`
- Automated command: `npx playwright test`

## Known Limitations and Follow-up Work

1. Empty-field login, locked-out login, inventory sorting, cart removal, checkout validation, and responsive checks still need dedicated automated tests.
2. The keyboard-focus issue has been reproduced manually but is not yet covered by an automated accessibility check.
3. One earlier full-suite run failed during checkout navigation in WebKit. The isolated rerun and subsequent complete suite passed. The cause remains undetermined.
4. The mobile-sized viewport check does not establish compatibility across all devices or screen sizes.
5. Security and performance testing have not been comprehensively performed.

## Coverage Principles

- A designed test is not evidence of execution.
- A manual Pass does not automatically mean the corresponding automated test exists.
- A failed test should link to a defect report when the failure represents an application defect.
- A passing automated test demonstrates only the behaviour and conditions that it actually verifies.
- Update this matrix whenever tests are added, changed, or retired.

