$("#refresh-button").click(newFact);

$(document).ready(newFact);

var kazuo = {
    name: "Kazuo Ishiguro",
    fact: "Kazuo Ishiguro is a Nobel Prize winner who wrote <em>Never Let Me Go</em> and <em>The Remains of the Day</em>. "
        + "When writing the novel that won him the Nobel Prize, he had to isolate himself in order to overcome writer's block. "
        + "He would get rid of all distractions including his phone, email, and visitors and just write from 9 am to 10:30 pm.",
    img: "https://cdn.theatlantic.com/assets/media/img/mt/2017/10/GettyImages_101257898/lead_720_405.jpg?mod=1533691907",
    src: "https://www.theatlantic.com/entertainment/archive/2017/10/writing-advice-from-a-newly-minted-nobel-winner/542136/"
};

var coleridge = {
    name: "Samuel Taylor Coleridge",
    fact: "Samuel Coleridge was an American poet most well known for <em>The Rime of the Ancient Mariner</em> and other poems. "
        + "After his mid-twenties, \"any ambitious writing project inspired in him what he called 'an indefinite indescribable Terror,'"
        + " and he wasted much of the rest of his life on opium addiction.\"",
    img: "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%20romantics%20and%20victorians/portraits/dl-portrait-npg-samuel-taylor-coleridge.jpg?crop=1&cropX=0&cropY=136&cropW=1610&cropH=905&w=800&h=450&dispW=800&dispH=450",
    src: "https://www.theatlantic.com/entertainment/archive/2017/10/writing-advice-from-a-newly-minted-nobel-winner/542136/"
};

var hammett = {
    name: "Dashiell Hammett",
    fact: "American author, Dashiell Hammett, is famous for his detective novels such as <em>The Maltese Falcon</em> and <em>The Thin Man</em>. "
        + "\"In his later life, he said that he stopped publishing because he felt he was repeating himself: 'It is the beginning of the end when you discover that you have a style'...He wrote and wrote, but he never accomplished anything that satisfied him.\"",
    img: "https://www.theparisreview.org/blog/wp-content/uploads/2018/09/maxresdefault-2.jpg",
    src: "https://www.newyorker.com/magazine/2004/06/14/blocked"
};

var lee = {
    name: "Harper Lee",
    fact: "Harper Lee is an American novelist famous for <em>To Kill a Mockingbird</em>. After her success with <em>To Kill a Mockingbird</em>, she complained to a friend, \"I've found I can't write... I have about 300 personal friends who keep dropping in for a cup of coffee. I've tried getting up at six, but then all the six o'clock risers congregate.\"",
    img: "https://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/GettyImages-77695641.png",
    src: "http://mentalfloss.com/article/65031/10-cases-extreme-writers-block"
};

var ellison = {
    name: "Ralph Ellison",
    fact: "Ralph Ellison is well known for his novel, <em>The Invisible Man</em>. After, his second novel \"grew and grew. Eventually, he thought it might require three volumes. He worked on it for forty years, until he died in 1994, at the age of eighty, leaving behind more than two thousand pages of manuscript and notes.\"",
    img: "https://aalbc.com/author-photos/ralph-ellison.jpg",
    src: "https://www.newyorker.com/magazine/2004/06/14/blocked"
};

var gaiman = {
    name: "Neil Gaiman",
    fact: "Neil Gaiman is known for <em>Coraline</em>, <em>Neverwhere</em>, and <em>American Gods</em>, among other novels. Gaiman says, \"I don't really believe in writer's block, but I absolutely believe in getting stuck.\" Gaiman's solution is to always keep a separate project on the back burner so that he can take a break from the material that's troubling him.",
    img: "https://pmcvariety.files.wordpress.com/2017/06/neil-gaiman-credit-sasha-maslav_the-new-york-times_redux.jpg?w=1000",
    src: "https://www.huffingtonpost.com/entry/neil-gaiman-doesnt-believe-in-writers-block_us_56421d28e4b0b24aee4be334"
};

var woolf = {
    name: "Virginia Woolf",
    fact: "Virginia Woolf is known for her stream-of-consciousness storytelling, which comes through in her novel <em>Mrs. Dalloway</em>. She \"battled with bouts of writer's block throughout her life due to deep depressions brought on by suspected bipolar disorder.\"",
    img: "https://cms.qz.com/wp-content/uploads/2018/01/george_charles_beresford_-_virginia_woolf_in_1902-e1516902098788.jpg?quality=75&strip=all&w=410&h=231",
    src: "https://indiereader.com/2012/09/7-pop-culture-icons-who-famously-suffered-from-writers-block/"
};

var pollock = {
    name: "Jackson Pollock",
    fact: "Jackson Pollock was an American painter famous for his abstract expressionist pieces. However, he struggled with his fame and sunk \"into alcoholism and depression.\"",
    img: "https://www.jackson-pollock.org/images/paintings/convergence.jpg",
    src: "https://www.artsy.net/article/artsy-editorial-how-pollock-picasso-and-6-other-iconic-artists"
};

var monet = {
    name: "Claude Monet",
    fact: "Claude Monet was a French painter well known for his paintings of water lilies. "
        + " when his wife died in 1911 he stopped painting for two years. "
        + "However, when he recovered he created the Water Lilies Series, which are among some of his most famous paintings.",
    img: "https://www.claude-monet.com/images/paintings/water-lilies-claude-monet.jpg",
    src: "https://www.artsy.net/article/artsy-editorial-how-pollock-picasso-and-6-other-iconic-artists"
};

var picasso = {
    name: "Pablo Picasso",
    fact: "Pablo Picasso was a Spanish painter who was well known for his painting, <em>Guernica</em>."
        + " When he divorced his wife in 1935, he was unable to paint and refused to go into his studio."
        + " He would grow angry just from the sight of his paintings and drawings.",
    img: "http://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
    src: "https://www.artsy.net/article/artsy-editorial-how-pollock-picasso-and-6-other-iconic-artists"
};

var writers = [kazuo, coleridge, hammett, lee, ellison, gaiman, woolf, pollock, monet, picasso];
var posWriters = writers.slice();

function newFact() {
    const index = Math.floor(Math.random() * posWriters.length);
    var writer = posWriters[index];

    posWriters.splice(index, 1);
    if (posWriters.length == 0) {
        posWriters = writers.slice();
    }

    $("#fact-heading").html(writer.name);
    $("#fact-text").html(writer.fact);
    $("#fact-image").attr("src", writer.img);
}
