# The Task Assignments

Please complete the following tasks and post them on the tapaScript Discord under "full-stack-vibe-to-prod".

> **DO NOT USE AI to FIND ANSWERS**. Don't just ask an AI to generate the code for you. Read the documentation, type it out, and understand how the file-based routing connects to TypeScript. Build the muscle memory now!

## Part 1: The Blueprint Quiz

Answer these questions briefly in your own words.

- JSX Under the Hood: Why can't the browser directly read JSX, and what does Vite (or Babel) convert your `<h1 className="title">` tag into?
- Capital Letters: What happens if you define a custom component as function myButton() { ... } and try to render it as `<myButton />` Why?
- The 0 Bug: Explain why `{comments.length && <span>Comments</span>}` might render a stray 0 on the screen if there are no comments, and provide the correct way to write this condition.

## Part 2: The Composition Challenge

Create a new route (/composition) and build the following UI using strict Component-Driven Architecture.

### Step 1: The Dumb Components

- Create a `<Tag text="React" />` component that renders a small colored pill.
- Create a `<Divider />` component that just renders a horizontal line (`<hr className="..." />`).

### Step 2: The Wrapper Component

- Create a `<FeatureContainer title="...">` component that uses the children prop. It should render the title at the top with a specific background color, and render whatever is passed inside it below the title.

### Step 3: Assemble the Masterpiece

- Use your `<FeatureContainer>` to render a section on your page.
- Inside the container, pass a paragraph of text, your `<Divider />`, and a row of three different `<Tag />` components.

🚀 How to Submit
Head over to the #vibe-to-prod-assignments channel on the tapaScript Discord server and use the template:

```bash
**Components Assignment Submission**

**Part 1: Quiz Answers**
1. [Your answer on JSX]
2. [Your answer on Capital Letters]
3. [Your answer on the 0 Bug]

**Part 2: The Composition Challenge**
🔗 GitHub Repo Link: [Link to your repo showing your new files]
📸 Screenshot: [Attach a screenshot showing your fully composed FeatureContainer working in the browser!]
```
