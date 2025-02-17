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
  scopedCounts :any[] = [];
  transientCounts :any[] = [];

  counterService = inject(MasterService);

  increment = () =>{
    this.counterService.getSingletonCounts().subscribe(data=>{
      this.singletonCounts.push(data); 
    })
    this.counterService.getScopedCounts().subscribe(data=>{
      this.scopedCounts.push(data); 
    })
    this.counterService.getTransientCounts().subscribe(data=>{
      this.transientCounts.push(data); 
    })
  }
}
