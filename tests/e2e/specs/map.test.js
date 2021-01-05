import locations from '../../../src/assets/data/locations.json'

describe('Map page', () => {
  before(() => {
    cy.visit('/mapa')
  })

  context('Aside', () => {
    it(`Should list all locations (${Object.keys(locations).length})`, () => {
      cy
        .get('aside ol')
        .children()
        .should('have.length', Object.keys(locations).length)

      cy.get('aside ol').children().each(($el, index) => {
        expect($el).to.contain(Object.keys(locations)[index])
      })
    })

    context('Initial state test', () => {
      context('Mobile resolution', () => {
        beforeEach(() => {
          cy.viewport('iphone-7')
          cy.reload()
        })

        it('Aside should be closed', () => {
          cy.get('aside').should('have.class', 'closed')
        })

        after(() => {
          cy.viewport(1000, 660)
        })
      })

      context('Desktop resolution initial state test', () => {
        beforeEach(() => {
          cy.viewport(1920, 1080)
          cy.reload()
        })

        it('Aside should be opened', () => {
          cy.get('aside').should('have.class', 'opened')
        })

        after(() => {
          cy.viewport(1000, 660)
        })
      })
    })
  })

  context('Map', () => {
    it('Should open popup with each query param', () => {
      for (const [key, value] of Object.entries(locations)) {
        cy.visit('/mapa?h=' + encodeURI(key))
        cy.get('.leaflet-popup-content').should('exist')
      }
    })
  })
})
