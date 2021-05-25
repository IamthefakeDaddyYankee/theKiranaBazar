import { NULL_EXPR, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})


export class ListsComponent implements OnInit {

  lists:List[];                       //list is a variable array of type List that was defined in the list.ts file
  inputList:string="";                //These all below are the attributes of the list items
  inputListDescription:string="";
  inputListDate:string="";
  inputListStock:string="";           
  

  

  constructor() { }

  ngOnInit(): void {                    //This is a life cycle hook, ngOnInit() is called at the start of component
    this.lists = [
      {                                 //Explicitly defining item in list or array
        content: "Shampoo",
        description: "Cool menthol shampoo, helps to reduce hairs!",
        date: "21-04-2020",
        stock: "Yes",
        completed: false
      },
      {
        content: "Football",
        description: "Best football ever, Messi used it that's why he is little",
        date: "30-01-2021",
        stock: "Yes",
        completed: false
      },
      {
        content: "Cards",
        description: "Good cards, Pablo used them that is why he is dead!",
        date: "01-09-2020",
        stock: "Yes",
        completed: false
      },
      {
        content: "Medicines",
        description: "If you use them, you will be alright, altough Ramdev don't believe so",
        date: "07-12-2020",
        stock: "No",
        completed: false
      },
      {
        content: "Books",
        description: "Books, you should read, altough you do not",
        date: "09-01-2021",
        stock: "No",
        completed: false
      },
      
      
     
      
    ]
  }
  toggleDone(id){             //List is toggled here, every item in list by their index


    this.lists.map((v,i)=>{
      if(i==id) v.completed=!v.completed;

       return v;
    })
  }

  deleteList(id){                   //To delete the item in the list

    this.lists=this.lists.filter((v,i)=>i !==id);
  }
  EditList(id){                        //To edit or update the item in list

    var name=window.prompt("Enter new item name:");
    var desc=window.prompt("Enter new description:");
    var dateB=window.prompt("Enter date:");

  
    
    this.lists.push({
      content: name,
      description: desc,
      date: dateB,
      stock: this.inputListStock,
      completed: false
    });

    this.inputList="";
    this.inputListDescription="";
    this.inputListDate="";

     this.lists=this.lists.filter((v,i)=>i !==id);

alert("Item was updated succefully! at the end of list");
    
   

  
  }

  addList(){        //This helps in adding the new items in list

    
    this.lists.push({
      content: this.inputList,
      description: this.inputListDescription,
      date: this.inputListDate,
      stock: this.inputListStock,
      completed: false
    });
 
    this.inputList="";
    this.inputListDescription="";
    this.inputListDate="";

  }

  stockAvailNo(){          //This is for filter, if stock is not available
    

    
        this.lists = [
          {
            content: "Shampoo",
            description: "Cool menthol shampoo, helps to reduce hairs!",
            date: "21-04-2020",
            stock: "Yes",
            completed: false
          },
          {
            content: "Football",
            description: "Best football ever, Messi used it that's why he is little",
            date: "30-01-2021",
            stock: "Yes",
            completed: false
          },
          {
            content: "Cards",
            description: "Good cards, Pablo used them that is why he is dead!",
            date: "01-09-2020",
            stock: "Yes",
            completed: false
          },
         
          
         
          
        ]
      
        
    }
    stockAvail(){        //This is for filter, if stock is available

    

    this.lists = [
      {
        content: "Shampoo",
        description: "Cool menthol shampoo, helps to reduce hairs!",
        date: "21-04-2020",
        stock: "Yes",
        completed: false
      },
      {
        content: "Football",
        description: "Best football ever, Messi used it that's why he is little",
        date: "30-01-2021",
        stock: "Yes",
        completed: false
      },
      {
        content: "Cards",
        description: "Good cards, Pablo used them that is why he is dead!",
        date: "01-09-2020",
        stock: "Yes",
        completed: false
      },
      {
        content: "Medicines",
        description: "If you use them, you will be alright, altough Ramdev don't believe so",
        date: "07-12-2020",
        stock: "Yes",
        completed: false
      },
      {
        content: "Books",
        description: "Books, you should read, altough you do not",
        date: "09-01-2021",
        stock: "No",
        completed: false
      },
      
     
      
    ]
   
   

  }
  
 
}
  



