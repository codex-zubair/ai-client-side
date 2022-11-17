import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl mt-4 mx-2'>SOME IMPORTANT JOB QUESTIONS & ANSWER</h1>
            {/* Blog Card Start */}
            <div tabindex="0" class=" mt-4 collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    what is cors?
                </div>
                <div class="collapse-content">
                    <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                </div>
            </div>
            {/* Blog Card End */}
            {/* Blog Card Start */}
            <div tabindex="0" class=" mt-4 collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                Why are we using firebase? 
                </div>
                <div class="collapse-content">
                    <p><strong>Firebase makes easy to maintain backend section.</strong> Firebase Realtime Database lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                </div>
            </div>
            {/* Blog Card End */}
            {/* Blog Card Start */}
            <div tabindex="0" class=" mt-4 collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What other options do you have to implement authentication?
                </div>
                <div class="collapse-content">
                    <ol>
                        <li>Step 1: Create a Firebase project and register your app</li>
                        <li>Step 2: Install the SDK and initialize Firebase</li>
                        <li>Step 3: Access Firebase inside app</li>
                        <li>Step 4: Use a module bundler (webpack/Rollup) for size reduction</li>

                    </ol>
                </div>
            </div>
            {/* Blog Card End */}
            {/* Blog Card Start */}
            <div tabindex="0" class=" mt-4 collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                How does the private route work?
                </div>
                <div class="collapse-content">
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
                </div>
            </div>
            {/* Blog Card End */}
            {/* Blog Card Start */}
            <div tabindex="0" class=" mt-4 mb-5 collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is Node? How does Node work?
                </div>
                <div class="collapse-content">
                    <p> <strong>Node is a JavaScript runtime environment</strong> Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. </p>

                    <strong> Node. js runs on chrome v8 engine which converts javascript code into machine code</strong>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend.</p>
                </div>
            </div>
            {/* Blog Card End */}
        </div>
    );
};

export default Blog;