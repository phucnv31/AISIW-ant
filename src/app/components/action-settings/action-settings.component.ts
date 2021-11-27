import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActionTypeOption, ActionTypeOptions } from '../shared/common/constants';

@Component({
  selector: 'app-action-settings',
  templateUrl: './action-settings.component.html',
  styleUrls: ['./action-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActionSettingsComponent implements OnInit {
  actionTypeOptions = ActionTypeOptions;
  favoriteActions = ActionTypeOptions.filter(a=> a.star);
  selectedActionId = ActionTypeOptions[0].id;
  constructor() { }

  ngOnInit(): void {
  }

  onPickStar(event: MouseEvent,item: ActionTypeOption) {
    item.star = !item.star;
    this.favoriteActions = ActionTypeOptions.filter(a=> a.star);
    event.preventDefault();
    event.stopPropagation();
  }

  onQuickActionTypeClick(item: ActionTypeOption) {
    this.selectedActionId = item.id;
  }
}
