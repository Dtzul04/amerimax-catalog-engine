Amerimax Digital Catalog Engine
Project Mission
Re-engineering the Amerimax for Mobility Digital Parts Catalog to bridge the gap between complex industrial inventory and user-centric web design. This project focuses on transforming a high-volume product list into a high-performance, accessible digital tool for contractors.

🚀 Developmental Prototypes: The Three Strategic Concepts
To provide Amerimax for Mobility with the optimal digital solution, this repository explores three distinct User Experience (UX) prototypes. Each version is engineered to solve specific technical frictions found in industrial part procurement.

Concept 1: The Focused Search Funnel (Visualized in 1.1 → 1.2)
Workflow: Two-Step Targeted Navigation.
The Entry Portal (1.1): * Design: Utilizes a high-impact splash screen with a dominant #00342C (Darkest Green) background to eliminate "Choice Paralysis."
UX Strategy: Features two large, high-contrast circular selectors ("Parts" and "Materials") that provide an immediate, clear path for the user. This is optimized for field use where quick, decisive navigation is required.
The Filtered Grid (1.2): * Dashboard View: Once a category is selected, the user enters a technical dashboard. It features a sticky header with a search bar and parameter-based filters (Price, Amount, Category).
Product Logic: Individual cards utilize roc-grotesk for technical labels. Each card includes integrated dropdowns for Color and Size, allowing for immediate configuration without leaving the main catalog view.
Best For: Contractors who need a guided, high-efficiency path to locate and configure specific part numbers.
Concept 2: The Visual Discovery Feed (Visualized in 2.0)
Workflow: Single-Page High-Engagement.
Design Overview: Built over a modern, abstract background using the full green hierarchy. This version prioritizes visual scanning and product recognition.
Key Feature: Visual Color Swatches. Instead of text-based dropdowns, this layout uses colored UI dots (e.g., White, Grey, Black) to allow for rapid visual selection.
Interaction: A prominent "Reach out To Us!" footer is integrated directly into the catalog view to lower the friction for sales inquiries.
Best For: New customers or contractors who identify parts primarily by visual profile rather than technical nomenclature.
Concept 3: The Parallel Comparison Engine (Visualized in 3.0)
Workflow: Dual-Column Information Architecture.
Design Overview: This is a "Power User" layout. It features a dark-themed UI that splits the screen into two persistent columns: Parts and Materials.
Strategic Advantage: By showing both categories side-by-side, it allows for instant cross-referencing of compatible materials (e.g., matching a fascia material with a specific fascia part).
Data Structure: Each column maintains its own independent search and filter logic, maximizing information density without requiring the user to navigate back and forth.
Best For: Experienced estimators and sales personnel who need to build complex orders requiring simultaneous part/material matching.
🎨 Visual Identity & Design Tokens
To ensure brand consistency and industrial-grade legibility, the catalog utilizes a custom design system based on Amerimax's corporate identity. This system is engineered to provide high-contrast visibility for contractors in field conditions.

Color Palette (Industrial Green Hierarchy)
The palette is structured to create clear visual "zones" between technical specifications and interactive elements.

Color	Hex	Role
Darkest Green	#00342C	Main Titles. Provides a bold, structural feel with maximum contrast.
Primary Brand Green	#00826E	Primary Brand Anchor. Used for buttons and active UI states.
Action Teal	#339B8B	Quick-ID Toggles. Used for the interactive [+] identification system.
Soft Mint	#CCE6E2	Visual Feedback. Used for borders and subtle hover-state transitions.
Mist Background	#E1F3F0	Row Striping. Reduces eye strain during long technical data review sessions.
Pure White	#FFFFFF	Primary Background. Standard for technical data grid clarity.
Typography & Hierarchy
The type system balances industrial authority with modern readability across mobile and desktop devices.

Main Titles: roc-grotesk-wide
Usage: Major category headers (e.g., FASCIA, SOFFIT).
Vibe: Strong, structural presence that mirrors the reliability of Amerimax products.
Subtitles & Labels: roc-grotesk
Usage: Part names and technical sub-headers.
Vibe: Clean, modern sans-serif for high-level technical organization.
Body Copy: Nunito Sans
Usage: The primary workhorse font for 5-word "Quick-ID" descriptions and measurement data (e.g., 0.010 gauge).
Vibe: High legibility and friendly roundness to balance the aggressive title fonts.
Core Information Architecture
The catalog is optimized into 8 primary industrial categories:

Fascia – Roof edge protection
Soffit – Under-roof ventilation
Mini Gutter – Specialized RV drainage
Flashing – Joint leak prevention
Starter Strip – Base locking systems
Corner – Wall edge sealing
Verticals – Upright wall protection
Cleated Roofs – Interlocking high-wind systems
Technical Stack
Platform: Squarespace (Standard Build)
Enhancements: Custom CSS3 (Flexbox/Grid), JavaScript (ES6)
Design/UX: Figma (High-Fidelity Prototyping)
Version Control: Git / GitHub
Contact
Daniel Tzul Web Development Intern | Amerimax for Mobility
Associate of Applied Science, Web Development - Dallas College