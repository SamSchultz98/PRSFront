import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home","/home"),
    new Menu("Product","/product"),
    new Menu("Vendor","/vendor"),
    new Menu("User","/user"),
    new Menu("Request","/request"),
    new Menu("Reviews","/review"),
    new Menu("About","/about"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
