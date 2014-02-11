var object = new Meteor.Collection('article');
var minified = null;
var add = false;
var counter = 0;

function initialize()
	{	
		object.insert({Title:'HOSTED ON GITHUB', Dates: 'JULY 15, 2012', Sub: 'WHY AND HOW I NOW HOST ALL MY PROJECTS ON GITHUB ', Mini: 'Last week I popped open an outdated version of Filezilla, looked up FTP credentials for my ancient 1&1 hosting in a Google spreadsheet, then proceeded to overwrite every remote file because I couldn\'t remember what was up-to-date. Fixing my hosting and deploy process was on my todo list for months, but it consistently took a backseat to sexier projects. I\'m happy to announce I finally addressed it and am now 100% hosted on Github.',Delta:' <article class="art simple">        <div class="art-body">          <div class="art-body-inner">            <p>Last week I popped open an outdated version of Filezilla, looked up FTP credentials for my ancient 1&amp;1 hosting in a Google spreadsheet, then proceeded to overwrite every remote file on my site because I couldnt remember what was up-to-date. Then I cried. Deeply. <p>Fixing my hosting and deploy process has been on my todo list for months, but somehow consistently took a backseat to sexier projects. Im happy to announce I finally addressed it and am now 100% hosted on Github.</p><h3 class="art-subhead">Why its awesome</h3><ul>  <li>The deploy process is fantastically simple. I just push to a gh-pages branch and its live in seconds.</li>  <li>My version control and hosting are the same platform. This makes handling changes a snap.</li>  <li>Easy deploys mean Im more likely to address bugs/issues in a timely manner.</li>  <li>Its free (unless you want private repositories).</li></ul><h3 class="art-subhead">The limitation</h3> <p>Github pages only serve vanilla HTML/CSS/JS, meaning if your project requires server-side scripting or a traditional database, youre out of luck. That said, greater numbers of projects and libraries are adopting compiled static assets and heavy client-side logic, so hopefully this isnt a crippling contrainst for most.</p><h3 class="art-subhead">Get up and running with Github hosting</h3><ol>  <li>Create a branch off an existing github repo, name it "gh-pages", and push</li>  <li>Visit <em>yourGithubUsername.github.com/reponame</em> and voila!</li>  <li>Touse a custom domain follow <a href="https://help.github.com/articles/setting-up-a-custom-domain-with-pages">Githubs instructions</a>, but it basically requires placing a CNAME file in the root of the repo that points to a custom URL, then setting the matching domains A-record to </li></ol><h3 class="art-subhead">Deploying in style</h3><p>If your site is raw HTML/CSS/JS, deploying is as simple as merging any new changes from a working branch into the gh-pages branch and pushing. Youre done. Changes to your site will be reflected almost immediately. </p> <p>There are some more complicated situations though. For example, the blog youre reading has Ruby source files that are compiled to create static HTML/CSS<sup>1</sup>. Since Github hosting doesnt support running Ruby, my gh-pages branch must be only the static HTML/CSS. Thus, my master branch is the Ruby source, while the gh-pages branch is only the compiled HTML/CSS.</p><p>The challenge then becomes how to merge newer, compiled files from the source branch into the gh-pages branch to be published? The brute force option would be for me to check out 2 instances of the "davegamache.com" repo, one on the master branch and the other on the gh-pages branch. I could work exclusively in the master branch and then drag-and-drop the updated, compiled site into the gh-pages instance when I was ready to publish.</p> <p>While the copy-pasta approach absolutely works, I wanted something a bit less kludgy that didnt require me to check out multiple instances of a repo. My solution was to write a bash script<sup>2</sup> that did the work for me. Heres what it does:</p><ol>  <li>Copies the compiled HTML/CSS from master into a temp directory outside the repo</li>  <li>Switches to the gh-pages branch and replaces old files with new ones</li>  <li>Does a git add -A to add any new files</li>  <li>Runs a git status so I know exactly whats changed before I push live</li></ol><p style="margin-bottom: 10px">Heres the alias in full:</p><p>I have a similar alias for my Skeleton project. I keep source files in the master branch, while the documentation code lives in the gh-pages branch.  Since the docs are built on the source (with some additional custom CSS), I use an alias to keep the docs up-to-date with the true Skeleton source from the master branch.</p><h3 class="art-subhead">I love my new workflow</h3><p>Using Github as a hosting provider is amazing. If you have projects built with vanilla HTML/CSS/JS (or that compile to static code), I strongly suggest giving Github pages a chance. Combining version control with hosting seems like a no brainer in retrospect. Since version control already means pushing files to a remote server, why not use that same system to deploy the whole site to a remote server?</p> <p class="callout">Faster, simpler, semi-automated deploys means I get to focus on the fun stuff like designing, writing and coding.</p><ol class="art-reference">  <li>My blog is actually built on Jekyll, which is what Github pages is built on. If I didnt have custom Ruby plugins, Github would magically parse my repo.</li>  <li>Not familiar with your bash alias? Its basically a file that allows you to save terminal commands to shorthand aliases.</li></ol>   </div></div>     </article>>'});
		
		object.insert({Title:'CINDERBLOCK', Dates: 'JUNE 24, 2012', Sub:'A STRIPPED DOWN HTML/CSS BOILERPLATE FOR STARTING ANY PROJECT', Mini:'I always start personal projects from scratch. Well, almost from scratch. I made a super tiny boilerplate called Cinderblock that is the starting point for all my projects these days.', Delta: ' <article class="art simple">            <p class="art-subtitle">A stripped down HTML/CSS boilerplate for starting any project</p>          </div>        </header>        <div class="art-body">          <div class="art-body-inner">            <p>I always start personal projects from scratch. Well, almost from scratch. I made a super tiny boilerplate called Cinderblock that is the starting point for all my projects. I found myself constantly downloading <a href="http://www.getskeleton.com">Skeleton</a>, stripping out the grid, the favicons, extra JS and then getting started. After doing that 10 times, I created Cinderblock.</p><p>The whole project is:</p><ul><li><strong>index.html</strong>: Base HTML5 page with links to the local CSS, a handful of meta tags, the HTML5 shim and jQuery from a CDN, and the local app.js file.<li><strong>css</strong>: There are 2 files in here. Base.css has a basic reset and typography, while main.css is a blank document waiting for custom CSS.<li><strong>js</strong>: Contains only app.js which is only an empty self-executing jQuery wrapper (a "document ready" basically).<li><strong>img</strong>: An empty directory for future assets</ul><p>If you\'re interested, <a href="https://github.com/dhgamache/Cinderblock">check out the source on Github</a> or download it straight from the <a href="http://dhgamache.github.com/Cinderblock/">landing page for Cinderblock</a>.</p>          </div>        </div>      </article>'});
		
		object.insert({Title : 'CRAFTMANSHIP', Dates: 'February 22, 2012',Sub:'Follow your dreams, never settle and do what makes you happy.',Mini:'The best advice Ive ever received was "do what makes you happy." The simple adage has become my manifesto. The things you do on a daily basis are going to be what matters in the long run, so enjoy every day.',Delta:'<article class="art ">  <p><strong>Below is an unedited stream of my thoughts on happiness.</strong> I usually enjoy writing and publishing well-articulated thoughts, but my usual process felt wrong for the subject. Instead of outlining, drafting, writing, editing and proofreading an article about being happy and adventurous, I hammered away in a text document for a half-hour and straight-up pasted the resulting stream of conscious (with a couple line breaks and some bolding of course).</p><h3 class="art-subhead">My thoughts on happiness &amp; life</h3><p><strong>The best advice Ive ever received was "do what makes you happy."</strong> The simple adage has become my manifesto. The things you do on a daily basis are going to be what matters in the long run, so enjoy every day.</p><p><strong>Complacency is the enemy of adventure, innovation, progress, and fun.</strong> Chase your passion and your dreams. If you love what you do, others will love appreciating what you do. Learn new things. Explore.</p> <p><strong>Reflect on yourself.</strong> Feedback is one of the most important processes in creating anything great, and your life is no different. Take time to reflect on yourself, what youre doing and what you want to be doing. We inundate our days with menial (but often necessary) tasks like emails, laundry, calls, cleaning, etc. Stop focusing on the immediate problems and give the bigger picture some thought. Schedule time alone to think about yourself and if what youre doing is exactly what you want to be doing. Think about the things that make you happy and do them more often. Make changes in your own life. They dont have to be drastic (although they sometimes should be), but at least reflect and work towards what you want to be.</p><p><strong>Take a moment and realize youre in control of your own life.</strong> Odds are, no one is stopping you from doing what you want. Stop going through the motions every day and take control of your life. Waking up at 8AM, going to work, coming home at 6PM, watching TV for 2 hours and going to bed is fine routine, but shake it up and get out of your comfort zone more often.</p> <p><strong>Dont ever settle.</strong> If you dont wake up most mornings pumped to be alive, youre doing it wrong.</p></p><strong>Chase the girl youre secretly in love with</strong>, or if you already have her, stop letting other things take priority and let her know how you feel. Take her out, treat her right and travel the world.<sup>1</sup></p><p><strong>Stop saving all your money for retirement</strong>. By the time you retire you wont be able to do half the things you want and everything will ache - do it today, just dont be reckless.</p><p><strong>Learn to care less about what others think.</strong> You wanna wear that blazer because you think you look like a boss - do it. You quietly enamored with the girl from finance - ask her to get coffee. Tired at 7PM - go to sleep. Not tired - get in your car and enjoy the night. Im not suggesting you live by impulsive action, but be confident and fearless. Nobody laughs at someone who does exactly what they want, and if they do, its to hide their jealousy. Stop striving to please others. Dont stress out about pleasing your parents, friends, family, teachers, or coworkers. Learn to make yourself proud and your success will be organic. Youll find you have high expectations of yourself for things you care about.</p><h3 class="art-subhead">Find happiness every day</h3><p>Focus on what makes you happy on a daily basis. Life is short, so enjoy it and never regret anything that makes you ile.<sup>2</sup>hat you did yesterday, determines what youre doing today, which defines who you are tomorrow. </p><ol class="art-reference"><li>This is also true for you ladies. Chase the man of your dreams and treat him right.</li><li>An adapted Mark Twain quote</li></ol>        </div>        </div>     </article>'});
	
}

