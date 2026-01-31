Shape Prop Validation (Owl)
    This is advanced prop validation.
    Instead of just saying "this is an Object", you are telling Owl exactly what keys and data types must exist inside that object.
type: Object
    Tells Owl the prop must be a JavaScript object {}.
shape: { ... }
    This is the blueprint of the object.
    It forces the object to contain:
    id → Number
    description → String
    isCompleted → Boolean
Why use shape?
    Catches mistakes early
    Shows clear console errors
    Acts like a contract between parent and child components
t-forach:
    In Owl, t-key is a unique identifier (usually an ID) that you must provide whenever you use t-foreach.
Why we use t-key
    When the list changes (e.g., you delete an item or reorder them), Owl uses the t-key to track which DOM element belongs to which data object.
    Without t-key: Owl would have to delete and recreate the entire list every time something changes. This is slow.
    With t-key: Owl only updates the specific item that changed. It "reconciles" the UI efficiently.

Key Points to Remember
    ev.keyCode === 13: This is the standard code for the "Enter" key.
    this.todos.push(...): Because todos is wrapped in useState, Owl detects the push and automatically re-renders the list on your screen.
    ev.target.value: This is how you grab the text currently sitting inside the input bo

Why ev.target?
    In JavaScript, whenever an event (like keyup) happens, the browser automatically creates an Event Object and passes it to your function. We named this object ev.
    ev: The event itself (the "keypress" event).
    ev.target: The specific HTML element that triggered the event. In this case, it is the <input> box.
    You don't need to define target because it is a built-in property of the event. It's like a return address on a letter;
    it tells the function exactly where the message came from so you can read the text inside (ev.target.value) or clear 
    it (ev.target.value = "").

Why we do this (The "Data Flow")
    User clicks checkbox in Child.
    Child triggers onChange.
    Child calls props.toggleState.
    Parent runs toggleTodo, updates the useState list.
    Owl sees the change and re-renders both components.

REMOVING THE LIST EXPLANATION
1. The filter part
this.todos.filter(t => t.id !== todoId) This creates a brand new list containing every item except the one you want to delete.
2. The ... (Spread Operator)
This "unpacks" the list.
If your filtered list is [Todo1, Todo2], the ... turns it into: Todo1, Todo2 (individual items).
It’s like opening a box and taking the items out so they can be passed as separate arguments.
3. The splice part
this.todos.splice(0, this.todos.length, ...)
0, this.todos.length: This tells JavaScript to "delete everything from index 0 to the end."
... [filtered items]: This says "and immediately insert the new filtered items here."

Example of splice
    const tasks = ["Clean", "Cook", "Sleep"];
    // At index 0, delete 1 item ("Clean"), and add "Work"
    tasks.splice(0, 1, "Work");
    console.log(tasks); // ["Work", "Cook", "Sleep"]