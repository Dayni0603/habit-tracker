# NOTES.md

## Design Choices

* **Layout**: The application uses a clean, minimal layout structured with reusable components to keep the UI consistent and easy to maintain.
* **Components**: Key UI elements are separated into their own components to promote modularity and readability. This also makes future updates and testing simpler.

## Tradeoffs / Shortcuts

* Some styling and component abstractions were simplified to speed up development.
* State management was kept lightweight using React's built-in hooks instead of adding external libraries.
* Error handling and accessibility improvements are minimal and could be expanded.

## Improvements With More Time

* Add stronger type safety (e.g., with TypeScript).
* Add form validation and messages.
* Improve component structure and folder organization.
* Add more comprehensive test coverage using React Testing Library.
* Expand global state management if the app grows (e.g., Redux, Zustand, or Recoil).

## How to Run the App

1. **Install dependencies:**

   ```bash
   npm install
   ```
2. **Start the development server:**

   ```bash
   npm start
   ```
3. Open your browser and navigate to:
   **[http://localhost:3000](http://localhost:3000)**

The app will reload automatically as you make changes.