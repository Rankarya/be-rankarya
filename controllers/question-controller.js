const { question } = require("../models");

module.exports = {
  getAllQuestion: async (req, res) => {
    try {
      const questions = await question.findAll();
      if (questions.length === 0) {
        return res.status(404).json({
          message: "Tidak ada question yang ditemukan",
          data: [],
        });
      }

      return res.status(200).json({
        message: "Berhasil mendapatkan question",
        data: questions,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Gagal memuat question",
        error: error.message,
      });
    }
  },
  getQuestionById: async (req, res) => {
    const questionId = req.params.id;

    try {
      const foundQuestion = await question.findByPk(questionId);

      if (!foundQuestion) {
        return res.status(404).json({
          message: "Question tidak ditemukan",
        });
      }

      return res.status(200).json({
        message: "Berhasil mendapatkan question",
        data: foundQuestion,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Gagal mendapatkan question",
        error: error.message,
      });
    }
  },

  createQuestion: async (req, res) => {
    let data = req.body;

    try {
      // Pengecekan kolom data tidak boleh kosong
      if (!data.user_id || !data.question) {
        return res.status(400).json({
          message: "Kolom user_id dan question harus diisi",
        });
      }

      const newQuestion = await question.create({
        user_id: data.user_id,
        question: data.question,
        status: false,
      });

      return res.status(200).json({
        message: "Berhasil membuat question",
        data: newQuestion,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        message: "Gagal membuat question",
        error: error.message,
      });
    }
  },
};
