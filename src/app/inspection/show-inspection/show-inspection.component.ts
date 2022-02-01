import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionService } from 'src/app/services/inspection.service';

@Component({
  selector: 'app-show-inspection',
  templateUrl: './show-inspection.component.html',
  styleUrls: ['./show-inspection.component.scss']
})
export class ShowInspectionComponent implements OnInit {
  inspectionList$!: Observable<any[]>;
  inspectionTypeList$!: Observable<any[]>;
  inspectionStatusList$!: Observable<any[]>;

  inspectionTypeList: any;
  inspectionTypeMap: Map<number, string> = new Map();

  modalTitle:String = '';
  activateAditInspectionComponent: boolean = false;
  inspection: any;

  constructor(private readonly inspectionService: InspectionService) { }

  ngOnInit(): void {
    this.inspectionList$ = this.inspectionService.getInspections();
    this.inspectionTypeList$ = this.inspectionService.getInspectionTypes();
    this.refreshInspectionTypeMap();
  }

  refreshInspectionTypeMap():void {
    this.inspectionService.getInspectionTypes().subscribe(res => {
      this.inspectionTypeList = res;
      console.log(res);
      this.inspectionTypeList.forEach((x: { id: number; inspectionName: string; }) => {
        this.inspectionTypeMap.set(x.id, x.inspectionName);
      });
    });
  }

  modalAdd(): void {
    this.modalTitle = 'Add Inspection';
    this.activateAditInspectionComponent = true;
    this.inspection = {
      id: 0,
      status: null,
      comments: null,
      inspectionTypeId: null
    }
  }

}
