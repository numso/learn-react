
var messages = [
  { author: 'John', subject: 'Hi' },
  { author: 'Fred', subject: 'Sup' },
  { author: 'Greg', subject: 'Woot' },
  { author: 'Greg', subject: 'Woot' }
];

messages.map(function (msg, i) {
  msg.unRead = i % 2 === 0;
  msg.sentOn = +new Date() - i * 10000000000;
  msg.body = 'Lorem ipsum Exercitation enim ut cillum enim elit ad in adipisicing in Duis consequat commodo et ut quis sit reprehenderit ex adipisicing nulla proident laboris in ea cillum culpa velit proident quis quis dolor eiusmod voluptate aute quis ea sunt anim qui non laborum magna Excepteur sit dolore sed cillum deserunt sit ullamco ex pariatur Duis sit reprehenderit anim minim mollit quis ut commodo quis laborum Ut qui amet Excepteur Duis quis minim in deserunt in amet non ullamco enim officia officia magna Ut do cupidatat commodo labore minim ut est nulla dolore pariatur enim consectetur Excepteur amet esse deserunt magna sit enim amet id esse cupidatat adipisicing aute labore et qui consectetur Excepteur ullamco veniam consequat laborum amet elit consequat dolore sit incididunt ut ullamco ad consequat veniam minim ad aliquip est consectetur consectetur sunt dolor in laborum culpa in reprehenderit sint voluptate proident dolore exercitation sunt officia sint enim dolore enim do fugiat laboris dolore aliquip adipisicing ut non Ut mollit aute in ad sed in non aute in fugiat ullamco ut et incididunt fugiat aliquip labore incididunt eu ad dolor cillum do do ex labore dolor consectetur in commodo non reprehenderit sint cupidatat ut veniam dolore sint cupidatat culpa sit magna adipisicing officia officia velit consectetur deserunt laborum dolor commodo culpa et Excepteur eiusmod laboris amet culpa exercitation in laboris ullamco deserunt deserunt minim magna id proident anim sed magna labore in minim laborum in consectetur qui cupidatat do quis veniam fugiat veniam aute in do dolor esse sint sit occaecat in voluptate irure et.';
});

module.exports = function (app) {
  app.get('/messages', function*() {
    this.body = messages;
  });
}
