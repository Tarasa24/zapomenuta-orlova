import locations from '../../../src/assets/data/locations.json'

function normalize(str) {
  const accent = 'ĚŠČŘŽÝÁÍÉÚŮŇěščřžýáíéúůňł'
  const norm = 'ESCRZYAIEUUNescrzyaieuunl'

  let strArr = str.split('')

  for (let i = 0; i < strArr.length; i++) {
    if (accent.includes(strArr[i])) strArr[i] = norm[accent.indexOf(strArr[i])]
  }

  return strArr.join('')
}

describe('Places pages', () => {
  for (const [ key, value ] of Object.entries(locations)) {
    context(normalize(key), () => {
      before(() => {
        cy.visit('/misto/' + encodeURI(key))
      })

      it('Should have correct header and index number', () => {
        cy
          .get('.circle')
          .should('contain', Object.keys(locations).indexOf(key) + 1)
        cy.get('h1').should('contain', key)
      })

      it('Paragraphs should be aligned to block (as per popular request)', () => {
        cy.get('.body p').each(($el) => {
          expect($el).to.have.css('text-align', 'justify')
        })
      })

      it('Should contain contain specific headers', () => {
        cy.get('h3#věděli-jste-že').should('exist')
        cy.get('h3#zajímavá-místa-v-okolí').should('exist')
      })

      it('Should contain gallery', () => {
        cy.get('.gallery').should('exist')
      })

      const list = require(`../../../src/assets/img/articles/${key}/list.json`)
      it(`Gallery should have ${list.length} element(s)`, () => {
        cy.get('.gallery img').should('have.length', list.length)
      })
    })
  }
})
