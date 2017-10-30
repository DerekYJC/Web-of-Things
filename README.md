# Web of Things (WoT)

A supercharged Internet of Things system that allows real-world objects to be part of the worldwide web application, providing an open and large-scale platform for heterogeneous devices to talk to each other.

## Getting Started

These full tutorials would help you understant the definition of **Web of Things** and how to implement in the real world with several projects. More detailed documentation can be seen in *"[building the **web of things**](https://webofthings.org/book/)"* by Dominique D. Guinard and Vlad M. Trifa. 

### Prerequisites & Installing

No software or hardware knowledge is required.

Install the browser extension [Postman](https://www.getpostman.com/). It allows the user to send HTTP requests and customize several options of these requests much more easily when working with a web API.

### Basic Term Description

* **JSON** - It is a data interchangable format used on the internet. It provides the syntax which is easier to be understood and more efficient transmission comparing to the old one, **XML**. 
* **Content negotiation** - The process to ask for a specific encoding in the HTTP.
* **WebSockets** - They are a powerful system for web servers to push notifications to web clients.
* **JavaScripts** - It is a dynamic programming language where client-side scripts are able to process data asynchronously and alter the interfaces/pages being displayed.
* **Node.js** - It provides event-driven structure that can write high-performance server-side web applications in, making our application be the server. On top of that, it also has package manager [npm](/npm.md).  

## Get's started

### Step 1 - Getting the list of devices from the gateway

When opening the [Postman](https://www.getpostman.com/), you can see a *verb* that you are going to do. Here we choose **`GET`**, meaning that you will send a **GET** request to the root page of the gateway near the *verb*, where you can type URL. Then click **`Send`** button, you'll see the response represented as **HTML** format in *body*.

In order to retrieve the response in **JSON** instead of **HTML**, you need to toggle the **`headers`** button and creat a new one: type "*Accept*" in **Key** and type "*application/json*" in **Value**. After that, click **`Send`** button again and you will see the response represented as **JSON** format in *body*.

### Step 2 - Getting details of a single device, list of sensors on the device and even a sensor

The only thing to do is to append "*/pi*" (for single device), "*/sensors*" (for list of sensors), "*/temperature*" (for a sensor), "*/value*" (just for the value of the data) to the URL in the [Postman](https://www.getpostman.com/) and click **`Send`** button again.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
