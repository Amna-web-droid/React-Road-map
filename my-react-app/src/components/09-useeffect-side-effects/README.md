# Concept 09: useEffect (Side Effects) in React

### Core Learnings:
- **`useEffect` Hook**: Managed asynchronous side effects (clock timer) outside the standard React rendering cycle.
- **Dependency Array (`[]`)**: Ensured the timer initialization effect runs strictly once upon component mounting.
- **Cleanup Function (`clearInterval`)**: Prevented memory leaks and zombie intervals by clearing the active timer when component unmounts.
- **Custom Time Formatting**: Parsed JavaScript `Date()` object into 12-hour/24-hour dynamic formats alongside active seconds state.

### Project:
- **Live Minimalist Digital Watch**: A sleek Apple-inspired widget featuring real-time system clock sync, 12h/24h toggles, and light/dark mode themes.