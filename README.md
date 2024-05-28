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

## Usage

### Login Page
Navigate to the login page and use the following dummy credentials:
- **Username:** `user`
- **Password:** `password`

### Sale Orders
After logging in, you'll find two tabs:
- **Active Sale Orders:** Displays current orders that are in progress.
- **Completed Sale Orders:** Lists orders that have been completed.

To add a new sale order:
1. Click on the "+ Sale Order" button to open a modal form.
2. Enter the sale order details and add items.
3. Click "Save" to submit the order.
4. The new order will appear under the Active Sale Orders tab.

### Dark Theme
Toggle between light and dark themes using the switch in the navbar. The selected theme will persist across page reloads.

## Deployment
Deploy the application using any static site hosting service such as Vercel, Netlify, or GitHub Pages. This ensures the application is accessible worldwide.

## Contributing
We encourage contributions! If you have suggestions for improvements or bug fixes, please:
1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request.

## License
This project is open-source and available under the MIT License. For more details, see the LICENSE file in the repository.

## Contact
For questions or feedback, please contact me at `frontend.waqas@gmail.com
`.



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




