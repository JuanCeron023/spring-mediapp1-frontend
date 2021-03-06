import { switchMap } from 'rxjs/operators';
import { ExamenService } from './../../_service/examen.service';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatSort} from '@angular/material/sort'; 
import {MatPaginator} from '@angular/material/paginator'; 
import {MatSnackBar} from '@angular/material/snack-bar'; 
import {MatDialog} from '@angular/material/dialog'; 



import { Examen } from './../../_model/examen';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  displayedColumns = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource!: MatTableDataSource<Examen>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private examenService: ExamenService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.examenService.examenCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.examenService.mensajeCambio.subscribe(data => {
      this.snackBar.open(data, 'Aviso', {
        duration: 2000,
      });
    });

    this.examenService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  filtrar(valor : any){
    this.dataSource.filter = valor.target.value.trim().toLowerCase();
  }

  eliminar(examen: Examen) {
    this.examenService.eliminar(examen.idExamen).pipe(switchMap(() => {
      return this.examenService.listar();
    })).subscribe(data => {
      this.examenService.examenCambio.next(data);
      this.examenService.mensajeCambio.next('Se eliminĂ³');
    });

  }

}
