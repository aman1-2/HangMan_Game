# 🎯 Hangman Game — React + React Router

A modern implementation of the classic Hangman game built using React, React Router, and component-driven architecture principles.

This project goes beyond simply recreating a game. It explores real-world frontend engineering concepts such as routing strategies, state management, component architecture, reusable utility functions, and the Presenter–Container design pattern.

---

## 🚀 Live Features

* Multi-page React application using React Router
* Secret word transfer without exposing it in the URL
* Dynamic letter masking logic
* Interactive alphabet guessing system
* Visual Hangman progression
* Presenter–Container architecture
* Utility-driven business logic
* Immutable React state updates
* Dynamic UI rendering based on application state

---

# 🏗️ Application Flow

The following flowchart illustrates the complete execution flow of the application.

## FlowChart

<img width="800" height="1200" alt="image" src="https://github.com/user-attachments/assets/a4ae0e14-8e5e-4ec3-b582-bbf8bc97bbe3" />

---

# 🎮 User Journey

## Home Page

The landing page acts as the entry point of the application.

<img width="959" height="419" alt="{1FC32A3A-D7DD-45BF-A641-33D14DA07139}" src="https://github.com/user-attachments/assets/9fc26fad-956e-4945-9540-628212a3a72a" />

---

## Start Game Page (Hidden Input)

Player 1 enters the secret word.

The input is masked to prevent Player 2 from viewing it.

<img width="851" height="292" alt="{9DABF814-6033-43AF-8CA9-A1A778AC988C}" src="https://github.com/user-attachments/assets/1a77c68b-1cdb-4c84-9aa2-46e99552e57c" />

---

## Start Game Page (Show / Hide Toggle)

The visibility toggle allows the user to verify the entered word before starting the game.

<img width="960" height="280" alt="{58491DAF-F0B0-4A62-8163-083FFE5072C0}" src="https://github.com/user-attachments/assets/8beff22c-5bc6-4d0f-9f37-9f0bb85863f4" />

---

## Play Game Page

Player 2 attempts to guess the hidden word.

The application dynamically updates:

* Masked characters
* Guessed letters
* Button states
* Hangman progression

<img width="1916" height="892" alt="image" src="https://github.com/user-attachments/assets/9d3b568a-a490-40d2-8fa5-12d6029eac17" />

---

# 🧠 Engineering Decisions

Rather than focusing only on gameplay, the project was designed to explore multiple frontend engineering concepts.

---

## 1. Passing Data Between Pages Without Exposing It In The URL

A common challenge was transferring the secret word from the Start Game page to the Play Game page.

Three approaches were evaluated:

### Option 1

Query Parameters

```jsx
/game?text=HUMBLE
```

Problem:

The secret word becomes visible in the URL.

---

### Option 2

Path Parameters

```jsx
/game/HUMBLE
```

Problem:

The secret word is still visible in the URL.

---

### Option 3 (Implemented)

React Router Navigation State

```jsx
navigate('/game', {
  state: {
    wordSelected: value
  }
});
```

Benefits:

* Cleaner URLs
* Better user experience
* Hidden game state
* No unnecessary URL manipulation

### Architecture

<img width="727" height="585" alt="Image-2" src="https://github.com/user-attachments/assets/84bd8e99-745f-4dae-a66c-0c1f922933d2" />

---

## 2. Presenter–Container Design Pattern

The project follows the Presenter–Container pattern to separate business logic from UI rendering.

### Container Components

Responsible for:

* State management
* Event handling
* Navigation
* Data transformations

Example:

```jsx
TextInputFormContainer
```

---

### Presentational Components

Responsible only for rendering UI.

Example:

```jsx
TextInputForm
```

Benefits:

* Improved maintainability
* Reusable UI components
* Easier testing
* Clear separation of concerns

### Architecture

<img width="778" height="584" alt="Image-3" src="https://github.com/user-attachments/assets/3e4a5687-c732-48f4-b6f0-1a2f85364006" />

---

## 3. Game State Management

The entire UI is driven through React state.

### Core State Variables

```jsx
const [guessedLetters, setGuessedLetters] = useState([]);
const [step, setStep] = useState(0);
```

---

### Letter Guess Flow

1. User clicks a letter.
2. Letter is added to guessed state.
3. Word validation occurs.
4. Incorrect guesses increase Hangman level.
5. Components automatically re-render.

### State Flow Diagram

<img width="1518" height="420" alt="Image-4" src="https://github.com/user-attachments/assets/c2fc6e2d-5ce4-4f4d-9409-342c23b64da2" />

---

# 🔍 Word Masking Algorithm

A utility-driven approach was used to keep business logic separate from UI components.

Example:

Word:

```text
HUMBLE
```

Guessed Letters:

```text
H, M, E
```

Output:

```text
H _ M _ _ E
```

Implementation:

```jsx
export function getMaskedString(
  originalWord,
  guessedLetters
) {
  return originalWord
    .toUpperCase()
    .split('')
    .map((chr) =>
      guessedLetters.includes(chr)
        ? chr
        : '_'
    );
}
```

---

# 🎨 Dynamic Button States

Every alphabet button changes its appearance based on user interaction.

| State           | Color |
| --------------- | ----- |
| Not Guessed     | Blue  |
| Correct Guess   | Green |
| Incorrect Guess | Red   |

This provides immediate visual feedback to the player.

---

# ⚙️ Tech Stack

* React
* React Router DOM
* JavaScript (ES6+)
* Tailwind CSS
* Vite

---

# 📚 Key Learnings

Through this project I gained practical experience with:

* React Hooks
* React Router
* Navigation State
* Component Composition
* Presenter–Container Pattern
* State Management
* Immutable Updates
* Rendering Lists
* Utility-Based Architecture
* Dynamic UI Rendering

---

# 🚀 Future Enhancements

* Win/Loss screen
* Difficulty levels
* Word categories
* Timer mode
* Multiplayer mode
* Global state using Context API
* Backend integration
* Persistent score tracking
* Leaderboards

---

# 🛠️ Getting Started

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 👨‍💻 Author

**Aman Pratap Singh**

Final Year Engineering Student | Aspiring Software Engineer

Passionate about Frontend Engineering, System Design, Software Architecture, and building scalable applications using modern web technologies.
