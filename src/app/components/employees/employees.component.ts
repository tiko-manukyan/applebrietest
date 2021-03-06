import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  public selectedEmployee: any
  public employees: any[] = [];

  constructor(private api: ApiService) { }


  ngOnInit() {
    this.api.getAllEmployees()
      .subscribe(employees => {
        this.employees = employees.results;
      })
  }

  onSelectEmployeeLocation(employee: any) {
    this.selectedEmployee = employee;
  }


}
