export const MOCK_PAGE_DATA = {
  title: "Minha Landing Page",
  blocks: [
    {
      type: 'LAYOUT_SPLIT', 
      data: { splitRatio: '50-50' },
      slots: {
        'left': [ 
           { type: 'WIDGET_HERO', data: { title: 'Bem vindo' } } 
        ],
        'right': [ 
           { type: 'WIDGET_CONTACT_FORM', data: { email: 'admin@teste.com' } } 
        ]
      }
    }
  ]
};