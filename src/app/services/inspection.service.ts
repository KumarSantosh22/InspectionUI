import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {
  private readonly Uri = `http://localhost:5118/api`;

  constructor(private http: HttpClient) { }

  public getInspections(): Observable<any[]> {
    return this.http.get<any>(`${this.Uri}/Inspections`)
  }

  public getInspection(id: number): Observable<any> {
    return this.http.get<any>(`${this.Uri}/Inspections/${id}`)
  }

  public addInspection(model: any) {
    return this.http.post(`${this.Uri}/Inspections`, model)
  }

  public updateInspection(id: number, model: any) {
    return this.http.put(`${this.Uri}/Inspections/${id}`, model)
  }

  public deleteInspection(id: number){
    return this.http.get(`${this.Uri}/${id}`)
  }

  // Inspection Types
  public getInspectionTypes(): Observable<any[]> {
    return this.http.get<any>(`${this.Uri}/InspectionTypes`)
  }

  public getInspectionType(id: number): Observable<any> {
    return this.http.get<any>(`${this.Uri}/InspectionTypes/${id}`)
  }

  public addInspectionType(model: any) {
    return this.http.post(`${this.Uri}/InspectionTypes`, model)
  }

  public updateInspectionType(id: number, model: any) {
    return this.http.put(`${this.Uri}/InspectionTypes/${id}`, model)
  }

  public deleteInspectionType(id: number) {
    return this.http.get(`${this.Uri}/InspectionTypes/${id}`)
  }

  // Statuses
  public getStatuses(): Observable<any[]> {
    return this.http.get<any>(`${this.Uri}/Status`)
  }

  public getStatus(id: number): Observable<any> {
    return this.http.get<any>(`${this.Uri}/Status/${id}`)
  }

  public addStaus(model: any) {
    return this.http.post(`${this.Uri}/Status`, model)
  }

  public updateStatus(id: number, model: any) {
    return this.http.put(`${this.Uri}/Status/${id}`, model)
  }

  public deleteStatus(id: number) {
    return this.http.get(`${this.Uri}/Status/${id}`)
  }
}
