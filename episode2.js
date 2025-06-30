/**
 * ssh vs https
The main difference between SSH (Secure Shell) and HTTPS (Hypertext Transfer Protocol Secure) lies in their purpose and how they establish secure connections. 
SSH (Secure Shell):
Purpose: Primarily designed for securely accessing and managing remote systems, like servers.
How it Works: Creates a secure tunnel between your local machine and the remote server using public-key cryptography for authentication. This means you generate a pair of cryptographic keys (public and private), share the public key with the server, and use your private key to authenticate securely.
Typical Use Cases: Remote login (like accessing a server's command line), secure file transfers (using SCP or SFTP), and secure tunneling of other protocols. 
HTTPS (Hypertext Transfer Protocol Secure):
Purpose: An extension of HTTP used to secure communication over the web, ensuring data sent between a browser and a website is encrypted.
How it Works: Uses SSL/TLS certificates to encrypt data exchanged between a user's browser and a web server. These certificates are issued by trusted Certificate Authorities (CAs) and verify the website's identity.
Typical Use Cases: Secure web browsing, online transactions (like online banking or e-commerce), and securing API communications. 
Key Differences Summarized:
Feature 	SSH	HTTPS
Primary Use Case	Remote system access and management	Secure web communication and data transfer
Authentication	Public-key cryptography	SSL/TLS certificates and often passwords/tokens
Port	Typically Port 22	Typically Port 443
Functionality	Remote login, file transfer, tunneling	Secure web browsing, online transactions
In essence:
SSH is more about secure remote control and access to systems.
HTTPS is more about secure data transfer for web applications and browsers. 
While both provide encrypted communication, their specific applications and security mechanisms differ, making them suitable for different use cases. For example, when using Git, you can choose between SSH or HTTPS for cloning, depending on whether you prioritize robust authentication and convenience (SSH) or simpler setup and wider network compatibility (HTTPS). 
AI responses may include mistakes. Learn more


SSL/TLS
Okay, let's talk about SSL/TLS. 
What is SSL/TLS?
SSL (Secure Sockets Layer) and its successor, TLS (Transport Layer Security), are cryptographic protocols that enable secure communication over the internet.
They are used to encrypt data transferred between a client (like a web browser) and a server, primarily web servers hosting websites or applications.
The primary purpose of SSL/TLS is to ensure the confidentiality, integrity, and authenticity of data transmitted online. 
How do SSL/TLS work?
SSL/TLS Handshake:
When you try to access a website using HTTPS, your browser and the web server initiate a process called the SSL/TLS handshake.
During this handshake, they exchange digital certificates (SSL/TLS certificates) and agree on the encryption algorithms and keys to be used for the session.
The server's certificate is verified with a trusted Certificate Authority (CA) to confirm the website's authenticity.
A unique session key is generated, which will be used for symmetric encryption of all data exchanged during the session.
Encryption and Decryption:
Once the handshake is complete, the client and server use the shared session key to encrypt all data transmitted between them.
This encryption makes the data unintelligible to anyone without the session key.
Only the intended recipient (client or server) with the corresponding session key can decrypt the data, ensuring confidentiality. 
Why is SSL/TLS important?
Data Protection: Encrypts sensitive information like login credentials, credit card details, and personal data during transmission, protecting it from interception by hackers or eavesdroppers.
Authentication: Verifies the identity of the website or server, preventing man-in-the-middle attacks where attackers try to impersonate legitimate websites.
Data Integrity: Ensures that the data exchanged between the client and server hasn't been tampered with during transmission.
Trust and Confidence: Using HTTPS and displaying a padlock icon in the browser address bar signals to users that the website is secure and trustworthy.
Regulatory Compliance: Many industry regulations (e.g., PCI DSS for payment cards) require the use of SSL/TLS to protect sensitive data.
SEO: Search engines like Google prioritize websites secured with SSL/TLS (HTTPS) for better rankings. 
In essence, SSL/TLS is crucial for online security as it ensures data privacy, authenticates communicating parties, and maintains data integrity during transmission. 
Note: Although "SSL" is a familiar term, it is no longer considered secure due to vulnerabilities and has been replaced by TLS, with TLS 1.3 being the current standard. 
Common Use Cases:
SSL/TLS is widely used for securing various online activities, including: 
HTTPS websites and e-commerce
Online banking and financial services
Email communication
VPNs, VoIP, and IoT devices
Secure database connections and remote desktop protocols 


 ^-> auto upgrades 2.8.3 --> 2.8.4
 ~-> Auto upgrades 2.8.3 --> 3.X.X
 2.8.3 -> Remains on the exact version 2.8.3. 

 It's a file automatically generated by npm when you install or update dependencies in your Node.js project.
It records the exact versions of all the dependencies installed in your project, including their sub-dependencies (dependencies of dependencies).
It essentially "locks" the dependency tree, ensuring that everyone working on the project, as well as deployment environments, gets the exact same versions of the packages. 


Due to transitive dependencies when we install one package , many packages are installed
 */