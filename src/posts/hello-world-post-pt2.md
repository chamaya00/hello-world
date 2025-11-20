---
title: "Hello World pt. 2: Step-by-Step Instructions for Building Your First Website with Claude"
date: "2025-11-19"
author: "Charles Amaya"
tags: ["Claude", "Demo Not Memo", "AI Coding"]
excerpt: "Here’s a step-by-step recap of how I used Claude to build this website, as described in my first Hello World post."
featured: false
---

# Demo, Not Memo

Recently I came across the saying “Demo, not memo” in an article about this new AI coding era we’re in. I really like this phrase, and I hope it catches on widely in my working life. 

Along those lines, I’m pushing myself to provide some kind of concrete demo as much as possible when sharing ideas. So in the spirit of “demo, not memo,” here’s a step-by-step recap of how I used Claude to build this website, as described in my first Hello World [post](https://www.charlesamaya.com/posts/hello-world-post)

I’ve put this together to be a simple starting point that should work even if all you do is copy paste, which hopefully encourages many of you to try it out for yourselves. With all the talk and hype around AI, it’s eye-opening to make something real through AI coding, even if it’s as simple as a personal website. 

I welcome any comments or suggestions to make this guide easier to understand / easier to follow along.  

Finally, this is not a promo for Claude or anything like that. I’m just super excited by what I’ve experienced and excited to share what I learned. 

## Some More Context

I originally wanted to get hands-on with AI coding to see what all the hype was about. I did a quick Google search and Claude Code was one of the top recommended coding agents, so I tried it first. I wasn’t sure if I could get the coding to work using just the iPhone app, but was happily surprised when the NUX suggested using Claude to implement my idea, right from the start. 

Very quickly I was shocked to see how capable Claude was at generating code right in the chat window. Then I discovered the Code section in the app, and my exploration turned way more productive. 

Below are the steps I took that led to this website. I believe you can generate a similar website for yourself by following these same steps.

## Step 1: Getting Started with Claude Code

**Open the Code section in Claude**

First, tap the Code section in the Claude app. This is where the AI coding magic happens.

**Connect to your GitHub account**

*Tip if you’ve never used GitHub before: Just sign up at github.com using the same method as your Claude account—if you used Gmail for Claude, use Gmail for GitHub too. It keeps things simple.*

**Connect to a repository**

*Tip if you’ve never used GitHub before: Creating a new repository or “repo” is easy. Go to github.com, click on your account in the top right and then click Repositories, click the green “New” button, give it a name like “my-ai-website,” and click “Create repository.” You can leave all the other settings as defaults.*

**Copy and paste your first prompt**

Here’s the prompt I used to get started:

>I want help with building a personal website to share my professional thoughts and projects im working on. There will be 3 sections: posts, projects, about. The style will be minimal, like Medium.

This should get Claude coding right away. Modify this prompt if you want to build something different. 

## Step 2: Understanding the GitHub Workflow

In the iOS app, Claude Code will publish new code to Github, which means you’ll have to pick up the basic Github workflow in order to make full use of AI coding from within the app. 

This part felt intimidating at first, but it’s pretty straightforward once you get the basic flow. Here are the main terms you’ll need to know:

- **Commit**: Saving your coding changes with a description of what you changed (Claude will be doing this part when it writes code in response to your prompts)
- **Push**: Sending those saved changes from your computer to GitHub (similarly, Claude will be doing this part)
- **Pull Request (PR)**: Setting up a request to add the new code into the existing code that is shown on the live website (you will be doing this part, but Claude will handle setting up a “branch” of new code that will merge into the main branch of the live website)
- **Merge**: Officially integrating the new code to the main version of the (you will be doing this part)

The basic workflow is:
1. Connect the Claude Code conversation to your Github repo
2. Ask Claude to write code for some feature or functionality you want to build
3. Claude will commit and push the changes to a Github branch
4. You open up Github (github.com or the Github app) and select your project’s repo
5. You create a new pull request (PR) to integrate the new code branch into the main (master) code branch
6. You preview the PR changes and merge the PR. Now your new code is part of the master branch, and would show up on the live website if the hosting service, like Vercel, enables auto-deployment

*Tip if you’ve never used GitHub before: I was confused by all this terminology too. I used these prompt and Claude explained it step by step:*

>Help me understand how to use git and github. Explain repository, pull request, branches, and merging

>Explain what git checkout, git push and git pull are doing 

>Deeper explanation on branches, pull requests and merging

**Download the GitHub app**

I found it straightforward to use the Github iOS app for the steps above, like creating PRs and merging changes. But I think the same things can be done on the Github website. 

## Step 3: Iterating on Design / Adding New Features

This is where I really experienced Claude Code flex its potential. It handled every open-ended task I gave it well, producing code that I can preview for changes and merge. 

The most ambiguous open-ended task I gave it was to help me improve the UX/UI design of the website. Here are some prompts that worked well for me:

>Help me compare ux/ui design options. I want to see different styles so i can settle on a final style

>Create new options to compare that are based on minimal medium. I like the header style of minimal medium, but i dont really like the body and card styles, and the color theme feels too black and white

## Step 4: Deploying the Website Live

Getting the website to show up on the internet live was a super exciting milestone. There are two main approaches I explored:

**GitHub Pages** *(Free and simple)*
This is built right into GitHub and perfect for static HTML sites.

**Vercel** *(Also free, more features)*
It felt like merged changes showed up on the live site way faster than Github Pages, and seems like Vercel is better for web apps built using React. Another helpful feature is the ability to see a preview of the site changes before merging

I used this prompt to understand the different hostint options:

>What are my options for hosting this website now that its in github

## Step 5: Fixing Bugs and Getting Things to Work

Hardest part was finding solutions to things that weren’t working as expected. For example, there was one instance where the website home page would not show any content after I merged new changes from Claude. 

Situations like this were tricky at first, but what worked for me was asking Claude to add error logging, then copy-pasting those errors back into the conversation.

These are the prompts that helped when I was getting stuck:

>Create simple react structure. Remove anything that is unused after that refactoring. Add more comprehensive debugging. And then help me understand the react flow better

>add visible on screen debug info

>There are errors showing up but its difficult to copy paste. Can you make the error window larger or somehow make it easier to copy paste the error messages

The debugging cycle becomes: run the site, see what breaks, copy the error, paste it to Claude, implement the fix, repeat. 

Similarly, for adding new features, the cycle is: prompt Claude for what you want to add, create and preview the pull request, merge into master, repeat. 

## Thoughts and Reactions

The biggest surprise for me was how fast going from an idea to a working example can be. I didn’t need to learn React or understand CSS in order to get something working. I just described what I wanted and Claude figured out the technical details. And for the parts I did want to learn about, like how to use Github, asking Claude was a very effective way to learn while doing without breaking the flow I was in. 

I’m guessing this is what people mean by vibe coding. 

What was harder than expected: when I ran into bugs or unexpected behaviors, I didn’t understand the codebase enough myself to make specific requests to Claude for what to fix. Getting Claude to make fixes that I was happy with took a lot of trial and error, sometimes even asking the same things in slightly different ways. 

One technique that ended up being very helpful was to ask for comprehensive error logging and a visible debugging screen, which I was then able to copy paste back into Claude to get the appropriate fixes. 

## What’s Next

If you made it this far, definitely try these out for yourself if you haven’t already. I hope you get to see first hand how the barrier between having an idea and having a working prototype is now remarkably small, and I wish you success building out all the great ideas swimming in your head!
