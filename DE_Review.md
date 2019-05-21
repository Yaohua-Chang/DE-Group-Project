## 1. Web Scraping Concepts
What is Web scraping?
    Web Scraping is used to extract data from websites. The process saves data to a local file or to a database in spreadsheet format. 
    
    Collecting data from multiple websites, which could be quite tedious if done manually, is automated through web scraping so as improve the efficiency and volume of data extraction.


## 2. REST API Concepts
What is REST API?
    A RESTful API is an application program interface (API) that uses HTTP requests to GET, PUT, POST and DELETE data.


What is HTTP?
    HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

Introduce of Rest Operations
    DELETE --> Delete an existing resource.

    GET --> Retrieve a representation of a resource.

    HEAD --> Identical to a GET except that no message body is returned in the response.

    POST --> Create a new resource to an existing URL.

    PUT	--> Create a new resource to a new URL, or modify an existing resource to an existing URL.

## 3. Relational Databases
    1. Relational Operators (select, project, join, etc)
        select --> Restricts the rows chosen from a table to those entries with specified attribute values.
        project --> Selects rows made up of a sub-set of columns from a table.
        join --> Associates entries from two tables on the basis of matching column values.
        product --> Builds a relation from two specified relations consisting of all possible combinations of rows, one from each of the two relations.
        
        union --> Builds a relation consisting of all rows appearing in either or both of the two relations.
        intersect --> Builds a relation consisting of all rows appearing in both of the two relations.
        difference --> Builds a relation consisting of all rows appearing in the first and not in the second of the two relations.

    2. SQL
        SQL stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems.


## 4. Operating Systems, Concurrency, Asynchrony, etc
    An operating system is system software that manages computer hardware and software resources and provides common services for computer programs. 

    Concurrency is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the final outcome. This allows for parallel execution of the concurrent units, which can significantly improve overall speed of the execution in multi-processor and multi-core systems. 

    Asynchrony, in computer programming, refers to the occurrence of events independent of the main program flow and ways to deal with such events. 


## 5. Web Architecture
    1. Browser: DOM
        The Document Object Model is a cross-platform and language-independent application programming interface that treats an XML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree.

    2. HTML
        HTML covers how Web pages are formatted and displayed.
    
    3. Javascript
        JavaScript is the programming language of HTML and the Web.

    4. Relationship
        * JavaScript to program the behavior of web pages
        * HTML to define the content of web pages
        * CSS to specify the layout of web pages

    5. Reactive Programming/React
        Reactive Programming is an asynchronous programming paradigm concerned with data streams and the propagation of change. - Wikipedia. 

        React is a JavaScript library for building user interfaces.



## 6. GraphQL

What is GraphQL?
GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. 

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

Advantage:

1. Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. Apps using GraphQL are fast and stable because they control the data they get, not the server.

2. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

## 7. Networks and TCP/IP
What do you mean by Network?
    A computer network is a digital telecommunications network which allows nodes to share resources. The major sharing of the resources over the connection is the Internet. 

Explain the different Layers of TCP/IP Model.
    Application Layer, Transport Layer, Network or Internet Layer, Network interface layer.

What do you mean by the TCP/IP Model?
    TCP/IP stands for Transmission control protocol and Internet protocol. It describes how the data will get transmitted and routed from end to end communication.

What do you mean by TCP and UDP?
    TCP stands for Transfer control protocol and UDP stands for User Datagrams protocol and TCP is a connection-oriented protocol and UDP is a Connectionless protocol.

## 8. Virtualizaton, Cloud, Containerization, Orchestration
Virtualization is technology that allows you to create multiple simulated environments or dedicated resources from a single, physical hardware system. Software called a hypervisor connects directly to that hardware and allows you to split 1 system into separate, distinct, and secure environments known as virtual machines (VMs). 

Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. The term is generally used to describe data centers available to many users over the Internet.

Containerization is a lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment. A good example is Docker.

Orchestration is the automated configuration, coordination, and management of computer systems and software. 

What is the difference between containerization (Docker) and virtualization (VMWare, VirtualBox)?
    Generally both VM(VMWARE, VirtualBox etc) & Container(docker, lxc etc) are aim to improve server utilization / reduce physical server sprawl & reduce total cost of ownership for the IT department. However, there are some differences between the two.

    **VM**

    * Need a hypervisor installed on top of bare metal server hardware (for common hypervisor as mentioned below)
    * Each VM will receive its own unique operating system, its own dedicated binaries / libraries & application workload.
    * Each VM is fully isolated from other VMs i.e. no VM is aware of / relies on other VMs.
    * Common hypervisors include: VMware vSphere, Microsoft Hyper-V, RedHat KVM Hypervisor etc.
    * Advantages:
        * One VM's Operating System (OS) failed will not impact other VMs (unlike container whereby when the underlying shared OS is a single point of failure for all containers to fail also).
        * VM can be migrated to other servers with different / newer OS (whereas container only can migrate to other servers with the same / compatible OS kernel i.e. limited migration options.
        * Common hypervisors like VMware, Hyper-V & RedHat KVM do support different VM guest OS like Microsoft Windows Server, Linux etc.
    
    **Container**

    * is an execution environment to run application that shared the same underlying Operating System (OS) of the host.
    * all containers must have the same underlying OS kernel.
    * examples of container include: Docker Containers, Linux Containers (LXC), Microsoft Windows Containers etc.
    *Advantages:
        * Lightweight - resource efficient because each container doesn't need its respective OS i.e. less overhead.
        * One physical server can host more containers vs VMs.
        * Faster speed of creation, provision & migration (vs VM).
        * Near bare metal run time performance (vs VM).
        * Even further lower TCO (for those free OpenSource).

## 9. Graph Computing Architecture
Tenserflow

Graph computing is the type of computation to convert any computing process to graph. This graph consists of nodes and edges to link between dufferent nodes. From this graph we can simply know which node can be executed without dependancy on other nodes. Graph computing facilitates parallel processing and provide a very high speed compared to sequential computing. 