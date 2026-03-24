package br.itb.projeto.ironworksgym.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.itb.projeto.ironworksgym.model.entity.Equipamento;
import br.itb.projeto.ironworksgym.model.repository.EquipamentoRepository;
import jakarta.transaction.Transactional;

@Service
public class EquipamentoService {

	private EquipamentoRepository equipamentoRepository;

	public EquipamentoService(EquipamentoRepository equipamentoRepository) {
		super();
		this.equipamentoRepository = equipamentoRepository;
	}

	public List<Equipamento> findAll() {
		List<Equipamento> equipamentos = equipamentoRepository.findAll();
		return equipamentos;
	}

	@Transactional
	public Equipamento create(Equipamento equipamento) {
		equipamento.setStatusEquipamento("ATIVO");

		return equipamentoRepository.save(equipamento);

	}

	@Transactional
	public Equipamento alterarStatusEquipamento(long id, Equipamento equipamento) {

		Optional<Equipamento> _equipamento = equipamentoRepository.findById(id);

		if (_equipamento.isPresent()) {
			Equipamento equipamentoAtualizado = _equipamento.get();

			equipamentoAtualizado.setStatusEquipamento(null);

			return equipamentoRepository.save(equipamentoAtualizado);
		}
		return null;
	}

	@Transactional
	public Equipamento inativar(long id) {
		Optional<Equipamento> _equipamento = equipamentoRepository.findById(id);

		if (_equipamento.isPresent()) {
			Equipamento equipamentoAtualizada = _equipamento.get();
			equipamentoAtualizada.setStatusEquipamento("INATIVO");

			return equipamentoRepository.save(equipamentoAtualizada);
		}
		return null;
	}

	@Transactional
	public Equipamento reativar(long id) {
		Optional<Equipamento> _equipamento = equipamentoRepository.findById(id);

		if (_equipamento.isPresent()) {
			Equipamento equipamentoAtualizada = _equipamento.get();
			equipamentoAtualizada.setStatusEquipamento("ATIVO");

			return equipamentoRepository.save(equipamentoAtualizada);
		}
		return null;
	}

}
