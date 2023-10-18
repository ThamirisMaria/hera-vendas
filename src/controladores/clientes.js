const knex = require("../conexao");
// const jwt = require('jsonwebtoken');

const cadastrarCliente = async (req, res) => {
  const { nome, email, cpf } = req.body;
  try {
    const clienteEmail = await knex("clientes").where({ email }).first();

    if (clienteEmail) {
      return res
        .status(400)
        .json({ mensagem: "Este email já pertence a outro cliente" });
    }

    const clienteCpf = await knex("clientes").where({ cpf }).first();

    if (clienteCpf) {
      return res
        .status(400)
        .json({ mensagem: "Este CPF já pertence a outro cliente" });
    }

    await knex("clientes").insert({
      nome,
      email,
      cpf
    });

    return res
      .status(201)
      .json({ mensagem: "Cliente cadastrado com sucesso!" });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const listarClientes = async (req, res) => {
  try {
    const clientes = await knex.select("*").from("clientes");

    return res.status(200).json(clientes);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

const detalharCliente = async (req, res) => {
  try {

  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

const editarCliente = async (req, res) => {
  try {

  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = {
  cadastrarCliente,
  listarClientes,
  detalharCliente,
  editarCliente
};