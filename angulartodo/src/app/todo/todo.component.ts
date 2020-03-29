import { Component, OnInit } from '@angular/core';
import {TodoService} from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  constructor(private toDoService: TodoService) { }

  ngOnInit(): void {
    this.toDoService.getToDoList().snapshotChanges()
    .subscribe(item => {
      this.toDoListArray = []; // initialized empty array
      item.forEach(ele => {
        let x = ele.payload.toJSON();
        x['$key'] = ele.key;
        this.toDoListArray.push(x);
        // converted the angularfirelist to a regular array
      })

      // sort array isChecked false -> true
      this.toDoListArray.sort((a,b)=> {
        return a.isChecked - b.isChecked;
      })
    });
  }

  onAdd(itemTitle, itemDescription, itemDate){
    this.toDoService.addTitle(itemTitle.value, itemDescription.value, itemDate.value);
    itemTitle.value = null;
    itemDescription.value = null;
  }

  alterCheck($key: string,isChecked) {
    this.toDoService.checkOrUncheckTitle($key,!isChecked);
  }
  onDelete($key : string){
    this.toDoService.removeTitle($key);
  }

  alterTitle($key: string){
    this.toDoService.editTitle($key)
  }

  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]

  isAvailable= false

  clickFunction(event){
    alert('button was clicked!')
    console.log(event)
  }
}