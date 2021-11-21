class CodeController {
    async getCode(req, res) {
        const {user, code} = req.body;
    }
}

module.exports = new CodeController();