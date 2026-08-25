# AWS Amplify Workshop Demo

A simple React + Vite application for an AWS Amplify hands-on workshop.

## What you will learn

You will:

1. Run a React application locally.
2. Change the application.
3. Push the project to GitHub.
4. Deploy the application using AWS Amplify.
5. Change the application again.
6. Push the change and watch Amplify automatically build and deploy it.

## Prerequisites

- An AWS account
- A GitHub account
- Node.js and npm installed
- Git installed

---

# Part 1: Run the application locally

Open Terminal in this project directory.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite, usually:

```text
http://localhost:5173/
```

You should see the AWS Amplify workshop page.

---

# Part 2: Make your first change

Open:

```text
src/App.jsx
```g

Find:

```jsx
<strong>Replace with your name</strong>
```

Change it to your name.

Example:

```jsx
<strong>Rahul Sharma</strong>
```

Save the file and refresh the browser.

---

# Part 3: Push the application to GitHub

Create a new empty repository on GitHub.

Then run these commands from this project directory:

```bash
git init
git add .
git commit -m "Initial AWS Amplify application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your own GitHub repository URL.

Example:

```bash
git remote add origin https://github.com/yourname/amplify-demo.git
```

---

# Part 4: Deploy using AWS Amplify

1. Sign in to the AWS Management Console.
2. Open **AWS Amplify**.
3. Choose **Create new app**.
4. Choose **Deploy an app**.
5. Select **GitHub**.
6. Authorize AWS Amplify to access your GitHub account.
7. Select your repository.
8. Select the `main` branch.
9. Review the build settings.
10. Choose **Save and deploy**.

Amplify should detect the Vite project.

The build command should be:

```text
npm run build
```

The build output directory should be:

```text
dist
```

After the deployment succeeds, Amplify will provide a public URL.

Open that URL and verify your application.

---

# Part 5: Demonstrate automatic deployment

Now change the application again.

Open:

```text
src/App.jsx
```

Change:

```jsx
<h1>Welcome to AWS Amplify 🚀</h1>
```

to something like:

```jsx
<h1>My First AWS Amplify App 🚀</h1>
```

Then run:

```bash
git add .
git commit -m "Update application"
git push
```

Go to AWS Amplify.

You should see a new deployment start automatically.

Wait for the deployment to complete and refresh your Amplify URL.

Your change should now be live.

## What just happened?

```text
Code change
    ↓
GitHub
    ↓
AWS Amplify detects the change
    ↓
Build
    ↓
Deploy
    ↓
Updated website
```

This is a basic example of a CI/CD workflow.

---

# Student Challenge

Make the application your own.

Try changing:

- Your name
- College name
- Workshop title
- Page heading
- Button text
- Page description

Then:

```bash
git add .
git commit -m "Customize workshop page"
git push
```

Check your Amplify deployment and verify that the changes appear on the live website.

---

# Optional: Manual ZIP deployment

If your instructor specifically asks you to upload a ZIP containing the built website:

First build the application:

```bash
npm run build
```

This creates:

```text
dist/
```

Create a ZIP containing the CONTENTS of `dist`, not the `dist` folder itself:

```bash
cd dist
zip -r ../amplify-demo.zip .
cd ..
```

Check the ZIP:

```bash
unzip -l amplify-demo.zip
```

You should see `index.html` at the top level:

```text
index.html
assets/...
```

Do not create a ZIP where `index.html` is buried inside another `dist/` or project directory.

---

# Troubleshooting

## `npm: command not found`

Install Node.js and npm, then reopen Terminal.

## `npm run dev` does not work

Run:

```bash
npm install
```

and then:

```bash
npm run dev
```

## Amplify build fails

Check that:

```text
Build command: npm run build
Output directory: dist
```

## Website shows a blank page

Make sure the Amplify deployment contains the built `dist` contents and that `index.html` is at the deployment root.

## Git push asks for authentication

Complete the GitHub authentication requested by Git or use GitHub's recommended authentication method.

---

# Cleanup

If this is only a workshop exercise, delete resources you no longer need after the workshop.

For a Git-connected Amplify app, you can delete the Amplify app from the AWS Console.

Also delete any AWS resources created during other workshop exercises.

---

## Key takeaway

AWS Amplify can take your application from:

```text
Local code
    ↓
GitHub
    ↓
Amplify
    ↓
Build
    ↓
Live web application
```

The important part is not just hosting the website. The GitHub-to-Amplify connection demonstrates how a code change can automatically become a new deployment.
