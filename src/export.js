import sketch from 'sketch'
import dialog from '@skpm/dialog'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {

  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length
  
  var output = dialog.showOpenDialogSync({
    properties: [ 'openDirectory'], buttonLabel: 'Exporter ici', title: "Séléctionnez le dossier d'export"
  })

  console.log('Exporting to : ' + output)

  output = output + '/'

  const options = { scales: '1, 2', formats: 'jpg', overwriting: true, output: output }

  var k = selectedLayers.layers;

  for (var p of k) {
    //console.log(JSON.stringify(p, null, 4));
    sketch.export(p, options)
    NSFileManager.defaultManager().moveItemAtPath_toPath_error(output + p.name + '@2x.jpg', output + p.name + '_x2.jpg', nil)
  }

  if (selectedCount === 0) {
    sketch.UI.message("Rien n'est séléctionné")
  } else {
    sketch.UI.message(selectedCount + " objets ont été exportés")
  }
}