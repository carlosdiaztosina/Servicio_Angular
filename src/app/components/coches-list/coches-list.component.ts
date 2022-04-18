import { Coche } from '../../shared/coche';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.css'],
})
export class CochesListComponent implements OnInit {
  StudentData: any = [];
  dataSource: MatTableDataSource<Coche>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = [
    '_id',
    'nombre',
    'marca',
    'tipo',
    'matricula',
    'action',
  ];

  constructor(private studentApi: ApiService) {
    this.studentApi.GetCoches().subscribe((data) => {
      this.StudentData = data;
      this.dataSource = new MatTableDataSource<Coche>(this.StudentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    });
  }

  ngOnInit() {}

  deleteCoche(index: number, e) {
    if (window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice(
        this.paginator.pageIndex * this.paginator.pageSize + index,
        1
      );
      this.dataSource.data = data;
      this.studentApi.DeleteCoche(e._id).subscribe();
    }
  }
}
