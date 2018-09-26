$("#refresh-button").click(newFact);

$(document).ready(newFact);

var kazuo = {
    name: "Kazuo Ishiguro",
    fact: "Kazuo Ishiguro is a Nobel Prize winner who wrote Never Let Me Go and The Remains of the Day. "
        + "When writing the novel that won him the Nobel Prize, he had to isolate himself in order to overcome writer's block. "
        + "He would get rid of all distractions including his phone, email, and visitors and just write from 9 am to 10:30 pm.",
    img: "https://cdn.theatlantic.com/assets/media/img/mt/2017/10/GettyImages_101257898/lead_720_405.jpg?mod=1533691907",
    src: "https://www.theatlantic.com/entertainment/archive/2017/10/writing-advice-from-a-newly-minted-nobel-winner/542136/"
};

var coleridge = {
    name: "Samuel Taylor Coleridge",
    fact: "Samuel Coleridge was an American poet most well known for The Rime of the Ancient Mariner and other poems. "
        + "\"Most of the poems for which he is remembered were written when he was in his mid-twenties."
        + " After that, any ambitious writing project inspired in him what he called 'an indefinite indescribable Terror,'"
        + " and he wasted much of the rest of his life on opium addiction.\"",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/SamuelTaylorColeridge.jpg/1200px-SamuelTaylorColeridge.jpg",
    src: "https://www.theatlantic.com/entertainment/archive/2017/10/writing-advice-from-a-newly-minted-nobel-winner/542136/"
};

var writers = [kazuo, coleridge];

function newFact() {
    const index = Math.floor(Math.random() * writers.length);
    var writer = writers[index];
    // alert("hi " + index);

    $("#fact-heading").html(writer.name);
    $("#fact-text").html(writer.fact);
    $("#fact-image").attr("src", writer.img);
}
