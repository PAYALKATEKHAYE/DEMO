import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isOpen : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  isToggleNav(){
    this.isOpen = !this.isOpen;
  }
  display=false;
  toggle(){
    this.display = !this.display;
  }
   dis=false;
    deep(){
     this.dis =!this.dis;
   }
  
}
