# Overview

라쎄라스 (L'Art du Voyage Français) is a luxury luggage e-commerce website built with modern web technologies. The application presents a premium French-inspired travel goods brand with a sophisticated user interface featuring product catalogs, customer reviews, brand storytelling, and contact functionality. The project implements a full-stack architecture with React frontend, Express backend, and PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom design system featuring French luxury aesthetics
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with dedicated routes for products, reviews, and contact inquiries
- **Data Storage**: In-memory storage implementation with interface-based design allowing future database integration
- **Error Handling**: Centralized error handling middleware with structured error responses

## Database & Schema Design
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Type Safety**: Drizzle-Zod integration for runtime schema validation
- **Tables**: Users, Products, Reviews, and Contact Inquiries with proper foreign key relationships
- **Connection**: Neon Database serverless PostgreSQL for production deployment

## Development Environment
- **Build System**: Vite for fast development and optimized production builds
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Hot Reload**: Vite HMR for instant frontend updates during development
- **TypeScript**: Strict type checking across frontend, backend, and shared schemas

## File Organization
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Shared Types**: Common schemas and types in `/shared` for consistency across frontend and backend
- **Path Aliases**: TypeScript path mapping for clean imports using `@/` prefix
- **Component Organization**: UI components separated from page components with logical grouping

# External Dependencies

## Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React routing

## UI and Styling
- **@radix-ui/react-***: Accessible, unstyled UI primitives for complex components
- **tailwindcss**: Utility-first CSS framework with custom design system
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Modern icon library

## Form Management
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration layer for validation libraries
- **zod**: Schema validation for type safety

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **@replit/vite-plugin-***: Replit-specific development enhancements for cloud IDE integration

## Database and Validation
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express sessions

The application uses a modern, type-safe stack with emphasis on developer experience and maintainability, featuring a luxury brand aesthetic with Korean and French language support.