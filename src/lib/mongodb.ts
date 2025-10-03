import { MongoClient, Db } from 'mongodb';

// Check if MongoDB URI is available, but don't throw error during build
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn('⚠️ MongoDB URI not found. Database features will be disabled.');
}
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Only initialize MongoDB connection if URI is available
if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect().then(connectedClient => {
        console.log('✅ MongoDB connected successfully!');
        console.log('📊 Database: BoxyPack');
        console.log('📦 Collection: Products');
        return connectedClient;
      }).catch(error => {
        console.error('❌ MongoDB connection failed:', error.message);
        throw error;
      });
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect().then(connectedClient => {
      console.log('✅ MongoDB connected successfully!');
      console.log('📊 Database: BoxyPack');
      console.log('📦 Collection: Products');
      return connectedClient;
    }).catch(error => {
      console.error('❌ MongoDB connection failed:', error.message);
      throw error;
    });
  }
} else {
  // Create a rejected promise when URI is not available
  clientPromise = Promise.reject(new Error('MongoDB URI not configured'));
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// Helper function to get the database
export async function getDatabase(): Promise<Db> {
  if (!uri) {
    throw new Error('MongoDB URI not configured');
  }
  const client = await clientPromise;
  return client.db('BoxyPack');
}

// Helper function to get the products collection
export async function getProductsCollection() {
  if (!uri) {
    throw new Error('MongoDB URI not configured');
  }
  const db = await getDatabase();
  return db.collection('Products');
}
