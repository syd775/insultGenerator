
let adjectives = [
    "aloof","vain","pompous","callous","cynical","impolite","thoughtless","confrontational","belligerent","nasty","cruel","slimy","dishonest","sneaky","dirty","dogmatic","intolerant","stubborn","narrow-minded","pig-headed","fussy","tactless","unfunny","unreliable",
    "jealous","possessive","resentful","careless","irresponsible","cowardly","foolish","gullible","indecisive","weak-willed","grumpy","moody","pessimistic","touchy","silly","vulgar","deceitful","gloomy","ashamed","confused","lonely","terrified","humiliating","unhappy",
    "cowardly","foolhardy","impolite","materialistic","miserly","overcritical","resentful","stingy","superficial","unkind","vain","vulgar","weak-willed"
];

let nouns = [
    "bone-head", "egg", "dunce", "dipstick", "dingbat", "imbecile", "airhead", "birdbrain", "bozo", "bug off", "creep", "dingaling", "dingleberry", "dippy", "doofus", "dweeb", "floozie", "geezer", "goon", "half-wit", "jaggoff", "knucklehead", "lug", "pansy", "scum", "schmuck", "tossbag",
        "twat", "wimp", "twerp", "donkey", "lickspittle", "ninny", "hobknob", "mooncalf", "simpleton", "beta", "boomer", "brickhead", "buffoon", "caveman", "chump", "clod", "commie", "dirtbag", "dope", "edgelord", "earthworm",  "failure", "fruitcake", "goof", "grouch", "hippie", "hooligan", "louse",
        "low-life", "maggot", "meanie", "mongoose", "muppet", "nerd", "geek", "nimrod", "noodle", "oddball", "potato", "quack", "rat", "reject", "shrew", "slob", "snail", "snake", "snotball", "swine", "toad", "anti-vaxxer", "waste", "yeti", "witch", "yahoo"
];

let button = document.getElementById('generate');

button.onclick = function(){
    let adj1 = document.getElementById('adj1');
    let adj2 = document.getElementById('adj2');
    let noun = document.getElementById('noun');
    let insult = [adj1, adj2, noun];

    //add animation class to one word at a time
    let timer = setInterval(onTick, 500);
    let count = 0;

    function onTick(){
        
        for(let i = 0; i < insult.length; i++){
            insult[i].classList.add('fadeOut');
        }
        count++;

        if(count === 2){
            adj1.textContent = adjectives[Math.floor(Math.random()*adjectives.length)];
            adj2.textContent = adjectives[Math.floor(Math.random()*adjectives.length)];

            if(adj1.textContent === adj2.textContent){
                while(adj1.textContent === adj2.textContent){
                    adj2.textContent = adjectives[Math.floor(Math.random()*adjectives.length)];
                }
            }
            noun.textContent = nouns[Math.floor(Math.random()*nouns.length)];

            for(let i = 0; i < insult.length; i++){
                insult[i].classList.remove('fadeOut');
                insult[i].classList.add('fadeIn');
            }
            
        } else if(count === 3){
            for(let i = 0; i < insult.length; i++){
                insult[i].classList.remove('fadeOut');
                insult[i].classList.remove('fadeIn');
            }
            clearInterval(timer);
            return;
        }
    }

    
    
    //make sure the two adjectives are different
    
    
};
