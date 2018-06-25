import { Component, OnInit } from '@angular/core';
import { ArchivosService } from '../../services/archivos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private archivos;
  selectedArchivo: any[];

  constructor(archivosServices:ArchivosService) { 
    //console.log();
    this.archivos = archivosServices.getArchivos();
  }

  ngOnInit() {
  }

}