var words = [
    "lackadaisical", "outgoing", "unadvised", "fade", "wealth", "appreciate", "perform", "produce", "lace", "ladybug", "pet", "window", "hose", "branch", "walk", "rain", "quirky", "help", "coach", "error", "silent", "finger", "jelly", "sand", "unknown", "squash", "post", "premium", "melodic", "sick", "endurable", "redundant", "kaput", "sudden", "kitty", "whip", "tasteful", "noise", "explain", "rinse", "damage", "carriage", "baby", "first", "shop", "earn", "panoramic", "fit", "petite", "futuristic", "pass", "ground", "marble", "standing", "knowing", "claim", "devilish", "disappear", "uncovered", "coordinated", "fill", "attract", "dock", "tremendous", "station", "vest", "cheat", "baseball", "excite", "utter", "complain", "black-and-white", "treat", "colorful", "irate", "present", "mailbox", "walk", "smile", "lettuce", "servant", "flagrant", "imaginary", "attractive", "songs", "loaf", "temporary", "tickle", "curve", "craven", "raise", "nebulous", "plate", "obtainable", "rain", "babies", "guarded", "cut", "squeamish", "dam", "tease", "second", "spotless", "bells", "call", "worthless", "drop", "screw", "hand", "angry", "foregoing", "squirrel", "smoggy", "control", "dress", "salt", "drum", "sheet", "rice", "cake", "tire", "cave", "shocking", "machine", "stranger", "van", "divergent", "hour", "practise", "paddle", "doubt", "vagabond", "push", "bloody", "evanescent", "afford", "popcorn", "nine", "man", "vague", "hang", "dog", "profuse", "glistening", "ray", "milk", "grip", "tame", "juice", "bored", "swing", "combative", "receptive", "fog", "scrape", "mammoth", "male", "contain", "slippery", "thundering", "didactic", "sound", "rhyme", "poke", "famous", "forgetful", "clean", "cover", "press", "spotty", "bite-sized", "habitual", "reproduce", "pretend", "possible", "trip", "boy", "rhetorical", "sister", "action", "heavenly", "cloth", "lean", "astonishing", "chicken", "thing", "deliver", "bucket", "man", "mark", "paper", "fluttering", "flow", "towering", "amusing", "far", "trust", "defeated", "arrest", "chivalrous", "seemly", "aunt", "elegant", "empty", "meddle", "stop", "zebra", "miscreant", "wretched", "territory", "gamy", "decide", "harass", "dusty", "house", "jam", "card", "bell", "shade", "x-ray", "seat", "return", "look", "flashy", "conscious", "jar", "fold", "winter", "tasty", "surround", "sparkling", "psychedelic", "phone", "disapprove", "waste", "aboard", "top", "cough", "rule", "waiting", "pour", "understood", "delicate", "unequal", "wing", "coast", "correct", "bent", "lacking", "groan", "avoid", "bushes", "necessary", "whisper", "guiltless", "dust", "glow", "obscene", "nice", "elite", "coal", "steady", "dear", "grab", "scintillating", "superficial", "peel", "beds", "weary", "deafening", "radiate", "mindless", "frequent", "unsuitable", "tacky", "hesitant", "coil", "one", "beam", "apparel", "normal", "sun", "queue", "silky", "flowers", "peep", "wail", "approve", "groovy", "cannon", "elbow", "playground", "wet", "lopsided", "dynamic", "straight", "sack", "massive", "ruthless", "savory", "bikes", "symptomatic", "connection", "satisfying", "door", "sassy", "suppose", "miss", "finicky", "testy", "scale", "cagey", "spurious", "bright", "face", "memorise", "shelf", "property", "robust", "blade", "tender", "level", "line", "sturdy", "axiomatic", "venomous", "sack", "knock", "pack", "excited", "disillusioned", "preach", "provide", "self", "animal", "swanky", "strap", "store", "chase", "driving", "crate", "obeisant", "check", "shock", "possessive", "bumpy", "madly", "cast", "wound", "offend", "powerful", "shoes", "plot", "chemical", "eatable", "womanly", "subtract", "guide", "examine", "include", "tiny", "slow", "brass", "hapless", "rail", "long", "scare", "drain", "observation", "beef", "gather", "snails", "pen", "scrawny", "ski", "note", "clumsy", "spy", "move", "miniature", "wandering", "invite", "copy", "money", "illustrious", "quicksand", "flag", "reply", "undesirable", "bashful", "crowded", "rightful", "reason", "quick", "point", "time", "queen", "connect", "gorgeous", "fowl", "sneaky", "wide", "rainstorm", "difficult", "adorable", "matter", "rebel", "paint", "harsh", "literate", "kindly", "joke", "believe", "flood", "exclusive", "unwieldy", "spooky", "company", "whip", "bounce", "watery", "boundless", "soak", "chin", "excellent", "rush", "continue", "health", "lowly", "assorted", "loving", "nervous", "mug", "plucky", "tub", "launch", "wine", "fearless", "zephyr", "calculator", "deceive", "sink", "heat", "use", "awake", "open", "nippy", "tempt", "amusement", "needle", "fair", "quaint", "prickly", "shy", "passenger", "calm", "boorish", "mouth", "color", "honorable", "amuse", "fairies", "challenge", "afraid", "hat", "store", "superb", "risk", "pumped", "flaky", "float", "writing", "wink", "oval", "blue", "end", "trap", "sofa", "business", "tightfisted", "actually", "monkey", "hug", "ancient", "hand", "mint", "ants", "memory", "scent", "sea", "fire", "heavy", "meek", "train", "whimsical", "automatic", "tree", "efficient", "wave", "detailed", "icy", "bump", "stamp", "steep", "porter", "loutish", "nonstop", "impress", "iron", "uncle", "neat", "recondite", "secretive", "trousers", "weigh", "needless", "school", "innate", "available", "tin", "brick", "helpful", "rot", "domineering", "mark", "interrupt", "nifty", "sidewalk", "wax", "hot", "can", "extra-large", "mature", "supreme", "camera", "class", "dime", "hill", "certain", "suggest", "stretch", "ban", "morning", "show", "witty", "fresh", "behavior", "reflective", "dad", "trite", "agree", "dinner", "brawny", "wrestle", "throat", "woman", "momentous", "complex", "thick", "mist", "various", "stitch", "undress", "zoo", "plastic", "shave", "hydrant", "tiger", "snotty", "train", "act", "argument", "limping", "productive", "lame", "dapper", "warn", "gruesome", "writer", "birds", "exotic", "attach", "round", "deranged", "free", "whine", "faithful", "pancake", "serve", "adjoining", "faded", "squeeze", "tired", "dramatic", "excuse", "screw", "annoy", "hilarious", "humorous", "terrible", "far-flung", "place", "wonder", "kind", "drink", "delirious", "obtain", "sigh", "nut", "pencil", "fanatical", "bright", "obese", "adaptable", "record", "merciful", "tramp", "live", "untidy", "icky", "abashed", "obey", "stimulating", "camp", "six", "gate", "friendly", "search", "decorate", "leg", "magenta", "battle", "impartial", "malicious", "tart", "cheerful", "steadfast", "slip", "mixed", "voracious", "exciting", "smooth", "juvenile", "serious", "agreement", "frantic", "cabbage", "explode", "cub", "hallowed", "glamorous", "wealthy", "comb", "guard", "kick", "acrid", "quack", "waves", "credit", "value", "argue", "measly", "instrument", "soothe", "sisters", "whispering", "cows", "carry", "beg", "decision", "boring", "roof", "uttermost", "list", "statement", "rod", "curtain", "trade", "fence", "succeed", "holiday", "comparison", "balance", "communicate", "brainy", "joyous", "letters", "tenuous", "boot", "elastic", "sheep", "bait", "prevent", "numberless", "troubled", "old", "count", "harmony", "amount", "gifted", "cross", "invention", "imminent", "nest", "huge", "step", "alarm", "coat", "greasy", "unused", "quarrelsome", "harm", "infamous", "knot", "distribution", "thin", "sore", "wood", "book", "command", "wash", "dolls", "cloistered", "typical", "aggressive", "precede", "butter", "caring", "suspend", "crayon", "squalid", "breakable", "sail", "story", "opposite", "wren", "brake", "shelter", "quilt", "sticky", "unwritten", "successful", "place", "hard-to-find", "long-term", "mice", "bat", "talk", "creepy", "yummy", "fork", "scissors", "overt", "cats", "accidental", "nutty", "touch", "unbiased", "middle", "snakes", "erect", "interest", "thankful", "idiotic", "gleaming", "fearful", "ethereal", "buzz", "leather", "mend", "striped", "inexpensive", "tray", "cruel", "shirt", "lazy", "reject", "piquant", "good", "faulty", "brash", "brave", "toy", "fix", "remove", "hook", "finger", "hurt", "billowy", "hum", "daughter", "royal", "strip", "same", "flame", "print", "advice", "bike", "cluttered", "historical", "truck", "reminiscent", "greet", "boast", "release", "underwear", "industrious", "gabby", "secretary", "hurry", "acoustics", "average", "spring", "sweltering", "marvelous", "grateful", "last", "trace", "title", "identify", "answer", "refuse", "penitent", "activity", "two", "intelligent", "flight", "capricious", "bone", "slave", "rate", "border", "noxious", "unfasten", "spoon", "day", "retire", "scarf", "ultra", "unruly", "wicked", "frightening", "taste", "spiffy", "debt", "violet", "bake", "knot", "crown", "cough", "friend", "private", "cool", "insidious", "planes", "abusive", "daffy", "spade", "handle", "language", "mix", "like", "smile", "pop", "accept", "elated", "sincere", "poor", "eyes", "teeny-tiny", "rejoice", "better", "creator", "pies", "island", "jellyfish", "wrench", "probable", "yellow", "stone", "cars", "notebook", "incompetent", "basin", "cart", "auspicious", "valuable", "meaty", "squeal", "abstracted", "orange", "road", "join", "notice", "plane", "thinkable", "unbecoming", "insurance", "low", "poised", "spiders", "march", "wiggly", "crush", "balance", "development", "smelly", "twig", "step", "chubby", "numerous", "tall", "truculent", "greedy", "cooing", "mountain", "zipper", "young", "reflect", "mass", "order", "move", "voiceless", "pick", "preserve", "bless", "end", "plastic", "maniacal", "eight", "injure", "jump", "chess", "absorbing", "ill-informed", "juicy", "smiling", "curvy", "hobbies", "wilderness", "nerve", "sordid", "play", "impolite", "grip", "left", "brake", "belief", "quixotic", "next", "deserted", "mysterious", "plug", "unnatural", "sad", "separate", "loss", "late", "partner", "stuff", "flawless", "poison", "aloof", "thaw", "volcano", "summer", "measure", "elderly", "magic", "frighten", "scribble", "oil", "feigned", "pathetic", "twist", "fact", "detail", "thumb", "fool", "knit", "inform", "entertain", "loud", "cactus", "example", "bolt", "icicle", "field", "humdrum", "size", "office", "pedal", "cherry", "voice", "wind", "painful", "pollution", "electric", "sable", "tour", "floor", "obsolete", "fluffy", "wish", "party", "simple", "invent", "puzzled", "force", "sense", "imagine", "wreck", "war", "peace", "fasten", "test", "dreary", "null", "point", "equable", "flowery", "unique", "stretch", "worried", "foolish", "roll", "ruin", "church", "pump", "supply", "eminent", "deserve", "board", "cuddly", "type", "drawer", "zealous", "rural", "look", "calculate", "broad", "drab", "friends", "smoke", "verse", "afternoon", "surprise", "versed", "shrill", "comfortable", "range", "teaching", "luxuriant", "actor", "wild", "picture", "grin", "rainy", "sin", "earthy", "arithmetic", "fancy", "guarantee", "thirsty", "colossal", "disgusting", "milk", "alert", "feeble", "insect", "water", "roll", "wooden", "surprise", "tidy", "cute", "eggnog", "vacuous", "water", "perfect", "salty", "whole", "bedroom", "magnificent", "murky", "permit", "direful", "crib", "juggle", "brother", "toys", "pray", "hate", "trouble", "synonymous", "diligent", "half", "macho", "incredible", "shake", "splendid", "lumpy", "spill", "cakes", "watch", "cow", "switch", "clever", "industry", "beginner", "vulgar", "zinc", "cultured", "tricky", "soap", "yard", "crowd", "sneeze", "scandalous", "horrible", "country", "oceanic", "attend", "fine", "well-groomed", "stage", "celery", "sort", "rambunctious", "jazzy", "nest", "soup", "upbeat", "kiss", "appear", "fancy", "scrub", "overflow", "tedious", "arrogant", "jail", "hurried", "handsome", "wall", "relieved", "trick", "wacky", "jealous", "join", "straw", "nauseating", "stingy", "talented", "hammer", "ugly", "polite", "form", "account", "sign", "amuck", "hop", "smash", "discovery", "lewd", "breathe", "draconian", "unable", "price", "recognise", "sparkle", "crack", "whistle", "yawn", "haircut", "guttural", "pail", "fruit", "bead", "burn", "gold", "nosy", "unite", "sip", "mom", "happen", "save", "fuzzy", "stupendous", "military", "match", "intend", "guide", "resonant", "tip", "mitten", "ripe", "street", "glorious", "snail", "scarce", "neighborly", "approval", "pull", "nasty", "disturbed", "circle", "fireman", "art", "tangible", "obsequious", "quiet", "degree", "eager", "gaudy", "pause", "stick", "start", "cowardly", "past", "cent", "disagreeable", "escape", "fast", "accessible", "gullible", "uninterested", "damaged", "vengeful", "exultant", "clean", "stomach", "ossified", "ablaze", "back", "few", "theory", "abrupt", "heat", "alluring", "muddled", "tremble", "frame", "plausible", "protest", "complete", "test", "determined", "therapeutic", "agreeable", "cream", "love", "spare", "airplane", "thoughtless", "bathe", "dusty", "dogs", "stem", "depend", "naughty", "stop", "furry", "texture", "advertisement", "abrasive", "melt", "zip", "feeling", "sore", "peck", "fang", "dizzy", "compete", "majestic", "jagged", "haunt", "ignorant", "mother", "macabre", "material", "shaky", "changeable", "chalk", "light", "tiresome", "flash", "rule", "friction", "mean", "moan", "punch", "tranquil", "vase", "innocent", "educated", "pleasant", "vivacious", "umbrella", "moon", "lunchroom", "judge", "wash", "lonely", "seashore", "fantastic", "aquatic", "key", "foamy", "ritzy", "work", "aspiring", "purring", "apparatus", "tangy", "star", "bow", "lake", "space", "observe", "wrathful", "cause", "plant", "erratic", "turn", "unhealthy", "woozy", "absurd", "happy", "flesh", "crooked", "dysfunctional", "side", "taste", "trashy", "pretty", "regret", "growth", "depressed", "hope", "blush", "paltry", "attack", "edge", "unsightly", "remember", "arch", "jumpy", "orange", "ill-fated", "secret", "fail", "bomb", "fallacious", "super", "wander", "pigs", "victorious", "milky", "rose", "seed", "ask", "head", "bad", "toothsome", "drip", "torpid", "lip", "uneven", "manage", "illegal", "windy", "quiet", "push", "farm", "basketball", "thoughtful", "cobweb", "offer", "dress", "horn", "last", "abhorrent", "wriggle", "stiff", "add", "laugh", "voyage", "fear", "plant", "arrive", "embarrassed", "racial", "abandoned", "dare", "knotty", "proud", "multiply", "second-hand", "fear", "request", "sneeze", "long", "grandmother", "easy", "squealing", "terrific", "rude", "support", "female", "doubtful", "hushed", "deep", "weight", "pear", "airport", "regular", "pointless", "abortive", "experience", "shoe", "legal", "word", "engine", "eggs", "direction", "suit", "steam", "hysterical", "hover", "cumbersome", "rub", "dazzling", "white", "nose", "books", "embarrass", "nod", "saw", "sedate", "hospitable", "abnormal", "level", "year", "need", "governor", "lock", "silk", "beneficial", "nutritious", "sleepy", "natural", "subdued", "scary", "alcoholic", "melted", "tan", "periodic", "extend", "mute", "romantic", "pastoral", "muddle", "position", "blot", "stroke", "spot", "person", "tow", "agonizing", "high", "brush", "early", "shame", "untidy", "representative", "yarn", "soggy", "big", "shut", "gaping", "swift", "twist", "telling", "rescue", "acid", "ugliest", "reign", "compare", "receipt", "minister", "equal", "battle", "bubble", "earsplitting", "sound", "tight", "jeans", "lick", "remain", "functional", "letter", "abiding", "goofy", "wrist", "linen", "kneel", "tomatoes", "detect", "park", "subsequent", "onerous", "drain", "noisy", "aromatic", "outrageous", "cheese", "load", "condemned", "whistle", "bustling", "puzzling", "weather", "brown", "flat", "ticket", "consist", "hard", "wistful", "meeting", "rustic", "shade", "rely", "rub", "snow", "coil", "visitor", "unaccountable", "internal", "well-off", "boat", "minute", "deer", "kiss", "lovely", "quarter", "kindhearted", "grain", "wire", "exercise", "political", "carpenter", "transport", "enthusiastic", "bear", "sugar", "birthday", "cold", "own", "basket", "question", "abundant", "nimble", "land", "route", "blink", "silent", "gun", "maddening", "spiritual", "wheel", "sponge", "handsomely", "stew", "name", "found", "rotten", "pine", "silly", "outstanding", "dependent", "develop", "elfin", "want", "useful", "table", "glove", "advise", "land", "religion", "legs", "phobic", "berserk", "river", "committee", "maid", "relation", "ink", "pat", "volatile", "damaging", "caption", "lighten", "influence", "adhesive", "level", "chunky", "concentrate", "grotesque", "irritate", "classy", "men", "aberrant", "talk", "file", "ruddy", "bawdy", "cute", "fold", "watch", "acceptable", "longing", "steel", "homeless", "frog", "bath", "utopian", "useless", "charge", "things", "meal", "tasteless", "carve", "well-to-do", "psychotic", "glib", "grade", "travel", "toe", "lie", "gaze", "waggish", "knee", "lying", "cemetery", "ready", "paste", "plough", "wait", "snatch", "settle", "trucks", "obedient", "enormous", "grubby", "smell", "vegetable", "learned", "statuesque", "bubble", "hideous", "encouraging", "violent", "slim", "pan", "spark", "roasted", "spell", "profit", "hissing", "gusty", "efficacious", "doctor", "repair", "thread", "clap", "unit", "hook", "car", "sophisticated", "real", "tank", "town", "mushy", "heap", "rabid", "satisfy", "double", "bomb", "resolute", "yam", "hunt", "teeny", "zippy", "moor", "market", "shock", "powder", "song", "succinct", "trees", "thrill", "lively", "adjustment", "barbarous", "laughable", "odd", "educate", "childlike", "pipe", "spectacular", "tail", "rare", "box", "eye", "quizzical", "disarm", "frame", "bitter", "sleet", "minor", "railway", "trains", "blood", "government", "furniture", "overconfident", "zonked", "children", "best", "allow", "sign", "five", "imported", "grape", "treatment", "unpack", "skip", "apologise", "complete", "bag", "touch", "belong", "squeak", "team", "common", "addition", "idea", "button", "metal", "plain", "chance", "ice", "bewildered", "flock", "fierce", "arm", "knowledgeable", "ducks", "grass", "calendar", "pin", "badge", "drunk", "locket", "foot", "dark", "flower", "busy", "borrow", "wakeful", "sloppy", "rings", "hollow", "full", "faint", "mellow", "slip", "lethal", "boiling", "ghost", "current", "overrated", "expect", "dirty", "choke", "honey", "teeth", "ill", "girl", "rake", "soft", "strange", "selfish", "time", "realise", "book", "bore", "pale", "spiteful", "shape", "bee", "duck", "gray", "signal", "alleged", "existence", "nonchalant", "trouble", "dirt", "scarecrow", "amused", "alive", "crack", "careless", "needy", "woebegone", "healthy", "form", "future", "nappy", "amazing", "decorous", "announce", "delight", "cook", "expert", "mundane", "distinct", "reaction", "murder", "fire", "expansion", "toothpaste", "halting", "earth", "harmonious", "front", "tearful", "nation", "bed", "nostalgic", "vigorous", "crook", "veil", "grieving", "page", "remind", "grandiose", "jam", "stare", "regret", "lock", "apathetic", "protective", "ragged", "houses", "ludicrous", "small", "freezing", "plant", "new", "verdant", "trip", "parcel", "exchange", "scatter", "women", "number", "dry", "order", "scientific", "number", "truthful", "debonair", "dead", "hands", "applaud", "overjoyed", "stocking", "awesome", "questionable", "camp", "trade", "three", "ship", "bulb", "part", "vast", "respect", "wonderful", "share", "stove", "peaceful", "view", "parsimonious", "parallel", "wiry", "introduce", "afterthought", "boil", "wool", "concerned", "keen", "alike", "marry", "hair", "clam", "box", "promise", "purpose", "third", "analyse", "weak", "rich", "skirt", "horse", "wry", "geese", "parched", "care", "trot", "tooth", "messy", "spark", "many", "chilly", "glue", "society", "mind", "giants", "addicted", "lamp", "married", "right", "oatmeal", "pot", "painstaking", "scratch", "appliance", "yak", "possess", "defective", "discreet", "clammy", "way", "substantial", "rob", "tawdry", "observant", "demonic", "uppity", "cracker", "shiver", "instruct", "heartbreaking", "burly", "telephone", "night", "filthy", "boundary", "clear", "thirsty", "special", "bite", "ratty", "collar", "crabby", "slow", "downtown", "sharp", "puny", "bouncy", "moaning", "listen", "petite", "shivering", "suck", "jumbled", "whirl", "science", "distance", "wholesale", "branch", "deeply", "simplistic", "home", "overwrought", "belligerent", "hammer", "arrange", "week", "spicy", "sour", "pig", "stormy", "flimsy", "curl", "giddy", "rabbit", "lucky"
    // "pineapple",
    // "charlie",
    // "sauce",
    // "teriyaki",
    // "i'm",
    // "hungry",
];

