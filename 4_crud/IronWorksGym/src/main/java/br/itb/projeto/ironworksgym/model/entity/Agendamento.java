package br.itb.projeto.ironworksgym.model.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Agendamento")
public class Agendamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "Data_Disponivel")
	private LocalDate dataDisponivel;

	@Column(name = "Horario_Disponivel")
	private String horarioDisponivel;

	@ManyToOne
	@JoinColumn(name = "Usuario_ID")
	private Usuario usuarioId;

	@ManyToOne
	@JoinColumn(name = "Equipamento_ID")
	private Equipamento equipamentoId;

	@Column(name = "StatusAgendamento")
	private String StatusAgendamento;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDataDisponivel() {
		return dataDisponivel;
	}

	public void setDataDisponivel(LocalDate dataDisponivel) {
		this.dataDisponivel = dataDisponivel;
	}

	public String getHorarioDisponivel() {
		return horarioDisponivel;
	}

	public void setHorarioDisponivel(String horarioDisponivel) {
		this.horarioDisponivel = horarioDisponivel;
	}

	public Usuario getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Usuario usuarioId) {
		this.usuarioId = usuarioId;
	}

	public Equipamento getEquipamentoId() {
		return equipamentoId;
	}

	public void setEquipamentoId(Equipamento equipamentoId) {
		this.equipamentoId = equipamentoId;
	}

	public String getStatusAgendamento() {
		return StatusAgendamento;
	}

	public void setStatusAgendamento(String statusAgendamento) {
		StatusAgendamento = statusAgendamento;
	}

}