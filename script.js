const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `― Kent Beck`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: `― Linus Torvalds`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `― Harold Abelson`
}, {
    quote: `Truth can only be found in one place: the code.`,
    author: `― Robert C`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `― Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `― Steve Jobs`
}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `― Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `― C.A.R. Hoare`
}, {
    quote: `Believe you can and you're halfway there..`,
    author: `― Theodore Roosevelt`
}, {
    quote: `Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible..`,
    author: `― Francis of Assisi`
}, {
    quote: `It does not matter how slowly you go as long as you do not stop.`,
    author: `― Confucius`
}, {
    quote: `Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.`,
    author: `― Thomas A. Edison`
}, {
    quote: `The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.`,
    author: `― Confucius`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: `― Halgurd Hussein`
}, {
    quote: `Hapiness is not something ready made. It comes from your own actions.`,
    author: `― Dalai Lama`
}, {
    quote: `Always remember that you are absolutely unique. Just like everyone else.`,
    author: `― Margaret Mead`
}, {

    quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
    author: `― Albert Einstein`
}, {

    quote: `Be yourself; everyone else is already taken.`,
    author: `― Oscar Wilde`
}, {

    quote: `Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.`,
    author: `― Samuel Beckett`
}, {

    quote: `Start where you are. Use what you have. Do what you can.`,
    author: `― Arthur Ashe`
}, {

    quote: `Expect problems and eat them for breakfast.`,
    author: `― Alfred A. Montapert`
}, {

    quote: `A creative man is motivated by the desire to achieve, not by the desire to beat others.`,
    author: `― Ayn Rand`
}, {

    quote: `A day without sunshine is like, you know, night.`,
    author: `― Steve Martin`
}, {

    quote: `Get your facts first, then you can distort them as you please.`,
    author: `― Mark Twain`
}, {

    quote: `Procrastination is the art of keeping up with yesterday.`,
    author: `― Don Marquis`
}, {

    quote: `People who think they know everything are a great annoyance to those of us who do.`,
    author: `― Isaac Asimov`
}, {

    quote: `My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.`,
    author: `― Ellen DeGeneres`
}, {

    quote: `Don't sweat the petty things and don't pet the sweaty things.`,
    author: `― George Carlin`
}, {

    quote: `Always do whatever's next.`,
    author: `― George Carlin`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `― Ming Song`
}, ]
const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})