var addElements = function() {

        var distanceFromTop = 0;
        $('#visualization-container').append('<div id="bubble" class="bubble"></div>');
    	for (var i = 0; i < aboutMe.length; i++) {
    		$('#visualization-container').append('<div id="' + idName(i) + '">' + innerHTML(i) + '</div>');
    		var currentElement = document.getElementById(idName(i));
    		currentElement.className = className(i);
    		currentElement.style.left = setLeft((beginTime(i))) + "%";
    		currentElement.style.width = setWidth(beginTime(i), endTime(i)) + "%";
    		if (aboutMe[i][5]) {
    			distanceFromTop += alignHeight;
    		}
    		currentElement.style.top = distanceFromTop + "px";

            if (className(i) == "tick" || className(i) == "timeline") {
                //do nothing
            } else {
        		if (isOverflowed(currentElement)) {
        		    //clear the text if it's overflowed
        		      currentElement.innerHTML = "";
                }
        		if (endTime(i) == today) {
        		    //draw an arrow to the right >
        		    $('#' + idName(i)).append('<div class="present" id="' + idName(i) + '">&raquo;&nbsp;</div>');
        		    //ADD A CHECK FOR THAT IF THERE IS OVERLAP CLEAR THE TEXT
        		}
            }
    	}
    	//add something here to automatically add 2016 and 2017 JUST IN CASE YOU FORGET heh
};

var websiteText;
websiteText = "<h4>robinwe.is</h4>";
websiteText += "<div id='duration'><i>Mar 2015 - present</i></div>";
websiteText += "Hi. I'm Robin, and this is the website I've dedicated to sharing and presenting my analytics and self-tracking data. Enjoy!";

function addDefaultText() {
    $("#bubble").html(websiteText);
}

