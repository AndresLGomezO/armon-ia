# App Directory Structure

This directory contains the main application code organized in a clean, scalable structure.

## Directory Structure

```
app/
├── components/           # Reusable UI components
│   ├── ui/              # Generic UI components (Button, Input, Modal, etc.)
│   ├── layout/          # Layout components (Header, Footer, Sidebar, etc.)
│   ├── forms/           # Form-related components
│   └── features/        # Business logic components
├── hooks/               # Custom React hooks
│   ├── api/             # API-related hooks
│   ├── ui/              # UI state hooks
│   └── validation/      # Form validation hooks
├── lib/                 # Library utilities
│   ├── api/             # API client and utilities
│   ├── auth/            # Authentication utilities
│   ├── validation/      # Data validation utilities
│   └── storage/         # Storage utilities
├── types/               # TypeScript type definitions
│   ├── global/          # Global application types
│   ├── components/      # Component-specific types
│   └── api/             # API-related types
├── constants/           # Application constants
│   ├── config/          # Configuration constants
│   ├── api/             # API constants
│   └── ui/              # UI constants
├── utils/               # Utility functions
│   ├── helpers/         # General helper functions
│   ├── validation/      # Validation utilities
│   └── format/          # Data formatting utilities
├── services/            # Service layer
│   ├── api/             # API services
│   ├── auth/            # Authentication services
│   └── storage/          # Storage services
├── stores/              # State management
│   ├── global/          # Global state stores
│   └── local/           # Local state stores
├── assets/              # Static assets
│   ├── images/          # Image assets
│   ├── icons/            # Icon assets
│   └── fonts/           # Font assets
├── styles/              # Styling
│   ├── components/      # Component styles
│   ├── pages/           # Page styles
│   └── utilities/       # Utility styles
└── routes/              # React Router routes
    ├── _auth/           # Authentication routes
    ├── _dashboard/      # Dashboard routes
    ├── _profile/        # Profile routes
    ├── _settings/       # Settings routes
    └── api/             # API routes
```

## Usage Guidelines

### Components
- **UI Components**: Generic, reusable components (Button, Input, Modal)
- **Layout Components**: Page structure components (Header, Footer, Sidebar)
- **Form Components**: Form-related components (Form, FormField, FormLabel)
- **Feature Components**: Business logic components (UserProfile, Dashboard)

### Hooks
- **API Hooks**: Data fetching and API-related hooks
- **UI Hooks**: UI state and interaction hooks
- **Validation Hooks**: Form validation and data validation hooks

### Types
- **Global Types**: Application-wide type definitions
- **Component Types**: Component-specific type definitions
- **API Types**: API-related type definitions

### Constants
- **Config Constants**: Application configuration
- **API Constants**: API endpoints and methods
- **UI Constants**: UI-related constants (colors, spacing, typography)

### Utils
- **Helper Utils**: General purpose utility functions
- **Validation Utils**: Data validation functions
- **Format Utils**: Data formatting functions

### Services
- **API Services**: API service functions
- **Auth Services**: Authentication service functions
- **Storage Services**: Storage service functions

### Stores
- **Global Stores**: Global state management
- **Local Stores**: Local state management

### Assets
- **Images**: Image assets organized by type
- **Icons**: Icon assets organized by category
- **Fonts**: Font assets organized by family

### Styles
- **Component Styles**: Component-specific styles
- **Page Styles**: Page-specific styles
- **Utility Styles**: Utility-first CSS classes

## Import Patterns

```typescript
// Import from specific categories
import { Button, Input } from '~/components/ui'
import { useApi, useQuery } from '~/hooks/api'
import { User, ApiResponse } from '~/types/global'
import { formatDate, validateEmail } from '~/utils'

// Import from main index files
import { Button } from '~/components'
import { useApi } from '~/hooks'
import { User } from '~/types'
import { formatDate } from '~/utils'
```

## Best Practices

1. **Keep components small and focused**
2. **Use proper TypeScript types**
3. **Follow the established naming conventions**
4. **Use barrel exports for clean imports**
5. **Organize related functionality together**
6. **Use descriptive file and folder names**
7. **Follow the established import order**
8. **Keep the structure scalable and maintainable**


