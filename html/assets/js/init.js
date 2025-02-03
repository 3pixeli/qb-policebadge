const open = (data) => {
  const validJobs = ["police", "bcso"];
  if (!validJobs.includes(data.job)) return;

  $('#name').css('color', '#282828');

  $('#name').text(data.name);
  $('#dob').text(data.dob);
  $('#signature').text(data.name);

  let image = `${data.job}.png`;
  $('#id-card').css('background', `url('assets/images/${image}')`);

  $('#id-card').show();
}

const close = () => {
  $('#name').text('');
  $('#dob').text('');
  $('#height').text('');
  $('#signature').text('');
  $('#sex').text('');
  $('#id-card').hide();
  $('#licenses').html('');
}

$(document).ready(function(){
    window.addEventListener('message', function(event) {
        switch(event.data.action) {
            case "open":
                open(event.data);
                break;
            case "close":
                close();
                break;
        }
    })
});
