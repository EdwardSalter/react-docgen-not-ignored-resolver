const docgen = require('react-docgen')
const Documentation = require('react-docgen/dist/Documentation')

module.exports = function(ast, recast) {
  const allComponents = docgen.resolver.findAllComponentDefinitions(ast, recast)
    .filter(component => {
      const handler = docgen.handlers.componentDocblockHandler
      const doc = new Documentation()
      handler(doc, component)
      const desc = doc.get('description');
      const isIgnored = /@ignore\b/.test(desc)
      return !isIgnored
    })
  return allComponents
}