function addListeners() {
    addDefaultText();
    $( window ).resize(function() {
        //go through the divs and set the innerhtml to nothing if it's too big
    });
	$(".me, .college, .hs, .work, .adult").bind({
	    click: function(event) {
	      switch(event.target.id) {
	          case "52weeks":
	              window.open('https://52weeksrw.blogspot.com', '_blank');
	              break;
              case "cry":
                  window.open('http://www.robinwe.is/explorations/cry.html', '_blank');
                  break;
              case "sorry":
                  window.open('http://www.robinwe.is/explorations/sorry.html', '_blank');
                  break;
              case "context":
                  window.open('http://www.robinwe.is/explorations/fridays1314.html', '_blank');
                  break;
              case "books":
                  window.open('https://docs.google.com/spreadsheets/d/1oGNnfRw8Z7Hx6qpU4zCgLS_OI7DIK0de7TnRoPRykBk/edit?usp=sharing', '_blank');
                  break;
	          default:
	              //
	      }
	    },
	    mouseover: function(event) {
	        var string;
            switch(event.target.id) {
                case "movies":
                    string = "<h4>movies</h4>";
                    string += "<div id='duration'><i>Feb 2014 - present</i></div>";
                    string += "I've never been much of a movie person, so things got interesting when I started dating a movie fanatic. We watched and wrote about more than 100 movies in a year, which is probably several times as many movies as I'd seen in the prior decade. I learned that I like easygoing dramas (not to be mistaken with melodrama) about complicated relationships, and that I still don't like horror or fantasy.";
                    $("#bubble").html(string);
                    break;
                case "cry":
                    string = "<h4>cry</h4>";
                    string += "<div id='duration'><i>Feb 2014 - present</i></div>";
                    string += "Logging tears to smash stigmas! And accidentally conditioning myself to check the time every time I start crying. Between Feb 2014 and Oct 2015, I cried 394 times on 216 unique days. More than half of the sessions were related to relationships/breakups, and about 40% occurred in public. I was particularly prone to crying at doctors' offices, during therapy, at airports, and on public transportation.";
                    $("#bubble").html(string);
                    $('#cry').css('cursor', 'pointer');
                    break;
                case "ghostship":
                    string = "<h4>identity/ghostship</h4>";
                    string += "<div id='duration'><i>Nov 2013 - present</i></div>";
                    string += "Inspired by a study where college freshman were asked to write about their top 3 romantic interests and closest friends every week for a year, I use IDENTITY to log a monthly status report for 7 friend/relationship groups, 10 family groups, and 10 facets of my lifestyle/identity to see how relationships and sentiments change over time. 57 other entries have been retired to GHOSTSHIP, where they are updated only as needed.";
                    $("#bubble").html(string);
                    break;
                case "sorry":
                    string = "<h4>sorry</h4>";
                    string += "<div id='duration'><i>Aug 2013 - Jun 2014</i></div>";
                    string += 'One time a boyfriend told me that I apologized too often, so I took that as a challenge to see if he was right. He wrote a script to query our IM logs, while I searched for intances of "sorry" and "sry" in our text conversations. Turns out <i>he</i> apologized more often &#45; 266 apologies to my 189. I was more likely to apologize about miscommunications, whereas he was more likely to apologize for his behavior.';
                    $("#bubble").html(string);
                    $('#sorry').css('cursor', 'pointer');
                    break;
                case "emotions":
                    string = "<h4>emotions</h4>";
                    string += "<div id='duration'><i>Jul 2014 - present</i></div>";
                    string += 'Driven by the desire to get better at understanding and communicating how I feel, I attempted to create a dictionary of emotions. My goal for each entry is to provide a definition and a few anecdotes from times I experienced that emotion. I also try to highlight distinctions and similarities that I routinely get confused about. There are currently 136 rows, and I have only worked on 18 of them.';
                    $("#bubble").html(string);
                    break;
                case "okc":
                    string = "<h4>okanalytics</h4>";
                    string += "<div id='duration'><i>Jul 2012 - Jul 2013</i></div>";
                    string += "I retroactively tracked the interactions I had on OkCupid during my first year of membership to see how my activity lined up with the myths of online dating. I received 539 first messages and sent 106. About half of my outgoing messages received responses, whereas I only responded to 30% of the messages I received. The messages I sent were wordier than the messages people sent me.";
                    $("#bubble").html(string);
                    break;
                case "wrk":
                    string = "<h4>work</h4>";
                    string += "<div id='duration'><i>Jan 2015 - Oct 2015</i></div>";
                    string += "Relatively new at my job and in need of a New Year's Resolution, I began tracking how I spent my time at work. This spreadsheet was the design inspiration for a mobile tracking app that I currently sort of have in development. More info coming soon.";
                    $("#bubble").html(string);
                    break;
                case "dream":
                    string = "<h4>dream</h4>";
                    string += "<div id='duration'><i>Apr 2013 - Jul 2014</i></div>";
                    string += "I don't believe that dreams have any meaningful (or at least consistent) relationship with reality, but I like them because they're weird and interesting. The journal consists of amusingly unfiltered half-asleep voice recordings taken immediately after waking up.";
                    $("#bubble").html(string);
                    break;
                case "context":
                    string = "<h4>context</h4>";
                    string += "<div id='duration'><i>Jan 2013 - present</i></div>";
                    string += "This log began as a piece of lined paper taped to the wall next to my bed meant to contain one thing that made me happy everyday, but it has since blossomed into a daily journal where I write about pretty much everything. Every day. Since 2013.";
                    $("#bubble").html(string);
                    $('#context').css('cursor', 'pointer');
                    break;
                case "spaghettinest":
                    string = "<h4>spaghetti nest</h4>";
                    string += "<div id='duration'><i>Oct 2012 - Sep 2015</i></div>";
                    string += "After becoming a fan of The Moth in high school, I started to think about which of my own stories were worth sharing. Then one day I decided it would be fun to publish a book, so I started writing a memoir. I wrote about 60,000 words in the first year, and spent the next two editing despairingly and waiting for more things to happen in my life. I eventually decided to put it down until further notice.";
                    $("#bubble").html(string);
                    break;
                case "books":
                    string = "<h4>books</h4>";
                    string += "<div id='duration'><i>Oct 2012 - Sep 2015</i></div>";
                    string += "My informal New Year's resolution for 2016 was to read 25 books, since I stopped reading for leisure sometime in college. I read close to 2,000,000 words and enjoy reading regularly as a hobby again :)";
                    $("#bubble").html(string);
                    $('#books').css('cursor', 'pointer');
                    break;
                case "52weeks":
                    string = "<h4>52 weeks</h4>";
                    string += "<div id='duration'><i>Sep 2012 - Nov 2013</i></div>";
                    string += "I wrote down 52 challenges (try a new food, face a fear, etc) on a deck of cards, drew one at random each week, and documented my performance on a public blog. The project took longer to plan than to execute because I was trying to maximize the likelihood of follow-through, but it was wildly effective.";
                    $("#bubble").html(string);
                    $('#52weeks').css('cursor', 'pointer');
                    break;
                case "maestro":
                    string = "<h4>maestro</h4>";
                    string += "<div id='duration'><i>Dec 2013 - Jan 2015</i></div>";
                    string += "This is the Google doc I shared with a friend and then later boyfriend to help us super-communicate throughout our long-distance relationship. It consisted of many sub-sheets, the most important being LIST, where we kept track of conversations.";
                    $("#bubble").html(string);
                    break;
                case "website":
                    $("#bubble").html(websiteText);
                    break;
                case "date":
                    string = "<h4>date</h4>";
                    string += "<div id='duration'><i>Aug 2012 - present</i></div>";
                    string += "One day I joke-threatened to use a Google calendar to keep track of all the time I spent with a guy I met online, and then I actually followed through. The ability to know exactly how many minutes we'd spent together was so intoxicating that I decided to do it for everyone else too. They say it takes 10,000 hours to become an expert in something... And I've spent way too many hours dating.";
                    $("#bubble").html(string);
                    break;
                case "date2":
                    string = "<h4>date2</h4>";
                    string += "I still keep track of the fellows I meet, but in much, much less detail.";
                    $("#bubble").html(string);
                    break;
                case "texts":
                    string = "<h4>texts & memos</h4>";
                    string += "<div id='duration'><i>Jun 2012 - present</i></div>";
                    string += "I use SMS Backup+ on Android to back up all my texts through gmail. I've yet to learn a super great way to query them, but it's been a helpful archive when writing memoir chapters. I also use the Memo app as an on-the-fly mobile journal for one-off ideas, sentiments, reminders, etc, but I don't have a good way of automating it (yet). I began logging both of these things as soon as I got my first smart phone.";
                    $("#bubble").html(string);
                    break;
                //case "memo":
                    //string = "<h4>memo</h4>"
                    //string += "<div id='duration'><i>Jun 2012 - present</i></div>";
                    //string += "My on-the-fly mobile journal for when thoughts are spinning too quickly and I can't sustain them in my head space. Still looking for a good way to back up these up with automation."
                    //$("#bubble").html(string);
                    //break;
                case "journal":
                    string = "<h4>journey of a bird</h4>";
                    string += "<div id='duration'><i>Dec 2005 - present</i></div>";
                    string += "While at first just an outlet for middle school angst+, my journal has been one of the longest-term constants in my life. In 10 years, I wrote 68,000 words and 221 entries across 3 physical journals. I've yet to find something that can rival the effectiveness of pencil (not pen!) on paper.";
                    $("#bubble").html(string);
                    break;

                //

                case "mcm":
                    string = "<h4>software developer</h4>";
                    string += "<div id='duration'><i>Sep 2014 - present</i></div>";
                    string += "Doing a hodgepodge of tech work (front end, back end, security, design) for an industrial supply company. I was very fortunate to receive training despite having little programming experience before starting here.";
                    $("#bubble").html(string);
                    break;
                case "cia":
                    string = "<h4>program coordinator</h4>";
                    string += "<div id='duration'><i>Jun 2013 - Sep 2013</i></div>";
                    string += "Scored myself an internship at an innovation awards agency. People would send in their products and we'd get to evaluate them. Was a pretty cool way to spend a summer.";
                    $("#bubble").html(string);
                    break;
                case "cradle":
                    string = "<h4>community service aide</h4>";
                    string += "<div id='duration'><i>Jun 2011 - Jun 2012</i></div>";
                    string += "Helping out with administrative tasks at an adoption agency. I had to walk by a nursery with real live babies every time I wanted to use the bathroom. Witnessing adoptive parents hold their child for the first time was really something special.";
                    $("#bubble").html(string);
                    break;
                case "tutor":
                    string = "<h4>tutor</h4>";
                    string += "<div id='duration'><i>Sep 2012 - May 2013</i></div>";
                    string += "Teaching D1 athletes how to do their statistics homework.";
                    $("#bubble").html(string);
                    break;
                case "vmi":
                    string = "<h4>clerk</h4>";
                    string += "<div id='duration'><i>Jul 2009 - Aug 2009</i></div>";
                    string += "Filing stuff at a metal warehouse. Fun to spend the summer working at the same place as my dad :)";
                    $("#bubble").html(string);
                    break;
                case "bakerssquare":
                    string = "<h4>hostess/cashier</h4>";
                    string += "<div id='duration'><i>Jul 2008 - Aug 2008</i></div>";
                    string += "My first real job, working at a pie shop back when I didn't like pies. It was short-lived; one day I showed up to work and the manager was standing outside locked doors handing out final paychecks. Pretty sad :(";
                    $("#bubble").html(string);
                    break;
                case "nuscs":
                    string = "<h4>administrative assistant</h4>";
                    string += "<div id='duration'><i>Jan 2011 - Jun 2011</i></div>";
                    string += "I honestly don't remember anything about this job other than that it was my first in college and that I tried to read astronomy research on the commute to work.";
                    $("#bubble").html(string);
                    break;
                case "ymca":
                    string = "<h4>accounting clerk</h4>";
                    string += "<div id='duration'><i>Jun 2012 - Jun 2013</i></div>";
                    string += "Helping with some of the administrative accounting tasks in a tiny financial department. One of my desks was in a little window nook, and the other one was inside a file closet. Yay, non-profits!";
                    $("#bubble").html(string);
                    break;
                case "pegasus":
                    string = "<h4>assistant referee</h4>";
                    string += "<div id='duration'><i>Apr 2007 - Jun 2010</i></div>";
                    string += "Running soccer sidelines and dealing with parents who are over-invested in their children's sports games.";
                    $("#bubble").html(string);
                    break;
                case "nuim":
                    string = "<h4>referee</h4>";
                    string += "<div id='duration'><i>Mar 2011 - Jun 2013</i></div>";
                    string += "Finally gaining the courage to be the center ref in soccer and learning how to officiate volleyball and floor hockey.";
                    $("#bubble").html(string);
                    break;
		case "farmhand":
                    string = "<h4>farmhand</h4>";
                    string += "<div id='duration'><i>Mar 2011 - Jun 2013</i></div>";
                    string += "Working with goats, sheep, rabbits, ducks, chicken, pigs, and dogs in rural Alaska.";
                    $("#bubble").html(string);
                    break;

                //

                case "finkel":
                    string = "<h4>research assistant</h4>";
                    string += "<div id='duration'><i>Sep 2013 - Jun 2014</i></div>";
                    string += "Doing research in the Self Control and Relationships Lab was basically my favorite thing ever. We got to observe freshman on blind dates and teach our confederates how to flirt. Super good times.";
                    $("#bubble").html(string);
                    break;
                case "psych":
                    string = "<h4>research assistant</h4>";
                    string += "<div id='duration'><i>Jan 2013 - Jun 2013</i></div>";
                    string += "Helping with research in the Cognition and Motivation Lab. Mostly I sat in a room with a video camera and was instructed not to smile or be nice to people in order to induce and observe anxiety.";
                    $("#bubble").html(string);
                    break;
                case "math":
                    string = "<h4>teaching assistant</h4>";
                    string += "<div id='duration'><i>Sep 2009 - Jun 2010</i></div>";
                    string += "Teaching high school freshmen how to do algebra, which sometimes involved using the numbers on the football players' jerseys for in-class demos.";
                    $("#bubble").html(string);
                    break;
                case "dhs":
                    string = "<h4>deerfield high school</h4>";
                    string += "<div id='duration'><i>Sep 2006 - Jun 2010</i></div>";
                    string += "Nearly straight-A student, but still not in the top 10% of my graduation class. Go Warriors!";
                    $("#bubble").html(string);
                    break;
                case "nu":
                    string = "<h4>northwestern university</h4>";
                    string += "<div id='duration'><i>Sep 2010 - Jun 2014</i></div>";
                    string += "Meow meow meow meow meow go kitty 'Cats! Though I graduated with a BA in Psychology and Economics, I spent a good portion of undergrad studying Statistics. I was also one class away from completing a minor in Environmental Policy, but decided to finish my Business minor instead.";
                    $("#bubble").html(string);
                    break;
                case "caruso":
                    $("#carusofade").mouseover();
                    string = "<h4>caruso middle school</h4>";
                    string += "<div id='duration'><i>Sep 2005 - Jun 2006</i></div>";
                    string += "We'll begin this timeline journey in 8th grade, because that felt like the first time I had the responsibility to make consequential decisions in my life. Go Bluejays!";
                    $("#bubble").html(string);
                    break;
                case "carusofade":
                    $("#caruso").mouseover();
                    alert('test');
                    break;
                //

                case "sai":
                    string = "<h4>sigma alpha iota</h4>";
                    string += "<div id='duration'><i>Apr 2011 - Jun 2014</i></div>";
                    string += "International Music Fraternity &#45; for women! Grateful for the opportunity I had to step outside my comfort zone and learn to sing in the all-members choir (Alto II), I gained the courage to spend a hot second in Ladies in Red, our no-audition a capella group. I also spent a year-long stint as Treasurer, and helped out here and there with crafty things. Love and roses!~";
                    $("#bubble").html(string);
                    break;
                case "goodkarma":
                    string = "<h4>good karma cafe</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2009</i></div>";
                    string += "The open mic night where all the cool angsty artsy kids and I hung out. I never performed anything, but I always had a lot of fun.";
                    $("#bubble").html(string);
                    break;
                case "actuary":
                    string = "<h4>actuary club</h4>";
                    string += "<div id='duration'><i>Jan 2011 - Mar 2013</i></div>";
                    string += "Boastful leader and co-founder of the Northwestern University Actuary Club. We had like 60 people on the mailing list but it fell apart after I decided I didn't want to be an actuary. Even still, the occasional alumnus who went off to Allstate will try to recruit in our Facebook group.";
                    $("#bubble").html(string);
                    break;
                case "earthworks":
                    string = "<h4>earthworks</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2010</i></div>";
                    string += "The environmental club. Cleaning up trash and cutting down invasive trees n stuff. Managed to become a co-president alongside three of my close friends. They're all doing a much better job of saving the world than I am, these days.";
                    $("#bubble").html(string);
                    break;
                case "numb":
                    string = "<h4>marching band</h4>";
                    string += "<div id='duration'><i>Sep 2010 - Jun 2014</i></div>";
                    string += "Cymbal player extraordinaire. Favorite memories include College Gameday (2013), winning the Gator Bowl (2013), a gnarly drum battle against Michigan (2012), an upset against Iowa (2010), and performances at Wrigley Field, Soldier Field, The United Center, and Millennium Park.";
                    $("#bubble").html(string);
                    break;
                case "dhsmb":
                    string = "<h4>marching band</h4>";
                    string += "<div id='duration'><i>Sep 2008 - Jun 2010</i></div>";
                    string += "Peer pressured into joining marching band by some of the upperclassmen, I found myself playing snare for two years. I gained some confidence when I had my first ever solo in the Homecoming game senior year.";
                    $("#bubble").html(string);
                    break;
                case "reach":
                    string = "<h4>reach</h4>";
                    string += "<div id='duration'><i>Sep 2007 - Jun 2008</i></div>";
                    string += "The drug and substance awareness club. I helped with a couple fundraisers. Sometimes there was food.";
                    $("#bubble").html(string);
                    break;
                case "volleyball":
                    string = "<h4>volleyball</h4>";
                    string += "<div id='duration'><i>Sep 2005 - Nov 2006</i></div>";
                    string += "One day I decided I wanted to play volleyball, so I tried out for the middle school team and wasn't half bad! I went on to play Club for a season and stopped playing after I made the B-team in high school. I still like to play for fun :)";
                    $("#bubble").html(string);
                    break;
                case "track":
                    string = "<h4>track</h4>";
                    string += "<div id='duration'><i>Jan 2007 - Jun 2007</i></div>";
                    string += "I attempted a season on the track team in defiance of soccer, which I'd gotten somewhat tired of. I hated track and the feeling of running aimlessly, but I was randomly good at triple jump, for which I competed on the JV and Varsity level.";
                    $("#bubble").html(string);
                    break;
                case "soccer":
                    string = "<h4>soccer</h4>";
                    string += "<div id='duration'><i>Sep 2000 - Jun 2010</i></div>";
                    string += "Preceeded by many years of AYSO, I spent 10 years playing for Pegasus Soccer Club, and a total of 4 years on various co-ed/JV/Varsity school teams. I spent most of my time as an outside mid, but also played in the goal for a long while. These days I enjoy a good pick-up game or rec league.";
                    $("#bubble").html(string);
                    break;
                case "percussion":
                    string = "<h4>percussion</h4>";
                    string += "<div id='duration'><i>Jan 2001 - Jun 2010</i></div>";
                    string += "A couple years in pit band, wind ensemble, orchestra winds, etc. One time I got to play in Disneyworld! Despite 9 or so years of playing, I never really learned how to read music.";
                    $("#bubble").html(string);
                    break;
                //

                case "qs":
                    string = "<h4>quantified self</h4>";
                    string += "<div id='duration'><i>Jul 2015 - present</i></div>";
                    string += "Quantified Self is an international organization of people who are interested in learning about themselves by tracking various aspects of their behavior. I've been a QS enthusiast and meetup presenter/attendee since 2013, and I began leading the Quantified Self Meetup in Chicago in the summer of 2015. More information can be found at quantifiedself.com and meetup.com/chicagoquantifiedself.";
                    $("#bubble").html(string);
                    break;
                    
                case "shelter":
                    string = "<h4>volunteer</h4>";
                    string += "<div id='duration'><i>Oct 2016 - present</i></div>";
                    string += "I volunteer once a week at a shelter for adult single women. Usually I man the front desk, buzzing people in and distributing supplies and signing off when the women are done with chores, so that the people with proper training can go make better use of their time while I'm there :)";
                    $("#bubble").html(string);
                    break;

                case "saic":
                    string = "<h4>School of the Art Institute of Chicago</h4>";
                    string += "<div id='duration'><i>Nov 2015 - present</i></div>";
                    string += "During a time when I was thinking about going back to grad school, I enrolled in a few non-credit courses at the Art Institute of Chicago for web development and design.";
                    $("#bubble").html(string);
                    break;

                case "driver":
                    string = "<h4>Driver</h4>";
                    string += "<div id='duration'><i>Jan 2016 - present</i></div>";
                    string += "I had such a positive experience being an rideshare passenger that I decided to turn the tables and get paid to have one-off interactions with strangers instead. I didn't do it super often, but it was a way fun way to mitigate the expenses of owning a car while meeting people that you're never obligated to talk to again.";
                    $("#bubble").html(string);
                    break;
                   }
	        }
	});
}

