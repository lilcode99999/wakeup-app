# WakeUp App Architecture

## Frontend Structure (React Native/Expo)
```
frontend/
├── App.tsx              # Main app entry point
├── src/ (future)        # Source code directory
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   ├── navigation/      # Navigation setup
│   ├── store/           # Zustand stores
│   ├── services/        # API calls
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
└── assets/              # Images, fonts, etc.
```

## Backend Structure (Future)
```
backend/
├── src/
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Auth, validation, etc.
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── types/           # TypeScript types
└── prisma/              # Database schema
```

## Key Technologies
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **TypeScript**: Type safety and better development experience
- **Zustand**: Lightweight state management
- **React Navigation**: Screen navigation
- **StyleSheet**: Component styling

## Development Approach
1. Frontend-first development
2. Component-driven architecture
3. TypeScript-first for type safety
4. Incremental feature building
5. Test on device frequently