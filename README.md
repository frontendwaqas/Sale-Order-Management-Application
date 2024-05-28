# Sale Order Management Application

This project is a simple Sale Order Management application built as a Single Page Application (SPA) using React. The application allows users to create, view, and manage sale orders. It features a login page, dark theme toggle, and tabs for active and completed sale orders. The project uses several modern libraries to handle state management, form handling, and styling.

## Features

- Single Page Application (SPA) with a Login Page.
- Dark Theme Toggle Switch that persists on reload.
- Tabs for Active Sale Orders and Completed Sale Orders.
- Modal form to create new sale orders.
- Modal form to edit existing sale orders.
- Form validation with React Hook Form.
- State management with React Query.
- Styling with Chakra UI.

## Technologies Used

- React 18+
- React Router DOM
- React Query
- React Hook Form
- Chakra UI
- Chakra MultiSelect (or compatible alternative)

## Project Structure

```plaintext
sale-order-management/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── SaleOrderForm.js
│   │   ├── SaleOrderList.js
│   │   ├── ThemeToggle.js
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── SaleOrdersPage.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   └── useSaleOrders.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── theme.js
├── package.json
└── README.md




