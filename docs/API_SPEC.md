# API Specification (Future Backend)

## Authentication Endpoints
POST /api/auth/register - Create new user account
POST /api/auth/login    - User login
POST /api/auth/refresh  - Refresh JWT token

## User Management
GET  /api/users/profile     - Get user profile
PUT  /api/users/preferences - Update user preferences
GET  /api/users/stats       - Get user statistics

## Alarm Management
GET    /api/alarms     - Get user's alarms
POST   /api/alarms     - Create new alarm
PUT    /api/alarms/:id - Update alarm
DELETE /api/alarms/:id - Delete alarm

## Exercise System
GET  /api/exercises/generate - Generate random exercise
POST /api/exercises/complete - Submit exercise result
GET  /api/exercises/stats    - Get exercise statistics

## Data Models

### User
```typescript
interface User {
  id: string;
  email: string;
  isPremium: boolean;
  createdAt: Date;
  preferences: UserPreferences;
  stats: UserStats;
}

interface Alarm {
  id: string;
  time: string; // "07:30"
  days: string[]; // ["Mon", "Tue", "Wed"]
  exerciseType: ExerciseType;
  isEnabled: boolean;
  label?: string;
}

interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: number; // 1-5
  question: string;
  options?: string[];
  correctAnswer: string;
  timeLimit: number;
}

interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}