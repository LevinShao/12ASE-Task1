# **12ASE Task 1 Part A - Questions & Answers**

1. **Discuss the role of HTML, CSS, and JavaScript in creating responsive web pages. Explain the significance of asynchronous programming in improving web page load times and user experience.**

    HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript each have their own individual roles in the creation of a responsive website. 

    * HTML provides the fundamental structure and content of the webpage, defining the hierarchy of elements, such as headings, paragraphs, images, and navigation menus, using various tags. 
    * CSS is responsible for the visual presentation of the HTML content. It controls aspects like colours, fonts, spacing, and layout.
    * JavaScript adds interactivity and enables dynamic behaviour to the webpage, allowing content to update in real time and elements to respond to user actions such as clicks and key input.

    Asynchronous programming is a technique that allows a program to run other tasks while waiting for a long-running operation to complete. It has a huge positive effect on the loading times of websites and user experience by allowing the browser and website to perform multiple tasks at once, preventing long-running operations from blocking the main thread. Since the browser and website can now multitask without blocking data, the page can remain responsive to user interactions. In contrast, data is fetched or processed in the background, leading to much faster loading times and a more efficient, enjoyable experience for the user. 

2. **Explain how a slow page loading can impact user engagement and suggest web programming techniques to improve it.**

    Slow page loading severely impacts user engagement and experience as users expect a website to be fully responsive, efficient, and flawless when browsing it. Since slow pages introduce longer wait times for the user, it can lead to user frustration and decreased traffic, resulting in higher bounce rates (i.e. the percentage of visitors to a particular website who navigate away from the site after viewing only one page and taking no further action), reduced conversions, and lower search engine rankings, since major search engines like Google use page speed as a ranking factor for both desktop and mobile searches. Faster sites are more likely to rank higher in search results, while slower sites may see reduced visibility and traffic.

    To enhance site performance and improve user engagement, developers should:

    * Optimise images as much as possible by compressing them or using an appropriate format.
    * Remove any unnecessary parts from HTML/CSS code files to reduce their size.
    Leverage browser caching.
    * Reduce the number of HTTP requests by combining as many CSS or JavaScript files as possible into a single file. 

    Lastly, developers can optimise the server response time by using efficient code, optimising database queries, and ensuring that there are sufficient resources for the server hardware. This involves backend optimisation.

3. **Explain two benefits of HTML and CSS in web development. Provide an example of how they work together to structure and style a webpage.**

    There are two particularly notable benefits of using HTML and CSS in web development, the first being the ability to sort the code files neatly and also separate the source code of the website by structure and style. Since HTML provides the core structure of a webpage and CSS presents the webpage in a stylistic format, this creates a separation that allows for easier organisation and maintenance of code, since HTML can handle one part of the task and CSS handles another. Thanks to the separation, developers can modify the styling of an entire website by changing a single CSS file without needing to change any of the underlying HTML structure, and vice versa. This greatly simplifies updates and troubleshooting and makes the website more sustainable in the long run.

    The other benefit of HTML and CSS in web development is the enhanced experience and accessibility that they offer to users. CSS can create some extremely visually appealing and responsive designs that adapt to various screen sizes and devices, improving the user experience and reception of the website. HTML's semantic tags, combined with CSS for styling, also contribute to better accessibility as they ensure that all content within the webpage is structured logically and can be easily interpreted by assistive technologies.

4. **Outline what is JavaScript and how it enhances the functionality of a webpage. Provide an example where JavaScript is used to validate user input on a web form.**

    JavaScript is a high-level interpreted scripting language that allows developers to create dynamic and interactive content on websites. There are three core technologies of the World Wide Web, and JavaScript is one of them: HTML (for structure), CSS (for styling), and JavaScript (for interactivity).

    JavaScript enhances a webpage through a variety of methods, but it is most notably known for:
    * Being able to create dynamic content by updating page content, adding animations, as well as displaying interactive elements.
    * Respond to user inputs by handling events like button clicks, form submissions and mouse movements.
    * Manipulate the DOM (document object model) since they can access HTML code files and modify their contents.
    * Perform client-side validation since JavaScript prefers to validate user inputs before sending data to the server, thus being able to provide immediate feedback.
    * Communicate with servers mostly by using the AJAX technique, which is a web development technique that allows web applications to fetch data from servers or submit form data asynchronously without refreshing the entire page.

    Refer to the following code as an example (a real extract from my HTML web form):

    ![My thing](/Part%20A/Part%20A%20Questions/img/image1.png)

    When the user types into the Email field, the JavaScript checks whether the value matches a valid email pattern. This is done using a regular expression (regex). If the email does not match the pattern, the script displays an error message and marks the field in red. This ensures the user cannot submit the form until a properly formatted email address is entered, which is an example of client-side JavaScript validation.

