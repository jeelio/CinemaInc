const cinemaIncEmail = 'Jenni.Elion@sas.com';

function sendMail(subject, body) {
  body = encodeURIComponent(body);
  window.open('mailto:' + cinemaIncEmail + '?subject=CinemaInc: ' + subject + '&body=' + body);
}