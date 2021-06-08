import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  const options = { scales: '1, 2', formats: 'jpg', overwriting: false }

  //Object.keys(selectedLayers).forEach((prop)=> console.log(prop));
  //sketch.export(doc.pages)

  console.log('----')

  var k = selectedLayers.layers;

  for (var p of k) {
    //console.log(JSON.stringify(p, null, 4));
    sketch.export(p, options)

    NSFileManager.defaultManager().moveItemAtPath_toPath_error('/Users/oritross/Documents/Sketch Exports/' + p.name + '@2x.jpg', '/Users/oritross/Documents/Sketch Exports/' + p.name + '_x2.jpg', nil)
  }

  if (selectedCount === 0) {
    sketch.UI.message("Rien n'est séléctionné")
  } else {
    sketch.UI.message(selectedCount + " objets ont été exportés")
  }
}