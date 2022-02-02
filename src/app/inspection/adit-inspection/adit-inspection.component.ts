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

  onSubmit() {
    let model: any = {
      status: this.status,
      comments: this.comments,
      inspectionTypeId: this.inspectionTypeId
    }
    console.log(model)
    if (this.id == 0) {
      this.inspectionService.addInspection(model).subscribe(res => {
        this.close();
        this.showAlert('Inspection successfully added!', 'alert-success');
      }, err => {
        console.log(err);
        this.showAlert('Some error occurred while processing.', 'alert-danger');
      });
    }
    else {
      model.id = this.id;
      this.inspectionService.updateInspection(this.id, model).subscribe(res => {
        this.close();
        this.showAlert('Inspection successfully updated!', 'alert-success');
      }, err => {
        this.showAlert('Some error occurred while processing.', 'alert-danger');
      });
    }

  }

  close() {
    let closeModalBtn = document.getElementById('adit-modal-close');
    if (closeModalBtn) {
      closeModalBtn.click();
    }
  }

  showAlert(msg: string, type: string) {
    let alert = document.getElementById(type);
    if (alert) {
      alert.style.display = 'block';
      alert.textContent = msg;
    }
    setTimeout(() => {
      if (alert) {
        alert.style.display = 'none';
      }
    }, 4000)
  }

}
