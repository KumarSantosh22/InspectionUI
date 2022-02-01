import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionService } from 'src/app/services/inspection.service';

@Component({
  selector: 'app-adit-inspection',
  templateUrl: './adit-inspection.component.html',
  styleUrls: ['./adit-inspection.component.scss']
})
export class AditInspectionComponent implements OnInit {
  @Input() inspection: any = {};

  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionStatusList$!: Observable<any[]>;

  id: number = 0;
  status: string = '';
  comments: string = '';
  inspectionTypeId!: number;

  constructor(private readonly inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.id = this.inspection.id;
    this.status = this.inspection.status;
    this.inspectionTypeId = this.inspectionTypeId;
    this.inspectionStatusList$ = this.inspectionService.getStatuses();
    this.inspectionList$ = this.inspectionService.getInspections();
    this.inspectionTypeList$ = this.inspectionService.getInspectionTypes();
  }

}
