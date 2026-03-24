USE MASTER IF EXISTS
	  (SELECT * FROM SYS.databases WHERE NAME = 'IronWorksGym')

DROP DATABASE IronWorksGym
GO

CREATE DATABASE IronWorksGym
GO

USE IronWorksGym
GO

SP_HELPDB IronWorksGym



--TABELAS



--DD Usuario


--DROP TABLE Usuario
CREATE TABLE Usuario 
(
	ID INT IDENTITY,
	Nome VARCHAR(50),
	Data_Nascimento SMALLDATETIME,
	Telefone VARCHAR(15),
	Email VARCHAR(50),
	Senha VARCHAR(50),
	CPF VARCHAR(15),
	Torre VARCHAR(1),
	Apartamento VARCHAR(3),
	StatusUsuario VARCHAR(20),

	PRIMARY KEY (ID)
)


--DD Equipamento


--DROP TABLE Equipamento
CREATE TABLE Equipamento 
(
	ID INT IDENTITY,
	Nome VARCHAR(30),
	Quantidade INT,
	StatusEquipamento VARCHAR(20),

	PRIMARY KEY (ID)
)


--DD Agendamento
 

--DROP TABLE Agendamento
CREATE TABLE Agendamento 
(
	ID INT IDENTITY,
	Data_Disponivel SMALLDATETIME,
	Horario_Disponivel CHAR(8),
	Usuario_ID INT,
	Equipamento_ID INT,
	StatusAgendamento VARCHAR(20),

	FOREIGN KEY(Usuario_ID) REFERENCES Usuario(ID), 
	FOREIGN KEY(Equipamento_ID) REFERENCES Equipamento(ID)
)


--DD Mensagem


--DROP TABLE Mensagem
CREATE TABLE Mensagem
(
	ID INT IDENTITY,
	Data_Mensagem SMALLDATETIME NOT NULL,
	Email VARCHAR(100),
	Texto VARCHAR(400),
	StatusMensagem VARCHAR(20) 

	PRIMARY KEY (ID)
)



--INSERTS



--Usuario


GO
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario) 
VALUES ('Daniel Vítor Praes', '20/01/2007', '11912419237', 'danielpraess@gmail.com', 'danielllpraesss', '12345678901', 'D', '123', 'ATIVO')
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario)
VALUES ('Victor Pereira da Silva', '17/05/2005', '21949728261', 'limaas@gmail.com', 'victorps', '10987654321', 'C', '98', 'ATIVO')
INSERT INTO Usuario (Nome, Data_Nascimento, Telefone, Email, Senha, CPF, Torre, Apartamento, StatusUsuario) 
VALUES ('João Vitor Almeida', '03/11/2005', '11988564210', 'joaooficial123@gmail.com', 'almeidavitorjj', '11029384756', 'C', '23', 'ATIVO')
GO

SELECT * FROM Usuario


--Equipamento


GO
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento) 
VALUES ('Cadeira Extensora', '3', 'ATIVO');
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento)
VALUES ('Peck Deck', '4', 'ATIVO');
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento) 
VALUES ('Bicicleta', '5', 'ATIVO');
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento)
VALUES ('Leg Press', '2', 'ATIVO');
INSERT INTO Equipamento (Nome, Quantidade, StatusEquipamento)
VALUES ('Esteira', '3', 'ATIVO');
GO

SELECT * FROM Equipamento


--Agendamento


GO
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('28/06/2024', '09:00', '1', '2', 'ATIVO')
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('01/07/2024', '12:00', '2', '3', 'ATIVO')
INSERT INTO Agendamento (Data_Disponivel, Horario_Disponivel, Usuario_ID, Equipamento_ID, StatusAgendamento) 
VALUES ('13/07/2024', '16:00', '3', '1', 'ATIVO')
GO

SELECT * FROM Agendamento


-- MENSAGEM


GO
INSERT INTO Mensagem (Data_Mensagem, Email, Texto,StatusMensagem) 
VALUES ('12/03/2024', 'danielpraess@gmail.com', 'Teste', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Email, Texto,StatusMensagem) 
VALUES ('23/04/2024', 'lucaswolf@gmail.com','teste aaaa', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Email, Texto,StatusMensagem) 
VALUES ('22/06/2024', 'aleofc@gmail.com', 'Olá. Teste teste', 'ATIVO')
INSERT INTO Mensagem (Data_Mensagem, Email, Texto,StatusMensagem) 
VALUES ('22/07/2024', 'kauabut@gmail.com', 'Olá. Teste', 'ATIVO')
GO

SELECT * FROM Mensagem


	
--UPDATES



--Usuario


UPDATE Usuario SET Apartamento = Apartamento + 3;

SELECT * FROM Usuario;


--Equipamento


UPDATE Equipamento SET Quantidade = Quantidade + 4;

SELECT * FROM Equipamento;


--Agendamento


UPDATE Agendamento SET Data_Disponivel = DATEADD(day, 5, Data_Disponivel);

SELECT * FROM Agendamento;


--Mensagem


UPDATE Mensagem SET Data_Mensagem = DATEADD(day, 10, Data_Mensagem);

SELECT * FROM Mensagem;


SELECT ID, Nome FROM Usuario WHERE StatusUsuario = 'ATIVO';
SELECT ID, Nome FROM Equipamento WHERE StatusEquipamento = 'ATIVO';


--Deletes



--Usuario


DELETE FROM Usuario WHERE Data_Nascimento <= DATEADD(YEAR, -18, GETDATE());


--Equipamento


DELETE FROM Equipamento WHERE Quantidade >= 5;


--Agendamento


DELETE FROM Agendamento WHERE Data_Disponivel = DATEADD(day, -1, Data_Disponivel);


--Mensagem


DELETE FROM Mensagem WHERE StatusMensagem = 'ATIVO'