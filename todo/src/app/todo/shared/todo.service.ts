import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList(){
    this.toDoList = this.firebasedb.list('todos');
    return this.toDoList;
  }

  addTitle(title: string, description: string){
    this.toDoList.push({
      title: title,
      description: description,
      isChecked: false
    });
  }

  checkOrUncheckTitle($key: string, flag: boolean){
    this.toDoList.update($key, {isChecked: flag});
  }
  
  editTitle($key: string){
    this.toDoList.update($key, {title: $key})
  }

  removeTitle($key: string){
    this.toDoList.remove($key);
  }

}
