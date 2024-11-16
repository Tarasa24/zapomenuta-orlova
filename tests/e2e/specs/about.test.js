describe('About page', () => {
  before(() => {
    cy.visit('/o-projektu')
  })

  context('Sources', () => {
    it('Should open toggle menu when clicked', () => {
      const $btns = Cypress.$('.sources ol li button')
      for (let i = 0; i < $btns.length; i++) {
        const $btn = $btns[i]
        expect(
          $btn.getElementsByTagName('svg')[0].getAttribute('data-icon'),
        ).to.eql('caret-right')
        $btn.click()

        cy.get(`.sources ol li:nth-child(${i + 1}) button svg`).should(
          'have.attr',
          'data-icon',
          'caret-down',
        )
        cy.get(`.sources ol li:nth-child(${i + 1}) div`).should(
          'not.have.css',
          'display',
          'none',
        )
      }
    })
  })
})
