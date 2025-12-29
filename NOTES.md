4. Using markup to display html
use t-out instead of t-esc in your Card to allow HTML rendering. However, for security, 
you must wrap any HTML string in 
the markup() function in your JS to tell Owl it is safe to display. 
5. Props validation
Props validation acts like a contract for your component. It tells Owl exactly what data the component needs to work correctly.
Go to playground.xml and rename title to something else (e.g., header):
export class Card extends Component {
   static template = "awesome_owl.Card";
   // This is the explicit API definition
   static props = {
       title: String,
       content: String,
   };
}
<Card header="'Test'" content="'Test'"/>
The Difference
Before (Implicit): You just passed data. If you made a typo or forgot a prop, the component would simply be empty or broken, and you wouldn't know why.
Now (Explicit): You added a Validation Rule. You told Owl: "This component must have a string called title and a string called content."