function isOverflowed(element){
    if ((element.scrollWidth - 2) >  $(element).innerWidth()) {
        return true;
    }
}

var alignHeight = 17; //height = 14, padding = 3;

var jan = 0/12;
var feb = 1/12;
var mar = 2/12;
var apr = 3/12;
var may = 4/12;
var jun = 5/12;
var jul = 6/12;
var aug = 7/12;
var sep = 8/12;
var oct = 9/12;
var nov = 10/12;
var dec = 11/12;

var getDate = new Date();
var today = getDate.getFullYear() + getDate.getMonth() / 12;

var beginDate = 2005 + sep;
var totalMonths = (today - beginDate) * 12;

var filler = ["", "filler", "filler", may + 1992, jun + 1992, true];

var aboutMe = [
	//["innerHTML", "className", "idName", "startTime", "endTime", new row? (boolean), "hovertext (point to a variable?)"]
	["robinwe.is&nbsp;&nbsp;", "me", "website", mar + 2015, today, true],
    ["dream&nbsp;&nbsp;", "me", "dream", apr + 2013, jul + 2014, true],
	["work&nbsp;&nbsp;", "me", "wrk", jan + 2015, oct + 2015, false],
	["context&nbsp;&nbsp;", "me", "context", jan + 2013, today, true],
	["spaghetti nest&nbsp;&nbsp;", "me", "spaghettinest", oct + 2012, sep + 2015, true],
	["books&nbsp;", "me", "books", jan + 2016, today, false],
    ["52 weeks&nbsp;&nbsp;", "me", "52weeks", sep + 2012, nov + 2013, true],
	["maestro&nbsp;&nbsp;", "me", "maestro", dec + 2013, jan + 2015, false],
    ["movies&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "me", "movies", jul + 2015, jul + 2016, false],
	["date&nbsp;&nbsp;&nbsp;", "me", "date", aug + 2012, oct + 2015, true],
    ["date2&nbsp;&nbsp;&nbsp;", "me", "date2", nov + 2015, today, false],
	["okanalytics&nbsp;&nbsp;", "me", "okc", jul+ 2012, jul + 2013, true],
	["sorry&nbsp;&nbsp;", "me", "sorry", aug + 2013, jun + 2014, false],
	["emotions&nbsp;&nbsp;", "me", "emotions", jul + 2014, today, false],
    ["texts/memos&nbsp;&nbsp;", "me", "texts", jun + 2012, today, true],
	["journey of a bird&nbsp;&nbsp;", "me", "journal", dec + 2005, today, true],
	["identity/ghostship", "me", "ghostship", nov + 2013, today, true],

	filler,

	["hostess&nbsp;&nbsp;", "work", "bakerssquare", jul + 2008, aug + 2008, false],
	["assistant&nbsp;&nbsp;", "work", "nuscs", jan + 2011, jun + 2011, false],
	["clerk&nbsp;&nbsp;", "work", "ymca", jun + 2012, jun + 2013, false],
	["cry&nbsp;&nbsp;", "me", "cry", feb + 2014, oct + 2015, false],
	["assistant referee&nbsp;&nbsp;", "work", "pegasus", apr + 2007, jun + 2010, true],
	["referee&nbsp;&nbsp;", "work", "nuim", mar + 2011, jun + 2013, false],
	["developer and designer&nbsp;&nbsp;", "work", "mcm", sep + 2014, mar + 2017, true],
	["farmhand&nbsp;&nbsp;", "work", "farmhand", apr + 2017, today, false],
	["program coordinator&nbsp;&nbsp;", "work", "cia", jun + 2013, sep + 2013, false],
	["assistant&nbsp;&nbsp;", "work", "cradle", jun + 2011, jun + 2012, false],
	["tutor&nbsp;&nbsp;", "work", "tutor", sep + 2012, may + 2013, false],
	["clerk&nbsp;&nbsp;", "work", "vmi", jul + 2009, aug + 2009, false],

	filler,

        ["driver&nbsp;&nbsp;", "work", "driver", dec + 2015, mar + 2017, false],
	["ra&nbsp;&nbsp;", "college", "finkel", sep + 2013, jun + 2014, true],
	["ra&nbsp;&nbsp;", "college", "psych", jan + 2013, jun + 2013, false],
	["ta&nbsp;&nbsp;", "hs", "math", sep + 2009, jun + 2010, false],
	["deerfield high school&nbsp;&nbsp;", "hs", "dhs", sep + 2006, jun + 2010, true],
	["northwestern university&nbsp;&nbsp;", "college", "nu", sep + 2010, jun + 2014, false],
	//["", "fade", "carusofade", jun + 2005, oct + 2005, false],
	["&laquo;&nbsp;CARUSO&nbsp;&nbsp;", "hs", "caruso", sep + 2005, jun + 2006, false],
    ["saic&nbsp;&nbsp;&nbsp;", "adult", "saic", nov + 2015, apr + 2016, false],

	filler,

    ["quantified self&nbsp;&nbsp;", "adult", "qs", jun + 2015, mar + 2017, false],
  ["volunteer&nbsp;&nbsp;", "adult", "shelter", oct + 2016, mar + 2017, true],
	["sigma alpha iota&nbsp;&nbsp;", "college", "sai", apr + 2011, jun + 2014, false],
	["good karma&nbsp;&nbsp;", "hs", "goodkarma", sep + 2007, jun + 2009, false],
	["actuary club&nbsp;&nbsp;", "college", "actuary", jan + 2011, mar + 2013, true],
	["earthworks&nbsp;&nbsp;", "hs", "earthworks", sep + 2007, jun + 2010, false],
	["marching band&nbsp;&nbsp;", "college", "numb", sep + 2010, jun + 2014, true],
	["marching band&nbsp;&nbsp;", "hs", "dhsmb", sep + 2008, jun + 2010, false],
	["reach&nbsp;&nbsp;", "hs", "reach", sep + 2007, jun + 2008, false],
	["&laquo;&nbsp;volleyball&nbsp;&nbsp;", "hs", "volleyball", sep + 2005, nov + 2006, false],
	//["", "fade", "volleyballfade", jun + 2005, oct + 2005, false],
	["track&nbsp;&nbsp;", "hs", "track", jan + 2007, jun + 2007, false],
	["&laquo;&nbsp;percussion&nbsp;&nbsp;", "hs", "percussion", sep + 2005, jun + 2010, true], // actually started in 3rd grade, not 6th grade
	//["", "fade", "percussionfade", jun + 2005, oct + 2005, false],
	["&laquo;&nbsp;soccer&nbsp;&nbsp;", "hs", "soccer", sep + 2005, jun + 2010, true], //apr 2000 start?
	//["", "fade", "soccerfade", jun + 2005, oct + 2005, false],
	
	filler,
	
	//["&laquo;", "tick", "2005tick", 2005, 2006, true],
	["PAST", "timeline", "2005", 2005, 2006, true],
	["|", "tick", "2006tick", 2006, 2007, false],
	["2006", "timeline", "2006", 2006, 2007, false],
	["|", "tick", "2007tick", 2007, 2008, false],
	["2007", "timeline", "2007", 2007, 2008, false],
	["|", "tick", "2008tick", 2008, 2009, false],
	["2008", "timeline", "2008", 2008, 2009, false],
	["|", "tick", "2009tick", 2009, 2010, false],
	["2009", "timeline", "2009", 2009, 2010, false],
	["|", "tick", "2010tick", 2010, 2011, false],
	["2010", "timeline", "2010", 2010, 2011, false],
	["|", "tick", "2011tick", 2011, 2012, false],
	["2011", "timeline", "2011", 2011, 2012, false],
	["|", "tick", "2012tick", 2012, 2013, false],
	["2012", "timeline", "2012", 2012, 2013, false],
	["|", "tick", "2013tick", 2013, 2014, false],
	["2013", "timeline", "2013", 2013, 2014, false],
	["|", "tick", "2014tick", 2014, 2015, false],
	["2014", "timeline", "2014", 2014, 2015, false],
	["|", "tick", "2015tick", 2015, 2016, false],
  ["2015", "timeline", "2015", 2015, 2016, false],
  ["|", "tick", "2016tick", 2016, 2017, false],
  ["2016", "timeline", "2016", 2016, 2017, false],
  ["|", "tick", "2017tick", 2017, 2018, false],
	["PRESENT", "timeline", "2017", 2017, 2018, false]
];

var setWidth = function(entryStartTime, entryEndTime) {
	var monthsBetweenStartAndEnd = (entryEndTime - entryStartTime) / (1/12);
	var width = monthsBetweenStartAndEnd / totalMonths;
	return width * 100;
};

var setLeft = function(entryStartTime) {
	var monthsBetweenStartAndEntry = (entryStartTime - beginDate) / (1/12);
	var leftPadding = (monthsBetweenStartAndEntry / totalMonths);
	return leftPadding * 100;
};

var innerHTML = function(index) {
	var myInnerHTML = aboutMe[index][0];
	return myInnerHTML;
};

var className = function(index) {
	var myClassName = aboutMe[index][1];
	return myClassName;
};

var idName = function(index) {
	var myIdName = aboutMe[index][2];
	return myIdName;
};

var beginTime = function(index) {
	var myBeginTime = aboutMe[index][3];
	return myBeginTime;
};

var endTime = function(index) {
	var myEndTime = aboutMe[index][4];
	return myEndTime;
};