var firstSentence = true;
var currWord;
var written_text = $("#written-text");
var instructions_text = $("#instructions-text");
var word_text = $("#word-text");

$(document).ready(chooseWord);

function chooseWord() {
    currWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    word_text.html(currWord);
    if (firstSentence) {
        firstSentence = false;
        instructions_text.html("Start a story by writing a sentence with the word: ");
    } else {
        instructions_text.html("Continue the story by adding a sentence that has the word: ");
    }
}

function isValidText(text) {
    return text.toLowerCase().includes(currWord.toLowerCase());
}

//replace the user typed words with uppercase versions and fancy format versions
//of the word
function processText(text) {
    var searchMask = currWord;
    var regEx = new RegExp(searchMask, "ig");
    var replaceMask = "<span class = 'used-word'>" + currWord.toUpperCase() + "</span>";

    return text.replace(regEx, replaceMask);
}

$(document).ready(function() {
    $('#input-field').keydown(function(event) {
        if (event.which == 13) {
            if (isValidText(this.value)) {
                var newText = processText(this.value);
                // written_text.append(newText.trim() + "<br> ");
                written_text.append(newText.trim() + " ");
                written_text.scrollTop(written_text[0].scrollHeight);
                this.value = "";
                chooseWord();
            } else {
                instructions_text.html("Please use the word: ");
            }
            event.preventDefault();
        }
    });
});