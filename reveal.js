
window.revelar = ScrollReveal ({reset:true})

// Topo do site
revelar.reveal('.efeito-instrucoes',
    {
        duration: 2000,
        distance: '90px'
})

revelar.reveal('.efeito-no-conteudo',
    {
        duration: 2000,
        distance: '90px'
})

// Títulos da seções
revelar.reveal('.titulo',
    {
        duration: 2000,
        distance: '90px',
        delay: 500
})
