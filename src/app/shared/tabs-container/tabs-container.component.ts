import { Component, ContentChildren, AfterContentInit, QueryList} from '@angular/core';
import { NgClass } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList()

  constructor() { }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
    console.log(tab.tabTitle)
    this.tabs?.forEach(tab => {
      tab.active = false
    })

    tab.active = true

    return false //return false to not redirect when clicking between Login/Register
  }


}
