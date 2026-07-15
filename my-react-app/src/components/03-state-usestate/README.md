# Concept 03: State & useState Hook in React

### Core Learnings:
- **State** acts as the local memory of a component. Unlike static variables, updating a state triggers a component re-render.
- **`useState` Hook** returns an array containing:
  1. The current state variable (The Box 📦).
  2. A setter function to update it (The Key 🔑).
- **Rules of Hooks**: Hooks must only be called at the top level of functional components (never inside loops, conditions, or nested functions).
- **Dynamic Styling**: Integrated ternary operators (`condition ? true : false`) inside Tailwind class names to dynamically change styles based on state values.

### Projects Built:
1. **Interactive Counter**: Features increment, decrement (with boundary check preventing negative numbers), and reset options.
2. **Interactive Like Button**: A toggleable state that changes icons and styles smoothly.
3. **Theme Switcher**: An advanced dark/light mode transition effect that changes the entire card's aesthetic (backgrounds, text colors, and button variants) smoothly using `duration-300` animations.