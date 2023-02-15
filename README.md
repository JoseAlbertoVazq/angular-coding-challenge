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
    

Business has required that we add a registration page allowing user's to signup for our application. We need your help creating the registration page and navigating to it.

Additionally, business has indicated that there are stringent rules surrounding some of the fields 😱!! To better help the user identify the rules- UX asked that we toggle visual indicators to display if a given rule has been satisfied or unsatisfied.

To help hit the ground running this sprint, a junior developer on the team already created the raw HTML and CSS for you to use 🙏🙏🙏.

These files are located in the directory: `/src/scratch`.

The product owner has decided to add a new **todos feature** to our application. We need your help creating the todos page and navigating to it.

In our first iteration of todos, we only need the ability for a user to create todos, mark them as complete and delete them. We won't need to worry about editting todos this sprint, but doing so would be quite impressive! 😀

To help hit the ground running this sprint, a junior developer on the team already created the raw HTML and CSS for you to use 🙏🙏🙏.

This file is located in the directory: `/src/scratch/todos`.

*   Create the `RegisterComponent`.
    
    This can be done by right-clicking on the **app** directory and selecting **Angular Generator > Component** from the contextual menu.
    
*   URL for the registration page should be: `/register`.
*   Place a link for user's to navigate to `/register` in the template of the `HeaderComponent`.
*   Create a **reusable component** that can be associated with a given form field and accepts **one-or-many rules** to render.
*   Each rule should dynamically toggle a visual indicator depending on whether the value of the associated form field satisfies the rule or not.
    *   Satisfied rules display the indicator.
    *   Unsatisfied rules display the indicator.
*   Rules for the the Username field:
    
    Alphanumeric:
    
    `/^[a-zA-Z0-9]+$/`
    
*   Rules for the the Password field:
    
    8-20 characters:
    
    `N/A`
    
    1 uppercase letter:
    
    `/(?=.*[A-Z])/`
    
    1 lowercase letter:
    
    `/(?=.*[a-z])/`
    
    1 number:
    
    `/(?=.*\d)/`
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