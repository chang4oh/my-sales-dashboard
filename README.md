Author: Chang
Created: 12/3/25

Used with Next.js.
Start project by:

1. npm i
2. npm run dev

Building this project

Step 1.
npm create-next-app and install necessary libraries

Step 2.
make structure this structure:
my-sales-dashboard/
├─ app/
│ ├─ dashboard/
│ │ └─ page.tsx
│ ├─ layout.tsx
│ └─ globals.css
├─ components/
│ ├─ charts/
│ │ ├─ SalesChart.tsx
│ │ └─ ChartWrapper.tsx
│ └─ controls/
│ └─ SalesFilter.tsx
├─ data/
│ └─ salesData.ts
├─ package.json
└─ README.md

note that tailwind v4 doesn't need to manually modify the config
files that came with the template will need cleaning to make it organized and clean for further steps.

Step 3.
have home page a link to dashboard
fill in the components and mock data on sales from 2022-24
