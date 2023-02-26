import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ElementsService } from 'src/app/services/elements.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private elementService: ElementsService) { }

  ngOnInit() {
    this.elementService.getUsers().subscribe((item) => {
      this.dataSource = new MatTableDataSource<any>(item);
      ;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
