function addListeners() {
    $("body").keydown(function(e) {
      if(e.keyCode == 37) { // left
        $("#prev").click();
      }
      else if(e.keyCode == 39) { // right
        $("#next").click();
      }
    });
    $("#key, #key div").bind({
        mouseover: function(event) {
            string = "<h4>8 years of dating data</h4>";
            string += "This chart is read left to right, up to down. Each row represents a year in my life (starting at age 15), and is made up of 365 columns representing days. You can navigate through the dates and relationships by pressing the left and right arrow keys, or by hovering over the cell you wish to investigate. A shaded purple or green cell implies that I saw the fellow in person on that day, but that data is only available for my 20s. Enjoy!"
            $("#bubble").html(string);
            $('#bubble').removeClass();
            $('#bubble').addClass("key");
            removeHover();
        }
    })
	$("#date-container").bind({
	    mouseover: function(event) {
	        var string;
            var isRelationship = false;
            isRelationship = findFirstDate(event.target.id);

            if (isRelationship) {
                findRelationship($(event.target).parent().attr('id'));
                if ($(event.target).parent().attr('id') === "date-container") {
                    //do nothing
                } else {
                    fixColor(event);
                }
            }
        }
	});
    $("#next").click(function() {
      var currentID = ($('#bubble').attr('class'));

      if (currentID == "key" || currentID == "kevintinder") {
            currentID = "dan"
      } else if (nonMonogamy.indexOf(currentID) > -1) {
            currentID = $("#" + currentID).children().nextAll(".navigate").attr('id');
      } else if (lastNonMonDate.indexOf(currentID) > -1) {
            currentID = $("#" + currentID).parent().nextAll(".navigate").attr('id');
      } else {
            currentID = $("#" + currentID).nextAll(".navigate").attr('id');
      }

      $('#bubble').removeClass();
      $('#bubble').addClass(currentID);
      if (findFirstDate(currentID)) {
        findRelationship(currentID);
        $("#" + currentID).css("opacity","0.7");
        $("#" + currentID).children(".first").css("background", "#333333");
      }
    });
    $("#prev").click(function() {
        var currentID = ($('#bubble').attr('class'));

        if (currentID == "key" || currentID == "dan") {
            currentID = "aron"
        } else if (nonMonogamy.indexOf(currentID) > -1) {
            currentID = $("#" + currentID).children().prevAll(".navigate").attr('id');
        } else if (firstNonMonDate.indexOf(currentID) > -1) {
            currentID = $("#" + currentID).parent().prevAll(".navigate").attr('id');
        } else {
            currentID = $("#" + currentID).prevAll(".navigate").attr('id');
        }

        $('#bubble').removeClass();
        $('#bubble').addClass(currentID);
        if (findFirstDate(currentID)) {
            findRelationship(currentID);
            $("#" + currentID).css("opacity","0.7");
            $("#" + currentID).children(".first").css("background", "#333333");
        }
    });
}

var nonMonogamy = ["grae", "zach", "jeff2", "ad", "aron"]
var lastNonMonDate = ["scott", "glenn", "kyle", "adam", "kevintinder"]
var firstNonMonDate = ["mark", "justin", "alexOKC", "glenn", "brian"]

function fixColor(event) {
    $(event.target).parent().css("opacity","0.7");
    $(event.target).siblings(".first").css("background", "#333333");
    $(event.target).siblings().children(".first").css("background", "#333333");
}

function handleFocus(string, id) {
    $("#bubble").html(string);
    $("#bubble").removeClass();
    $("#bubble").addClass(id);
    removeHover();
    $("#" + id).addClass("hovered");
}

function removeHover() {
    $(".first").removeClass('hovered');
    $(".uppercase-relationship, .lowercase-relationship, .grae").css("opacity","1");
    $(".first").css("background","#666666")
}

