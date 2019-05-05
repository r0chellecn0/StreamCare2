<h1> Stream Care </h1>

<b>Streamlining communication</b> between caregivers and family members of loved ones receiving care.

I'm currently in an accelerated Cloud Application Development Course sponsored by Microsoft and creating this application as a project. I came up with the idea of being able to just "click" and be able to update a status report when I was dropping my son off at daycare. 
Every morning, I had to fill in the same paperwork and he came home with a report of his day.

This idea grew into what it is now because any family member should be able to know what's going on with their loved one receiving care, regardless of if it's their son, daughter, brother, sister, grandfather, mom... you get the idea. Regardless of where you are in the world, you'll be able to almost instantly see the last diaper change, meal, activity of daily living, exercise, etc was done. 
This way, if you're like my husband who is getting deployed or parents who are out of country, <b>you'll feel a little closer to home</b>.
<p>
<a href="https://myerauedu-my.sharepoint.com/:p:/r/personal/gorbear_my_erau_edu/Documents/Presentation.pptx?d=w026ad319274c457db936bde75ff2a143&csf=1&e=mt3eCH"> Link for TakeCare PowerPoint Presentation </a>
</a>


<h1> Requirement Traceability Matrix </h1>

|ID |Requirements | Being Met? | Unit Test Passed? |
|--------|:----------|:----------:|:----------:|
|<b>1</b>|Create Account | X | N/A|
|1.1|Unique Username | X | N/A|
|1.2|Confirm Password | X | N/A|
|1.2.1|Hidden Password|  | N/A|
|1.2.3|Password Strength Security| X | N/A|
|1.3|Upload User Account Photo |  | N/A|
|<b>2</b>|Login |  | N/A|
|2.1|See homepage on login |  | N/A|
|<b>3</b>|Logout |  | N/A|
|<b>4</b>|Messaging |  | N/A|
|4.1|Send Messages to Others |  | N/A|
|4.2|Template for daily instructions |  | N/A|
|<b>5</b>|Photos|  | N/A|
|5.1|Post Photos on Wall|  | N/A|
|<b>6</b>| Status Updates | | N/A|
|6.1| Update Status of Individual Receiving Care | | N/A|
|<b>7</b>| Care Instructions| | N/A|
|7.1| Add care instructions to homepage| | N/A|
|7.2| CRUD operations for care instructions| | N/A|

<h1> Testing </h1>

|Req ID|Requirement Description|Test Method| Test Procedure|Unit Test Passed?|Time Stamp|
| -------- |------------------| -----| --------|------|-----|
|1|Account Creation|User has ability to create account|Unit Test |Not Tested||
|1.1|Unique Username|Ensure each username is unique|Unit Test |Not Tested||
|1.2|Confirm Password|User will have ability to confirm password before setting it|Unit Test |Not Tested||
|1.2.1|Hidden Password|User will not be able to see password when typing it in|Unit Test |Not Tested||
|1.2.3|Password Strength Security | User will create a strong password|Unit Test |Not Tested||
|1.3| Upload User Account Photo | User will have ability to upload account photo|Unit Test |Not Tested||
|1.4| Delete Account | User will have ability to delete account |Unit Test |Not Tested||
|1.4.1| Delete Account Confirmation | User will confirm they want to delete their account |Unit Test |Not Tested||
|2| Login| User will have ability to login|Unit Test |Not Tested||
|2.1| See homepage on login | User will be able to see their account homepage on login|Unit Test |Not Tested||
|3| Logout| User will be able to logout of account|Unit Test |Not Tested||
|4| Messaging | User will be able to communicate with other users|Unit Test |Not Tested||
|4.1.1| Send Messages | User will be able to send messages to others |Unit Test |Not Tested||
|4.1.2| Receive Messages | User will be able to receive messages from others|Unit Test |Not Tested||
|4.1.3| Delete Messages| User will be able to send messages|Unit Test |Not Tested||
|4.2| Template for instructions | Users will be able to complete form for daily instructions|Unit Test |Not Tested||
|5| Photos | User will be able to share photos |Unit Test |Not Tested||
|5.1| Post photos on wall| User will be able to post photos on stream wall|Unit Test |Not Tested||
|5.2| Save photos | User will be able to save photos posted on wall|Unit Test |Not Tested||
|6| Status Updates| User wil be able to see status updates |Unit Test |Not Tested||
|6.1| Update Status of Individual Receiving Care| Caregiver will be able to update status on individual receiving care|Unit Test |Not Tested||
|7| Care Instructions | User will be able to see care instructions|Unit Test |Not Tested||
|7.1| Care instructions on homepage |Unit Test |Not Tested||
|7.2| CRUD operations for care instructions| User will be able to create,read, update, and delete instructions|Unit Test |Not Tested||
|8| Privacy| Users will only be able to see profiles of individuals in stream |Unit Test |Not Tested||
|8.1| Profile| Users will only be able to see profiles of users in stream|Unit Test |Not Tested||
|8.1.1|User must be logged in| Profiles will only be able to be seen if logged in |Unit Test |Not Tested||
|8.2| Instructions | User will only be able to see instructions of users in stream |Unit Test |Not Tested||
|8.3| Stream | User will only be able to post photos and update status of users in stream|Unit Test |Not Tested||
|8.4| Messaging | User will only be able to communicate with users in stream |Unit Test |Not Tested||
|9| Accessability | Site will have follow A11y best practices |Unit Test |Not Tested||
|9.1| Tab | User will be able to tab through forms |Unit Test |Not Tested||
|10| Page functions| |Unit Test |Not Tested||
|10.1| Logo homepage | User will be able to go to homepage when clicking on the logo|Unit Test |Not Tested||
|10.2| Submit buttons | User will be brought to routed page after clicking on submit button |Unit Test |Not Tested||
|10.2.1| Change photo | User's account photo will be changed after uploading photo change |Unit Test |Not Tested||
|10.2.2| Delete | Users photo or stream message will be deleted after delete button is clicked |Unit Test |Not Tested||
 

<h1> Prioritized Backlog Items </h1>


|Requirement ID      |Task | 
|--------|:-----------|
|8| Create Unit Test|
|5.1| Integrate Azure BLOB for photos|
|8| Create Groups|
|4.3| Group Messaging|
|6.3| Buttons for updating status w/time stamp|
|5.2| Photo Gallery |
|6.2| Daily updates formatted to daily debrief |
|6.3| Daily debrief sent to blog |
|9| Progress tracker / Milestone tracker|
|1.4| E-mail confirmation of account |

<h1>Technologies Currently Implementing</h1>
<ul>
  <li> Azure SQLDatabase</li>
</ul>
<br>
<h1>Technologies to be Implemented</h1>
<ul>
<strike> Azure Database </strike>
<li> SignalR </li>
<li> Azure Key Vault </li>
<li> Azure BLOB Storage </li>
<li> Deployed to Azure</li>
</ul>

<h1> Screenshots </h1>
Coming soon!

<h1>Special Thanks</h1>
To Udemy's Build an app with ASPNET Core and Angular From Scratch Course.
I used the course as a soft blueprint and tailored it to my needs.
I also had to figure out what to do since our development environments were different.
