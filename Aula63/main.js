function retornaHora (data) {
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperendo instancia de Date. ');
    }

    if(!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:40')
    console.log(retornaHora(11)) 
} catch (error) {
    // tratar erro
    console.log("Data informada incorreta - catch")
} finally {
    console.log("Data informada incorreta")
}

