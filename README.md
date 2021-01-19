>[Binary deployed site](https://binary0101.herokuapp.com/)

---

### Binary Project
###### Organize Your Priorities && Stay Up To Date

---


## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Reflection](#reflection)
* [Developer](#developer)


## Introduction

### Overview
This Binary project was inspired by my general morning routine. That being, when I wake up, I look at the time, I listen to a podcast or the news detailing current events, and then I look at what I have to do that day. This app does just that. On page load, a user is first presented with recent news and events. By utilizing the Navigation Bar, they can also add a list of their To-Dos via the 'Add To Do' form. These To-Dos are then placed in the 'To-Dos' view and will be color-coordinated based on the chosen level of priority.

Binary project is built with React and designed to meet project requirements in the rubric laid out [here](https://frontend.turing.io/projects/module-3/binary-challenge.html), a projects designed specifically for Mod 3 class 2008FE front-end engineering students. The project seeks to challenge the totality of learning of students up to this point, pulling together their core-stack knowledge of HTML, CSS, JS, React, DOM interaction and TDD (test driven development).

The project emphasises React fundamentals, such as state management/synching across components, and the flow and management of asynchronous operations (both in production code, and inside of testing suites), pushing students to think carefully and critically about component architecture and modularity, as well as expected user flow and behavior. The nature of the project encourages employing professional 'soft' skills in the planning and project management stages - utilizing wireframing and mind-mapping, and managing project workflow with Issues and PRs through the **Agile** methodology on GitHub Project Board.

### Tech Stack
* React
* JavaScript
* HTML
* CSS
* React Router
* Jest (TDD)
* Rapid API

## Features 


**Home Page - News**

In this view the users are presented with regularly updated News articles which are at first displayed by their corresponding images. When mousing over an article, the title and content of the article is revealed. When double-clicking on an article, the user will be redirected to that articles full-content page.

![date](https://media.giphy.com/media/p8PAhD8EAuZPhUuVsR/giphy.gif)

![articleHover](https://media.giphy.com/media/oqH7sRn4L1Xqxv4nLo/giphy.gif)

![dblClickArticle](https://media.giphy.com/media/gymGs6sKFnDBqO7fXo/giphy.gif)

![navbar](https://media.giphy.com/media/31meY80DVpJYkJEZoa/giphy.gif)



<details>
  <summary>**Under the Hood**</summary>

---

The Homepage, which displays the News, is housed in the React `<App />` component.
  
With normal functionality, what ends up rendering on the homepage inside of `<App>` are two additional components.

```
<Header />       // Is always visible
<NavBar />      // Is always visible

```
---
</details>


**To-Do's**

To-Dos are populated with any To-Do that has been added by a user. Local storage is used to persist To-Dos on page reload. Each To-Do is color coordinated based on its chosen level of priority.


![add_todo](https://media.giphy.com/media/p8PAhD8EAuZPhUuVsR/giphy.gif)

![to_dos](https://media.giphy.com/media/GvAXClsXEPfdfyyuLV/giphy.gif)


## Reflection

#### Future Iterations

* Allow a user to delete &/or cross-out a completed To-Do item.
* Make the "Add To Do" form a pop-up when clicking '+' in the Navigation Bar instead of using Router.
* Build functionality to the forward and backwards (Today in History API) arrows in the Header component that control the displayed date.
* Display better News articles (different API).
* Disable "Add To Do" button until input form has been filled out.

## Developer

<h4>Demaceo Vincent Howard</h4>
<img src="https://avatars2.githubusercontent.com/u/62954974?s=400&u=b246587c21877b7fe4a4972e89ec98677d5c29d6&v=4" alt="Demaceo Vincent Howard"
 width="150" height="auto" style="float: left" />

[GitHub Profile](https://github.com/demaceo)

