import { Component, OnInit, Input } from "@angular/core";
import images from "../../assets/images";

@Component({
  selector: "app-sketch",
  templateUrl: "./sketch.component.html",
  styleUrls: ["./sketch.component.scss"]
})
export class SketchComponent implements OnInit {
  public images = {
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
  constructor() {}

  ngOnInit(): void {}
}
