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