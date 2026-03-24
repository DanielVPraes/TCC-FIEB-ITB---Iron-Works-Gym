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

import br.itb.projeto.ironworksgym.model.entity.Agendamento;
import br.itb.projeto.ironworksgym.service.AgendamentoService;

@RestController
@RequestMapping("/agendamento/")
public class AgendamentoController {

	private AgendamentoService agendamentoService;

	public AgendamentoController(AgendamentoService agendamentoService) {
		super();
		this.agendamentoService = agendamentoService;
	}

	@GetMapping("findAll")
	public ResponseEntity<List<Agendamento>> findAll() {
		List<Agendamento> mensagens = agendamentoService.findAll();

		return new ResponseEntity<List<Agendamento>>(mensagens, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Agendamento> create(@RequestBody Agendamento agendamento) {

		Agendamento _agendamento = agendamentoService.create(agendamento);

		return new ResponseEntity<Agendamento>(_agendamento, HttpStatus.OK);
	}

	@PutMapping("update/{id}")
	public ResponseEntity<Agendamento> update(@PathVariable long id) {

		Agendamento _agendamento = agendamentoService.update(id);

		return new ResponseEntity<Agendamento>(_agendamento, HttpStatus.OK);
	}

	@PutMapping("inativar/{id}")
	public ResponseEntity<Agendamento> inativar(@PathVariable long id) {

		Agendamento _agendamento = agendamentoService.inativar(id);

		return new ResponseEntity<Agendamento>(_agendamento, HttpStatus.OK);
	}

	@PutMapping("reativar/{id}")
	public ResponseEntity<Agendamento> reativar(@PathVariable long id) {

		Agendamento _agendamento = agendamentoService.reativar(id);

		return new ResponseEntity<Agendamento>(_agendamento, HttpStatus.OK);
	}

	@PutMapping("delete/{id}")
	public ResponseEntity<?> delete(@PathVariable long id) {

		agendamentoService.delete(id);

		return ResponseEntity.ok().body(null);
	}

}
