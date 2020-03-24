## E2E
end to end testing 

## node_modules

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
