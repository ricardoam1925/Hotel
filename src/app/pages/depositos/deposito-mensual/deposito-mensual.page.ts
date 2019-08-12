import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositoService } from '../../../services/deposito.service';
import { Deposito } from '../../../interfaces/Deposito';
@Component({
  selector: 'app-deposito-mensual',
  templateUrl: './deposito-mensual.page.html',
  styleUrls: ['./deposito-mensual.page.scss'],
})
export class DepositoMensualPage implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private depositoService : DepositoService) { }

  fech = null;
  dep = null;

  ngOnInit() {
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.depositoService.getDepositoMensual(this.fech).subscribe(deposito => {console.log(deposito); this.dep = deposito;});
  

  }

}
