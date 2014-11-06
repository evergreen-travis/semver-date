## -- Dependencies -------------------------------------------------------------

semverDate = require '..'
should     = require 'should'

## -- Tests -------------------------------------------------------------
#
describe 'SemverDate ::', ->
  it 'return the date in semver format', ->
    semverDate().should.eql '0.11.6'
  it 'return the date in semver format specifing the version', ->
    semverDate(version: '1').should.eql '1.11.6'
  it 'return the date in semver format specifing the version and revision', ->
    semverDate(version: '1', revision: 'b').should.eql '1.11.6b'
