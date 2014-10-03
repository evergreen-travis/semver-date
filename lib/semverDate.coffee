class semverDate

  @today: (options) ->

    today = new Date()

    version  = options?.version ? '0'
    month    = today.getMonth() + 1
    day      = today.getDate()
    revision = options?.revision ? ''

    "#{version}.#{month}.#{day}#{revision}"

## -- Exports -------------------------------------------------------------

exports = module.exports = semverDate
