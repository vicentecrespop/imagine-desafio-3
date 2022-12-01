const changeContent = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Voce Conseguiu!!!!!!')
        }, 3000);
    })
}

const showModal = async () => {
    
    const modalContent = document.getElementById('modal_text')
    modalContent.innerHTML = ''
    
    const content = await changeContent()
    modalContent.innerHTML = content
    
}
