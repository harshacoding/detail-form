import { Component,Input,InputDecorator,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
   @Input() FA:any;
   @Input() SD:any;
   @Output() editTable: EventEmitter<void> = new EventEmitter<void>();
   
   edit(p:any,j:any){
    console.log(this.FA,j);

    this.editTable.emit(p);
    const index = j;

    if (index !== -1) {
      this.FA.splice(index, 1);
    }

   }
   
}
