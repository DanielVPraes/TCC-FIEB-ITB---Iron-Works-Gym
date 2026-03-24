package br.itb.projeto.ironworksgym.model.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Mensagem")
public class Mensagem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long id;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "Data_Mensagem")
	private LocalDate dataMensagem;

	@Column(name = "Email")
	private String email;

	@Column(name = "Texto")
	private String texto;

	@Column(name = "StatusMensagem")
	private String StatusMensagem;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getDataMensagem() {
		return dataMensagem;
	}

	public void setDataMensagem(LocalDate dataMensagem) {
		this.dataMensagem = dataMensagem;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public String getStatusMensagem() {
		return StatusMensagem;
	}

	public void setStatusMensagem(String statusMensagem) {
		StatusMensagem = statusMensagem;
	}

}