function findFirstDate(id) {
    var isRelationship = false;
    switch(id) {
        case "tucker":
            string = "<h4>Tucker (virtual pet site)</h4>";
            string += "This was the first time I ever met anyone in person who I originally knew on the internet. At the time, I doubt either of us would have called it a date, but I spent the spring happily pursuing him while he exploited the rebound for virtual rarities. One time he tried to drive away with my laptop, and I was clinging to the outside of his van! I recall these memories with fondness and affection, but be careful who you meet on the internet!"
            handleFocus(string, id);
            break;
        case "alexAYI":
            string = "<h4>Alex (Are You Interested)</h4>";
            string += "Frustrated by my high school prospects, I created a profile on the Facebook app Are You Interested to search for an eligible bachelor. There I met Alex, an intellectual gentleman who attended a rival school. We went on two dates - first to a musical at my high school, and second watching UHF at my place (parents home, etc). I enjoyed our conversations, but ultimately didn't see it going anywhere.";
            handleFocus(string, id);
            break;
        case "kevin":
            string = "<h4>Kevin (college)</h4>";
            string += "After a delightful platonic afternoon spent grocery shopping and baking, Kevin straightforwardly asked me on a proper date. I said sure, and he promptly announced it to his entire fraternity. We went to Panera and watched Louis CK and Scott Pilgrim. In the end, I didn't feel ready to date again after so recently ending a relationship.";
            handleFocus(string, id);
            break;
        case "adrian":
            string = "<h4>Adrian (OkCupid)</h4>";
            string += "Adrian was the first person I met on OkCupid. I remember being frustrated by how little he was willing to tell me online, insisting that he remain mysterious until we met in person. I almost flaked on meeting him because of this, but eventually convinced him to add me on Facebook. I found out he was studying to be an actuary and immediately wanted to get to know him better. We held hands while we walked along the beach and he hushed me any time I tried to talk about my exes.";
            handleFocus(string, id);
            break;
        case "jackie":
            string = "<h4>Jackie (college)</h4>";
            string += "I met Jackie through the Actuary Club that I founded in college. He invited me to come watch the Olympics with his &quot;harmless Christian friends&quot; and he insisted on walking me home despite my sincere insistence that I did not want him to. He asked me out again, and I told him straightforwardly that I was not interested in dating him, which he took well."
            handleFocus(string, id);
            break;
        case "brian":
            string = "<h4>Brian (OkCupid)</h4>";
            string += "I met Brian in a pointed effort to get myself out there again. We met at the grocery store that he worked at, got Pequod's, played some video games, then saw Baby Wants Candy. He escorted me home on the train afterwards. Brian made a valiant effort to stay in touch for a couple years, but I didn't carry any weight and our friendship fizzled."
            handleFocus(string, id);
            break;
        case "benhalley":
            string = "<h4>Ben and Halley (Reddit)</h4>";
            string += "My first foray into non-monogamy was a bit of a steep leap. I started talking to Ben and Halley after they responded to a personal that I posted in /r/r4r. I was intrigued that a couple was interested in me for friendship, never mind a relationship. We hung out a few times - I enjoyed their company and the challenge of communication, but it ultimately didn't work out."
            handleFocus(string, id);
            break;
        case "luis":
            string = "<h4>Luis (OkCupid)</h4>";
            string += "I generally prefer to talk positively about people I interact with, but I had a really bad experience with Luis. He lied and manipulated in what I believe was an unfeeling attempt to get laid, and whenever I think too hard about it, I feel ashamed for giving him any time of day. It's too bad, because he certainly had the capacity to be good and interesting and charming."
            handleFocus(string, id);
            break;
        case "scott":
            string = "<h4>Scott (OkCupid)</h4>";
            string += "I was drawn to Scott because he was a pilot and I wanted to hear pilot stories. He <i>called</i> me to confirm the date, and we had a nice time swapping stories at Panera. Towards the end of the date, he told me that he was using dating to practice talking to people because he had bad social anxiety. I told him that he did great, and then I faded on him :("
            handleFocus(string, id);
            break;
        case "jared":
            string = "<h4>Jared (Reddit)</h4>";
            string += "I discovered Jared's profile in a game hosted on /r/OkCupid. We were both outside of each other's age ranges, but were so compelled with the other's profile that we decided to meet anyway. We grabbed coffee and had a delightfully intense and connective discussion over the course of 3 hours. In the end, we felt like we were in too different places in life and decided not to pursue it."
            handleFocus(string, id);
            break;
        case "ethan":
            string = "<h4>Ethan (OkCupid)</h4>";
            string += "This was a total dud. We'd texted on and off for a few weeks before meeting, and finally decided to get together on a night neither of us was doing anything. We met at an empty coffee shop, which wound up being the lucky surprise host to an impromptu a capella performance. Ethan got grumpy that we couldn't talk over the singing, and I was definitely judging him for not sharing my delight in the unexpected art."
            handleFocus(string, id);
            break;
        case "bryan":
            string = "<h4>Bryan (Reddit)</h4>";
            string += "Bryan is another fella I met on the /r/OkCupid sub - we were meant to be snail mail penpals but he never responded to my letter, said he was depressed and wanted to explain in person. Cue ambiguous eight hour friend sort of date. We got coffee and made brownies and talked late into the evening. He was in his later 20s, and I felt weird hanging out with him at my sorority."
            handleFocus(string, id);
            break;
        case "glenn":
            string = "<h4>Glenn (college)</h4>";
            string += "I met Glenn at a small get-together and later found and messaged him on OkCupid. We met for lunch in the dining hall, had a good and substantial conversation, and developed what I felt was an ambiguous friendship. The ambiguity slowly dissolved into normal platonicism, which slowly dissolved into not much at all."
            handleFocus(string, id);
            break;
        case "mikeokc":
            string = "<h4>Mike (OkCupid)</h4>";
            string += "Mike and I talked extensively on Facebook chat and on the phone before meeting. I was home for Spring break, and he drove out to the suburbs to meet me at a book store. We then drove into the city for dinner. He was an interesting guy and I had a hard time letting him know that I wasn't interested in pursuing anything."
            handleFocus(string, id);
            break;
        case "skylar":
            string = "<h4>Skylar (OkCupid)</h4>";
            string += "This goes in the books as one of my favorite first dates ever. After talking on and off (mostly off) for 8 months, I drove about 2 hours to Wisconsin to meet him. We went on a snowy hike on the first warm-enough day of Spring, skipped rocks, had a picnic, got frozen custard, loitered in Walmart, searched for a haunted barn, stargazed, showed each other journals, and fell asleep watching a scary movie. We pretty much stopped talking when the date was over, but it was a pretty spectacular 23 hours."
            handleFocus(string, id);
            break;
        case "chase":
            string = "<h4>Chase (OkCupid)</h4>";
            string += "I broke my &quot;no dating people who go to my school&quot; rule to meet Chase for lunch at the dining hall. I didn't think conversation was particularly interesting, and I knew pretty early on that I wasn't interested. Word got around to some apparently mutual friends that we met up with each other, which was annoying, but also not a big deal at all."
            handleFocus(string, id);
            break;
        case "myles":
            string = "<h4>Myles (OkCupid)</h4>";
            string += "Myles and I challenged each other to dress up for our first date - I wore flamboyant school gear from head to toe (including tearaway pants atop purple fishnets), and he wore the shiniest garb he could acquire. We then rode along the train people watching. Eventually we grabbed dinner, but he cut it short due to an unpleasant nicotine withdrawal. I went back to his place and watched him chain smoke while we carried a decently interesting conversation about connection."
            handleFocus(string, id);
            break;
        case "andy":
            string = "<h4>Andy (OkCupid)</h4>";
            string += "We went to dinner and saw a play together and I felt legitimately guilty about how much money he spent on the date - I did offer to contribute, but had also complained about living on the equivalent of a 12k salary, so he took it upon himself to foot the whole bill. I hadn't thought ahead enough to bring cash :("
            handleFocus(string, id);
            break;
        case "corey":
            string = "<h4>Corey (Meetup)</h4>";
            string += "I met Corey at an /r/Chicago meetup. We bonded while complaining about awkward people, exchanged numbers, and made plans to make tacos together. The tacos were great, but our chemistry was not."
            handleFocus(string, id);
            break;
        case "john":
            string = "<h4>John (OkCupid)</h4>";
            string += "I remember this fondly as my worst all-time performance on a date. I didn't have any plans on the 4th of July, so I bugged John until he agreed to meet me at McDonalds. I proceeded to casually tell him desperately uncomfortable details about my personal life while stuffing my face with McChickens. I tried to invite myself along to his plans afterwards, but he tactfully declined. We ran into each other on the train shortly after parting ways. It was beautiful."
            handleFocus(string, id);
            break;
        case "kyleOKC":
            string = "<h4>Kyle (OkCupid)</h4>";
            string += "Kyle specified that he wanted to build a friendship before he would consider dating someone, which sounded like a nice way to take some pressure off. We went on a few ambiguous friend dates - dinner and walking and Super Smash Bros - before I decided I wasn't even interested in just being friends."
            handleFocus(string, id);
            break;
        case "george":
            string = "<h4>George (OkCupid)</h4>";
            string += "Poor guy. We went out to lunch and then he helped me move out of my summer apartment. Like, drove to my place, helped me carry and pack boxes into <i>his</i> car, drove to the suburbs, helped me unload. We hadn't planned on doing any moving, so I have no idea how I charmed him into that one."
            handleFocus(string, id);
            break;
        case "alexOKC":
            string = "<h4>Alex (OkCupid)</h4>";
            string += "Another favorite interaction. Alex and I were penpals on OkCupid for a number of months before he decided he wanted to visit Chicago. He drove 8.5 hours from Tennessee, took me to dinner, took me to a concert, went to his hotel, and left the next morning to drive 8.5 hours back. I had NO IDEA whether it was a date or not (it really didn't feel like one despite his insistence on paying for things and taking me out), and I felt kind of bad about not letting him crash with me, but I also barely knew anything about him."
            handleFocus(string, id);
            break;
        case "cos":
            string = "<h4>Cos (Reddit)</h4>";
            string += "Cos was a bit of a well known internet dude, and though I'd never heard of him before we started interacting, I was tickled to go on a date with him when I was visiting NYC. We had pizza and wine and a couple beers at his apartment. He talked a lot about other high-profile internet people, which I found greatly amusing."
            handleFocus(string, id);
            break;
        case "kyle":
            string = "<h4>Kyle (Reddit)</h4>";
            string += "Kyle and I had been flirting for a while before we met in person when I visited DC. We went to dinner and got drunk and watched a movie and were briefly visited by another internet friend. He also attempted the naked man :|"
            handleFocus(string, id);
            break;
        case "danOKC":
            string = "<h4>Dan (OkCupid)</h4>";
            string += "Halfway through our date (BYOB board games at Dice Dojo), I realized that Dan and I had met each other at a party. &quot;Do you know Sean? Were you at his place for the 4th of July party? ...was your girlfriend cutting your hair?&quot; Oh, the weird details we remember."
            handleFocus(string, id);
            break;
        case "justin":
            string = "<h4>Justin (OkCupid)</h4>";
            string += "I had been SO EXCITED to meet Justin (based on his profile) and was, accordingly, somewhat disappointed when we met. We went to dinner at one of my favorite restaurants but he spent a lot of time complaining about a shitty situation that I felt like he clearly brought upon himself. Womp."
            handleFocus(string, id);
            break;
        case "chrisOKC":
            string = "<h4>Chris (Meetup)</h4>";
            string += "Aw man, another weird one. Chris and I met at an /r/OkCupid meetup and had really good talking chemistry. When we went out for coffee, he ran into a girl that he had previously met on OkCupid, who was also a member of the /r/OkCupid community. She recognized me from meetup photos and knew exactly who I was. She proceeded to observe our date and post a review of it on /r/OkCupid - &quot;I spy two of you on a date together! Great eye contact.&quot; We ended the night at an ex-boyfriend's bacon and whiskey party."
            handleFocus(string, id);
            break;
        case "bryandavid":
            string = "<h4>Bryan (OkCupid)</h4>";
            string += "Bryan was a very interesting fella and about twice my age. We wanted to meet each other for conversation - he's an adult film actor who is also involved in publishing, and I was really curious to hear about his experiences with both. We talked about collaborating on some work in the future (PUBLISHING, of course), but nobody wound up following up."
            handleFocus(string, id);
            break;
        case "davidbryan":
            string = "<h4>David (OkCupid)</h4>";
            string += "Yes okay, I'm guilty of executing back-to-back first dates. David and I met for cocktails at Barrelhouse Flat. Conversation was engaging and stimulating, and I liked him right away. We got together a handful of times, often with months-long gaps in between. I definitely saw potential with him, but things never really fell together."
            handleFocus(string, id);
            break;
        case "francois":
            string = "<h4>Fran&Ccedil;ois (OkCupid)</h4>";
            string += "I ADORE THIS KID. We met outside of Sacr&eacute-Coeur and walked 17km around Paris, hitting damn near all the landmarks. We talked about work and relationships and fraternities and differences in culture. He did magic tricks at a bar and taught me how to shuffle. We got together again 2 months later for what was meant to be a double date with our significant others."
            handleFocus(string, id);
            break;
        case "simon":
            string = "<h4>Simon (OkCupid)</h4>";
            string += "Simon helped make Munich feel much less intimidating. He dealt with my bed bug horror stories and gave me history lessons about Marienplatz. We ate lunch at the Ministry of Agriculture and met up again the next day to grab dinner and watch a World Cup game at a beer hall. I really appreciated his company, and it was interesting to hear about how dating cultures differed in both of our countries."
            handleFocus(string, id);
            break;
        case "alessandro":
            string = "<h4>Alessandro (OkCupid)</h4>";
            string += "Born and raised in Rome, Alessandro was a total foodie. He made arrangements for us to grab dinner at this super fancy restaurant that seats 24 people <i>per day</i>, but our reservations were cancelled because they were filming for a TV feature that night... We went to a different fancy restaurant instead, where Alessandro translated the entire menu for me and helped me pair wine with my meal. I felt kind of uncomfortable being an American while I was with him, but it was definitely a memorable date."
            handleFocus(string, id);
            break;
        case "matt":
            string = "<h4>Matt (OkCupid)</h4>";
            string += "I had a hard time finding hostels in London, so I made arrangements ahead of time to crash with Matt, which was probably a risky move. Lucky for me, Matt was a most delightful and respectful host. He took me to a comedy show and taught me how to function his extremely finicky toilet. It felt way more like two travelers hanging out together than a date."
            handleFocus(string, id);
            break;
        case "stu":
            string = "<h4>Stu (Meetup)</h4>";
            string += "I met Stu at the meetup he planned for /r/OkCupid. He was a sweetheart and a gentleman, inviting me out to his friend's birthday party and helping me figure out transportation in London. We met up again a couple days later for drinks and dinner."
            handleFocus(string, id);
            break;
        case "ira":
            string = "<h4>Ira (OkCupid)</h4>";
            string += "Ira was one of the couple Americans I met while I was traveling around Europe - he was in Edinburgh for work at the same time I happened to be there. We met for drinks and snuggled and talked about Legos. I've thought about getting in touch with him during times I've visited Boston, but have yet to do so."
            handleFocus(string, id);
            break;
        case "karl":
            string = "<h4>Karl (Red Light District tour)</h4>";
            string += "Karl was my tour guide when I visited the Red Light District in Amsterdam. I tipped him generously because I thought he was delightful. He invited the group out for drinks after, and he asked me specifically if I wanted to continue the night with him. Things got creepy when he implied that if he bought me as much in beer as I paid for the tour, then I would have to pay him with alternative favors. I wound up sneaking away from him when he went to take a smoke break and drunkenly eating Chinese food by myself at like 3AM."
            handleFocus(string, id);
            break;
        case "jay":
            string = "<h4>Jay (OkCupid)</h4>";
            string += "Jay was another American I met up with in Europe. He'd been traveling for a long time across many continents, doing the whole nomadic lifestyle thing while he built a mobile app. We went peddleboating and then walked around Prague for a <i>long</i> time - we covered nearly 20 miles. We also went to a sex machine museum, which was a weird first date activity."
            handleFocus(string, id);
            break;
        case "alexs":
            string = "<h4>Alex (OkCupid)</h4>";
            string += "Being younger than I would typically date, I was pleasantly surprised by the quality of conversation that Alex brought to the table. We got coffee and laughed a bunch and went for tacos. I really enjoyed talking with him and decided to try to pursue a friendship."
            handleFocus(string, id);
            break;
        case "josh":
            string = "<h4>Josh (OkCupid)</h4>";
            string += "We met for Mexican on our first date, then talked in his car and played a game called Friendstrap, which was a surprisingly good get-to-know-you activity (Google it!). On our second date, I helped him flyer and then we went for Mexican again. I definitely saw potential with Josh, and he 100% faded on me."
            handleFocus(string, id);
            break;
        case "mike":
            string = "<h4>Mike (party)</h4>";
            string += "Mike and I went to high school together and reconnected at a mutual friend's Halloween party. I didn't disclose the fact that I had a boyfriend before we went on the date, which led to kind of an uncomfortable conversation. He didn't seem to think that non-monogamy was ethical, even though he admitted to cheating on every partner he's ever been with :|"
            handleFocus(string, id);
            break;
        case "robertokc":
            string = "<h4>Robert (OkCupid)</h4>";
            string += "We grabbed dinner and drinks at a tasty burger place. We talked about our jobs (programming) and our partners and our partners' cats. Nothing terribly interesting or memorable, though he graciously gave me a ride home."
            handleFocus(string, id);
            break;
        case "morgan":
            string = "<h4>Morgan (exterminator)</h4>";
            string += "I picked up some nasty bed buggers in a motel in Oregon and went through absolute hell trying to get rid of them. The only silver lining was that my round-three exterminator was a cutie who said yes when I asked him out. We met for drinks at an across-the-street watering hole and had a most enjoyable time swapping stories. We had more in common than I expected, but neither of us wound up pursuing it."
            handleFocus(string, id);
            break;
        case "adam":
            string = "<h4>Adam (OkCupid)</h4>";
            string += "I probably looked like the biggest nervous wreck on our first date - I couldn't stop fidgeting with my earrings and ultimately lost the backing on one of them (and recruited his help looking around the dark bar floor for it). I also forgot my bag at the end of the date and had to come back looking for it the next day :| But Adam was cool. He made puppets and stuff and we went out a couple more times before we simultaneously stopped making an effort with each other."
            handleFocus(string, id);
            break;
        case "david":
            string = "<h4>David (OkCupid)</h4>";
            string += "I was SO EXCITED to meet David because he was a high school English teacher and I wanted to gush about my extraordinary high school English experiences. I really enjoyed our conversations, but I felt like it was evident that we didn't have chemistry. I had the pleasure of taking him to an ex-boyfriend's improv show, though!"
            handleFocus(string, id);
            break;
        case "mark":
            string = "<h4>Mark (Tinder)</h4>";
            string += "I finally caved and started meeting people off of Tinder. Turns out I really enjoy having a sense of whether I'll get along with someone before I go on a date with them. I thought that Mark was kind of boring and obnoxious but I enjoyed the part where we intentionally tried to make each other feel uncomfortable. All in all, it was one of my least favorite first dates."
            handleFocus(string, id);
            break;
        case "james":
            string = "<h4>James (OkCupid)</h4>";
            string += "Long lunch date. Dude had a negative attitude but I appreciated how sincere and straightforward he was about everything. He was really into music, and we spent a lot of time talking about one of my favorite artists. I hung out at his place afterwards and got to know his cat."
            handleFocus(string, id);
            break;
        case "kevintinder":
            string = "<h4>Kevin (Tinder)</h4>";
            string += "I gave Tinder another try, just in case the first bad experience was an anomoly. I've never had such a difficult time coming up with things to talk about on a date! At one point we found out we were born at the same hospital, and things felt pretty weird after that. I've since seen him a couple times on my commute. We don't acknowledge each other."
            handleFocus(string, id);
            break;
        default:
            if (id === "date-container") {
                //do nothing
            } else {
                isRelationship = true;
            }
        }
    return isRelationship;
}

