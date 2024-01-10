# Preview Card

The SDG Preview Card is a web application that allows users to create visually appealing preview cards for Sustainable Development Goals (SDGs). Built using Next.js, the project offers a user-friendly interface to customize and generate cards highlighting specific SDGs. Users can choose from a variety of styling options, including background images, colors, and text content, to create unique and shareable preview cards. This project aims to promote awareness and engagement with the United Nations' Sustainable Development Goals in a creative and accessible way.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/esraltintas/preview-card.git
   ```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Run the test suite:

```bash
npm test
# or
yarn test
# or
pnpm test

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Header

The header of the Preview Card application may include the Ceezer logo. Clicking on the Ceezer logo is designed to reset the entire buying project process and start from scratch. It also includes the shopping cart icon and count

## Project Card

Before starting the buying process, users encounter the "Card." This card provides information about available projects, including details such as:

- Id
- Name
- Image
- Offered Volume in Tons
- Description

### Action Buttons

In addition to project details, users can interact with the following action buttons:

- Add to Cart: By clicking this button, users can seamlessly add the project to their shopping cart. This initiates the process of selecting and gathering items for future purchase.

- Remove from Cart: If a project has already been added to the cart, users can use this button to remove it. This provides flexibility for users to adjust their selections before finalizing the purchase.

These action buttons enhance user engagement and streamline the shopping experience, allowing users to manage their selections conveniently.

## Project Detail Modal

The Project Detail Modal offers users an in-depth view of a specific project, providing comprehensive information about the selected item. It includes the following details:

- Id: A unique identifier for the project.
- Name: The name or title of the project.
- Image: Visual representation of the project.
- Price per Ton: The cost associated with each ton of the project.
- SDGs: Sustainable Development Goals associated with the project.
- Country: The geographical location or country of origin for the project.
- Offered Volume in Tons: The quantity of project items available for purchase.
- Distribution Weight: Weight distribution information for the project.
- Supplier Name: The name of the supplier providing the project.
- Earliest Delivery: The estimated earliest delivery date for the project.
- Description: A detailed description providing additional information about the project.
- This modal allows users to make informed decisions by presenting a comprehensive overview of the selected project's key attributes.

## Filter by volume

The "Filter by Volume" feature empowers users to refine their project exploration based on the offered volume of items. By utilizing the input field, users can specify a minimum volume threshold, allowing them to view projects that meet or exceed their desired quantity. This filtering mechanism enhances the user experience, enabling more targeted searches and facilitating the identification of projects that align with specific volume requirements. Users can dynamically adjust the filter to explore a curated selection of projects that match their volume preferences.

## Shopping Cart Summary

The Shopping Cart Summary provides users with a comprehensive overview of their selected projects, facilitating a convenient and transparent shopping experience. Key features include:

### Selected Projects

Project Details: The summary displays essential details of each selected project, including its name, offered volume in tons, and total price.

### Actions

- Remove from Cart: Users have the flexibility to refine their selections by easily removing projects from the cart. This feature ensures a personalized and adjustable shopping experience.

- Total Price Calculation: The summary dynamically calculates and showcases the total price of all selected projects, enabling users to have a clear understanding of their anticipated costs.

- Checkout Button: When ready to proceed with the purchase, users can click the "Checkout" button. This initiates the seamless transition to the checkout process, where they can provide necessary information and complete their order.
  The Shopping Cart Summary serves as a centralized hub for users to review, modify, and finalize their selections, fostering a user-friendly and efficient shopping journey.