5. **Discuss the importance of optimising webpage load time for user experience. Provide three techniques to improve the loading speed of a website.**

    Optimising webpage load time to as little as possible is important for user experience because it directly impacts visitor satisfaction and experience, as well as improves bounce rates and site popularity. A faster site leads to a more enjoyable experience because of the boosted efficiency and therefore can enhance user engagement and trust, while a slow site can cause frustration and lead users to abandon the site. 

    Three techniques for a developer to optimise the loading speed of their website include:
    * Optimising images by compressing image files to reduce their size without sacrificing too much quality.
    * Minifying all HTML, CSS and JavaScript code files by removing unnecessary lines of code, allowing it to reduce the file size and consume fewer resources (like CPU cycles and memory) and reduce execution time.
    * Using a Content Delivery Network (CDN), which is a collective network of servers in different geographic locations to store copies of a website's static content. This allows users to download content from a server closer to their location, which reduces load times significantly, especially for a global audience.

6. **Explain how the CSS Flexbox layout works. Provide a simple example of how you would use Flexbox to create a row of three equal-width boxes that adapt to the screen size. You may include a diagram and annotation.**

    CSS Flexbox layout is a 1D layout model designed for efficient item arrangement within a container, even when the item sizes are inconsistent or unknown. Flexbox is designed to lay out items along a single axis at a time, either a row (the default) or a column. This is different from CSS Grid, which is for 2D layouts (rows and columns simultaneously). Using Flexbox, developers can easily and efficiently align items, distribute space, and adapt layouts to different screen sizes and orientations. 

    If I were to use Flexbox to create a row of three equal-width boxes that adapt to the screen size, I would first place all three boxes inside a parent container that uses display: flex, and then give each box a flex: 1 rule so that they all grow and shrink equally. Using flex: 1 ensures the size of the boxes remains perfectly equal without manually calculating widths, and it allows the layout to remain fluid and responsive across different screen sizes.

    ![My thing](/Part%20A/Part%20A%20Questions/img/image2.png)
    ![My thing](/Part%20A/Part%20A%20Questions/img/image3.png)

    This is what it would look like on a PC monitor:

    ![My thing](/Part%20A/Part%20A%20Questions/img/image4.png)

    And here’s how it would look like on a smartphone:

    ![My thing](/Part%20A/Part%20A%20Questions/img/image5.jpg)

    So as you can see, each box was equal in width and size despite the screen size and resolution of the device. Each of the boxes can adjust its width to be equal in size on a smartphone, fulfilling our goal for the boxes to adapt to the screen size.
    
