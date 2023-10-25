const knex = require("../conexao");

const listarCategorias = async (req, res) => {
  try {
    const categorias = await knex
      .select("descricao as categoria")
      .from("categorias");

    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = listarCategorias;
