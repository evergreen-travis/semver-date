## -- Dependencies -------------------------------------------------------------

semverDate = require '..'
should     = require 'should'

## -- Tests -------------------------------------------------------------
describe 'SemverDate ::', ->

  it 'today version', (done) ->
    semverDate().should.eql '0.10.3'
    semverDate(version: '1').should.eql '1.10.3'
    semverDate(version: '1', revision: 'b').should.eql '1.10.3b'
    done()