7. **Why is web accessibility important, and what are two best practices developers should follow to ensure their websites are accessible to all users? Provide examples for each best practice.**

    Web accessibility is important because it ensures everyone, including people with disabilities and other disadvantages, can access and use websites like anyone else can, which promotes equal opportunity, expands audience reach, and can improve search engine optimisation. This goes beyond the issue of personal benefit, but rather is more of a social and ethical responsibility of web developers to make their website as accessible as possible, providing an equally enjoyable experience for all users.

    Two best practices for web accessibility are ensuring keyboard navigability as well as providing alternative text for images. Keyboard navigability ensures all interactive elements on a page can be accessed and operated using only a keyboard, without needing a mouse. It’s important because users who cannot use a mouse, such as those with motor disabilities, rely on keyboard navigation to use a website. Providing alt text for images includes writing descriptive alternative text to all informative images so screen readers can describe them. This is extremely helpful for those who are blind or visually impaired since they are not able to look at the images.

    An example of a website that doesn’t have keyboard navigability is that the dropdown menu can only be opened by clicking with a mouse, but with keyboard navigability, the dropdown menu can be opened by pressing the Enter or Spacebar key, and users can navigate through the options using the arrow keys and select an option with Enter.

    An example of a website that doesn’t provide alt text for images is one that would only display the image and nothing else. If it does provide an alternative text, then there would be a descriptive piece of text below the image that describes the image, which a narrator can then read out to a visually impaired person for them to understand.

    ![](/Part%20A/Part%20A%20Questions/img/image6.png)

    ![The image above doesn't have alt text, but this one does, and this is the alt text.](/Part%20A/Part%20A%20Questions/img/image7.png)

8. **Discuss the importance of cross browser compatibility**

    Cross-browser compatibility refers to a web application's ability to function and display correctly across various web browsers. It is a vital component of web development because it has a huge role in ensuring that a website functions consistently and appears or behaves the same for all users, regardless of their browser or device. This is a necessary functional requirement, since developers must prioritise user equality, as the user diaspora uses all sorts of browsers, and it would be unfair if the website only works for one type of browser. Developers must also prioritise the functionality and usability of the website above all others, and cross-browser compatibility does exactly that. Cross-browser compatibility leads to a better user experience, a wider audience reach, and improved search engine optimisation. Without it, users would have a poor experience, bounce rates increase, and the webpage would also look broken and messy, negatively impacting the website's professionalism and brand reputation.

9. **Explain the use of &lt;canvas&gt; tag in HTML design? Give an example.**

    In HTML, the ```<canvas>``` tag is essentially used to define a resizable, rectangular area within a webpage where you can dynamically render graphics using JavaScript. Its purpose is to act as a container or a blank canvas or whiteboard for images, shapes, animations, and other visuals generated on the fly via scripting. By itself, it is merely a bitmap that is empty when a page loads. All the actual drawing and interaction is handled by JavaScript.

    An example of ```<canvas>``` used in HTML, with additional JavaScript code provided for example:

    ![My thing](/Part%20A/Part%20A%20Questions/img/image8.png)

    ![My thing](/Part%20A/Part%20A%20Questions/img/image9.png)

    In this example, the ```<canvas>``` tag creates a blank graphics surface inside the webpage. By itself, the canvas is empty and will show nothing except if CSS styling is added, in my case, a 5-pixel-wide rectangular black border. 

    In my case, the JavaScript file only contains a script that creates a red rectangle within the canvas. However, the JavaScript file can be used for way more things, such as drawing all sorts of shapes and adding text, images, animations, minigames or visual effects 

    ```id="myCanvas"``` — gives the canvas a name so JavaScript can access it.

    ```width``` and ```height``` — set the resolution of the drawing area.

    ![My thing](/Part%20A/Part%20A%20Questions/img/image10.png)

    The result looks like this. Red block created by JavaScript and the larger, rectangular canvas created by the ```<canvas>``` tag in HTML.

10. **Justify why the world wide web wasn’t ‘designed’ to be ‘secure’ when it first emerged in the 1980s.**

    The World Wide Web wasn't fully designed to be secure when it was first released in the 1980s because at first its primary goal was to create an open and easy-to-use information-sharing system for academics rather than a system developed for commercial or public use where security was a major concern. Because the developers wanted the system to mostly connect researchers and academics with a shared information space, this involved a much smaller community user base with more reliable people who wouldn’t decide to initiate attacks on the system. For example, early HTML lacked authentication or permissions structures, because its primary function was to display documents, not to protect them. The Domain Name System (DNS), another foundational component, also lacked verification features because it prioritised global connectivity over preventing spoofing or redirection attacks since these security features weren’t seen as necessary and were only dismissed as high-expense implementations.

    Not only this, but the technology to provide the system with strong security, such as strong encryption, was either not readily available or would have been too computationally demanding for early hardware. This made security a secondary consideration for the developers, whereas functionality, information reliability and user experience became a priority for the developers since this design choice allowed the web to flourish rapidly. However, the absence of security features had significant impacts on the world wide web: rising cybercrime, privacy breaches, and created lots of worrying vulnerabilities. With these issues becoming more and more mainstream over time, the security issues were gradually addressed through retroactive solutions such as security protocols like HTTPS, TLS, and other modern encryption standards that were developed in later years. In summary, the world wide web wasn’t designed with security features at the time of its creation because the developers saw no reason to implement them at all.