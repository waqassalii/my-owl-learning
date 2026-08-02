# OWL Props — Simple Explanation
## What are Props?
Props are data you pass from a **parent component** to a **child component** through the tag.
Think of it like a Python function:

```python
def greet(name):
    print("Hello " + name)

greet("Waqas")
```
Props work the same way — but instead of calling a function, you use a tag:
```xml
<Card title="'my title'" content="'some content'"/>
```
---
## How it works
**1. Pass props from parent (Playground template):**
```xml
<Card title="'my title'" content="'some content'"/>
```
**2. Declare props in child (card.js):**
```js
static props = ["title", "content"];
```
**3. Use props in child template (card.xml):**
```xml
<h5 t-out="props.title"/>
<p t-out="props.content"/>
```
---
## The double quote rule
```xml
title="'my title'"
```
- Outer `" "` → OWL evaluates this as **JavaScript**
- Inner `' '` → JavaScript sees this as a **string**
Result: `props.title` = `my title`
---
## Key Point
OWL collects everything you passed and puts them in an object called `props`.
- `props.title` → value of title
  - `props.content` → value of content
    - 
1. ## Parent Component (Playground)
   ```commandline
     Parent (Playground) 
            ↓ defines carData
            ↓ passes to child
        Child (CardDynamic) 
            ↓ defines props
            ↓ displays via props.xxx
        Template renders data
    ```

Created data object in setup():
Created the data object in Parent (playground) 
```js
      setup() {
            this.carData = {
                title: "Dodge Challenger",
                description: "High power car",
                price: 129,
                year: 2026,
                imageUrl: "awesome_owl/static/description/dodge.jpeg",
                isPopular: true,
            };
        }
 ```
      

 ## Child Component (CardDynamic)
    Defined expected props:
    Define this props object in child (card_dynamic) to accept the specific props only
```js
    static props = {
        title: String,
        description: String,
        price: Number,
        year: Number,
        imageUrl: String,
        isPopular: Boolean,
    };
```
## Pass Data from Parent to Child
 Method 1 - Batch pass:
                
```xml
 <CardDynamic t-props="carData"/>

Method 2 - Individual pass:

<CardDynamic title="carData.title" 
      description="carData.description"
      price="carData.price"/>
```
# **Sum of two Counter component**

Before, props went down — Playground → Counter.
Now we need data to go up — Counter → Playground.
But components can't just "push" data up directly. So how?

##  The solution — callback prop:
You pass a function from Playground down to Counter as a prop.
When Counter increments, it calls that function.
Playground's function runs → updates Playground's state.
It's like giving your child a phone number:
"When something happens, call me on THIS number."
```The child doesn't need to know what happens after the call. It just dials.

        Playground
        │
        ├── defines a function: incrementSum()
        │
        ├── passes it down: <Counter onChange="incrementSum"/>
        │
        Counter
        │
        ├── user clicks increment
        ├── calls props.onChange()   ← dials the number
        │
        Playground
        │
        └── incrementSum() runs → sum updates → re-renders
```
        
##  What you need to know:
Callback prop = a function you pass down. The child runs it when needed.
Prop validation = checking that the prop is the right type (here, a function).
Local state = data that belongs to the parent and can change.


Steps we did for adding sum of two counter:
What we need to do:
Counter needs to tell parent when it changes
Add an onChange prop (a function)
Call it inside increment() and decrement()
Playground needs to track total
Create a sum state (starts at 2 because two counters start at 0)
Create an incrementSum() method that updates the sum
Pass this method to each Counter as onChange
Display the sum in Playground's template
One question before I guide you:
`Your Counters are independent right now. When one changes, the other doesn't know. We need them to communicate through the parent
`
# Steps i did to make it work:
        1. added the static props = { onChange: { type: Function, optional: true } } in counter.js
                    - This tells OWL: "This component can receive an optional function called onChange."
        2. added if (this.props.onChange) { this.props.onChange(this.state.value) } 
            in increment() after this.state.value++; , also in decreament()
            - This means: "If the parent gave me a phone number, call it and tell them my new value."
        3. Created Sum state in playgroung , this.sum = useState({ value: 2 })
            - also add this method
                    updateSum(childValue) {
                            // We need to track both counters
                            // But we don't know which one changed...
                            // because both counters are independent and calls the same method how would parent know which one is calling
                            // for this we have to pass id to counters
                            }   



