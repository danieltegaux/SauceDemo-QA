
# Manual Test Execution Log

## Environment

- Operating system: Windows 11
- Browser: Microsoft Edge 154.0.4258.53
- Desktop viewport: 1366 × 639
- Mobile-sized viewport used for SD-TC-UI-01: 390 × 844
- Application: https://www.saucedemo.com/

**Date note:** The original execution records were dated 10 October 2026. Keep that date where accurate. Record subsequent retests using their actual execution dates.

## Execution Results

| Test Case ID | Date | Viewport | Actual Result / Evidence | Status | Notes / Defect ID |
|---|---|---|---|---|---|
| SD-TC-LOGIN-01 | 10 Oct 2026 | 1366 × 639 | Valid login succeeded and the product list became available. | Pass | — |
| SD-TC-LOGIN-02 | 10 Oct 2026 | 1366 × 639 | Invalid login was rejected. Message: "Username and password do not match any user in this service". | Pass | — |
| SD-TC-LOGIN-03 | 10 Oct 2026 | 1366 × 639 | Empty login submission was rejected. Message: "Username is required". | Pass | — |
| SD-TC-LOGIN-04 | 10 Oct 2026 | 1366 × 639 | Locked-out user was rejected. Message: "Sorry, this user has been locked out." | Pass | — |
| SD-TC-INV-01 | 10 Oct 2026 | 1366 × 639 | Six product cards were displayed with product names, descriptions, prices, images and Add to cart controls. Unusual wording was observed, but no content defect was confirmed without an approved copy specification. | Pass | Content observation only |
| SD-TC-INV-02 | 10 Oct 2026 | 1366 × 639 | Name (A to Z) displayed products in this order: Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt, Sauce Labs Fleece Jacket, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red). | Pass | — |
| SD-TC-INV-03 | 10 Oct 2026 | 1366 × 639 | Price (low to high) displayed: Sauce Labs Onesie ($7.99), Sauce Labs Bike Light ($9.99), Sauce Labs Bolt T-Shirt ($15.99), Test.allTheThings() T-Shirt (Red) ($15.99), Sauce Labs Backpack ($29.99), Sauce Labs Fleece Jacket ($49.99). | Pass | — |
| SD-TC-CART-01 | 10 Oct 2026 | 1366 × 639 | Sauce Labs Backpack was successfully added to the cart. | Pass | — |
| SD-TC-CART-02 | 10 Oct 2026 | 1366 × 639 | Product displayed in the cart matched the selected product. | Pass | — |
| SD-TC-CART-03 | 10 Oct 2026 | 1366 × 639 | Item was successfully removed from the cart. | Pass | — |
| SD-TC-CHK-01 | 10 Oct 2026 | 1366 × 639 | Checkout did not advance with required fields empty. Message: "Error: First Name is required". | Pass | — |
| SD-TC-CHK-02 | 10 Oct 2026 | 1366 × 639 | Checkout summary showed Sauce Labs Backpack ($29.99), tax ($2.40) and total ($32.39). The calculated total matched the displayed total. | Pass | — |
| SD-TC-UX-01 | 10 Oct 2026 | 1366 × 639 | Tab navigation worked, but the Login button and product sorting dropdown did not appear to have clearly distinguishable visible-focus indicators. The concern was reproduced on retesting. | Fail | SD-BUG-001; screenshot evidence pending if not captured |
| SD-TC-UI-01 | 10 Oct 2026 | 390 × 844 | Interface remained usable at the tested viewport. A large vertical gap was observed between some product descriptions and prices. No approved design reference was available to confirm a defect. | Pass | UI observation; not a confirmed defect |

## Limitations

- Results apply only to the recorded test conditions.
- An unusual text string is not automatically a content defect.
- The spacing observation needs an appropriate design reference before it can be confirmed as a defect.
- The visible-focus concern was reproducible, but screenshots should be attached when available.
- This log records manual testing. Automated results are recorded separately.
