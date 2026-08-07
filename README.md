# 💰 Spendly — Full-Stack Finance Web Application

Spendly is a full-stack personal finance web application that helps users track income and expenses, visualize spending patterns, and export financial reports. Built with a React frontend and a Node.js/Express backend, it features secure JWT authentication, interactive charts, and Excel report generation.

---

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT token-based authentication
- Protected routes with automatic redirect for unauthenticated users
- Profile photo upload

### 📊 Dashboard
- Financial overview with interactive charts
- Income and expense tracking
- Recent transactions feed
- Last 30/60-day analytics

### 📁 Reports
- Download income reports as Excel (.xlsx)
- Download expense reports as Excel (.xlsx)
- Data visualization powered by Recharts

---

## 🛠️ Tech Stack

### Frontend (`/frontend/expense-tracker`)
| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite** (rolldown-vite) | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **React Router v7** | Client-side routing |
| **Recharts** | Data visualization / charts |
| **Axios** | HTTP client for API calls |
| **React Hot Toast** | Toast notifications |
| **React Icons** | Icon library |
| **Emoji Picker React** | Emoji selection for categories |
| **Moment.js** | Date formatting |

### Backend (`/backend`)
| Technology | Purpose |
|---|---|
| **Node.js + Express 5** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **JSON Web Token (JWT)** | Authentication |
| **bcryptjs** | Password hashing |
| **Multer** | File/image upload handling |
| **xlsx (SheetJS)** | Excel report generation |
| **CORS** | Cross-origin request handling |
| **dotenv** | Environment variable management |

---

## 📸 Screenshots

| Page | Preview |
|---|---|
| **Sign In** | <img width="1916" height="847" alt="Sign In Page" src="https://github.com/user-attachments/assets/32b6bdc2-b433-457f-be50-7c7710efaa1a" /> |
| **Sign Up** | <img width="1850" height="841" alt="Sign Up Page" src="https://github.com/user-attachments/assets/46551d68-7ba5-4cba-9a93-ae0023ef33c0" /> |
| **Dashboard** | <img width="1920" height="1937" alt="Dashboard" src="https://github.com/user-attachments/assets/3637870e-5885-40f1-8672-b4330917fb41" /> |
| **Expenses** | <img width="1920" height="1345" alt="Expense Page" src="https://github.com/user-attachments/assets/76f2aa6b-c7a3-4ea7-8ae1-057c3d4b500b" /> |
| **Income** | <img width="1920" height="1340" alt="Income Page" src="https://github.com/user-attachments/assets/7c32e9a9-8f04-442e-9f09-9e5e7f2852e3" /> |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.19+ recommended)
- MongoDB instance (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Osagani31/Spendly.git

```

### 2. Backend setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```
Start the backend server:
```bash
npm start
```

### 3. Frontend setup
```bash
cd frontend/expense-tracker
npm install
npm run dev
```
The app will be available at **http://localhost:5173**

---

## 📦 Available Scripts (Frontend)

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Log in an existing user |
| GET | `/api/v1/auth/getUser` | Get current authenticated user |
| POST | `/api/v1/auth/upload-image` | Upload profile photo |

### Income
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/income/get` | Get all income entries |
| POST | `/api/v1/income/add` | Add a new income entry |
| DELETE | `/api/v1/income/:id` | Delete an income entry |
| GET | `/api/v1/income/download-excel` | Download income report as Excel |

### Expense
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/expense/get` | Get all expense entries |
| POST | `/api/v1/expense/add` | Add a new expense entry |
| DELETE | `/api/v1/expense/:id` | Delete an expense entry |
| GET | `/api/v1/expense/download-excel` | Download expense report as Excel |

### Dashboard
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/dashboard` | Get aggregated dashboard data |

---

## 🧩 Project Structure (Frontend Components)

**Layout**
- `Navbar` — Top navigation bar
- `SideMenu` — Sidebar navigation
- `AuthLayout` — Layout for auth pages
- `DashboardLayout` — Layout for dashboard pages

**Cards**
- `InfoCard` — Displays financial summary info
- `TransactionInfoCard` — Displays individual transaction details
- `CharAvatar` — User avatar with initials

**Dashboard**
- `ExpenseOverview` / `IncomeOverview` — Category summaries
- `FinanceOverview` — Combined financial overview
- `ExpensesList` / `IncomeList` — Transaction lists
- `RecentTransactions` — Latest activity feed
- `Last30DaysExpenses` / `IncomeLast60Days` — Trend charts

---

## 🔒 Authentication Flow
1. User signs up or logs in via the auth pages
2. Backend verifies credentials and returns a JWT token
3. Token is stored client-side via `UserContext`
4. Token is attached to every API request through an Axios interceptor
5. Protected routes redirect unauthenticated users back to login

---

## 🗺️ Routing
| Route | Description |
|---|---|
| `/auth/login` | Login page |
| `/auth/signup` | Registration page |
| `/dashboard` | Main dashboard |
| `/dashboard/income` | Income management page |
| `/dashboard/expense` | Expense management page |

---

## 🚧 Project Status
- 🌐 **Deployment:** Coming Soon

**Planned enhancements:**
- Advanced analytics & charts
- Export reports in multiple formats
- Improved UI/UX and performance optimizations

---

## 👩‍💻 Author

**Osagani Perera**
Third-Year Computer Science Undergraduate
Passionate about Full-Stack Development and UI/UX

---

## 📄 License

This project is open-source and available for learning, research, and academic purposes.
