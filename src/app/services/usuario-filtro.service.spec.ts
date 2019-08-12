import { TestBed } from '@angular/core/testing';

import { UsuarioFiltroService } from './usuario-filtro.service';

describe('UsuarioFiltroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioFiltroService = TestBed.get(UsuarioFiltroService);
    expect(service).toBeTruthy();
  });
});
