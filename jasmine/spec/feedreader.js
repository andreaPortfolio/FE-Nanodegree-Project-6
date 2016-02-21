/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('url defined', function() {
      //for loop for check all feeds url
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).not.toBe(0);
      }

    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('name defined', function() {
      //for loop for check all feeds name
      for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name).not.toBe(0);
      }

    });
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */
    it('menu hidden', function() {

      expect((document.body.className === 'menu-hidden')).toBe(true);

    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

    it('menu clicked', function() {
      var menuIcon = document.getElementsByClassName('menu-icon-link'); //get element by class
      var count = 0; //set counter
      var state = 'close'; // set initial state
      menuIcon[0].addEventListener('click', function() {
        count++;
        //check if menu is open or not
        if (count % 2 !== 0) {
          state = 'open';
        } else {
          state = 'close';
        }
      });
      expect((state === 'close')).toBe((document.body.className === 'menu-hidden'));
      expect((state === 'open')).toBe((document.body.className !== 'menu-hidden'));

    });

  });
  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      //load asynchronous feeds
      loadFeed(0, done);
    });

    it('entry test', function() {
      //check if entry is greater than 0
      expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);


    });

  });

  /* TODO: Write a new test suite named "New Feed Selection"

      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
  describe('New Feed Selection', function() {
    //get entry className
    var title = document.getElementsByClassName('entry');
    //empty title content
    title.textContent = '';

    beforeEach(function(done) {
      //load asynchronous feeds
      loadFeed(0, function() {
        done();
      });
    });
    //check if title content now is greather than 0
    it('entry changed', function() {
      expect(title.length > 0).toBe(true);
    });


  });

}());
//for loop for check all feeds name
