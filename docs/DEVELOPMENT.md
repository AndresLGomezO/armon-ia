# Development Guide

## Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Project Structure

```
armon-ia/
├── apps/
│   └── armon-ia/          # Main React Router v7 application
├── .github/               # GitHub workflows
├── .vscode/              # VS Code configuration
├── docs/                 # Documentation
├── .cursorrules          # Cursor AI rules
├── .cursorignore         # Cursor ignore patterns
├── .prettierrc           # Prettier configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Root package.json
```

## Development Workflow

### Code Style
- Use Prettier for formatting (configured in `.prettierrc`)
- Follow ESLint rules (configured in `eslint.config.js`)
- Use TypeScript strict mode
- Follow the established import order

### Git Workflow
1. Create feature branches from `main`
2. Make changes following the coding standards
3. Run linting and formatting before committing
4. Create pull requests with descriptive titles
5. Use conventional commit messages

### Available Scripts

#### Root Level
- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm lint` - Lint all code

#### App Level (apps/armon-ia)
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm lint` - Lint application code
- `pnpm lint:fix` - Fix linting issues

## Technology Stack

- **Framework**: React Router v7
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: pnpm
- **Build Tool**: Vite
- **Linting**: ESLint
- **Formatting**: Prettier

## Best Practices

### Component Development
- Use functional components with hooks
- Keep components small and focused
- Use proper TypeScript types
- Implement proper error boundaries
- Use Tailwind CSS for styling

### State Management
- Use React Router's built-in state management
- Prefer local state over global state
- Use proper loading and error states
- Implement optimistic updates when appropriate

### Performance
- Use React.memo for expensive components
- Implement proper code splitting
- Use lazy loading for routes
- Optimize images and assets
- Monitor bundle size

### Testing
- Write unit tests for utilities
- Write integration tests for components
- Test error scenarios
- Use proper mocking strategies

## Debugging

### VS Code Configuration
The project includes VS Code configuration for:
- Debugging React Router applications
- Running tests
- Code formatting and linting
- Recommended extensions

### Common Issues
1. **Port conflicts**: Change the port in the development server configuration
2. **Type errors**: Run `pnpm typecheck` to identify issues
3. **Linting errors**: Run `pnpm lint:fix` to auto-fix issues
4. **Build errors**: Check the build output for specific error messages

## Deployment

The project includes GitHub Actions workflows for:
- Code formatting and linting
- Building and testing
- Deployment to production

## Contributing

1. Follow the established coding standards
2. Write clear commit messages
3. Test your changes thoroughly
4. Update documentation as needed
5. Create descriptive pull requests

## Resources

- [React Router v7 Documentation](https://reactrouter.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pnpm Documentation](https://pnpm.io/)
