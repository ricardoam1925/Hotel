import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepositoService } from '../../../services/deposito.service';
import { Deposito } from '../../../interfaces/Deposito';
@Component({
  selector: 'app-deposito-diario',
  templateUrl: './deposito-diario.page.html',
  styleUrls: ['./deposito-diario.page.scss'],
})
export class DepositoDiarioPage implements OnInit {


	fech = null;
	dep = null;
  constructor(private activatedRouter: ActivatedRoute, private depositoService : DepositoService) { }
	

  ngOnInit() {
    
  	this.fech = this.activatedRouter.snapshot.paramMap.get('fecha');
  	this.depositoService.getDepositoDiario(this.fech).subscribe(deposito => {console.log(deposito); this.dep = deposito;});
  	
  }

}
