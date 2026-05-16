# 🛠️ Assignment: Master the Memory

**Welcome to your deep dive on React State!**

It is time to prove you can manage complex data without breaking the immutability rules.

## Part 1: The State Quiz

*Answer these questions briefly in your own words.*

1. **The Merge Trap:** If you have `const [car, setCar] = useState({ make: 'Ford', speed: 0 })` and you call `setCar({ speed: 50 })`, what exactly happens to the `make` property? How do you fix this?
2. **Batching:** Explain why `setCount(count + 1)` written twice in a row only increments by 1, and write the syntax that fixes it.
3. **Derived State:** If you have an array of objects in state called `todos`, and you want to display the total number of items, should you create a `const [total, setTotal] = useState(todos.length)`? Why or why not?

## Part 2: The Complex State Challenge

Create a new route (`/state-challenge`) and build a "Shopping Cart" component.

### Step 1: The Data Contract

- Create an interface for a `CartItem` (id, name, price, quantity).

### Step 2: The State

- Create a single `useState` that holds an *array* of `CartItem`s. Pre-populate it with two items.

### Step 3: The Logic (No Mutating!)

- Add a button next to each item that increases its `quantity`.
- *Hint:* To update an object inside an array, you must map over the previous array, find the matching ID, spread the old item, and update the quantity!
- Calculate the `totalPrice` of the entire cart using **Derived State** (do not use a `useState` for the total!).

### Step 4: Render

- Display the items, their individual quantities, and the grand total on the screen.

## 🚀 How to Submit

Head over to the tapaScript Discord server and use the template:

```bash
**State Assignment Submission**

**Part 1: Quiz Answers**
1. [Your answer on the Merge Trap]
2. [Your answer on Batching]
3. [Your answer on Derived State]

**Part 2: The Shopping Cart**
🔗 GitHub Repo Link: [Link to your repo showing your new files]
📸 Screenshot: [Attach a screenshot showing your Shopping Cart correctly calculating the derived total price!]
```
