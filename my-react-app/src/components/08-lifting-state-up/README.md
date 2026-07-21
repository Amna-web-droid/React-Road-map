# Concept 08: Lifting State Up in React

### Core Learnings:
- **Lifting State Up**: Moved shared state up to the closest common parent component (`TodoContainer`) so sibling components (`TodoInput` & `TodoItem`) can share data smoothly.
- **Props Callback Functions**: Passed handler functions from parent to child components as props (`onAddTodo`, `onDeleteTodo`, `onToggleComplete`) to send events back up to parent state.
- **Array Mutation via `.filter()` & `.map()`**: Implemented immutable array state updates for completing and deleting individual array items.

### Project:
- **Todo List (Full — delete + complete status)**: A modularized multi-component task manager app.