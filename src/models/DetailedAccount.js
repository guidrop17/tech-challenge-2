class DetailedAccount {
    constructor({
        _id, type, value, from, to, date, accountId, anexo, urlAnexo, description, category
    }) {
        this.id =_id
        this.accountId = accountId
        this.type = type
        this.description = description
        this.category = category
        this.value = value
        this.from = from
        this.to = to
        this.date = date
        this.anexo = anexo
        this.urlAnexo = urlAnexo
    }
}

module.exports = DetailedAccount
