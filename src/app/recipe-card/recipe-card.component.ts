import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() image: string = "";

  constructor() {}

  ngOnInit(): void {
  }

}
