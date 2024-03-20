const {Account} = require("../models")

module.exports = {
    getAllAccount: async (req, res) => {
        const accounts = await Account.findAll();

        res.json({
            message: "menampilkan data account",
            data: accounts
        })
    },

    getAccountById: async (req, res) => {
        
    },

    addAccount: async (reg,res) => {

    }
}