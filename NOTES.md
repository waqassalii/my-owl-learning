Props Validation:
    Using markup to display html use t-out instead of t-esc in your Card to allow HTML rendering. However, for security, 
    you must wrap any HTML string in the markup() function in your JS to tell Owl it is safe to display.
    Props validation Props validation acts like a contract for your component. It tells Owl exactly what data the component 
    needs to work correctly. Go to playground.xml and rename title to something else (e.g., header): export class Card extends
    Component { static template = "awesome_owl.Card"; // This is the explicit API definition `js static props = { title: String, content: String, }; }`
    The Difference Before (Implicit): You just passed data. If you made a typo or forgot a prop, the component would 
    simply be empty or broken, and you wouldn't know why. Now (Explicit): You added a Validation Rule. 
    You told Owl: "This component must have a string called title and a string called content."

7.onChange Counter:
    0nChange is not a method you define; it is a variable name for the function you passed in.
    Think of it like this:
    In Playground (Parent): You pass your method incrementSum into a box labeled onChange.
    <Counter onChange.bind="incrementSum"/>
    In Counter (Child): You don't know the name incrementSum. You only see the box labeled onChange inside this.props.
    The Call: When you write `this.props.onChange()`, you are actually telling JavaScript: "Run whatever function is inside the 'onChange' box."
    Why if (this.props.onChange)?
        Since we marked the prop as optional: true, the box might be empty. If you try to run an empty box, the code crashes. 
        The if check ensures the function exists before calling it.
8.How We Get Sum:
    The Click: You click the button in the Counter (Child) template.
    Child Action: The `t-on-click="increment"` triggers the increment() method inside counter.js.
    Child State Update: this.state.value++ increases the Counter's local number.
    The Notification: this.props.onChange() executes.
    Because of the prop link, this is actually executing incrementSum() inside the Playground.
    Parent Action: The incrementSum() method in playground.js runs and executes this.state.sum++.
    Re-render: Owl detects both state changes and updates the HTML for both the Counter number and the Total Sum automatically.