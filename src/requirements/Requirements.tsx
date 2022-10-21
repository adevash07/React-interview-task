import React from 'react';
import './Requirements.css';
import flagsLogo from './flags-software-logo.svg';

export function Requirements() {
  return (
    <div className='req'>
      <h1 className='req--title'>
        <img className='req--logo' src={flagsLogo} alt='FLAGS Software'/>
        Interview Web App
      </h1>
      <hr className='req--rule'/>

      <h2 className='req--subtitle'>What is this?</h2>
      <p>By now you have read the readme and got the app started.</p>
      <p>The whole task should be quick to perform to complete the hard requirements. There are clearly many avenues for improvements, which is nice if you want to show something off, but don't spend too much time on this.</p>
      <p>This page is for information only. The underlying code for this page is not intended to be modified or reused, and once replaced with your own code, the containing folder can be safely deleted.</p>

      <h2 className='req--subtitle'>Requirements</h2>
      <p>The following are hard requirements:</p>
      <ul className='req--reqs-list'>
        <li>Home page that fetches & displays a list of widgets</li>
        <li>Each widget should link to a Widget Detail page</li>
        <li>The Widget Detail page should fetch the details for the widget and display basic information on that widget</li>
        <li>Each API request may sometimes fail. This needs to be handled in this app</li>
        <li>The API is provided by miragejs (see <code>/src/api/api.ts</code>). The code providing it can be read, but should not be altered.</li>
        <li>The code should be made available in a public repository (github, gitlab, etc). This repo should include your commit history.</li>
      </ul>

      <h2 className='req--subtitle' style={{breakBefore: 'page'}}>Rough UX</h2>
      <p>The following are outlines of the sort of information we want to see displayed. This is not a pixel-perfect requirement, but a broad stroke. The design is primarily to be simple, functional, readable and consistent, but there is scope for beautifying it should you wish to.</p>
      <img src='/images/widget-list-focus.png' className='req--ux-img' alt='widget list with focus'/>
      <p>Widget list, including focus state.</p>
      <hr/>
      <img src='/images/widget-list-hover.png' className='req--ux-img' alt='widget list with hover'/>
      <p>Widget list, including mouse over hover state.</p>
      <hr/>
      <img src='/images/widget-detail.png' style={{breakBefore: 'page'}} className='req--ux-img' alt='widget detail'/>
      <p>Widget detail. Should show the name in the title bar, the image and the properties shown.</p>
      <hr/>

      <h2 className='req--subtitle'>Additional information</h2>
      <p>Only the basic hard requirements are laid out here, and should not take a long time to implement. There is, of course, a lot of scope to sell your skills in other areas than just being able to update a basic React App, should you wish to do so.</p>
      <p>The technologies we use at present include, but are not limited to:</p>
      <ul className='req--reqs-list'>
        <li>state management using react-redux, redux-saga and redux-thunk (not necessarily all at once)</li>
        <li>styling using styled-components</li>
        <li>routing using react-router</li>
        <li>fetching API data using apisauce (a thin wrapper around axios)</li>
      </ul>
      <p>This is not a list of required dependencies to use, if you have experience in other dependencies, feel free to use those instead. If you feel there is not the need, you do not need to use them.</p>

      <h2 className='req--subtitle' style={{breakBefore: 'page'}}>What are we looking for?</h2>
      <p>Primarily, we are looking for well-organised, consistent code that is easy to read and easy to extend. In addition:</p>
      <ul className='req--reqs-list'>
        <li>It should be standards compliant and accessible</li>
        <li>It should be robust, handle failure gracefully and should always inform the user what is happening (or has happened) as clearly as possible</li>
        <li>The code you provide should be easy to read, and easy to extend</li>
        <li>If a dependency is used, there should be a clear reason for using it</li>
        <li>The resulting app should look reasonable, but that is not the primary concern here</li>
        <li>Comments in code are fine where you consider them necessary, but are not required</li>
        <li>This project uses Typescript, but there are no hard requirements to use it</li>
        <li>There should not be any unused code remaining by the time you submit it to us</li>
        <li>Testing is nice but not required</li>
      </ul>
      <p>You are free to use libraries to simplify your code or to enable additional functionality.</p>

      <h2 className='req--subtitle'>Technical detail</h2>
      <ul className='req--reqs-list'>
        <li>The widgets list API endpoint is at <code>GET /api/widgets</code></li>
        <li>The widget detail API endpoint is at <code>GET /api/widgets/:id</code></li>
        <li>The API endpoints do not consistently return successfully</li>
        <li>The data returned is not necessarily of the highest quality. Some properties may occasionally be missing.</li>
      </ul>

      <h2 className='req--subtitle'>Talking points</h2>
      <p>In addition to the requirements, the project would eventually require other features. Please consider the following features and give us an overview of how you would approach solving these issues</p>
      <ul className='req--reqs-list'>
        <li>The API requires authentication</li>
        <li>The widgets list provides more items than the front end can display at once</li>
        <li>The widgets list should be sortable</li>
        <li>The widgets list API request is too slow, so we want to filter the list down before fetching it</li>
        <li>The widget detail page needs to show a chart</li>
        <li>The page needs to be viewed on devices of varying sizes, from mobile devices to 4K screens</li>
        <li>We need to display a list of doodads and a details page</li>
        <li>We need to migrate to a mobile app</li>
        <li>We want the information displayed on the page to be up to date whenever the page is viewed. This is to be automatic and seamless.</li>
      </ul>
    </div>
  );
}
