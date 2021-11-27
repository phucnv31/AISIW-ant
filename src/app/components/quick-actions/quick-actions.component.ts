import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { faWindowMaximize, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quick-actions',
  templateUrl: './quick-actions.component.html',
  styleUrls: ['./quick-actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuickActionsComponent implements OnInit {
  btnSize: NzButtonSize = 'large';
  faWindowMaximize = faWindowMaximize;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }

  onStart() {

  }

  onPickTarget() {

  }

  onAddAction() {

  }

  onRemoveAction() {

  }
}
