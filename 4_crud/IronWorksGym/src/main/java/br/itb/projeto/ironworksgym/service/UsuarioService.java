package br.itb.projeto.ironworksgym.service;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.ironworksgym.model.entity.Usuario;
import br.itb.projeto.ironworksgym.model.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

	private UsuarioRepository usuarioRepository;

	public UsuarioService(UsuarioRepository usuarioRepository) {

		super();
		this.usuarioRepository = usuarioRepository;

	}

	public List<Usuario> findAll() {

		List<Usuario> usuarios = usuarioRepository.findAll();

		return usuarios;

	}

	public Usuario findByIdUsuario(long id) {
		Usuario usuario = usuarioRepository.findById(id).orElseThrow();

		return usuario;
	}

	public Usuario findByEmail(String email) {

		return null;

	}

	@Transactional
	public Usuario create(Usuario usuario) {
		String Senha = Base64.getEncoder().encodeToString(usuario.getSenha().getBytes());
		usuario.setSenha(Senha);
		usuario.setStatusUsuario("ATIVO");
		return usuarioRepository.save(usuario);
	}

	@Transactional
	public Usuario signin(String email, String senha) {
		Usuario usuario = usuarioRepository.findByEmail(email);

		if (usuario != null) {
			byte[] decodedPass = Base64.getDecoder().decode(usuario.getSenha());
			if (new String(decodedPass).equals(senha)) {
				return usuario;
			}

		}
		return null;
	}

	public Usuario findById(long id) {
		Usuario usuario = usuarioRepository.findById(id).orElseThrow();

		return usuario;
	}

	@Transactional
	public Usuario alterarSenha(long id, Usuario usuario) {

		Optional<Usuario> _Usuario = usuarioRepository.findById(id);

		if (_Usuario.isPresent()) {
			Usuario UsuarioAtualizada = _Usuario.get();

			String senha = Base64.getEncoder().encodeToString(usuario.getSenha().getBytes());
			UsuarioAtualizada.setSenha(senha);

			return usuarioRepository.save(UsuarioAtualizada);
		}
		return null;
	}

	@Transactional
	public Usuario alterar(long id, Usuario usuario) {

		Optional<Usuario> _usuario = usuarioRepository.findById(id);

		if (_usuario.isPresent()) {
			Usuario usuarioAtualizado = _usuario.get();

			usuarioAtualizado.setNome(usuario.getNome());
			usuarioAtualizado.setTelefone(usuario.getTelefone());
			usuarioAtualizado.setTorre(usuario.getTorre());
			usuarioAtualizado.setApartamento(usuario.getApartamento());
			usuarioAtualizado.setDataNascimento(usuario.getDataNascimento());

			return usuarioRepository.save(usuarioAtualizado);
		}
		return null;
	}

	@Transactional
	public Usuario inativar(long id) {
		Optional<Usuario> _usuario = usuarioRepository.findById(id);

		if (_usuario.isPresent()) {
			Usuario usuarioAtualizada = _usuario.get();
			usuarioAtualizada.setStatusUsuario("INATIVO");

			return usuarioRepository.save(usuarioAtualizada);
		}
		return null;
	}
	

	@Transactional
	public Usuario reativar(long id) {
		Optional<Usuario> _usuario = usuarioRepository.findById(id);

		if (_usuario.isPresent()) {
			
			Usuario usuarioAtualizada = _usuario.get();
			usuarioAtualizada.setStatusUsuario("ATIVO");

			return usuarioRepository.save(usuarioAtualizada);
		}
		return null;
	}
}
