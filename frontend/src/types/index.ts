// Core User Types
export interface User {
  id: string;
  email: string;
  isPremium: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  defaultAlarmTime: string;
  preferredExerciseTypes: ExerciseType[];
  difficulty: 'easy' | 'medium' | 'hard';
  enableNotifications: boolean;
}

export interface UserStats {
  totalExercises: number;
  currentStreak: number;
  longestStreak: number;
  averageScore: number;
  averageTime: number; // seconds
}

// Exercise Types
export type ExerciseType = 'math' | 'memory' | 'breathing' | 'word' | 'pattern';

export interface Exercise {
  id: string;
  type: ExerciseType;
  difficulty: number; // 1-5
  question: string;
  options?: string[]; // For multiple choice
  correctAnswer: string;
  timeLimit: number; // seconds
}

export interface ExerciseResult {
  exerciseId: string;
  score: number; // 0-100
  timeCompleted: number; // seconds
  accuracy: number; // 0-1
  userAnswer: string;
}

// Alarm Types
export interface Alarm {
  id: string;
  userId: string;
  time: string; // "HH:MM"
  days: string[]; // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  isEnabled: boolean;
  exerciseType: ExerciseType;
  label?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  AlarmSetup: undefined;
  Exercise: {
    type: ExerciseType;
    difficulty: number;
    exerciseId: string;
  };
  Progress: undefined;
  Settings: undefined;
};

// API Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// App State Types
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
