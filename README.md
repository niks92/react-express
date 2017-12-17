# React + Express Fullstack Example Project Using Stormpath

This repository is an example fullstack web application using React on the
front-end and Express.js as your back-end server. It uses [express-stormpath][]
and [stormpath-sdk-react][] to authenticate users, protect your server API,
and render default login and registration screens in your React application.

## 1. Getting Started

To run this example project on your local computer, you will need to have
[Node.js][] installed and a [Stormpath][] tenant account.
If you don't have a Stormpath account, sign up for a free account at [https://api.stormpath.com/register](https://api.stormpath.com/register).

## 2. Installation

Clone this repository, then using a terminal, navigate to the directory and run the following:

```bash
$ npm install
```

## 3. Gather Stormpath Configuration

You'll need to [Download an API Key Pair](https://docs.stormpath.com/rest/product-guide/latest/quickstart.html#create-an-api-key-pair) from the [Stormpath Admin Console][], and find the **Application Href** (also called **REST URL**) of the Application that you will use for your project. The default application is called "My Application" and you can use that to get started.

## 4. Provide Configuration To Your Application

Provide the **API Key ID**, **API Key Secret**, and **Application Href** to your environment:

**Place them in a file named `stormpath.yml`, in the directory where you run the dev server:**

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX
```

## 4. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your browser at [http://localhost:3000](http://localhost:3000).

## API DOC

To generate the API Doc run these command on terminal:

```bash
$ npm install -g apidoc
$ apidoc -i ./ -e node_modules/ -o src/apidoc
```
