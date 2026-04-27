# The Task Assignments

Please complete the following tasks and post them on the tapaScript Discord under "full-stack-vibe-to-prod".

> **DO NOT USE AI to FIND ANSWERS**. Don't just ask an AI to generate the code for you. Read the documentation, type it out, and understand how the file-based routing connects to TypeScript. Build the muscle memory now!

## 🛠️ Assignment 01: The Architect's Foundation

Welcome to your first challenge in the Full-Stack Journey! In episode 1, we talked about the difference between "Vibe Coding" a messy prototype and "Engineering" a production-ready application. Before we start building features, you need to prove you can set up a rock-solid foundation.

Complete the following quiz and practical assignment, then submit your work in the dedicated Discord channel(#task-assignments-fsvtp)!

### 🧠 Part 1: The Mindset Check (Quiz)

Answer these three questions briefly in your own words.

- `The Monolith Trap`: We discussed how AI often generates a "monolith." From an engineering perspective, why is putting your UI, state, and API calls all in one massive file dangerous for production?

- `Type-Safe Routing`: In 2026, we are using TanStack Router instead of older, traditional routing libraries. What specific problem does a 100% type-safe router solve when scaling an application?

- `Folder Architecture`: Explain the difference between the src/components/ folder and the src/features/ folder that we created. What belongs in each?

### 💻 Part 2: The Engineering Challenge (Practical)

Your task is to replicate the setup from the video and take it one step further.

- Step 1: Bootstrap the App
  - Initialize a new Vite project using the React + TypeScript template.
  - Install @tanstack/react-router.

- Step 2: Enforce the Structure
  - Create the exact folder architecture inside src/: components/, features/, routes/, and lib/.

- Step 3: The Routing Challenge

  - Replicate the __root.tsx and index.tsx setup from the video.
  - The Extra Mile: Read the TanStack Router documentation and create a second route called /about (src/routes/about.tsx).
  - Add a simple `<Link>` component in your __root.tsx header so the user can navigate between the Home (/) and About (/about) pages without a full page reload.

## 🚀 How to Submit

Head over to the `##task-assignments-fsvtp` channel on the tapaScript Discord server and use the following template to submit your work:

```bash
[Copy & Paste this into Discord]
**Assignment 01 Submission**

**Part 1: Quiz Answers**
1. [Your answer about the monolith trap]
2. [Your answer about type-safe routing]
3. [Your answer about components vs. features]

**Part 2: Practical Proof**
🔗 GitHub Repo Link: [Link to your public repository]
📸 Screenshot: [Attach a screenshot showing your code editor with the folder structure open on the left, and the working app (showing your new /about page) on the right]
```
