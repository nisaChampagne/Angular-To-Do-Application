#### Angular CLI  7  commands 
* ng new angular app
    * creates new workspace  and an initial angular app

* ng serve -open
    * builds, serves and opens your app, rebuilding for file changes

* ng add [package name]
    * installs available libraries

* ng generate [component name]
    * generates and/or modifies files based on schematic

* ng 
    * will show available commands

* ng test 
    * runs unit tests

* ng update
    * updates application and all its dependencies


## Angular 8 app creating components
ng install -g @angular/cli@latest  
    * installs latest stable version of angular

ng generate component [name]
    * will create .css, .html, .spec, .ts
    * will automatically import into app.module.ts on the top of the file and in the declarations (HAS TO BE ADDED HERE OTHERWISE IT WONT WORK)
        ** WILL THROW A '[NAME] IS NOT A KNOWN ELEMENT' ERROR


## Angular 8 Modules
- Every angular app has a root module named AppModule
- An angular app is a Modular App
- A module is a typescript class with the decorator @NgModule
- each module in the application has its own components, directives, services
    - should be declared in @NgModule decorator

- app.module is a default module when creating an angular app

- when you make modules that exist within app, to tie them together to your entire app, in app.module.ts, youll import them on the top of the file and then add the named import to imports inside of @NgModule. 

in each of the module.ts files from the added modules, youll need to add an exports key and the value being [module-name] <--- wrapped in square brackets

- add unique component selector names so that there will not be conflicts.
-- otherwise youll get an [more than one component matched this element] error

## Angular Components
    * controls a piece of screen called view
    * handles user interaction with the view
    * passes data and properties to the view and updates it dynamically
    * is a typescript class with the decorator @Component
    * COMPONENTS define views and use services


## BINDING
WHAT IS BINDING
    helps bind information between .ts file to .html template and vice versa

WHAT IS DATA BINDING
    - allows to define communication between a component and the DOM, making it very easy to define interactive applications  w/out worrying  about pushing and pulling data.

1) data binding - use {{}} for data binding
    - called interpolation
    - the variable is referred as {{ title }} and the value of title is initialized in the .ts file
    - in .html file, the value will be displayed

2) event binding
    -- when a user interacts with the app via keyboard movement, mouse click, mouse over, etc, that would generate an event.
    -- these events need to be handles to perform some kind of action.
    - event binding comes into play

    EXAMPLE:
        * in .html we define a button and added a function to it using click event
        * in .ts we created the function for clickFunction that will have a dialog box appear displaying button is clicked .

3) property binding
    * interpolation and property binding are virtually the same BUT
    1) interpolation injects the value into the html
    2) property binding allows angular direct access to the elements properties in html
        * when you say [value]="Hello", Angular is grabbing the value property and setting the variable as its propertys value.

4) two way data binding
    * allows you to have an event combined with a property binding
        example:
            * <input [(ngModel)]="username"/>
              <p>Hello {{ username }}</p>

5) one way binding


## E2E
end to end testing 

## node_modules (obvious)

## src
main folder work will be performed in

    ## App
    default module folder/ root component 
    -- will load automatically 

        ## app.module.ts
        by default created when you run ng new [filename]
        --loads all of the components
        --3 parts
            --first part are imports for other modules
            -- decorator portion
                -- will either be @NgModule or @Component but for root file will always be @NgModule
                -- will have metadata
                -- when using @NgModule decorator:
                    - declarations 
                        -- import components and separate them by components here
                    - imports
                        -- 3rd part modules 
                    - providers 
                        - provide different api services
                    - bootstrap
                        - these components should be added automatically when compiled
                         
                -- when using @Component decorator, you will need the selector, templateUrl (the divs and fun stuff), and the stuleUrls (stylesheet)
        -- export for the file
            -- can create variables here to use in the components

        ## app.component.ts
        -- first line import
        -- @Component decorator
            -selector - the tag
            -template - html file
            -style- styles
        
        -export class [ClassName]

        ## app.component.html
        -data binding directives
            1) NgClass 
                ex: <h2 [ngClass] = "'red'"> </h2> // to follow stylesheet or create a variable in component.ts

            2) NgStyle
                ex: <h2 [ngStyle] = "{color: 'red', fontSize: '20px'}"> </h2>

            3) *ngFor (lets say you have a variable of data in component.ts called myData)
                ex: <ul>
                        <li *ngFor="let d of myData " >{{ d }}</li>
                    </ul>

                another ex:
                    in component.ts lets say we have an array of objects
                    myData = [{name: 'Nisa',location: 'Youtube'}, {name: 'example', location: 'home'}]
                     <ul>
                        <li *ngFor="let d of myData " >{{ d.name }} - {{ d.location }}</li>
                    </ul>

            4) *ngIf (conditional)
                ex:
                    in component.ts, variable num = 5
                    in component.html 
                        <p *ngIf="num > 5" >Number is greater than 5</p>
                        <p *ngIf="num < 5" >Number is less than 5</p>
                        <p *ngIf="num = 5" >Number is equal to 5</p>

        -event binding directives
            event - any interaction with a web page, i.e clicking buttons, moving from one text box to another

            1) click
                ex: 
                component.ts:
                    onClick(){
                        //num becomes 6
                        this.num = 6
                    }

                component.html:
                    <p>{{ num }}</p>
                    <button (click)="onClick(" > Click Me! </button>

        -different types of data binding 
            -- use {{ }} for adding variable names

    
    ## assets
    images can come here

    ## environments
    This is where you can add firebase config info, but general where your app runs in; i.e localhost

    ## browserlist
    what browsers your app supports

    ## index.html
    root application

    ## karma.config.js
    testing compiler

    ## main.ts 
    config module env

    ## polyfill.ts
    compiling and merging files from TS to JS

    ## styles.css
    global styles

    ## test.ts
    when you run app in test mode, this file will execute

    ## tslint.json
    app level linter, debugging, syntax highlighting etc

## .editorconfig
code editor config file

## .gitignore
files to ignore when pushing files to github

## angular.json
all config of app in this file

## package-lock.json
after installing all files reflected in package.json, they are configured in package-lock.json
don't need to do anything with this file

## package.json
adding packages  with npm install [file] or ng add [file]

## tsconfig.json
config file because angular is working with TypeScript to convert TS to JS

## tslint.json
will check how it would configure syntax and file naming integrity
root level
