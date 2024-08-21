
let usuarios = [];


function adicionarUsuario(nome, idade, email) {
    
    if (!nome || !idade || !email) {
        console.log("Erro: Todos os campos devem estar preenchidos.");
        return;
    }
    
    
    if (idade <= 0) {
        console.log("Erro: A idade deve ser maior que 0.");
        return;
    }

    
    let usuario = { nome: nome, idade: idade, email: email };
    usuarios.push(usuario);
    console.log("Usuário cadastrado com sucesso!");
}


function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        console.log("Usuários cadastrados:");
        usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
        });
    }
}

// Exemplo
adicionarUsuario("Maria", 25, "maria@example.com");
adicionarUsuario("João", 30, "joao@example.com");

listarUsuarios();
