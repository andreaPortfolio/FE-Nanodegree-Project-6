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
    /* Tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    //create function for check feed url and name
    function testInitialFeed(feed) {

      it('url defined of feed ' + feed, function() {
        //loop for check all feeds url
        expect(allFeeds[feed].url).toBeDefined();
        expect(allFeeds[feed].url).not.toBe('');
      });

      it('url integrity of feed ' + feed, function() {
        //check intergrity of urls
        expect(allFeeds[feed].url).toMatch(/^http(s?)\:\/\//);
      });

      it('name defined of feed ' + feed, function() {
        //for loop for check all feeds name

        expect(allFeeds[feed].name).toBeDefined();
        expect(allFeeds[feed].name).not.toBe('');
      });
    }
    //loop every feeds
    for (var feed = 0; feed < allFeeds.length; feed++) {
      testInitialFeed(feed);
    }
  });

  describe('The menu', function() {
    //test that ensures the menu element is hidden by default.

    var menuVisibility,
        menuIcon;


    it('is hidden by default', function() {
      menuVisibility = document.body.classList.contains('menu-hidden'); //check if menu-hidden class exiest
      expect(menuVisibility).toBeTruthy();

    });

    //test that ensures the menu changes visibility when the menu icon is clicked
    it('when is clicked chenge is visibility', function() {
      menuIcon = document.getElementsByClassName('menu-icon-link'); //get element by class
      menuIcon[0].click(); //open menu
      expect(document.body.classList.contains('menu-hidden')).toBeFalsy();
      menuIcon[0].click(); //close menu
      expect(document.body.classList.contains('menu-hidden')).toBeTruthy();

    });

  });

  describe('Initial Entries', function() {
    /*  test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('there shuold be at least a single entry element', function() {
      //check if entry is greater than 0
      expect(document.getElementsByClassName('entry').length).toBeGreaterThan(0);

    });

  });

  /* Test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   */
  describe('New Feed Selection', function() {

    var initialTitle,
        currentTitle;

    beforeEach(function(done) {
      loadFeed(0, function() {
        //set content
        initialTitle = document.getElementsByClassName('entry')[0].getElementsByTagName('h2')[0].innerText;
        loadFeed(1, function() {
          //set content
          currentTitle = document.getElementsByClassName('entry')[0].getElementsByTagName('h2')[0].innerText;
          done();
        });
      });
    });

    it('content actually changes', function() {
      //check if previus content is different from current content
      expect(initialTitle).not.toMatch(currentTitle);
    });
  });

}());
