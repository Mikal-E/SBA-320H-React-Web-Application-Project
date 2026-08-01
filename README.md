##### **Pulse - by Brief.io**



A lightweight companion tool built for the Brief.io ecosystem. Pulse lets a user (Persona Conrad - creative operations manager at a boutique agency) quickly pull recent news coverage on a client, brand, or industry. The user can find fast context before building out a campaign brief. It currently returns news from GNews API but in the future it will be tailored for market research instead of only news. It will return data sets, surveys, industry reports, etc.



**Live site:** https://pulsebybriefio.netlify.app/



###### **Technologies Used**



* React
* JavaScript - application logic, state management
* HTML - semantic structure
* CSS - custom styling using Brief.io's current brand styling (color palette, typography). Brand style is in initial phase and will be iterated.
* GNews API - external data source, queried via the native fetch() API (AJAX)
* Font Awesome (CDN) - icons used throughout the interface



State management uses React's built-in useState.



###### **Approach**



Pulse was built as a standalone companion tool within the Brief.io fictional product ecosystem, instead of an added feature built into the dashboard of an existing Brief.io app. A search term (brand or industry) is sent to the GNews API, and matching articles are rendered as cards — headline, thumbnail, source, publish date, and a link to the full article.



###### **Usage Instructions**



1. Enter a brand name, industry, or topic in the search field. Examples: Nike, Google, Apparel, Sneakers, France. **Note:** Placeholder example text is for Brief.io's buyer persona, Conrad (Crazy Kicks and EffervesScents are 2 client names from other Brief.io's assets and are familiar to Conrad, which will be detailed thoroughly in a future case-study.
2. Click Search.
3. Browse the resulting article cards. Click Read full article on any card to open the original source in a new tab.
4. If no results are found for a search term, a message will indicate this so a new search can be tried.

