# Maple & Co

Maple & Co is a small Expo mobile app feature for Canadian small business owners.  
The app allows users to create business listings and view all added listings in a scrollable list.

## Get started

Install dependencies

   ```bash
   npm install
   ```
## How to run the app

This project was built with Expo.

### Requirements

- Node.js installed
- npm installed
- For iOS Simulator: Xcode installed on macOS
- For Android Emulator: Android Studio installed
- For physical device testing: Expo Go app installed on the phone

Then choose one of the available options in the terminal:

- Press i to open the app in the iOS Simulator
- Press a to open the app in the Android Emulator
- Scan the QR code with Expo Go on a physical device

## Decisions made

- Expo Router with bottom tabs (Home / All Listings) for navigation
- react-hook-form for form state and required-field validation
- react-native-keyboard-controller on the create screen for keyboard-aware scrolling
- Category badges use different color sets to make the listing cards easier to scan visually
- Business data is stored in a persisted Zustand store (AsyncStorage), which keeps state management simple while surviving app restarts
- Predefined category dropdown to keep category names consistent

## Trade-offs

- No unit or E2E tests: manual testing only within the time box
- No edit/delete flows, store supports add + list only
- Validation limited to "required", no length limits or duplicate checks
- Success feedback via Alert instead of a polished toast/inline pattern

## What I would do in v2

- Add the ability to edit and delete existing business listings
- Add category filtering and sorting, so users can browse businesses more easily

