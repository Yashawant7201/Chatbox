
# React + Vite


A modern, responsive chat application frontend built with React ⚛️

</div>
✨ Features
🧑‍💻 Multi-User Interface - Chat with different users in separate conversations

🎨 Modern UI Design - Clean and intuitive user interface

📱 Responsive Layout - Works seamlessly on different screen sizes

💬 Real-time Messaging Feel - Instant message display with timestamps

🎯 User Selection - Easy switching between different chat partners

⚡ Fast & Lightweight - Built with React for optimal performance

🚀 Quick Start
Prerequisites
Node.js (version 14 or higher)

npm or yarn

Installation
Clone the repository

bash
git clone <your-repo-url>
cd chatbox-frontend
Install dependencies

bash
npm install
Start the development server

bash
npm run dev
Open your browser

text
Navigate to http://localhost:5173
🏗️ Project Structure
text
src/
├── Components/
│   ├── ChatBox.jsx          # User list sidebar
│   ├── MessageContainer.jsx # Chat area with messages
│   └── Counter.jsx          # Example component (optional)
├── App.jsx                  # Main application component
├── main.jsx                 # Application entry point
└── Styles/
    ├── App.css              # Main layout styles
    ├── ChatBox.css          # Sidebar styles
    └── MessageContainer.css # Chat area styles
🎮 How to Use
Select a User 👥

Click on any user from the left sidebar

The selected user will be highlighted

Send Messages 💌

Type your message in the input field

Press Enter or click the send button

Messages appear instantly with timestamps

Switch Conversations 🔄

Click on different users to switch chats

Each user maintains their own conversation history

🛠️ Technologies Used
Frontend Framework: React 18

Styling: Pure CSS3 with modern design principles

Icons: SVG icons for send button

State Management: React Hooks (useState, useEffect)

Build Tool: Vite

🎨 Component Overview
ChatBox Component
Displays list of available users

Handles user selection

Responsive sidebar design

MessageContainer Component
Shows conversation history

Message input with send functionality

Real-time message display

Empty state handling

App Component
Main container component

Manages global state

Coordinates between components

🔧 Customization
Adding New Users
Edit the users array in ChatBox.jsx:

jsx
const users = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    // Add more users here
];
Styling Modifications
Modify colors in respective CSS files

Adjust layout in App.css

Customize message bubbles in MessageContainer.css

🌟 Future Enhancements
🔐 User authentication

🌐 Backend integration

📁 File sharing support

🔔 Notification system

🎨 Theme customization

📱 Mobile app version

🤝 Contributing
Feel free to fork this project and submit pull requests for any improvements!



<div align="center">
Built with ❤️ using React

⭐ Star this repo if you find it helpful!

</div>
🐛 Troubleshooting
Common Issues
Users not showing?

Check browser console for errors

Verify all component files are properly imported

Styling issues?

Ensure all CSS files are imported in components

Check for CSS class name conflicts

Messages not sending?

Verify the input field has proper event handlers

Check console for JavaScript errors

Getting Help
If you encounter any issues, please check the browser console for error messages and ensure all dependencies are properly installed.

Happy Coding! 🚀



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Chatbox
"A simple multi-user chat application frontend built with React"

