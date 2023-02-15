Welcome José Alberto!
=====================

Run this project executing:
```npm install```
```ng serve```

And go to:
```http://localhost:4200```


* * *

Acceptance Criteria

*   Add your name to the HTML of this page `<h1>Welcome!</h1>`. This template can be found at: `/app/welcome/welcome.component.html`.
    
    Your name should render at the top of this page. ⬆
    

The product owner has decided to add a new **todos feature** to our application. We need your help creating the todos page and navigating to it.

In our first iteration of todos, we only need the ability for a user to create todos, mark them as complete and delete them.

To help hit the ground running this sprint, a junior developer on the team already created the raw HTML and CSS for you to use 🙏🙏🙏.

This file is located in the directory: `/src/scratch/todos`.

*   Create the `TodosComponent`.
    
    This can be done by right-clicking on the **app** directory and selecting **Angular Generator > Component** from the contextual menu.
    
*   URL for the Todos page should be: `/todos`.
*   Place a link for user's to navigate to `/todos` in the template of the `HeaderComponent`.
*   Create a **resuable component** that can be used to render an _individual todo_.
*   As a user I should be able to create a todo by entering the name of a todo in the form at the top of the page.
*   Upon submitting the form, the input field value should be cleared out.
*   Upon submitting the form, a new todo should render in the list below.
*   As a user I should be able to mark a todo as complete and visually see a checkmark when the todo is complete and a circle when incomplete.
*   As a user I should be able to delete a todo from the todos list by clicking on the trashcan icon.
*   When there aren't any todos in the list, I should see the text "There aren't any todos. Why don't you create one?".
*   The text "create one" should be a hyperlink, that when clicked will place focus on the form field to create a new todo.