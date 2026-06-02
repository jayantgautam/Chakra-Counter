# Chakra Counter

A modern and interactive counter application built with Next.js, React, TypeScript, Chakra UI, and Framer Motion.

This project demonstrates clean frontend architecture, global state management using React Context API, reusable custom hooks, toast notifications, smooth animations, and modern UI practices.

---

# 🚀 Features

- Global counter state using Context API
- Increment counter functionality
- Reset counter functionality
- Animated counter transitions
- Toast notifications on increment
- Dark mode UI
- Responsive design
- Reusable React components
- Type-safe code with TypeScript
- Optimized rendering using `useMemo` and `useCallback`

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework |
| React | Frontend library |
| TypeScript | Type safety |
| Chakra UI | UI components & styling |
| Framer Motion | Animations |
| Context API | Global state management |

---

# 📂 Project Structure

```bash
src/
│
├── app/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── CounterExperience.tsx
│   └── IncrementToast.tsx
│
├── context/
│   └── CounterContext.tsx
│
├── providers/
│   └── AppProviders.tsx
```

---

# 🧠 How the Application Works

The application uses React Context API to manage a global counter state.

When the user clicks the increment button:

1. The global counter value updates
2. The UI re-renders automatically
3. A toast notification appears
4. The counter animation plays smoothly

The reset button returns the counter value back to zero.

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/jyntgtm/chakra-counter.git
```

Move into the project folder:

```bash
cd chakra-counter
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

# 📸 Application Preview

## Main Features

- Interactive counter UI
- Animated transitions
- Toast feedback notifications
- Clean dark theme
- Responsive layout

---

# 🔥 Core Concepts Used

## React Context API

The application uses Context API for sharing global state across components without prop drilling.

```tsx
const CounterContext = createContext<CounterContextValue | null>(null);
```

---

## Custom Hook

A reusable custom hook provides cleaner access to context values.

```tsx
export function useCounter() {
  return useContext(CounterContext);
}
```

---

## State Management

The counter value is managed using React state.

```tsx
const [count, setCount] = useState(0);
```

---

## Performance Optimization

The project uses:

- `useCallback`
- `useMemo`

to avoid unnecessary re-renders and improve performance.

---

# 🎨 UI & Design

The UI is built using Chakra UI with a modern dark theme.

Animations are implemented using Framer Motion for smooth user interactions.

---

# 📌 Key Functionalities

| Function | Description |
|---|---|
| Increment Counter | Increases counter value |
| Reset Counter | Resets counter to zero |
| Toast Notification | Displays updated counter value |
| Animated Counter | Smooth number transitions |

---

# 🧪 Example Workflow

```text
User clicks +1
        ↓
increment() function runs
        ↓
Global counter state updates
        ↓
Toast notification appears
        ↓
UI re-renders with animation
```

---

# 📖 Learning Outcomes

This project demonstrates understanding of:

- Modern React architecture
- Context API
- TypeScript integration
- Custom hooks
- State management
- Component reusability
- UI libraries
- Animation handling
- Clean frontend development practices

---

# 🚀 Future Improvements(Maybe)

Possible future enhancements:

- Persistent counter using Local Storage
- Multiple counters
- User authentication
- Theme switcher
- Counter history tracking
- Unit testing
- Backend integration

---

# 🧑‍💻 Author

Jayant Gautam

Bachelor of Honours in Digital Technologies & Coding  
Specialization in Artificial Intelligence  
Macromedia University of Applied Sciences, Berlin

---
