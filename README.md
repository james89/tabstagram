tabstagram
==========

###Overview###
*Tabstagram* is a Google Chrome Extension that changes the default 'new tab page' with a dynamically generated page of images pulled from your Instagram feed. The user will be able to see his/her feed by just opening a new window/tab in Chrome. He/she can also change the feed to include custom hashtags.

The feed will be in a 'masonry' type layout that spans the entire window.

###User Stories###
As a new user, I will grant the extension permission to access my Instagram account on my behalf.

As a user, I will expect to see my instagram feed by default when I open a new tab.

As a user, I can change my feed preferences to include custom hashtags as well in my new tab window.


###Phases###
1. Pull just the feed and display in masonry layout
  * Implement user authentication (using just client-side auth process, refer to Instagram API docs)
  * Successfully retrieve user feed image data through Instagram API and append it to a page

2. Pull custom hashtag images and display in masonry layout
  * retrieve images under multiple specific hashtags
  * allow user to input custom hashtags and roll that info into the API request

3. Make it look pretty.
  * Jquery Isotope plugin?


| Phase         | Completion Date |
| ------------- |:-------------:|
| 1    |  SATURDAY |
| 2     | SUNDAY EVENING  |
| 3     | TUESDAY     |

