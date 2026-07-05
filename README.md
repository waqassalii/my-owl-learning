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

# sum of two counter step by step
```To show the sum of two counters, the parent component needs to know when the counters change. 
Since data only flows down in OWL, we pass a function (a callback) from the parent down to the child. 
When the child clicks the button, it runs that function to talk up to the parent.
```
```Step 1: Update the Parent's State and Template
    Before the counters can talk to the parent, the parent (Playground) needs a place to store and display the total sum.
    What you need to do:
    In your Playground class, use useState to create a state object with a sum property, 
```
```Step 2: Create the Parent Method
    Purpose of this step: The parent component (Playground) owns the sum data. In frontend development, 
    only the owner of the data should change it. We need to create a function inside the parent that increases the sum.
    What you need to do:
    Inside your Playground class, add a new method named incrementSum(). Inside this method, increase this.state.sum by 1.
```
```Step 3: Pass the method to the Counter components
Purpose of this step: We need to give this incrementSum action to the <Counter/> components so they can trigger it.
<Counter onChange="incrementSum"/>
<Counter onChange="incrementSum"/
```
```Step 4: Add Prop Validation to the Counter Component
We need to tell the Counter component that it can receive an optional function called onChange.
otherwise OWL will throw an error.
put in counter.js
```
```js
    static props = {
    onChange: { type: Function, optional: true },
};
```
```Step 5: Trigger the Callback on Click
Purpose of this step: This is the final step. When the user clicks the "Increase" button inside the Counter, 
the child component will increment its own internal value, and then call the parent's incrementSum method through this.props.onChange().

    What you need to do:
        Update the increment() method inside your Counter JavaScript class.
        Keep your original this.state.value++; line.
        Add a check: if this.props.onChange exists, execute it like a normal function.commandline

```
NOW EVERYTHING IS WORKING BUT WHEN YOU CLICK INCREASE BUTTON, THE SUM IS NOT INCREMENTING.
INSTEAD YOU RECEIVE AN ERROR

    This is not suitable for production use.
    14awesome_owl.assets_playground.min.js:4256 TypeError: Cannot read properties of undefined (reading 'value')
    at Object.incrementSum [as onChange] (awesome_owl.assets_playground.min.js:4261:21)

THIS IS BECAUSE
        the incrementSum() method loses its connection to the Playground component. 
        It doesn't know what this is, so this.sum becomes undefined.
        We can fix this instantly by using an arrow function in the template. 
        Arrow functions automatically lock the correct this context.
```xml
        <div class="d-flex flex-wrap gap-5 justify-content-center">
            <Counter onChange="() => this.incrementSum()"/>
            <Counter onChange="() => this.incrementSum()"/>
        </div>
```
arrow auto bind this context
# add the subtraction method
add decrementSum() {this.sum.value--;} in playground.js
add it inside the counter components
```xml
<Counter onChange="() => this.incrementSum()" onDecrement="() => this.decrementSum()"/>
```
add static props in counter.js
```js
        static props = {
                        onChange: { type: Function, optional: true },
                        onDecrement: { type: Function, optional: true },
                    };
```
add inside the decrement method
```js
        decrement(){
                if (this.state.value > 0) {
                    this.state.value--;
                    if (this.props.onDecrement) {   
                        this.props.onDecrement();
                    }
                }else{
                    alert('Or Kitna kam kary ga bhai....');
                }
            }
```
everything is working now

