import { Component, inject } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-ui';

  singletonCounts :any[] = [];

  counterService = inject(MasterService);

  increment = () =>{
    this.counterService.getCounts().subscribe(data=>{
      this.singletonCounts.push(data); 
    })
  }
}
