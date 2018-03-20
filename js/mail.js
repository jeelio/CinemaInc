const cinemaIncEmail = 'jenni.elion@gmail.com';

function sendMail(subject, body) {
  body = encodeURIComponent(body);
  window.open('mailto:' + cinemaIncEmail + '?subject=CinemaInc: ' + subject + '&body=' + body);
}