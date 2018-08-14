import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "list-item",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent {

  toggled: boolean = false;

  @Input()
  item: any;

  @Output()
  remove = new EventEmitter<any>();

  constructor() {}


  toggle(): void {
    this.toggled = !this.toggled;
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  getRoute(item: any): any[] {
    return [`../meals`, item.uid];
  }
}
