const SimuladorProduto = {
    produtos: [],

    criarProduto(nome, categoria, preco, estoque) {
        const produto = {
            id: this.produtos.length + 1,
            nome: nome,
            categoria: categoria,
            preco: preco,
            estoque: estoque
        };
        this.produtos.push(produto);
        console.log(`Produto ${nome} criado com sucesso!`);
    },

    listarProdutos() {
        console.log("Lista de Produtos:");
        this.produtos.forEach(produto => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Categoria: ${produto.categoria}, Preço: ${produto.preco}, Estoque: ${produto.estoque}`);
        });
    },

    atualizarProduto(id, novosDados) {
        const produto = this.produtos.find(produto => produto.id === id);
        if (produto) {
            Object.assign(produto, novosDados);
            console.log(`Produto ID ${id} atualizado com sucesso!`);
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    },

    deletarProduto(id) {
        const index = this.produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            const produtoDeletado = this.produtos.splice(index, 1);
            console.log(`Produto ${produtoDeletado[0].nome} deletado com sucesso!`);
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    },

    simularVenda(id, quantidade) {
        const produto = this.produtos.find(produto => produto.id === id);
        if (produto) {
            if (produto.estoque >= quantidade) {
                produto.estoque -= quantidade;
                console.log(`Venda de ${quantidade} unidades do produto ${produto.nome} realizada com sucesso! Estoque restante: ${produto.estoque}`);
            } else {
                console.log(`Estoque insuficiente para o produto ${produto.nome}. Estoque atual: ${produto.estoque}`);
            }
        } else {
            console.log(`Produto com ID ${id} não encontrado.`);
        }
    }
};

SimuladorProduto.criarProduto("Camiseta", "Roupas", 29.99, 100);
SimuladorProduto.criarProduto("Notebook", "Eletrônicos", 3999.99, 50);
SimuladorProduto.listarProdutos();
SimuladorProduto.atualizarProduto(1, {preco: 24.99, estoque: 80});
SimuladorProduto.simularVenda(2, 5);
SimuladorProduto.deletarProduto(1);
SimuladorProduto.listarProdutos();
