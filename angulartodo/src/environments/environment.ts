export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBU6IDVbo2YH3eX8jqqPSdio-sNGNG6R68",
      authDomain: "angular-todo-1d38f.firebaseapp.com",
      databaseURL: "https://angular-todo-1d38f.firebaseio.com",
      projectId: "angular-todo-1d38f",
      storageBucket: "angular-todo-1d38f.appspot.com",
      messagingSenderId: "169285454938",
      appId: "1:169285454938:web:d24b89fe6d64bb0a6c5c63",
      measurementId: "G-KYJB3J23T7"
  }
};


/* 

Added config needs to environment.ts
used to initialize firebase

Firebase seems to be fine with exposed API keys. 
This shouldn't be the case when working with other APIs
Just a mental note

APIKEY can be visible
just identifies the firebase project on Google servers.
Not a security risk JUST HERE as it is necessary for someone whom would want
to use my project
They would need access to interact with the todo list database to add, check, and delete

If this were a 5 star project, I would work on securely storing the API key and adding
user auth

*/

