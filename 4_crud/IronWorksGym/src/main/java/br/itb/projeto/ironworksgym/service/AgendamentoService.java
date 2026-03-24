package br.itb.projeto.ironworksgym.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.ironworksgym.model.entity.Agendamento;
import br.itb.projeto.ironworksgym.model.repository.AgendamentoRepository;
import jakarta.transaction.Transactional;

@Service
public class AgendamentoService {

	private AgendamentoRepository agendamentoRepository;

	public AgendamentoService(AgendamentoRepository agendamentoRepository) {
		super();
		this.agendamentoRepository = agendamentoRepository;
	}

	public List<Agendamento> findAll() {
		List<Agendamento> agendamentos = agendamentoRepository.findAll();
		return agendamentos;
	}

	// jakarta.transaction.Transactional
	@Transactional
	public Agendamento create(Agendamento agendamento) {
		agendamento.setStatusAgendamento("ATIVO");
		return agendamentoRepository.save(agendamento);
	}

	@Transactional
	public void delete(long id) {
		agendamentoRepository.deleteById(id);
	}

	@Transactional
	public Agendamento update(long id) {

		Optional<Agendamento> _agendamento = agendamentoRepository.findById(id);

		if (_agendamento.isPresent()) {
			Agendamento agendamentoAtualizada = _agendamento.get();

			return agendamentoRepository.save(agendamentoAtualizada);
		}
		return null;
	}

	@Transactional
	public Agendamento inativar(long id) {
		Optional<Agendamento> _agendamento = agendamentoRepository.findById(id);

		if (_agendamento.isPresent()) {
			Agendamento agendamentoAtualizada = _agendamento.get();
			agendamentoAtualizada.setStatusAgendamento("INATIVO");

			return agendamentoRepository.save(agendamentoAtualizada);
		}
		return null;
	}

	@Transactional
	public Agendamento reativar(long id) {
		Optional<Agendamento> _agendamento = agendamentoRepository.findById(id);

		if (_agendamento.isPresent()) {
			Agendamento agendamentoAtualizada = _agendamento.get();
			agendamentoAtualizada.setStatusAgendamento("ATIVO");

			return agendamentoRepository.save(agendamentoAtualizada);
		}
		return null;
	}
}
