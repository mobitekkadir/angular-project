import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  dataList = [1, 2, 3, 4, 5];

  colorParam = 'red';

  addCountToAllDatas() {
    this.dataList.forEach((element, index, theArray) => {
      theArray[index] = element + 7;
    });
    if (this.colorParam != 'green')
      this.colorParam = 'green';
    else
      this.colorParam = 'purple';
  }



}
