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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.itb.projeto.ironworksgym.model.entity.Usuario;
import br.itb.projeto.ironworksgym.rest.exception.ResourceNotFoundException;
import br.itb.projeto.ironworksgym.rest.response.MessageResponse;
import br.itb.projeto.ironworksgym.service.UsuarioService;

@RestController
@RequestMapping("/usuario/")
public class UsuarioController {

	private UsuarioService usuarioService;
	// Source -> Generate Constructor using Fields...

	public UsuarioController(UsuarioService usuarioService) {
		super();
		this.usuarioService = usuarioService;
	}

	@GetMapping("findAll")
	public ResponseEntity<List<Usuario>> findAll() {

		List<Usuario> usuarios = usuarioService.findAll();

		return new ResponseEntity<List<Usuario>>(usuarios, HttpStatus.OK);
	}

	@GetMapping("findById/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable long id) {

		Usuario usuario = usuarioService.findById(id);

		return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
	}

	@GetMapping("findByEmail/")
	public ResponseEntity<Usuario> findByEmail(@RequestParam String email) {
 
		Usuario usuario = usuarioService.findByEmail(email);
 
		if (usuario != null) {
			return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
		} else {
			throw new ResourceNotFoundException("*** Usuário não encontrado! *** " + "E-mail: " + email);
		}
 
	}
 
	@PostMapping("create")
	public ResponseEntity<?> create(@RequestBody Usuario usuario) {
 
		Usuario _usuario = usuarioService.create(usuario);
 
		if (_usuario == null) {
			System.out.println("_usuario 2" + _usuario);
			return ResponseEntity.badRequest().body(new MessageResponse("Usuário já cadastrado!"));
		}
		return ResponseEntity.ok().body(new MessageResponse("Usuário cadastrado com sucesso!"));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signin(@RequestBody Usuario usuario) {

		Usuario _usuario = usuarioService
				.signin(usuario.getEmail(), usuario.getSenha());

		if (_usuario == null) {
			throw new ResourceNotFoundException("*** Dados Incorretos! *** ");
		}

		return ResponseEntity.ok(_usuario);
	}


	@PutMapping("alterarSenha/{id}")
	public ResponseEntity<Usuario> alterarSenha(@PathVariable long id, @RequestBody Usuario usuario) {

		Usuario _usuario = usuarioService.alterarSenha(id, usuario);

		return new ResponseEntity<Usuario>(_usuario, HttpStatus.OK);
	}

	@PutMapping("alterar/{id}")
	public ResponseEntity<?> alterar(@PathVariable long id, @RequestBody Usuario usuario) {

		Usuario _usuario = usuarioService.alterar(id, usuario);

		return ResponseEntity.ok()
				.body(new MessageResponse("Usuário: " + _usuario.getEmail() + " alterado com sucesso!"));
	}


	@PutMapping("inativar/{id}")
	public ResponseEntity<Usuario> inativar(@PathVariable long id) {

		Usuario _usuario = usuarioService.inativar(id);

		return new ResponseEntity<Usuario>(_usuario, HttpStatus.OK);
	}

	@PutMapping("reativar/{id}")
	public ResponseEntity<Usuario> reativar(@PathVariable long id) {

		Usuario _usuario = usuarioService.reativar(id);

		return new ResponseEntity<Usuario>(_usuario, HttpStatus.OK);
	}

}
