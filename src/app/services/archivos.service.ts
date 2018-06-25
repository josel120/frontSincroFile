import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {
  private archivos:any[] = [
    {
      nombre:'uno',
      vaina:'hey'
    }, 
    {
      nombre:'dos',
      vaina:'hey'
    }, 
    {
      nombre:'tres',
      vaina:'hey'
    },
    {
      nombre:'cuatro',
      vaina:'hey'
    },
    {
      nombre:'cinco',
      vaina:'hey'
    }
  ];
  constructor() { 
    console.log('servicios archivos');
  }

  getArchivos(){
    return this.archivos;
  }
}
