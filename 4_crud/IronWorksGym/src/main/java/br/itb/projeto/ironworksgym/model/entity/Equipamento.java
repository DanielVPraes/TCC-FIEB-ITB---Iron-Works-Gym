package br.itb.projeto.ironworksgym.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Equipamento")
public class Equipamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@Column(name = "Nome")
	private String nome;

	@Column(name = "Quantidade")
	private int quantidade;

	@Column(name = "StatusEquipamento")
	private String StatusEquipamento;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}

	public String getStatusEquipamento() {
		return StatusEquipamento;
	}

	public void setStatusEquipamento(String statusEquipamento) {
		StatusEquipamento = statusEquipamento;
	}

}