if (Meteor.isClient) {
	
	
		
	Meteor.startup(function () {
		
		$.address.externalChange(function (event) {
		var request = event.value;
		//console.info(request);	
		if(request =='/top')
		{ return }
		request = request.substr(1,request.length-6);
		
		
		if(request =='article')
		{
			showArticleList();
			$.address.title('Article');
			//console.info('article');
		}
		else if(request == 'addarticle')
		{
			$('#text-title').val('');
			$('#text-date').val('');
			$('#text-subtitle').val('');
			$('#text-detailed').val('');	
			$('#text-mini').val('');
			showEditArticle();
			$.address.title('Add Article');
			//console.info('addarticle');
		}
		else if(request == 'editarticle')
		{
			alert('Restricted Edit Access. \n Redirecting to Home Page');
			showIndex();
			$.address.title('Home Page');
		}	
		else if(request =='index')
		{
			showIndex();
			$.address.title('Home Page');
		}
		else
		{
			var url= Url(request);
			
			cursor = object.find({Title:url});
			if(cursor.count()==0)
			{Meteor.call('foo',url, function (one,index) {
				
				if(index == 0 )
				{
					showIndex();
					$.address.title('Home Page');
					//console.info('rinting 0');
				}
				else
				{
					showArticle();
					$.address.title(index.Title);
					$('#article-date').text(index.Dates);
					$('#article-titles').text(index.Title);
					$('#article-subtitle').text(index.Sub);
					$('#article-detailed').html(index.Delta);
					//console.info(x.Title +' first');
				}
			});
			}
			
			else
			{			
				showArticle();
				
				cursor.forEach(function (index){
				
					$.address.title(index.Title);
					$('#article-date').text(index.Dates);
					$('#article-titles').text(index.Title);
					$('#article-subtitle').text(index.Sub);
					$('#article-detailed').html(index.Delta);
						//console.info(index.Title);
				});
			}
		}
			
	});
	
	$('#previous').click(function () {
		
		title = $('#article-titles').text();
		cursor = object.find({}, {sort: {Title:1}});
		
		var current = null , next = null , previous = null;
		
		cursor.forEach(function (index) {
			previous = current;
			current = index;
			if(current.Title == title )
			{
				if(previous!=null)
				{
					$('#article-date').text(previous.Dates);
					$('#article-titles').text(previous.Title);
					$('#article-subtitle').text(previous.Sub);
					$('#article-detailed').html(previous.Delta);
					Url(previous.Title);
				}
			}
		});
	});
	
	$('#next').click(function () {
		title = $('#article-titles').text();
		cursor = object.find({}, {sort: {Title:1}});
		var checker = false;
		cursor.forEach(function (index) {
			
			if(checker == true)
			{
				$('#article-date').text(index.Dates);
				$('#article-titles').text(index.Title);
				$('#article-subtitle').text(index.Sub);
				$('#article-detailed').html(index.Delta);
				Url(index.Title);
				checker = false;
			}
			if(index.Title == title)
			{checker = true;}	
			
		});
	});
	

	
});

	
	
	function showIndex()
	{
		$('#scenario').show();
		$('#addition').show();		
		$('#article-list').hide();
		$('#article').hide();
		$('#edit-article').hide();
		$('#previous-next').hide();
		$.address.title('Home Page');
		$.address.path('/index.html');
	}
	
	function showArticleList()
	{
		$('#scenario').hide();
		$('#addition').hide();
		$('#article-list').show();
		$('#article').hide();
		$('#edit-article').hide();
		$('#previous-next').hide();
		$.address.title('Article List');
		$.address.path('/article.html');
	}
	
	function showArticle()
	{
		$('#scenario').hide();
		$('#addition').hide();
		$('#article-list').hide();
		$('#article').show();
		$('#edit-article').hide();
		$('#previous-next').show();		
	}
	
	function showEditArticle()
	{
		$('#scenario').hide();
		$('#addition').hide();
		$('#article-list').hide();
		$('#article').hide();
		$('#edit-article').show();
		$('#previous-next').hide();
	}
	
	//object.insert({Title:'one', Dates: 'two', Mini: 'three', Details: ''});
	
	Template.allarticle.objecting = function () {
		
		return object.find({},{sort : {Title:1}});		
	}
	
	Template.main.rendered = function () {
		$('#addition').html('<article class="art ">  <p><strong>Below is an unedited stream of my thoughts on happiness.</strong> I usually enjoy writing and publishing well-articulated thoughts, but my usual process felt wrong for the subject. Instead of outlining, drafting, writing, editing and proofreading an article about being happy and adventurous, I hammered away in a text document for a half-hour and straight-up pasted the resulting stream of conscious (with a couple line breaks and some bolding of course).</p><h3 class="art-subhead">My thoughts on happiness &amp; life</h3><p><strong>The best advice Ive ever received was "do what makes you happy."</strong> The simple adage has become my manifesto. The things you do on a daily basis are going to be what matters in the long run, so enjoy every day.</p><p><strong>Complacency is the enemy of adventure, innovation, progress, and fun.</strong> Chase your passion and your dreams. If you love what you do, others will love appreciating what you do. Learn new things. Explore.</p> <p><strong>Reflect on yourself.</strong> Feedback is one of the most important processes in creating anything great, and your life is no different. Take time to reflect on yourself, what youre doing and what you want to be doing. We inundate our days with menial (but often necessary) tasks like emails, laundry, calls, cleaning, etc. Stop focusing on the immediate problems and give the bigger picture some thought. Schedule time alone to think about yourself and if what youre doing is exactly what you want to be doing. Think about the things that make you happy and do them more often. Make changes in your own life. They dont have to be drastic (although they sometimes should be), but at least reflect and work towards what you want to be.</p><p><strong>Take a moment and realize youre in control of your own life.</strong> Odds are, no one is stopping you from doing what you want. Stop going through the motions every day and take control of your life. Waking up at 8AM, going to work, coming home at 6PM, watching TV for 2 hours and going to bed is fine routine, but shake it up and get out of your comfort zone more often.</p> <p><strong>Dont ever settle.</strong> If you dont wake up most mornings pumped to be alive, youre doing it wrong.</p></p><strong>Chase the girl youre secretly in love with</strong>, or if you already have her, stop letting other things take priority and let her know how you feel. Take her out, treat her right and travel the world.<sup>1</sup></p><p><strong>Stop saving all your money for retirement</strong>. By the time you retire you wont be able to do half the things you want and everything will ache - do it today, just dont be reckless.</p><p><strong>Learn to care less about what others think.</strong> You wanna wear that blazer because you think you look like a boss - do it. You quietly enamored with the girl from finance - ask her to get coffee. Tired at 7PM - go to sleep. Not tired - get in your car and enjoy the night. Im not suggesting you live by impulsive action, but be confident and fearless. Nobody laughs at someone who does exactly what they want, and if they do, its to hide their jealousy. Stop striving to please others. Dont stress out about pleasing your parents, friends, family, teachers, or coworkers. Learn to make yourself proud and your success will be organic. Youll find you have high expectations of yourself for things you care about.</p><h3 class="art-subhead">Find happiness every day</h3><p>Focus on what makes you happy on a daily basis. Life is short, so enjoy it and never regret anything that makes you ile.<sup>2</sup>hat you did yesterday, determines what youre doing today, which defines who you are tomorrow. </p><ol class="art-reference"><li>This is also true for you ladies. Chase the man of your dreams and treat him right.</li><li>An adapted Mark Twain quote</li></ol>        </div>        </div>     </article><hr>');
	};
	Template.main.events = ({
	
		'click #article-link' : function () {
			showArticleList();
			
		},
		'click #logo' : function () {
			showIndex();
			$.address.path('/index.html');
		}
	});
	
	Template.allarticle.events = ({
	
		'click #article-link' : function () {
			$.address.path('/article.html');
			showArticleList();
			
		},
		'click #logo' : function () {
			showIndex(); 
			$.address.path('/index.html');			
		},
		'click #add-link' : function () {
			add = true;
			showEditArticle();
			$.address.path('/addarticle.html');
			$.address.title('Add New Articel');
			$('#text-title').val('');
			$('#text-date').val('');
			$('#text-subtitle').val('');
			$('#text-detailed').val('');	
			$('#text-mini').val('');
		}
		
		
	});
	
	Template.article.events = ({
		
		'click #article-link' : function () {
			$.address.path('/article.html');
			showArticleList();
		},
		'click #logo' : function () {
			showIndex(); 
			$.address.path('/index.html');
		},
		'click #edit-logo' : function () {
			add = false;
			showEditArticle();
			
			$.address.path('/editarticle.html');			
			title = $('#article-titles').text();
			cursor = object.find({Title : title});
			cursor.forEach ( function (index) {
				$.address.title('Edit ' +index.Title);
			$('#edit').attr('type',index._id);
			$('#text-title').val(index.Title);
			$('#text-date').val(index.Dates);
			$('#text-subtitle').val(index.Sub);
			$('#text-detailed').val($('#article-detailed').html());
			$('#text-mini').val(index.Mini);	
			
			
				
			//console.info('df');
			});
		}
		
	});
	
	Template.onearticle.events =({
		
		'click #article-title' : function () {
			showArticle();
			//cursor = object.find({_id:this._id});
			//console.info(this.Delta);
			Url(this.Title);
			
			
			$('#article-date').text(this.Dates);
			$('#article-titles').text(this.Title);
			$('#article-subtitle').text(this.Sub);
			$('#article-detailed').html(this.Delta);
			
		}
		
	});
	
	Template.editarticle.events = ({
		
		'click #article-link' : function () {
			$.address.path('/article.html');
			showArticleList();
		},
		'click #saveButton' : function () {
			
			var title = $('#text-title').val();
				var date = $('#text-date').val();
				var subtitle = $('#text-subtitle').val();
				var detailed = $('#text-detailed').val();	
				minified = $('#text-mini').val();				
				
			if(add)
			{
				object.insert({Title : title, Dates : date, Sub : subtitle,  Delta : detailed, Mini : minified});
				add = false;
			}
			else
			{
				var id = $('#edit').attr('type');
				object.update({_id : id},{Title : title, Dates : date, Sub : subtitle, Delta : detailed, Mini: minified});
				//console.info(id);
			}
			showArticleList();
		},
		'click #logo' : function () {			
			showIndex(); 
			$.address.path('/index.html');
			$.address.title('Home Page');
		}	
	});	
	
	function Url(Title)
	{
		var url='';
			var c='';
			var checkpoint = false;
			for(i=0;i<Title.length;i++)
			{
				c = Title.charAt(i);
				if( c ==' ')
				{url+='_'}
				else if(c == '_')
				{
					url+=' ';
					checkpoint = true;
				}
				else
				{url+=c;}				
			}
			if(!checkpoint)
			{$.address.path('/' +url +'.html');}
			$.address.title(url);
			return url;
	}

}

if (Meteor.isServer) {
  Meteor.startup(function () {
	 	 
	  object.remove({});
	 
	  initialize();
   		
	  Meteor.methods({
		 
	  	'foo' : function (title) {
			cursor = object.find({Title : title});
			if(cursor.count() == 0)
			{
				//console.log(0);
				return 0;
			}
			 cursor = object.findOne({Title : title});
			 
			// console.log('serer ' +cursor.Title);
			 return cursor;
		}
		
	  });
   	
  });
}
