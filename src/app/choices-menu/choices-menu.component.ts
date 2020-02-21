import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-choices-menu",
  templateUrl: "./choices-menu.component.html",
  styleUrls: ["./choices-menu.component.scss"]
})
export class ChoicesMenuComponent implements OnInit {
  @Input() images;

  selectedMenu: string = "";

  constructor() {}

  ngOnInit(): void {}
}
