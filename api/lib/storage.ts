import { users, type User, type InsertUser } from "@shared/schema";
import { neon } from '@neondatabase/serverless';
import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http'; // Import NeonHttpDatabase for type
import { eq } from 'drizzle-orm';

// IStorage interface remains the same
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

class DrizzleStorage implements IStorage {
  private db: NeonHttpDatabase<typeof import("@shared/schema")>; // Typing db with schema

  constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error('DATABASE_URL environment variable is not set'); // Log error
      throw new Error('DATABASE_URL environment variable is not set');
    }
    try {
      const sql = neon(databaseUrl);
      // Explicitly pass the schema to drizzle for better type inference and relations
      this.db = drizzle(sql, { schema: import("@shared/schema") });
    } catch (error) {
      console.error("Failed to initialize Drizzle or Neon:", error);
      throw error; // Re-throw the error after logging
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const result = await this.db
        .insert(users)
        .values(insertUser)
        .returning()
        .execute();
      if (result.length === 0) {
        // This case should ideally not happen if insert is successful and returning is supported
        throw new Error("User creation failed, no user returned.");
      }
      return result[0];
    } catch (error) {
      console.error("Error in createUser:", error);
      throw error; // Re-throw to be handled by the caller
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await this.db
        .select()
        .from(users)
        .where(eq(users.id, id))
        .limit(1)
        .execute();
      return result[0] || undefined;
    } catch (error)      {
      console.error(`Error in getUser (id: ${id}):`, error);
      throw error; // Re-throw
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db
        .select()
        .from(users)
        .where(eq(users.username, username))
        .limit(1)
        .execute();
      return result[0] || undefined;
    } catch (error) {
      console.error(`Error in getUserByUsername (username: ${username}):`, error);
      throw error; // Re-throw
    }
  }
}

export const storage = new DrizzleStorage();
