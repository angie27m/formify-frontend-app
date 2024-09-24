import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private apiUrl = 'https://your-backend-api-url.com/api/contracts'; 

  constructor(private http: HttpClient) {}

  createContract(contractData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, contractData);
  }

  getContractHistory(): Observable<any> {
    return this.http.get(`${this.apiUrl}/history`);
  }

  updateContract(id: string, contractData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, contractData);
  }
}
