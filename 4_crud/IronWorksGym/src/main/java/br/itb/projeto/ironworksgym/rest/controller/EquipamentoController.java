package br.itb.projeto.ironworksgym.rest.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.ironworksgym.model.entity.Equipamento;
import br.itb.projeto.ironworksgym.service.EquipamentoService;

@RestController
@RequestMapping("/equipamento/")
public class EquipamentoController {

	private EquipamentoService equipamentoService;

	public EquipamentoController(EquipamentoService equipamentoService) {
		super();
		this.equipamentoService = equipamentoService;
	}

	@GetMapping("findAll")
	public ResponseEntity<List<Equipamento>> findAll() {
		List<Equipamento> equipamentos = equipamentoService.findAll();

		return new ResponseEntity<List<Equipamento>>(equipamentos, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Equipamento> create(@RequestBody Equipamento equipamento) {

		Equipamento _equipamento = equipamentoService.create(equipamento);

		return new ResponseEntity<Equipamento>(_equipamento, HttpStatus.OK);
	}

	@PutMapping("inativar/{id}")
	public ResponseEntity<Equipamento> inativar(@PathVariable long id) {

		Equipamento _equipamento = equipamentoService.inativar(id);

		return new ResponseEntity<Equipamento>(_equipamento, HttpStatus.OK);
	}

	@PutMapping("ativar/{id}")
	public ResponseEntity<Equipamento> reativar(@PathVariable long id) {

		Equipamento _equipamento = equipamentoService.reativar(id);

		return new ResponseEntity<Equipamento>(_equipamento, HttpStatus.OK);
	}
}
