const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

// Serve static files from public folder (CSS, images, JS)
app.use(express.static("public"));

// Serve static files from views folder (HTML files)
app.use(express.static("views"));

// Parse form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Helper functions for user data
const USERS_FILE = path.join(__dirname, "data/users.json");

function readUsers() {
    try {
        const data = fs.readFileSync(USERS_FILE, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return { candidates: [], companies: [] };
    }
}

function writeUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views/contact.html"));
});

app.get("/candidate.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/auth/candidate.html"));
});

app.get("/candidate-dashboard.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/dashboard/candidate-dashboard.html"));
});

app.get("/company.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/auth/company.html"));
});

app.get("/company-dashboard.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views/dashboard/company-dashboard.html"));
});

// Candidate Registration
app.post("/api/candidate/register", (req, res) => {
    const { name, email, mobile, password } = req.body;
    
    const users = readUsers();
    
    // Check if email already exists
    const emailExists = users.candidates.some(user => user.email === email);
    if (emailExists) {
        return res.status(400).json({ success: false, message: "Email already registered!" });
    }
    
    // Add new candidate
    const now = new Date();
    const dateTime = now.toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    });
    
    users.candidates.push({
        name,
        email,
        mobile,
        password,
        createdAt: dateTime
    });
    
    writeUsers(users);
    res.json({ success: true, message: "Registration successful!" });
});

// Candidate Login
app.post("/api/candidate/login", (req, res) => {
    const { email, password } = req.body;
    
    const users = readUsers();
    
    // Find user
    const user = users.candidates.find(u => u.email === email && u.password === password);
    
    if (user) {
        res.json({ success: true, message: "Login successful!", user: { name: user.name, email: user.email, mobile: user.mobile } });
    } else {
        res.status(401).json({ success: false, message: "Invalid email or password!" });
    }
});

// Company Registration
app.post("/api/company/register", (req, res) => {
    const { company_name, email, contact_no, contact_person, password, website } = req.body;
    
    const users = readUsers();
    
    // Check if email already exists
    const emailExists = users.companies.some(user => user.email === email);
    if (emailExists) {
        return res.status(400).json({ success: false, message: "Email already registered!" });
    }
    
    // Add new company
    const now = new Date();
    const dateTime = now.toLocaleString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    });
    
    users.companies.push({
        company_name,
        email,
        contact_no,
        contact_person,
        password,
        website: website || "",
        createdAt: dateTime
    });
    
    writeUsers(users);
    res.json({ success: true, message: "Company registration successful!" });
});

// Company Login
app.post("/api/company/login", (req, res) => {
    const { username, password } = req.body;
    
    const users = readUsers();
    
    // Find company (username can be email or company name)
    const company = users.companies.find(u => 
        (u.email === username || u.company_name === username) && u.password === password
    );
    
    if (company) {
        res.json({ 
            success: true, 
            message: "Login successful!", 
            user: { company_name: company.company_name, email: company.email } 
        });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials!" });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("OOPS! Page not Found..!");
});

// Server listening to port 3000
app.listen(3000, "127.0.0.1", () => {
    console.log("Server is running...");
});