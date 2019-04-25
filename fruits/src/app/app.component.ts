import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nag = false;
  title = 'Nageswar';

  fruits: string[] = ['apple', 'banana', 'mango', 'orange', 'greaps'];
  fruit: string;

  value(fruit: string) {
    document.getElementById('id1').innerHTML = fruit;
  }

exec() {
  this.nag = true;
}

}