function findRelationship(id) {
    switch(id) {
        case "dan":
            string = "<h4>Dan (high school) [monogamous]</h4>";
            string += "Dan was my first ever super official boyfriend. He was a grade above me, which made it extra cool to date him. We were together for 3 weeks and I was completely terrified of kissing him. He later dated a future boyfriend's younger sister, and I often ran into him while hanging around at their house."
            handleFocus(string, id);
            break;
        case "jeff":
            string = "<h4>Jeff (friend of &quot;friend&quot;) [monogamous]</h4>";
            string += "To this day, I can't really explain how Jeff and I met - we were set up by a mutual &quot;friend&quot; who I had never actually spoken to in person. I don't think we had a ton of chemistry, but we both wanted to date someone, and there we were. We wound up dating for almost 2 years, which is unfortunate, because he was controlling and emotionally abusive. Can't say I didn't learn a lot, though!"
            handleFocus(string, id);
            break;
        case "danny":
            string = "<h4>Danny (high school) [monogamous]</h4>";
            string += "Dating Danny was like enlisting in limitless love and reliable heart attacks. Sweetest most well-intending kid I knew, but couldn't keep himself out of trouble (legal and otherwise). Danny taught me a lot about myself and a lot about love, but we ultimately weren't a good match for each other. He continues to be a meaningful friend in my life."
            handleFocus(string, id);
            break;
        case "grae":
            string = "<h4>Grae (OkCupid) [monogamous / non-monogamous]</h4>";
            string += "Grae was the second ever person I met from OkCupid, and I was his first. We exchanged tens of thousands of words before meeting in person, and may or may not have declared our love for each other on the phone the night before we met. Our relationship was hasty, clumsy, and relentlessly well-intending. I recently had the pleasure of witnessing his marriage with an awesome girl he met during our haphazard non-monogamous rendezvous!"
            handleFocus(string, id);
            break;
        case "zach":
            string = "<h4>Zach (OkCupid)</h4>";
            string += "I was afraid of getting close to someone so soon after things ended with Grae, but my resistance was no match to Zach's romanticism. He lived a couple hours away, so we mostly corresponded through texts and letters. When he finally came to visit me, he ghosted halfway through, which was devastating. It feels silly to say because it was so short-lived, but I definitely fell in love with the person I thought he was."
            handleFocus(string, id);
            break;
        case "victor":
            string = "<h4>Victor (Reddit)</h4>";
            string += "Victor was a well-known member of one of my online friend communities, but I didn't know anything about him until I met him at a Meetup when he was visiting Chicago. We hit it off and starting Skyping every day, and before long he convinced me to visit him in NYC. It was great, but he wound up doing the cowardly fade thing."
            handleFocus(string, id);
            break;
        case "jeff2":
            string = "<h4>Jeff (OkCupid)</h4>";
            string += "On our first date, we pregamed a trip to a mirror maze at a BYOB Thai place. The night lasted for hours and hours, and I eventually crashed at his place and slept in a borrowed pair of onesies. We wound up kind of going on a trip to DC together, but both of us stopped making an effort with each other when we returned to Chicago."
            handleFocus(string, id);
            break;
        case "william":
            string = "<h4>William (OkCupid)</h4>";
            string += "William was the exact Winter break fling that I was looking for, and was the first person I'd dated who actually lived in the same city as me. We spent a crazy amount of time with each other over a 2 week period, but I stopped pursuing things with him after he tried to pick someone else up at a New Year's party that <i>I</i> was hosting."
            handleFocus(string, id);
            break;
        case "ad":
            string = "<h4>Ad (Reddit) [non-monogamous]</h4>";
            string += "Ad and I became close online friends before discovering our chemistry in person when I visited Boston. Despite long-distance and a bit of an age gap, the relationship felt perfect in a lot of ways. After about a year I found out that he was actually married, and things got pretty messy pretty quickly."
            handleFocus(string, id);
            break;
        case "aron":
            string = "<h4>Aron (Meetup)</h4>";
            string += "I met Aron at a polyamory meetup just a couple weeks after he moved to Chicago. He started a job in consulting shortly after we met, which limited time to weekends. We were consistently lucky to be on the same page about what we wanted with each other, but hit or miss about communicating it."
            handleFocus(string, id);
            break;
        }

}