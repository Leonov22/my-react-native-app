interface AuthResponse {
  success: boolean;
  error?: string;
}

// Mock authentication service for initial UI development
export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  return { success: true };
};

export const signUp = async (email: string, password: string): Promise<AuthResponse> => {
  return { success: true };
};

export const signOut = async (): Promise<void> => {
  // Mock sign out - no operation needed
}; 