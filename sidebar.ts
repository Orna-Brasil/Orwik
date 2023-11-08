export const sidebar = [
    {
        label: 'Informações Gerais',
        autogenerate: { directory: 'Info' },
        collapsed: true,
    },
    {
        label: 'Guias',
        items: [
            { label: 'Classes e subclasess', autogenerate: { directory: 'Guias/Classes-e-Subclasses' }, collapsed: true },
            { label: 'Eventos', autogenerate: { directory: 'Guias/Eventos' }, collapsed: true },
            { label: 'Modos de jogo', autogenerate: { directory: 'Guias/Modos-de-jogo' }, collapsed: true },
              // etc.
            ],
        collapsed: true,
    },
    {
        label: 'Notas de atualização',
        autogenerate: { directory: 'Updates' },
        collapsed: true,
    },
    {
        label: 'Mundo Orna',
        autogenerate: { directory: 'Mundo' },
        collapsed: true,
    }
]