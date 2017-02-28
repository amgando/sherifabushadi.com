(function(){

  var qs = document.querySelector.bind(document)
  var feedback = qs('#feedback')

  // guard against being in 404.html, for example
  if(feedback === null) return

  // Use custom template delimiters (from here: https://lodash.com/docs/4.17.4#template)
  _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  var templatize = _.template(`
    <div class="columns">
      <div class="column is-1 dim icon">
        <i class="fa fa-quote-left"></i>
      </div>
      <div class="column is-10">
        <strong>{{ role.toLowerCase() }} at {{ qualifier }}</strong><br> {{ quote }}
      </div>
    </div>
  `)

  if (self.fetch) {
    fetch('/js/feedback.json')
    .then(function(resp) {
      if(resp.ok) return resp.json()
      console.error('could not fetch feedback.json data from server')
    })
    .then(function(data){
      var html = ''
      sample = _.sampleSize(data.feedback, 7)
      sample.forEach(function(feedback){
        html += templatize(feedback)
      })
      
      feedback.innerHTML = html
    })
  } else {
    // no feedback coming!
  }

}());