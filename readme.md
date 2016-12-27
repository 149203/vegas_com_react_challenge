## Vegas.com React Markup Exercise

Author: [Mike Ziethlow](http://mikeziethlow.com/)

A live, working version can be found on my test site: http://ripmi.com/

### How to run

Clone or download the project.

In your terminal, type `npm install` while in the project's directory. 

Then type `npm start`.

### Case requirements

- [x] Style the site like the example, using assets provided
- [x] Functional tabs
- [x] Description is the default tab
- [x] Expandable and collapsible Description and Details section
- [x] Map marker and "Strip" text open the Location tab
- [x] Minimize all HTML, CSS, JS for production

### Markup Exercise vs. React Markup Exercise

I asked to do both exercises, though when I saw they were essentially the same if I chose to use React as my front-end framework, I focused on the React Markup Exercise. I understood all of the exercise except the Redux implementation. My experience has been with React + Meteor as opposed to React + Redux so I was behind in that regard. I could spend time learning Redux and have a Redux solution in a couple days, but I wanted to get the working app that I have in by the Tuesday deadline we discussed. The app as it stands meets all the requirements for the Markup Exercise and all but the Redux requirement for the React Markup Exercise. (Right now I'm simply importing the JSON.) I began work on the Redux application and have logged my progress in issue [#1](https://github.com/149203/vegas_com_react_challenge/issues/1).

### Extra

Since we discussed responsive web design on the phone, I made this design responsive -- viewable on all browsers and devices.

It is also SEO-optimized and will display nicely when shared on Facebook and Twitter. To test, enter my testing site [http://ripmi.com/](http://ripmi.com/) into the [Facebook Debugger](https://developers.facebook.com/tools/debug/sharing/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator).

The tabbed Details and Location sections also display `/details` and `/location` in the address bar for SEO and navigation optimization.

### Caveat

Because this design is responsive, there is some variation on the exact pixels and dimensions. On "large" and "extra large" screens, the design will match closely to the supplied screenshots. On smaller devices I just had it collapse the elements into a simple, readable design. Obviously, working with a designer on mobile first design would lend to better responsiveness.

The font Vegas.com appears to be using is "Mr. Eaves". Here I use "Josefin Sans" which is a close free alternative.

Also, hard-coding heights and widths won't work well in responsive design. (For example, a 200px height of an element may look tiny on large screens and overwhelmingly dominant on small screens.) I made the excerpt of the Description and Details page responsive (while matching the screenshots) by setting a variable in the code to handle whatever content comes from the API:

_Description.js_
```javascript
function excerpt() {
   // set the max_chars you want for excerpt; will trim to end of prior paragraph
   const max_chars = 800
   const chunk = description.slice(0, max_chars)
   const trimmed_desc = chunk.slice(0, chunk.lastIndexOf('\r\n\r\n'))
   return (
    <div>
       <p style={{ whiteSpace: 'pre-line' }}>
          {trimmed_desc}
       </p>
    </div>
   )
}
```

_Details.js_
```javascript
// set the max_details you want for excerpt
const max_details = 2
const first_details = details.slice(0, max_details)
const excerpt = first_details.map((detail, i) =>
  <DetailsItem detail={detail} key={i}/>
)
```

### Todo

There's always more work to be done on code. Here's what I would suggest doing if we had the time.


- [ ] Propagate data with Redux; see [#1](https://github.com/149203/vegas_com_react_challenge/issues/1)
- [ ] Use CSS modules.
- [ ] Throw out (instead of just minimizing) any unused Bootstrap SCSS. (Or roll our own responsive grid; though I'm assuming Vegas.com has its own grid.)
- [ ] Use production version of React.
- [ ] Refactor all JavaScript methods to use Lodash methods instead, and import them separately.
- [ ] If using a Google font in production, use [Google Web Font Loader](https://github.com/typekit/webfontloader) to avoid FOUC.
