import { Component, OnInit } from "@angular/core";
import images from "../../assets/images";

@Component({
  selector: "app-sketch",
  templateUrl: "./sketch.component.html",
  styleUrls: ["./sketch.component.scss"]
})
export class SketchComponent implements OnInit {
  public resultImages = {
    head: {
      default: images.result.head.default
    },
    eyes: {
      1: images.result.eyes[1]
    },
    hair: {
      1: images.result.hair[1]
    }
  };

  constructor() {
    console.log(this.resultImages.head.default);
  }

  ngOnInit(): void {}
}
