import type { projectsArrayType } from "@/types/project";

export const projectsArray: projectsArrayType = [
  {
    id: "web",
    category: "Web Development",
    projects: [
      {
        id: "web_project_1",
        // coverImage: ShoppingApp,
        imageBackground: "white",
        title: "Shopping App",
        description: `
          This is an e-commerce store built with ReactJS, Redux Toolkit, React
          Router, Vite, and a copy of the FakeStoreAPI data saved on a
          Firebase database. It is a fully functional e-commerce store with
          features like adding/removing products from/to the cart and a
          checkout dialog.
        `,
        liveURL: "https://jemeni-react-redux-shopping-app.netlify.app/",
        sourceCodeURL: "https://github.com/Jemeni11/React-Redux-Shopping-App",
      },
      {
        id: "web_project_2",
        // coverImage: RestCountriesAPI,
        imageBackground: "transparent",
        title: "Countries App",
        description: `
          A website that pulls country data from the
          &nbsp;<a href='https://restcountries.com/'>REST 
          Countries API</a> and displays it.
        `,
        liveURL: "https://jemeni-rest-countries.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/11-rest-countries-api",
      },
      {
        id: "web_project_3",
        // coverImage: IPTracker,
        imageBackground: "#161d2b",
        title: "IP Address Tracker",
        description: `
          An IP Address Tracker app built with the&nbsp;
          <a href='https://geo.ipify.org/'>IP Geolocation API by IPify</a> for
          getting the user's location and{" "}
          <a href='https://leafletjs.com/'>LeafletJS</a> to generate the map.
        `,
        liveURL: "https://jemeni-ip-tracker.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/09-ip-address-tracker-main",
      },
      {
        id: "web_project_4",
        // coverImage: TodoApp,
        imageBackground: "none",
        title: "Todo App",
        description: `
          The classic todo app with a dark/light theme toggle.
        `,
        liveURL: "https://jemeni-todo-app.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/10-todo-app-main",
      },
      {
        id: "web_project_5",
        // coverImage: TipCalculator,
        imageBackground: "#C5E4E7",
        title: "Tip Calculator",
        description: `
          A tip calculator app that helps to you calculate the tip and split
          the total bill between friends!
        `,
        liveURL: "https://jemeni-tip-calculator.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/06-tip-calculator-app-main",
      },
      {
        id: "web_project_6",
        // coverImage: AdviceGenerator,
        imageBackground: "#1F2632",
        title: "Advice Generator App",
        description: `
          An advice generator app built using HTML, CSS, JS and the&nbsp;
          <a href="https://api.adviceslip.com/">Advice Slip API</a>.
        `,
        liveURL: "https://jemeni-advice-generator.netlify.app/",
        sourceCodeURL:
          "https://github.com/Jemeni11/FrontendMentor/tree/04-advice-generator-app-main",
      },
      {
        id: "web_project_7",
        // coverImage: ExpenseTracker,
        imageBackground: "white",
        title: "Expense Tracker",
        description: `
          A basic expense tracker made with HTML, CSS, JS and BootStrap4.
        `,
        liveURL: "https://jemeni11.github.io/Expense-Tracker/",
        sourceCodeURL: "https://github.com/Jemeni11/Expense-Tracker",
      },
    ],
  },
  {
    id: "mobile",
    category: "Mobile App Development",
    projects: [
      {
        id: "mobile_project_1",
        // coverImage: Splitter,
        imageBackground: "#161d2b",
        title: "Tip Calculator Mobile App",
        description: `
          Splitter helps to you calculate the tip and split the total bill
          between friends! Use the&nbsp;<a href="https://expo.dev/client">
          Expo Go</a> app to open the live URL.
        `,
        liveURL: "https://expo.dev/@jemeni11/tip-calculator",
        sourceCodeURL: "https://github.com/Jemeni11/Tip-Splitter-Mobile-App",
      },
    ],
  },
];
