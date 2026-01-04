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