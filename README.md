
# Raptorx Crypto currency Dashboard

A **real-time cryptocurrency dashboard** built with **React** and **Redux Toolkit**. This project showcases live cryptocurrency data with features like configurable drag-and-drop layouts, data visualization, and persisted user settings.

---

## **Features**

### 1. **Real-Time Data Updates**
- Fetches live cryptocurrency data every 5 seconds from the [CoinGecko API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd).
- Displays data such as name, symbol, current price, and market cap.

### 2. **Configurable Dashboard**
- Drag-and-drop layout for dashboard components using `react-beautiful-dnd`.
- Add, rearrange, and delete components seamlessly.
- Layout adjustments ensure a clean, balanced design.

### 3. **Customizable Components**
- **Table Component:** Displays cryptocurrency data in a paginated, responsive table with sorting and filtering.
- **Graph Component:** Visualizes price trends with configurable chart types (e.g., line, bar).
- **Summary Cards:** Highlights key metrics like highest/lowest prices and market cap.

### 4. **Persistent Layout**
- Saves dashboard layout and user preferences (e.g., theme, component settings) to local storage.
- Allows users to export and import dashboard configuration as JSON for reusability.

### 5. **Responsive Design**
- Fully responsive interface adapts to all screen sizes.
- Ensures smooth UX across devices.

---

## **Technologies Used**

- **Frontend:** React, Redux Toolkit, React Beautiful DnD
- **State Management:** Redux Toolkit
- **Styling:** CSS, Material-UI
- **Data Fetching:** CoinGecko API
- **Persistence:** Local Storage
- **Charting:** Chart.js or any equivalent charting library

---

## **Installation**

### Prerequisites
- Node.js (v16 or higher)
- npm 

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/saivemula13/raptorx-dashboard
   ```
2. Navigate to the project directory:
   ```bash
   cd raptorx-dashboard
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## **Usage**

1. Open the dashboard in your browser.
2. View real-time cryptocurrency data in the table.
3. Drag-and-drop components to rearrange the layout.
4. Delete unwanted components and see the layout adjust automatically.
5. Customize settings for individual components.
6. Export the layout as JSON or import an existing configuration.

---

## **File Structure**

```plaintext
src/
├── Components/
│   ├── Assets/         
│       ├── Images          
│           ├── SvgIcons.jsx             // Images are stored as Svg
│   ├── CryptoDataProvider/ 
│       ├── CryptoDataProvider.js        // Handles data fetching and polling
│   ├── Dashboard/    
│       ├── CardComponent/        
│           ├── CardComponent.js         // Displays cryptocurrency data in a Card
│       ├── LineChartComponent/        
│           ├── LineChartComponent.js    // Renders price trend charts
│       ├── TableComponent/        
│           ├── TableComponent.js        // Displays cryptocurrency data in a Table
│       ├── Dashboard.jsx/               // Displays all the Table, 
├── Slice/
│   ├── cryptoSlice.js                   // Redux slice for managing cryptocurrency data
├── App.js                               // Main application entry
├── index.js                             // Application root
```

---

## **API Information**

- **Base URL:** `https://api.coingecko.com/api/v3`
- **Endpoint Used:**
  - `/coins/markets?vs_currency=usd`
- **Data Fetched:**
  - `id`, `name`, `symbol`, `current_price`, `market_cap`

---

## **Future Enhancements**

1. Add user authentication for personalized dashboards.
2. Integrate more data sources for broader cryptocurrency insights.
3. Enhance visualizations with more charting options.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

---

## **Contact**

For questions or suggestions, feel free to contact me:

- **Email:** [saijagadeesh.vemula@example.com](mailto:saijagadeesh.vemula@example.com)
- **GitHub:** [saivemula13](https://github.com/saivemula13)
