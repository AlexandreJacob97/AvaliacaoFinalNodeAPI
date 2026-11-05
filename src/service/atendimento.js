import Atendimento from '../model/atendimento.js'

class ServiceAtendimento {

    async Buscar() {
        return Atendimento.findAll()
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Atendimento.BuscarUm(id)
    }

    async Criar(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar os dados corretamente")
        }

        await Atendimento.create({ dia, hora, valor, concluido })
    }

    async Alterar(id, dia, hora, valor, concluido) {
        if (!id || isNaN(id) || !dia || !hora || !valor || !concluido) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await Atendimento.findByPk(id)

        if (!atendimentoAlterar) {
            throw new Error("Atendimento não encontrado")
        }

        atendimentoAlterar.dia = dia || atendimentoAlterar.dia
        atendimentoAlterar.hora = hora || atendimentoAlterar.hora
        atendimentoAlterar.valor = valor || atendimentoAlterar.valor
        atendimentoAlterar.concluido = concluido || atendimentoAlterar.concluido


        await atendimentoAlterar.save()
    }

    async Deletar(id) {
        if (!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await Atendimento.findByPk(id)

        if (!atendimentoDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await atendimentoDelete.destroy()
    }

    async AlterarConcluido(id, concluido) {
        if (!id || isNaN(id) || !concluido) {
            throw new Error("Favor informar o ID correto...")
        }
        const atendimentoAlterarConcluido = await Atendimento.findByPk(id)


        if (!atendimentoAlterarConcluido) {
            throw new Error("Atendimento não encontrado")
        }

        atendimentoAlterarConcluido.concluido = concluido || atendimentoAlterarConcluido.concluido

        await atendimentoAlterarConcluido.save()

    }
}

export default new ServiceAtendimento()